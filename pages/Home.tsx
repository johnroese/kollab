import React from 'react';
import { ArrowRight, Building2, Factory, Landmark, Search, Settings, Store, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Differentials from '../components/Differentials';
import Gallery from '../components/Gallery';
import SectionHeading from '../components/SectionHeading';
import CallToAction from '../components/CallToAction';

const sectors = [
  { icon: Building2, label: 'Empresas' },
  { icon: Store, label: 'Varejo' },
  { icon: Factory, label: 'Indústria' },
  { icon: Landmark, label: 'Instituições' },
];

const steps = [
  { icon: Search, number: '01', title: 'Diagnóstico', description: 'Entendemos o ambiente atual, as prioridades e os pontos que limitam a operação.' },
  { icon: Settings, number: '02', title: 'Projeto', description: 'Desenhamos uma solução objetiva, dimensionada para a realidade da empresa.' },
  { icon: Wrench, number: '03', title: 'Implantação', description: 'Executamos com organização, comunicação clara e o menor impacto possível na rotina.' },
  { icon: ArrowRight, number: '04', title: 'Continuidade', description: 'Entregamos orientações e seguimos disponíveis para suporte e evolução do ambiente.' },
];

const Home: React.FC = () => (
  <>
    <Hero />

    <section className="sector-strip" aria-label="Segmentos atendidos">
      <div className="site-container sector-strip__inner">
        <p>Soluções para operações de diferentes portes</p>
        <div>{sectors.map(({ icon: Icon, label }) => <span key={label}><Icon aria-hidden="true" /> {label}</span>)}</div>
      </div>
    </section>

    <section className="section intro-section">
      <div className="site-container intro-section__grid">
        <div>
          <SectionHeading
            eyebrow="Tecnologia com propósito"
            title="Sua TI precisa acompanhar o ritmo do seu negócio"
            description="A Kollab integra infraestrutura, conectividade e suporte em soluções que simplificam a operação e ajudam sua equipe a trabalhar melhor."
          />
          <Link className="text-link" to="/empresa">Conheça a Kollab <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="intro-points">
          <article><strong>01</strong><div><h3>Menos improviso</h3><p>Projetos documentados e ambientes organizados para facilitar manutenção e expansão.</p></div></article>
          <article><strong>02</strong><div><h3>Mais continuidade</h3><p>Prevenção, suporte e respostas claras quando a sua operação mais precisa.</p></div></article>
          <article><strong>03</strong><div><h3>Decisões melhores</h3><p>Recomendações técnicas conectadas ao orçamento e às prioridades do negócio.</p></div></article>
        </div>
      </div>
    </section>

    <Services />
    <Differentials />

    <section className="section process-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Do diagnóstico à evolução contínua"
          description="Um processo simples, transparente e pensado para entregar resultado sem criar complexidade para a sua equipe."
          align="center"
        />
        <div className="process-grid">
          {steps.map(({ icon: Icon, number, title, description }) => (
            <article key={number}>
              <span className="process-grid__number">{number}</span>
              <span className="icon-box"><Icon aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <Gallery />
    <CallToAction />
  </>
);

export default Home;
