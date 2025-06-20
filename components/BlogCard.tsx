
import React from 'react';
import { BlogPost } from '../types';
import { EXTERNAL_LINK_ICON } from '../constants';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden group flex flex-col h-full">
      {post.imageUrl && (
         <div className="w-full h-48 overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">{post.title}</h3>
        <p className="text-gray-500 text-xs mb-2">{post.date}</p>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{post.summary}</p>
        <div className="mt-auto">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-teal-400 hover:text-teal-300 font-semibold"
          >
            Read Post {EXTERNAL_LINK_ICON}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
    