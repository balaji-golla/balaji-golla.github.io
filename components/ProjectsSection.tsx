
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import Card from './common/Card';
import { GitHubIcon, ExternalLinkIcon } from './icons/ActionIcons'; // Assuming these are created

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project: Project) => (
            <Card
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
            >
              <div className="mt-4 pt-4 border-t border-gray-700">
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-gray-700 text-indigo-300 px-3 py-1 text-xs font-semibold rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="flex justify-start space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitHubIcon className="w-5 h-5 mr-1" /> GitHub
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLinkIcon className="w-5 h-5 mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
