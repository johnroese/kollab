import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import SectionHeading from './SectionHeading';

const Services: React.FC = () => (
  <section className="section section--soft" id="servicos">
    <div className="site-container">
      <div className="section-heading-row">
        <SectionHeading
          eyebrow="Soluções integradas"
          title="A infraestrutura certa para cada desafio do seu negócio"
          description="Do primeiro cabo ao suporte contínuo, unimos as frentes essenciais de TI em uma entrega coordenada."
        />
        <Link className="text-link" to="/solucoes">Ver todas as soluções <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <div className="services-grid">
        {services.slice(0, 6).map(({ id, title, shortDescription, icon: Icon }, index) => (
          <Link className="service-card" to={`/solucoes#${id}`} key={id}>
            <div className="service-card__top">
              <span className="icon-box"><Icon aria-hidden="true" /></span>
              <span className="service-card__number">0{index + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{shortDescription}</p>
            <span className="service-card__link">Conhecer solução <ArrowUpRight size={17} aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
