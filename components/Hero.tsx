
import React from 'react';
import { ArrowRight, CheckCircle2, Network, ShieldCheck, Wifi } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="brand-hero">
      <div className="brand-hero__glow brand-hero__glow--blue" />
      <div className="brand-hero__glow brand-hero__glow--green" />
      <div className="site-container brand-hero__grid">
        <div className="brand-hero__content">
          <span className="brand-eyebrow"><span /> Conectando tecnologia e negócios</span>
          <h1>Tecnologia que conecta. <strong>Estrutura que faz seu negócio avançar.</strong></h1>
          <p>
            Projetamos e cuidamos da infraestrutura de TI da sua empresa para que sua equipe trabalhe com mais segurança, estabilidade e produtividade.
          </p>
          <div className="brand-hero__actions">
            <a className="site-button" href="https://wa.me/5599991888485?text=Olá%2C%20gostaria%20de%20solicitar%20um%20diagnóstico%20de%20TI." target="_blank" rel="noreferrer">
              Falar com especialista <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="site-button site-button--ghost" href="#servicos">Conhecer soluções</a>
          </div>
          <div className="brand-hero__trust" aria-label="Benefícios">
            <span><CheckCircle2 aria-hidden="true" /> Atendimento empresarial</span>
            <span><CheckCircle2 aria-hidden="true" /> Projeto sob medida</span>
          </div>
        </div>

        <div className="brand-hero__visual" aria-label="Soluções integradas de tecnologia">
          <div className="tech-panel">
            <div className="tech-panel__top">
              <div>
                <span>Ecossistema Kollab</span>
                <strong>Operação conectada</strong>
              </div>
              <span className="tech-panel__status"><i /> Soluções integradas</span>
            </div>
            <div className="tech-panel__image">
              <img src="/images/hero-infraestrutura.jpg" alt="Infraestrutura profissional de servidores e redes" />
              <div className="tech-panel__overlay">
                <span><Network aria-hidden="true" /> Infraestrutura</span>
                <span><Wifi aria-hidden="true" /> Redes corporativas</span>
                <span><ShieldCheck aria-hidden="true" /> Suporte e segurança</span>
              </div>
            </div>
            <div className="tech-panel__footer">
              <span>Da instalação ao suporte contínuo</span>
              <strong>Uma parceira. Toda a sua TI.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
