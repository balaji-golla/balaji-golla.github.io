
import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { BriefcaseIcon, AcademicCapIcon, DocumentTextIcon, ChevronDownIcon, DocumentArrowDownIcon } from '../components/Icons';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl text-white">
        <div className="max-w-3xl mx-auto px-4">
          <img 
            src={profileData.avatarUrl} 
            alt={profileData.name} 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            onError={(e) => (e.currentTarget.src = 'https://picsum.photos/160/160')} // Fallback image
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{profileData.name}</h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">{profileData.title}</p>
          <p className="text-md md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{profileData.bio}</p>
          <div className="space-x-4">
            <Link 
              to="/profile" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 inline-block"
            >
              Learn More About Me
            </Link>
            {profileData.resumeUrl && (
              <a 
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 inline-flex items-center"
              >
                <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                View Resume
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Explore My Work</h2>
            <p className="text-slate-600 mt-2">Discover my projects, skills, and experiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/projects" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center group">
            <BriefcaseIcon className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2 group-hover:text-blue-600">Projects</h3>
            <p className="text-sm text-slate-500">View my latest work and case studies.</p>
          </Link>
          <Link to="/learning" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center group">
            <AcademicCapIcon className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2 group-hover:text-blue-600">Learning & Skills</h3>
            <p className="text-sm text-slate-500">Explore my courses, certificates, and skills.</p>
          </Link>
          <Link to="/writings" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center group">
            <DocumentTextIcon className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2 group-hover:text-blue-600">Writings</h3>
            <p className="text-sm text-slate-500">Read my thoughts, articles, and whitepapers.</p>
          </Link>
        </div>
      </section>

      {/* Call to Action for Contact */}
      <section className="py-12 bg-slate-200 rounded-lg">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Let's Connect!</h2>
          <p className="text-lg text-slate-600 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
