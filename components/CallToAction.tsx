import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title?: string;
  description?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = 'Sua empresa está pronta para operar sem interrupções?',
  description = 'Converse com a Kollab e receba uma avaliação inicial para entender as prioridades da sua infraestrutura.',
}) => (
  <section className="cta-section">
    <div className="site-container cta-card">
      <div className="cta-card__mesh" />
      <div>
        <span className="brand-eyebrow"><span /> Próximo passo</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-card__actions">
        <a className="site-button" href="https://wa.me/5599991888485?text=Olá%2C%20gostaria%20de%20solicitar%20um%20diagnóstico%20de%20TI." target="_blank" rel="noreferrer">
          <MessageCircle size={19} aria-hidden="true" /> Falar no WhatsApp
        </a>
        <Link className="cta-text-link" to="/contato">Outras formas de contato <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </div>
  </section>
);

export default CallToAction;
