
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        <p className="text-sm mt-1">
          Built with React, TypeScript, and Tailwind CSS. Hosted on GitHub Pages.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
