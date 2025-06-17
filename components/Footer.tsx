
import React from 'react';
import { YOUR_NAME, YOUR_LINKEDIN_URL, YOUR_GITHUB_URL } from '../constants';
import { LinkedInIcon, GitHubIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-10">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href={YOUR_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href={YOUR_GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <GitHubIcon className="w-6 h-6" />
          </a>
          {/* Add other social links here if needed */}
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with React, TypeScript, Tailwind CSS, and Gemini API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
