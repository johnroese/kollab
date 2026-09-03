import React, { useEffect, useState } from 'react';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navigation = [
  { label: 'Início', to: '/' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Empresa', to: '/empresa' },
  { label: 'Contato', to: '/contato' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="utility-bar">
        <div className="site-container utility-bar__inner">
          <span><MapPin size={14} aria-hidden="true" /> Açailândia — MA</span>
          <a href="tel:+5599991888485"><Phone size={14} aria-hidden="true" /> (99) 99188-8485</a>
        </div>
      </div>
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="site-container site-header__inner">
          <Link className="site-logo" to="/" aria-label="Kollab Tecnologia — início">
            <img src="/brand/kollab-logo.png" alt="Kollab Tecnologia" />
          </Link>

          <nav className="site-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="site-menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div id="mobile-menu" className={`site-mobile-nav ${isMenuOpen ? 'site-mobile-nav--open' : ''}`} aria-hidden={!isMenuOpen} inert={!isMenuOpen ? true : undefined}>
          <nav className="site-mobile-nav__inner" aria-label="Navegação mobile">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>
            ))}
          </nav>
        </div>
      </header>
      {isMenuOpen && <button className="menu-backdrop" type="button" aria-label="Fechar menu" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;
