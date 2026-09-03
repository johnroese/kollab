import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description, align = 'left', light = false }) => (
  <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
    <span className="brand-eyebrow"><span /> {eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

export default SectionHeading;
