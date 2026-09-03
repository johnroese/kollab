import React from 'react';
import { Camera, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="site-container">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <div className="site-footer__logo-wrap"><img src="/brand/kollab-logo.png" alt="Kollab Tecnologia" /></div>
          <p>Infraestrutura, conectividade e suporte de TI para empresas que querem crescer com segurança e continuidade.</p>
          <a className="social-link" href="https://www.instagram.com/kollabtecnologia/" target="_blank" rel="noreferrer" aria-label="Instagram da Kollab Tecnologia">
            <Camera size={20} aria-hidden="true" />
          </a>
        </div>

        <div>
          <h2>Navegação</h2>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/solucoes">Soluções</Link></li>
            <li><Link to="/empresa">Empresa</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h2>Soluções</h2>
          <ul>
            <li><Link to="/solucoes#cabeamento">Cabeamento estruturado</Link></li>
            <li><Link to="/solucoes#wifi">Wi-Fi corporativo</Link></li>
            <li><Link to="/solucoes#suporte">Suporte técnico</Link></li>
            <li><Link to="/solucoes#monitoramento">CFTV e monitoramento</Link></li>
          </ul>
        </div>

        <div>
          <h2>Fale com a Kollab</h2>
          <ul className="contact-list">
            <li><MapPin aria-hidden="true" /><span>Rua Tancredo Neves, 06, Q. 10<br />Sunil II — Açailândia, MA</span></li>
            <li><Phone aria-hidden="true" /><a href="tel:+5599991888485">(99) 99188-8485</a></li>
            <li><Mail aria-hidden="true" /><a href="mailto:suporte@kollabtecnologia.com.br">suporte@kollabtecnologia.com.br</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Kollab Tecnologia. Todos os direitos reservados.</p>
        <p>Conectando tecnologia e negócios.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
