import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';

const projects = [
  { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=85&w=1200&auto=format&fit=crop', title: 'Infraestrutura de rede', label: 'Planejamento e organização' },
  { src: 'https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?q=85&w=1200&auto=format&fit=crop', title: 'Cabeamento estruturado', label: 'Conectividade física' },
  { src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=85&w=1200&auto=format&fit=crop', title: 'Segurança e gestão', label: 'Proteção do ambiente' },
];

const Gallery: React.FC = () => (
  <section className="section work-section">
    <div className="site-container">
      <div className="section-heading-row">
        <SectionHeading eyebrow="Soluções em ação" title="Estrutura, organização e confiabilidade em cada entrega" />
        <Link className="text-link text-link--light" to="/contato">Planejar meu projeto <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <article className={`work-card ${index === 0 ? 'work-card--wide' : ''}`} key={project.title}>
            <img src={project.src} alt={project.title} loading="lazy" />
            <div className="work-card__overlay"><span>{project.label}</span><h3>{project.title}</h3></div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
