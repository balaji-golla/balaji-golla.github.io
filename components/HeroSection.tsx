
import React from 'react';
import { YOUR_NAME, YOUR_TITLE, CONTACT_LINKS, YOUR_GITHUB_URL } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <img 
          src="https://picsum.photos/seed/profile/200/200" 
          alt={YOUR_NAME} 
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 border-4 border-teal-400 shadow-xl"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-teal-400">{YOUR_NAME}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {YOUR_TITLE}
        </p>
        <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          I'm passionate about building innovative and user-friendly web applications with cutting-edge technologies. 
          Currently exploring the potential of Generative AI to create smarter and more intuitive digital experiences. 
          This page showcases some of my interests and projects in the tech sphere.
        </p>
        <div className="flex justify-center space-x-6 mb-10">
          {CONTACT_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              aria-label={link.name}
            >
              {React.cloneElement(link.icon as React.ReactElement, { className: "w-8 h-8" })}
            </a>
          ))}
        </div>
        <a
          href={YOUR_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
        >
          View My GitHub
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
    