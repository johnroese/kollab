
import React from 'react';

const DifferentialItem: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#FF8C00] flex items-center justify-center text-[#FF8C00]">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-[#003366] mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Differentials: React.FC = () => {
  return (
    <div className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-base text-[#FF8C00] font-bold tracking-widest uppercase mb-3 text-left">Nossos Diferenciais</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-8 leading-tight">
              Por que escolher a Kollab para sua infraestrutura?
            </h3>
            
            <div className="space-y-10">
              <DifferentialItem 
                title="Atendimento Ágil"
                description="Tempo de resposta prioritário para chamados críticos, minimizando o downtime do seu negócio."
                icon={(
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              />
              <DifferentialItem 
                title="Materiais Premium"
                description="Utilizamos apenas componentes certificados e das melhores marcas do mercado (Furukawa, Cisco, Ubiquiti)."
                icon={(
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
              />
              <DifferentialItem 
                title="Garantia Técnica"
                description="Suporte pós-obra e garantia estendida em todos os nossos projetos de rede e cabeamento."
                icon={(
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )}
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-[#FF8C00] opacity-10 blur-2xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop" 
              alt="Infraestrutura Profissional" 
              className="relative rounded-2xl shadow-2xl z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#003366] p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <span className="text-white text-5xl font-bold block mb-1">15+</span>
              <span className="text-gray-300 text-sm font-semibold uppercase tracking-wider">Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differentials;
