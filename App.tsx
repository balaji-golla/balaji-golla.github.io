
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import NewsCard from './components/NewsCard';
import ReleaseCard from './components/ReleaseCard';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import TidbitCard from './components/TidbitCard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

import { NewsItem, ReleaseItem, Tidbit as TidbitType } from './types';
import { STATIC_PROJECTS, STATIC_BLOG_POSTS, API_FETCH_DELAY } from './constants';
import { fetchTechNews, fetchNewReleases, fetchTechTidbits } from './services/geminiService';

const App: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [releases, setReleases] = useState<ReleaseItem[]>([]);
  const [tidbits, setTidbits] = useState<TidbitType[]>([]);

  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingReleases, setLoadingReleases] = useState(true);
  const [loadingTidbits, setLoadingTidbits] = useState(true);

  const [errorNews, setErrorNews] = useState<string | null>(null);
  const [errorReleases, setErrorReleases] = useState<string | null>(null);
  const [errorTidbits, setErrorTidbits] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      // Fetch News
      try {
        setErrorNews(null);
        setLoadingNews(true);
        await new Promise(resolve => setTimeout(resolve, API_FETCH_DELAY)); // Simulate delay
        const newsData = await fetchTechNews();
        if (newsData.length === 0 && process.env.API_KEY) {
            setErrorNews("Gemini returned empty news data. Check API or prompt.");
        } else if (newsData.length === 0 && !process.env.API_KEY){
            setErrorNews("API_KEY not found. Using placeholder news. Please set your API_KEY.");
             setNews([
                { id: 'news-ph-1', title: 'AI Reaches New Milestones (Placeholder)', summary: 'Placeholder news: AI continues to advance rapidly.', source: 'Tech Daily', date: '2024-10-27' },
                { id: 'news-ph-2', title: 'Quantum Computing Breakthrough (Placeholder)', summary: 'Placeholder: Researchers announce a significant step in quantum computing.', source: 'Science Today', date: '2024-10-26' },
            ]);
        }
        setNews(newsData);
      } catch (err) {
        setErrorNews("Failed to load tech news. Displaying placeholders.");
        console.error(err);
      } finally {
        setLoadingNews(false);
      }

      // Fetch Releases
      try {
        setErrorReleases(null);
        setLoadingReleases(true);
        await new Promise(resolve => setTimeout(resolve, API_FETCH_DELAY));
        const releasesData = await fetchNewReleases();
         if (releasesData.length === 0 && process.env.API_KEY) {
            setErrorReleases("Gemini returned empty releases data. Check API or prompt.");
        } else if (releasesData.length === 0 && !process.env.API_KEY){
            setErrorReleases("API_KEY not found. Using placeholder releases. Please set your API_KEY.");
            setReleases([
                { id: 'release-ph-1', productName: 'SuperOS 5.0 (Placeholder)', description: 'Next-gen operating system.', releaseDate: 'Q4 2024', category: 'Software' },
            ]);
        }
        setReleases(releasesData);
      } catch (err) {
        setErrorReleases("Failed to load new releases. Displaying placeholders.");
        console.error(err);
      } finally {
        setLoadingReleases(false);
      }

      // Fetch Tidbits
      try {
        setErrorTidbits(null);
        setLoadingTidbits(true);
        await new Promise(resolve => setTimeout(resolve, API_FETCH_DELAY));
        const tidbitsData = await fetchTechTidbits();
        if (tidbitsData.length === 0 && process.env.API_KEY) {
            setErrorTidbits("Gemini returned empty tidbits data. Check API or prompt.");
        } else if (tidbitsData.length === 0 && !process.env.API_KEY){
            setErrorTidbits("API_KEY not found. Using placeholder tidbits. Please set your API_KEY.");
            setTidbits([
                { id: 'tidbit-ph-1', text: 'The average smartphone user checks their phone 150 times a day (Placeholder).' },
            ]);
        }
        setTidbits(tidbitsData);
      } catch (err) {
        setErrorTidbits("Failed to load tech tidbits. Displaying placeholders.");
        console.error(err);
      } finally {
        setLoadingTidbits(false);
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed navbar height */}
        <HeroSection />

        <Section id="news" title="Latest Tech News">
          {loadingNews && <LoadingSpinner />}
          {errorNews && <ErrorDisplay message={errorNews} />}
          {!loadingNews && news.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map(item => <NewsCard key={item.id} item={item} />)}
            </div>
          )}
          {!loadingNews && !errorNews && news.length === 0 && <p className="text-center text-gray-500">No news to display currently.</p>}
        </Section>

        <Section id="releases" title="New Releases" className="bg-gray-800">
          {loadingReleases && <LoadingSpinner />}
          {errorReleases && <ErrorDisplay message={errorReleases} />}
          {!loadingReleases && releases.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {releases.map(item => <ReleaseCard key={item.id} item={item} />)}
            </div>
          )}
           {!loadingReleases && !errorReleases && releases.length === 0 && <p className="text-center text-gray-500">No releases to display currently.</p>}
        </Section>

        <Section id="projects" title="My Projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STATIC_PROJECTS.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </Section>

        <Section id="blog" title="Blog Posts" className="bg-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            {STATIC_BLOG_POSTS.map(post => <BlogCard key={post.id} post={post} />)}
          </div>
        </Section>

        <Section id="tidbits" title="Tech Tidbits">
          {loadingTidbits && <LoadingSpinner />}
          {errorTidbits && <ErrorDisplay message={errorTidbits} />}
          {!loadingTidbits && tidbits.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tidbits.map(item => <TidbitCard key={item.id} item={item} />)}
            </div>
          )}
          {!loadingTidbits && !errorTidbits && tidbits.length === 0 && <p className="text-center text-gray-500">No tidbits to display currently.</p>}
        </Section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
    