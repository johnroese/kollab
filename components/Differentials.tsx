import React from 'react';
import { BadgeCheck, Clock3, Handshake, Layers3 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const differentials = [
  { icon: Clock3, title: 'Atendimento ágil', description: 'Priorização clara e comunicação próxima para reduzir o impacto das ocorrências na operação.' },
  { icon: Layers3, title: 'Visão completa do ambiente', description: 'Rede, equipamentos, organização e suporte pensados como partes do mesmo ecossistema.' },
  { icon: BadgeCheck, title: 'Padrão profissional', description: 'Execução organizada, materiais adequados e documentação que simplifica futuras manutenções.' },
  { icon: Handshake, title: 'Parceria de longo prazo', description: 'Soluções orientadas ao negócio, sem excesso de complexidade e com acompanhamento após a entrega.' },
];

const Differentials: React.FC = () => (
  <section className="section differentials" id="diferenciais">
    <div className="site-container differentials__grid">
      <div className="differentials__visual">
        <img src="/images/redes.jpg" alt="Equipamentos de rede organizados em data center" loading="lazy" />
        <div className="experience-card"><strong>15+</strong><span>anos de experiência em tecnologia</span></div>
        <div className="visual-tag"><i /> Infraestrutura preparada para evoluir</div>
      </div>
      <div>
        <SectionHeading
          eyebrow="O jeito Kollab"
          title="Tecnologia bem cuidada vira tranquilidade para o seu time"
          description="Traduzimos necessidades técnicas em soluções objetivas, organizadas e sustentáveis para a rotina da empresa."
        />
        <div className="differentials-list">
          {differentials.map(({ icon: Icon, title, description }) => (
            <article key={title}>
              <span className="icon-box icon-box--small"><Icon aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Differentials;
