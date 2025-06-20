
import React from 'react';
import { githubRepoData } from '../data/githubRepositories';
import Card from '../components/Card';
import Section from '../components/Section';
import { GithubRepoInfo } from '../types';
import { CodeBracketIcon, StarIcon, GitForkIcon, ExternalLinkIcon, CalendarDaysIcon } from '../components/Icons';

const GithubReposPage: React.FC = () => {
  return (
    <Section title="GitHub Repositories" subtitle="A glimpse into my coding activities and open-source contributions.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {githubRepoData.map((repo: GithubRepoInfo) => (
          <Card
            key={repo.id}
            title={repo.name}
            description={repo.description}
            date={`Last updated: ${new Date(repo.updatedAt).toLocaleDateString()}`}
            imagePlaceholder={<CodeBracketIcon className="w-16 h-16" />}
            links={[{ href: repo.url, text: 'View on GitHub', icon: <ExternalLinkIcon className="w-4 h-4 mr-1" /> }]}
          >
            <div className="mt-auto flex items-center space-x-4 text-sm text-slate-600 pt-3">
              {repo.language && (
                <span className="inline-flex items-center">
                  <CodeBracketIcon className="w-4 h-4 mr-1 text-blue-500" /> {repo.language}
                </span>
              )}
              {typeof repo.stars === 'number' && (
                <span className="inline-flex items-center">
                  <StarIcon className="w-4 h-4 mr-1 text-yellow-500" /> {repo.stars}
                </span>
              )}
              {typeof repo.forks === 'number' && (
                <span className="inline-flex items-center">
                  <GitForkIcon className="w-4 h-4 mr-1 text-green-500" /> {repo.forks}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default GithubReposPage;
