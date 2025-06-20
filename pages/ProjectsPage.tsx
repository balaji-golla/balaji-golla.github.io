
import React from 'react';
import { projectsData } from '../data/projects';
import Card from '../components/Card';
import Section from '../components/Section';
import { Project } from '../types';
import { CodeBracketIcon, ExternalLinkIcon, BriefcaseIcon } from '../components/Icons';

const ProjectsPage: React.FC = () => {
  return (
    <Section title="My Projects" subtitle="A selection of my recent work and personal endeavors.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project: Project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.longDescription || project.description}
            imageUrl={project.imageUrl}
            imagePlaceholder={<BriefcaseIcon className="w-16 h-16" />}
            tags={project.technologies}
            date={project.date}
            links={[
              ...(project.repoUrl ? [{ href: project.repoUrl, text: 'View Code', icon: <CodeBracketIcon className="w-4 h-4 mr-1" /> }] : []),
              ...(project.liveUrl ? [{ href: project.liveUrl, text: 'Live Demo', icon: <ExternalLinkIcon className="w-4 h-4 mr-1" /> }] : []),
            ]}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsPage;
