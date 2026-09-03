import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <section className="not-found">
    <div className="site-container">
      <span>404</span>
      <h1>Esta página não foi encontrada.</h1>
      <p>O endereço pode ter mudado ou não estar mais disponível.</p>
      <Link className="site-button" to="/"><ArrowLeft size={18} aria-hidden="true" /> Voltar para o início</Link>
    </div>
  </section>
);

export default NotFound;
