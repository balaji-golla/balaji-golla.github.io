
import React from 'react';
import { Tidbit } from '../types';

interface TidbitCardProps {
  item: Tidbit;
}

const TidbitCard: React.FC<TidbitCardProps> = ({ item }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300">
      <p className="text-gray-300 italic">"{item.text}"</p>
    </div>
  );
};

export default TidbitCard;
    