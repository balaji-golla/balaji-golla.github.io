
import React from 'react';
import { YOUR_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8 text-center">
      <p className="text-gray-500 text-sm">
        &copy; {currentYear} {YOUR_NAME}. All rights reserved.
      </p>
      <p className="text-xs text-gray-600 mt-1">
        Built with React, Tailwind CSS, and Gemini API.
      </p>
    </footer>
  );
};

export default Footer;
    