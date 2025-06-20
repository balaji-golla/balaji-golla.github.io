
import React from 'react';
import { Project } from '../types';
import { GITHUB_ICON, EXTERNAL_LINK_ICON } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col h-full group">
      {project.imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs bg-gray-700 text-teal-300 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-teal-400 transition-colors"
          >
            {React.cloneElement(GITHUB_ICON as React.ReactElement, { className: "w-5 h-5 mr-2" })}
            GitHub
          </a>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-teal-400 transition-colors"
            >
              {EXTERNAL_LINK_ICON}
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
    