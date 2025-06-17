
import React, { useState, useEffect, useCallback } from 'react';
import { NewsItem } from '../types';
import { fetchTechNews } from '../services/geminiService';
import Spinner from './common/Spinner';
import { TECH_NEWS_SERVICE_UNAVAILABLE_MESSAGE } from '../constants';

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
      const fetchedNews = await fetchTechNews();
      setNews(fetchedNews);
    } catch (err: any) {
      if (err instanceof Error && err.message === TECH_NEWS_SERVICE_UNAVAILABLE_MESSAGE) {
        // This is an expected state when API is not configured.
        // Set UI error message, but don't log to console as a critical error.
        setError(TECH_NEWS_SERVICE_UNAVAILABLE_MESSAGE);
        // console.info("Tech news service is unavailable (expected configuration)."); // Optional: for debugging
      } else {
        // For any other unexpected error, log it and set a generic error message.
        console.error("Unexpected error in TechNewsSection:", err);
        setError("An unexpected error occurred while trying to fetch tech news.");
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
          <div className="text-center text-yellow-400 bg-yellow-900 bg-opacity-30 p-6 rounded-lg max-w-md mx-auto">
            <p className="font-semibold text-lg">Tech Feed Notice</p>
            <p>{error}</p>
            {error === TECH_NEWS_SERVICE_UNAVAILABLE_MESSAGE && (
              <p className="mt-2 text-sm text-gray-400">This feature is currently not active.</p>
            )}
          </div>
        )}

        {!loading && !error && news.length === 0 && ( 
          <p className="text-center text-gray-400">No tech news to display at the moment.</p>
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
