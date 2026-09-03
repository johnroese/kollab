import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CallToAction from '../components/CallToAction';
import { services } from '../data/services';

const faqs = [
  { question: 'A Kollab atende empresas de qualquer porte?', answer: 'Sim. O escopo é dimensionado conforme o tamanho do ambiente, a criticidade da operação e as prioridades de investimento.' },
  { question: 'É possível contratar apenas uma solução?', answer: 'Sim. Podemos atuar em um projeto pontual, como cabeamento ou Wi-Fi, e também integrar diferentes frentes em um plano único.' },
  { question: 'O atendimento pode ser preventivo?', answer: 'Sim. A manutenção preventiva ajuda a identificar riscos antes que eles se tornem interrupções e pode ser combinada com suporte corretivo.' },
  { question: 'Como começa um projeto?', answer: 'Começamos entendendo sua necessidade e, quando necessário, realizamos um levantamento técnico para montar a recomendação e o escopo.' },
];

const Solutions: React.FC = () => (
  <>
    <PageHero
      eyebrow="Soluções"
      title="Tecnologia integrada para uma operação mais forte"
      description="Projetos e serviços que conectam pessoas, equipamentos e processos com estabilidade, segurança e espaço para crescer."
    />

    <section className="section solutions-page">
      <div className="site-container">
        <SectionHeading eyebrow="Portfólio Kollab" title="Escolha uma necessidade ou conecte toda a sua infraestrutura" align="center" />
        <div className="solution-detail-grid">
          {services.map(({ id, icon: Icon, title, description, items }) => (
            <article className="solution-detail-card" id={id} key={id}>
              <span className="icon-box"><Icon aria-hidden="true" /></span>
              <h2>{title}</h2>
              <p>{description}</p>
              <ul>{items.map((item) => <li key={item}><Check aria-hidden="true" /> {item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--soft faq-section">
      <div className="site-container faq-section__grid">
        <div>
          <span className="icon-box"><HelpCircle aria-hidden="true" /></span>
          <SectionHeading eyebrow="Dúvidas frequentes" title="Informação clara antes de qualquer decisão" description="Se sua dúvida não estiver aqui, fale com nosso time. Vamos ajudar a encontrar o melhor caminho." />
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </div>
    </section>
    <CallToAction title="Vamos desenhar a solução certa para o seu ambiente?" />
  </>
);

export default Solutions;
