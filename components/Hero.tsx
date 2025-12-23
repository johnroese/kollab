
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-[#FF8C00] px-4 py-1 rounded-md mb-6 font-bold text-sm uppercase tracking-wider">
            Tecnologia de Ponta
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Conexão estável para negócios que <span className="text-[#FF8C00]">não param.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            Especialistas em infraestrutura de rede, cabeamento estruturado e suporte técnico 24/7. 
            Garantimos a performance que sua empresa precisa para crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FF8C00] hover:bg-[#e67e00] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:translate-y-[-2px]">
              Abrir Chamado
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
