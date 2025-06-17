
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import TechNewsSection from './components/TechNewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <ProjectsSection />
        <BlogSection />
        <TechNewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
