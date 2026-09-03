import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';

const projects = [
  { src: '/images/hero-infraestrutura.jpg', title: 'Infraestrutura de rede', label: 'Planejamento e organização' },
  { src: '/images/cabeamento.jpg', title: 'Cabeamento estruturado', label: 'Conectividade física' },
  { src: '/images/seguranca.jpg', title: 'Segurança e gestão', label: 'Proteção do ambiente' },
];

const Gallery: React.FC = () => (
  <section className="section work-section">
    <div className="site-container">
      <div className="section-heading-row">
        <SectionHeading eyebrow="Soluções em ação" title="Estrutura, organização e confiabilidade em cada entrega" />
        <Link className="text-link text-link--light" to="/solucoes">Ver todas as soluções <ArrowUpRight size={18} aria-hidden="true" /></Link>
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
