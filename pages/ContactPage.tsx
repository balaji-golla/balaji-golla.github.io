
import React from 'react';
import Section from '../components/Section';
import { profileData } from '../data/profile';
import { ContactLink } from '../types';
import { EmailSosialIcon, LinkedInIcon, GitHubSocialIcon, MapPinIcon } from '../components/Icons';

const contactLinks: ContactLink[] = [
  {
    name: 'Email',
    url: `mailto:${profileData.email}`,
    icon: <EmailSosialIcon className="w-8 h-8 text-blue-600" />,
    text: profileData.email,
  },
  ...(profileData.linkedinUsername ? [{
    name: 'LinkedIn',
    url: `https://linkedin.com/in/${profileData.linkedinUsername}`,
    icon: <LinkedInIcon className="w-8 h-8 text-blue-600" />,
    text: `linkedin.com/in/${profileData.linkedinUsername}`,
  }] : []),
  {
    name: 'GitHub',
    url: `https://github.com/${profileData.githubUsername}`,
    icon: <GitHubSocialIcon className="w-8 h-8 text-blue-600" />,
    text: `github.com/${profileData.githubUsername}`,
  },
  // You can add more contact methods like a physical address if relevant
  // {
  //   name: 'Location',
  //   url: '#', // or a Google Maps link
  //   icon: <MapPinIcon className="w-8 h-8 text-blue-600" />,
  //   text: 'City, Country' 
  // }
];


const ContactPage: React.FC = () => {
  return (
    <Section title="Get In Touch" subtitle="I'm always open to discussing new projects, collaborations, or opportunities.">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
        <p className="text-lg text-slate-700 mb-8 text-center">
          Feel free to reach out through any of the channels below. I look forward to hearing from you!
        </p>
        
        <div className="space-y-6">
          {contactLinks.map(link => (
            <a 
              key={link.name}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
            >
              <div className="flex-shrink-0 mr-4 p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                {link.icon}
              </div>
              <div>
                <h3 className="text-md font-semibold text-slate-800 group-hover:text-blue-700">{link.name}</h3>
                {link.text && <p className="text-sm text-slate-600 break-all">{link.text}</p>}
              </div>
            </a>
          ))}
        </div>

        {/* Basic Contact Form Placeholder (Non-functional without backend) */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Send a Quick Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your message..."></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                onClick={(e) => { e.preventDefault(); alert('This form is a placeholder and does not send messages.'); }}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message (Placeholder)
              </button>
            </div>
          </form>
           <p className="text-xs text-slate-500 mt-3 text-center">Note: This form is for demonstration purposes only and does not currently send messages.</p>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
