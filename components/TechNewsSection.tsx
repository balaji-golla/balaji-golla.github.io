
import React, { useState, useEffect, useCallback } from 'react';
import { NewsItem } from '../types';
import { fetchTechNews } from '../services/geminiService';
import Spinner from './common/Spinner';
import { GEMINI_API_KEY_ERROR_MESSAGE, GEMINI_FETCH_NEWS_ERROR_MESSAGE } from '../constants';

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-indigo-500/30 transition-shadow duration-300 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold text-indigo-300 mb-2">{item.title}</h3>
      <p className="text-gray-400 text-sm mb-3 leading-relaxed">{item.summary}</p>
    </div>
    {item.sourceUrl && (
      <a 
        href={item.sourceUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-indigo-400 hover:text-indigo-200 mt-3 inline-block self-start group"
      >
        Read More <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
      </a>
    )}
  </div>
);

const TechNewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (!process.env.API_KEY) {
        console.error(GEMINI_API_KEY_ERROR_MESSAGE);
        setError(GEMINI_API_KEY_ERROR_MESSAGE);
        setNews([]);
        return;
      }
      const fetchedNews = await fetchTechNews();
      setNews(fetchedNews);
    } catch (err: any) {
      console.error("Error fetching tech news:", err);
      // Check if error message indicates API key issue from service
      if (err.message === GEMINI_API_KEY_ERROR_MESSAGE) {
          setError(GEMINI_API_KEY_ERROR_MESSAGE);
      } else {
          setError(GEMINI_FETCH_NEWS_ERROR_MESSAGE);
      }
      setNews([]); // Clear news on error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  return (
    <section id="technews" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
          Latest Tech Feed
        </h2>
        
        {loading && <div className="flex justify-center items-center h-40"><Spinner /></div>}
        
        {error && (
          <div className="text-center text-red-400 bg-red-900 bg-opacity-30 p-6 rounded-lg max-w-md mx-auto">
            <p className="font-semibold text-lg">Oops! Something went wrong.</p>
            <p>{error}</p>
            {error === GEMINI_API_KEY_ERROR_MESSAGE && (
              <p className="mt-2 text-sm text-gray-400">Please ensure the Gemini API key is correctly configured in your environment.</p>
            )}
             {error !== GEMINI_API_KEY_ERROR_MESSAGE && (
                 <button 
                    onClick={loadNews}
                    className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
                >
                    Try Again
                </button>
             )}
          </div>
        )}

        {!loading && !error && news.length === 0 && (
          <p className="text-center text-gray-400">No tech news available at the moment.</p>
        )}

        {!loading && !error && news.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechNewsSection;
