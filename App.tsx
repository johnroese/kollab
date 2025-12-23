
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="diferenciais">
          <Differentials />
        </section>
        <section id="projetos">
          <Gallery />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
