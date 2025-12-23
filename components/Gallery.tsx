
import React from 'react';

const Gallery: React.FC = () => {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1506399309177-3b43e99fead2?q=80&w=600&auto=format&fit=crop', title: 'Data Center' },
    { src: 'https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?q=80&w=600&auto=format&fit=crop', title: 'Cabeamento Estruturado' },
    { src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop', title: 'Gerenciamento de Rede' },
    { src: 'https://images.unsplash.com/photo-1531765408077-9a1f85f90df1?q=80&w=600&auto=format&fit=crop', title: 'Instalação de Hotspots Wi-Fi' },
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-base text-[#FF8C00] font-bold tracking-widest uppercase mb-3">Nossos Projetos</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#003366]">Excelência em cada detalhe</h3>
          </div>
          <button className="text-[#003366] font-bold border-b-2 border-[#FF8C00] pb-1 hover:text-[#FF8C00] transition-colors">
            Ver galeria completa
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <img 
                src={photo.src} 
                alt={photo.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
