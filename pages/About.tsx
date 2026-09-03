import React from 'react';
import { Eye, HeartHandshake, Lightbulb, ShieldCheck, Target, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CallToAction from '../components/CallToAction';

const values = [
  { icon: HeartHandshake, title: 'Parceria', description: 'Relacionamentos transparentes, próximos e construídos para durar.' },
  { icon: ShieldCheck, title: 'Responsabilidade', description: 'Cuidado com cada ambiente, informação e decisão técnica.' },
  { icon: Lightbulb, title: 'Simplicidade', description: 'Tecnologia traduzida em soluções claras e úteis para o negócio.' },
  { icon: Users, title: 'Colaboração', description: 'Trabalho conjunto com clientes, equipes e parceiros em cada etapa.' },
];

const About: React.FC = () => (
  <>
    <PageHero
      eyebrow="Empresa"
      title="Tecnologia próxima, confiável e conectada ao negócio"
      description="A Kollab nasceu para tornar a infraestrutura de TI mais simples de entender, segura de operar e preparada para evoluir."
    />

    <section className="section about-story">
      <div className="site-container about-story__grid">
        <div className="about-story__logo"><img src="/brand/kollab-logo.png" alt="Kollab Tecnologia — conectando tecnologia e negócios" /></div>
        <div>
          <SectionHeading eyebrow="Nossa essência" title="Conectar é mais do que instalar tecnologia" />
          <p>É entender como cada equipe trabalha, onde estão os riscos e o que precisa acontecer para a operação seguir em frente. Por isso, combinamos conhecimento técnico, organização e atendimento próximo.</p>
          <p>Em cada projeto, buscamos entregar uma infraestrutura que faça sentido hoje e continue preparada para os próximos passos da empresa.</p>
          <div className="about-highlight"><strong>15+</strong><span>anos de experiência aplicados a projetos e suporte de tecnologia</span></div>
        </div>
      </div>
    </section>

    <section className="section section--soft purpose-section">
      <div className="site-container purpose-grid">
        <article><span className="icon-box"><Target aria-hidden="true" /></span><h2>Missão</h2><p>Conectar tecnologia e negócios por meio de soluções de infraestrutura confiáveis, organizadas e adequadas a cada realidade.</p></article>
        <article><span className="icon-box"><Eye aria-hidden="true" /></span><h2>Visão</h2><p>Ser reconhecida como parceira de tecnologia pela qualidade das entregas, proximidade no atendimento e impacto positivo nas operações.</p></article>
      </div>
    </section>

    <section className="section values-section">
      <div className="site-container">
        <SectionHeading eyebrow="Nossos valores" title="O que orienta cada escolha e cada entrega" align="center" />
        <div className="values-grid">
          {values.map(({ icon: Icon, title, description }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </div>
    </section>
    <CallToAction title="Vamos construir uma relação de confiança com a sua empresa?" />
  </>
);

export default About;
