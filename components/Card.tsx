
import React from 'react';
import { ExternalLinkIcon, TagIcon, CalendarDaysIcon } from './Icons';

interface CardLink {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

interface CardProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  imageUrl?: string; // Path to local image
  tags?: string[];
  links?: CardLink[];
  date?: string;
  children?: React.ReactNode; // For additional custom content
  className?: string;
  imagePlaceholder?: React.ReactNode; // E.g. an SVG icon or styled div
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  tags,
  links,
  date,
  children,
  className = '',
  imagePlaceholder
}) => {
  return (
    <div className={`bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl ${className}`}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            // Fallback for broken image links
            (e.target as HTMLImageElement).style.display = 'none'; 
            // Optionally, show placeholder here if image fails
          }}
        />
      ) : imagePlaceholder ? (
         <div className="w-full h-48 flex items-center justify-center bg-slate-200 text-slate-500">
           {imagePlaceholder}
         </div>
      ) : null}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-blue-700 mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-slate-500 mb-2">{subtitle}</p>}
        {date && (
          <div className="flex items-center text-xs text-slate-500 mb-3">
            <CalendarDaysIcon className="w-4 h-4 mr-1.5" />
            <span>{date}</span>
          </div>
        )}
        <div className="text-slate-600 text-sm mb-4 flex-grow">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
        
        {tags && tags.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center text-xs text-slate-500 mb-1">
              <TagIcon className="w-4 h-4 mr-1.5" />
              <span>Technologies:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        {children}
        {links && links.length > 0 && (
          <div className="mt-auto pt-4 border-t border-slate-200">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline mr-4 transition-colors"
              >
                {link.icon || <ExternalLinkIcon className="w-4 h-4 mr-1" />}
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
