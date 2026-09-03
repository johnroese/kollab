import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, description }) => (
  <section className="page-hero">
    <div className="page-hero__glow" />
    <div className="site-container page-hero__content">
      <div className="breadcrumbs" aria-label="Navegação estrutural">
        <Link to="/">Início</Link><ChevronRight size={15} aria-hidden="true" /><span>{eyebrow}</span>
      </div>
      <span className="brand-eyebrow"><span /> {eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </section>
);

export default PageHero;
