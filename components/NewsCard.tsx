
import React from 'react';
import { NewsItem } from '../types';
import { EXTERNAL_LINK_ICON } from '../constants';

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">{item.title}</h3>
        <p className="text-gray-400 text-sm mb-3 flex-grow">{item.summary}</p>
        <div className="mt-auto">
          <p className="text-xs text-gray-500">Source: {item.source} - {item.date}</p>
          {item.url && item.url !== "#" && (
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-teal-400 hover:text-teal-300 mt-2"
            >
              Read More {EXTERNAL_LINK_ICON}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
    