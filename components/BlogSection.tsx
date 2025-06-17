
import React from 'react';
import { BLOG_POSTS_DATA } from '../constants';
import { BlogPost } from '../types';
import Card from './common/Card';
import { ArrowRightIcon } from './icons/ActionIcons'; // Assuming this is created

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS_DATA.map((post: BlogPost) => (
            <Card
              key={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              description={post.summary}
            >
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Published: {new Date(post.publishDate).toLocaleDateString()}</p>
                <a 
                  href={post.postUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300 group"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More <ArrowRightIcon className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>
        {/* Optional: Link to a dedicated blog page if you have more posts */}
        {/* <div className="text-center mt-16">
          <a href="/blog" className="text-indigo-400 hover:text-indigo-300 font-semibold text-lg">
            View All Posts &rarr;
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
