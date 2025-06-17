
import React from 'react';
import { YOUR_EMAIL, YOUR_LINKEDIN_URL, YOUR_GITHUB_URL, YOUR_NAME } from '../constants';
import { EmailIcon, LinkedInIcon, GitHubIcon } from './icons/SocialIcons'; // Assuming these are created

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. 
          Feel free to reach out!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
          <a 
            href={`mailto:${YOUR_EMAIL}`} 
            className="flex items-center text-xl text-indigo-300 hover:text-indigo-200 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            <EmailIcon className="w-8 h-8 mr-3 text-indigo-400" />
            <span>{YOUR_EMAIL}</span>
          </a>
          
          <a 
            href={YOUR_LINKEDIN_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-xl text-indigo-300 hover:text-indigo-200 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            <LinkedInIcon className="w-8 h-8 mr-3 text-indigo-400" />
            <span>LinkedIn Profile</span>
          </a>
          
          <a 
            href={YOUR_GITHUB_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-xl text-indigo-300 hover:text-indigo-200 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            <GitHubIcon className="w-8 h-8 mr-3 text-indigo-400" />
            <span>GitHub Profile</span>
          </a>
        </div>

        <p className="mt-16 text-gray-400">
          Looking forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
