
import React from 'react';
import { profileData } from '../data/profile';
import Section from '../components/Section';
import { EmailSosialIcon, GitHubSocialIcon, LinkedInIcon, DocumentArrowDownIcon } from '../components/Icons';

const ProfilePage: React.FC = () => {
  return (
    <Section title="About Me" subtitle="A little more about my journey and passion for technology.">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <img 
            src={profileData.avatarUrl} 
            alt={profileData.name} 
            className="w-40 h-40 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 flex-shrink-0"
            onError={(e) => (e.currentTarget.src = 'https://picsum.photos/160/160')} // Fallback
          />
          <div>
            <h1 className="text-3xl font-bold text-blue-700 mb-1">{profileData.name}</h1>
            <h2 className="text-xl text-slate-600 font-medium mb-4">{profileData.title}</h2>
            <div className="flex space-x-4 mb-4">
              <a href={`mailto:${profileData.email}`} className="text-slate-500 hover:text-blue-600 transition-colors">
                <EmailSosialIcon className="w-6 h-6" />
              </a>
              {profileData.linkedinUsername && (
                <a 
                  href={`https://linkedin.com/in/${profileData.linkedinUsername}`} 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <LinkedInIcon className="w-6 h-6" />
                </a>
              )}
              <a 
                href={`https://github.com/${profileData.githubUsername}`} 
                target="_blank" rel="noopener noreferrer" 
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <GitHubSocialIcon className="w-6 h-6" />
              </a>
            </div>
            {profileData.resumeUrl && (
              <a 
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md transition-colors text-sm"
              >
                <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            )}
          </div>
        </div>
        
        <div className="prose prose-slate max-w-none text-slate-700" dangerouslySetInnerHTML={{ __html: profileData.longBio }} />

      </div>
    </Section>
  );
};

export default ProfilePage;
