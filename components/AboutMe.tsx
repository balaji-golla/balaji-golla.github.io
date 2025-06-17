
import React from 'react';
import { ABOUT_ME_TEXT, YOUR_LINKEDIN_URL, YOUR_GITHUB_URL, SKILLS_LIST, YOUR_NAME } from '../constants';
import { LinkedInIcon, GitHubIcon } from './icons/SocialIcons'; // Assuming these are created

const ProfilePhoto: React.FC = () => (
    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-8 md:mb-0 shadow-2xl border-4 border-indigo-500 transform transition-all duration-500 hover:scale-105">
        <img 
            src={`https://picsum.photos/seed/${YOUR_NAME.replace(/\s+/g, '')}/300/300`} // Using a consistent seed for profile pic
            alt={YOUR_NAME} 
            className="w-full h-full object-cover" 
        />
    </div>
);

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <ProfilePhoto />
          </div>
          <div className="md:w-2/3 text-lg text-gray-300 space-y-6">
            {ABOUT_ME_TEXT.split('\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            ))}
            <div className="flex space-x-6 mt-8 justify-center md:justify-start">
              <a href={YOUR_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
                <LinkedInIcon className="w-8 h-8" /> 
                <span>LinkedIn</span>
              </a>
              <a href={YOUR_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
                <GitHubIcon className="w-8 h-8" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-center mb-10 text-gray-100">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SKILLS_LIST.map(skill => (
              <span key={skill} className="bg-gray-700 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
