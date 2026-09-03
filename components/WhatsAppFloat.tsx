import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => (
  <a
    className="whatsapp-float"
    href="https://wa.me/5599991888485?text=Olá%2C%20vim%20pelo%20site%20da%20Kollab%20Tecnologia%20e%20gostaria%20de%20mais%20informações."
    target="_blank"
    rel="noreferrer"
    aria-label="Conversar com a Kollab Tecnologia pelo WhatsApp"
  >
    <MessageCircle aria-hidden="true" />
    <span>Fale conosco</span>
  </a>
);

export default WhatsAppFloat;
