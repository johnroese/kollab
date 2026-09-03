
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import DocumentMeta from './components/DocumentMeta';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <DocumentMeta />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/empresa" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
