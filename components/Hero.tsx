
import React from 'react';
import { YOUR_NAME, YOUR_TITLE } from '../constants';

const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
);


const Hero: React.FC = () => {
  const heroBackgroundImage = "https://picsum.photos/seed/hero-bg/1920/1080?blur=2&grayscale"; 
  // To use a video background, you could replace the div style with:
  // <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
  //   <source src="/path-to-your-video.mp4" type="video/mp4" />
  //   Your browser does not support the video tag.
  // </video>
  // Ensure the video is lightweight or optimized for web.

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay for text readability */}
      </div>
      
      <div className="relative z-10 p-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="block text-white">Hi, I'm</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse">
            {YOUR_NAME}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 font-medium">
          {YOUR_TITLE}
        </p>
        <a
          href="#about"
          onClick={handleScrollToAbout}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
        >
          Discover More <ArrowDownIcon className="ml-2 -mr-1 h-5 w-5 animate-bounce" />
        </a>
      </div>
      
      {/* Optional: Subtle animation or element for "motion" feel */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
         <ArrowDownIcon className="w-8 h-8 text-gray-400"/>
      </div>
    </section>
  );
};

export default Hero;
