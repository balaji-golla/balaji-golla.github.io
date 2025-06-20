
import React from 'react';
import { ReleaseItem } from '../types';
import { EXTERNAL_LINK_ICON } from '../constants';

interface ReleaseCardProps {
  item: ReleaseItem;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-500 mb-1">{item.category}</span>
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.productName}</h3>
        <p className="text-gray-400 text-sm mb-3 flex-grow">{item.description}</p>
        <div className="mt-auto">
          <p className="text-xs text-gray-500">Release Date: {item.releaseDate}</p>
          {item.url && item.url !== "#" && (
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-teal-400 hover:text-teal-300 mt-2"
            >
              Learn More {EXTERNAL_LINK_ICON}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
    