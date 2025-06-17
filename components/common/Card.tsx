
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  children?: React.ReactNode; // For additional content like buttons or links
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, children }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 flex flex-col transform hover:-translate-y-1">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-indigo-300 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
