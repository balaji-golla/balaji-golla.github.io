
import React from 'react';
import Section from './Section';
import { CONTACT_LINKS, YOUR_EMAIL, YOUR_NAME } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something exciting. 
          Feel free to reach out!
        </p>
        <a 
          href={`mailto:${YOUR_EMAIL}`} 
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 mb-10"
        >
          Email Me: {YOUR_EMAIL}
        </a>
        <p className="text-lg text-gray-400 mb-4">Connect with me on social media:</p>
        <div className="flex justify-center space-x-6">
          {CONTACT_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              aria-label={link.name}
            >
              {React.cloneElement(link.icon as React.ReactElement, { className: "w-10 h-10" })}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
    