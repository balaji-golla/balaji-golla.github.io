
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', id }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{title}</h2>
        {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
