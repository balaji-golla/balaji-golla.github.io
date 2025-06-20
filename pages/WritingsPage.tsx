
import React from 'react';
import { blogPostsData } from '../data/blogPosts';
import { whitepapersData } from '../data/whitepapers';
import Card from '../components/Card';
import Section from '../components/Section';
import { BlogPost, Whitepaper } from '../types';
import { DocumentTextIcon, BookOpenIcon, ExternalLinkIcon, DocumentArrowDownIcon } from '../components/Icons';

const WritingsPage: React.FC = () => {
  return (
    <div>
      <Section title="Blog Posts & Articles" subtitle="Sharing insights, tutorials, and thoughts on technology.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPostsData.map((post: BlogPost) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.contentPreview}
              imageUrl={post.imageUrl}
              imagePlaceholder={<DocumentTextIcon className="w-12 h-12" />}
              date={post.date}
              links={post.link ? [{ href: post.link, text: 'Read More', icon: <ExternalLinkIcon className="w-4 h-4 mr-1" /> }] : []}
            />
          ))}
        </div>
      </Section>

      <Section title="Whitepapers & Research" subtitle="In-depth explorations of specific topics and technologies.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whitepapersData.map((paper: Whitepaper) => (
            <Card
              key={paper.id}
              title={paper.title}
              description={
                <>
                  <p className="mb-2">{paper.summary}</p>
                  {paper.authors && paper.authors.length > 0 && (
                    <p className="text-xs text-slate-500">Authors: {paper.authors.join(', ')}</p>
                  )}
                </>
              }
              imageUrl={paper.imageUrl}
              imagePlaceholder={<BookOpenIcon className="w-12 h-12" />}
              date={paper.date}
              links={[{ href: paper.fileUrl, text: 'Download PDF', icon: <DocumentArrowDownIcon className="w-4 h-4 mr-1" /> }]}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default WritingsPage;
