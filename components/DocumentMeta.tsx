import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Kollab Tecnologia | Conectando tecnologia e negócios',
    description: 'Infraestrutura de TI, redes corporativas, cabeamento estruturado e suporte técnico para empresas em Açailândia e região.',
  },
  '/solucoes': {
    title: 'Soluções de TI | Kollab Tecnologia',
    description: 'Cabeamento estruturado, Wi-Fi corporativo, suporte técnico, segurança de rede, CFTV e consultoria para empresas.',
  },
  '/empresa': {
    title: 'Sobre a Kollab | Tecnologia próxima e confiável',
    description: 'Conheça a Kollab Tecnologia e nossa forma de conectar infraestrutura, pessoas e negócios.',
  },
  '/contato': {
    title: 'Fale com a Kollab Tecnologia',
    description: 'Converse com a Kollab sobre infraestrutura, conectividade, segurança e suporte de TI para sua empresa.',
  },
};

const setMeta = (selector: string, value: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value);
};

const siteOrigin = 'https://kollab-tecnologia.jhonroese.chatgpt.site';

const DocumentMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pages[pathname] ?? {
      title: 'Página não encontrada | Kollab Tecnologia',
      description: 'A página solicitada não foi encontrada.',
    };
    document.title = metadata.title;
    setMeta('meta[name="description"]', metadata.description);
    setMeta('meta[property="og:title"]', metadata.title);
    setMeta('meta[property="og:description"]', metadata.description);
    setMeta('meta[property="og:url"]', `${siteOrigin}${pathname === '/' ? '/' : pathname}`);
    setMeta('meta[name="twitter:title"]', metadata.title);
    setMeta('meta[name="twitter:description"]', metadata.description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', `${siteOrigin}${pathname === '/' ? '/' : pathname}`);
  }, [pathname]);

  return null;
};

export default DocumentMeta;
