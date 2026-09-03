import React, { FormEvent, useState } from 'react';
import { CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { services } from '../data/services';

interface ContactState { service?: string }

const Contact: React.FC = () => {
  const location = useLocation();
  const initialService = (location.state as ContactState | null)?.service ?? '';
  const [form, setForm] = useState({ name: '', company: '', phone: '', service: initialService, message: '' });
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (field === 'name' || field === 'message') setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = {
      name: form.name.trim() ? undefined : 'Informe seu nome.',
      message: form.message.trim() ? undefined : 'Conte brevemente o que você precisa.',
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.message) return;

    const text = [
      'Olá, vim pelo site da Kollab Tecnologia.',
      `Nome: ${form.name}`,
      form.company && `Empresa: ${form.company}`,
      form.phone && `Telefone: ${form.phone}`,
      form.service && `Interesse: ${form.service}`,
      `Mensagem: ${form.message}`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/5599991888485?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre a sua infraestrutura?"
        description="Conte o que sua empresa precisa. Nosso time organiza as informações e ajuda você a definir o próximo passo."
      />

      <section className="section contact-page">
        <div className="site-container contact-grid">
          <aside>
            <span className="brand-eyebrow"><span /> Fale com a Kollab</span>
            <h2>Atendimento próximo, desde o primeiro contato</h2>
            <p>Escolha o canal mais conveniente ou envie os detalhes pelo formulário. A mensagem será preparada para o WhatsApp.</p>
            <div className="contact-cards">
              <a href="https://wa.me/5599991888485" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><div><span>WhatsApp</span><strong>(99) 99188-8485</strong></div></a>
              <a href="tel:+5599991888485"><Phone aria-hidden="true" /><div><span>Telefone</span><strong>(99) 99188-8485</strong></div></a>
              <a href="mailto:suporte@kollabtecnologia.com.br"><Mail aria-hidden="true" /><div><span>E-mail</span><strong>suporte@kollabtecnologia.com.br</strong></div></a>
              <div><MapPin aria-hidden="true" /><div><span>Endereço</span><strong>Sunil II — Açailândia, MA</strong></div></div>
              <div><Clock3 aria-hidden="true" /><div><span>Atendimento</span><strong>Consulte a disponibilidade do time</strong></div></div>
            </div>
          </aside>

          <div className="contact-form-card">
            <div className="contact-form-card__header"><span>Solicitar atendimento</span><h2>Como podemos ajudar?</h2><p>Preencha os campos abaixo. Você poderá revisar a mensagem antes de enviá-la.</p></div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label>Seu nome *<input value={form.name} onChange={(event) => updateField('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} placeholder="Como podemos chamar você?" />{errors.name && <small id="name-error">{errors.name}</small>}</label>
                <label>Empresa<input value={form.company} onChange={(event) => updateField('company', event.target.value)} placeholder="Nome da empresa" /></label>
              </div>
              <div className="form-row">
                <label>Telefone<input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} inputMode="tel" placeholder="(99) 99999-9999" /></label>
                <label>Assunto<select value={form.service} onChange={(event) => updateField('service', event.target.value)}><option value="">Selecione uma solução</option>{services.map((service) => <option key={service.id}>{service.title}</option>)}</select></label>
              </div>
              <label>Conte o que você precisa *<textarea rows={5} value={form.message} onChange={(event) => updateField('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} placeholder="Descreva sua necessidade, ambiente ou principal desafio." />{errors.message && <small id="message-error">{errors.message}</small>}</label>
              <button className="site-button" type="submit"><Send size={18} aria-hidden="true" /> Preparar mensagem no WhatsApp</button>
              {sent && <p className="form-success" role="status"><CheckCircle2 aria-hidden="true" /> Sua mensagem foi preparada em uma nova janela.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
