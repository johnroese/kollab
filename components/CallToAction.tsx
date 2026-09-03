import React from 'react';
import { ArrowRight } from 'lucide-react';
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
        <Link className="site-button" to="/contato">Solicitar uma avaliação <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </div>
  </section>
);

export default CallToAction;
