import type { LucideIcon } from 'lucide-react';
import { ClipboardCheck, Headphones, Network, ShieldCheck, Video, Wifi } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'cabeamento',
    title: 'Cabeamento estruturado',
    shortDescription: 'Projetos organizados e preparados para acompanhar o crescimento da sua operação.',
    description: 'Planejamento, instalação e organização da infraestrutura física de rede, seguindo boas práticas para facilitar manutenção e expansão.',
    items: ['Cabeamento Cat5e, Cat6 e fibra óptica', 'Organização e identificação de racks', 'Certificação e documentação de pontos'],
    icon: Network,
  },
  {
    id: 'wifi',
    title: 'Wi-Fi corporativo',
    shortDescription: 'Cobertura estável, segura e dimensionada para a rotina real do seu ambiente.',
    description: 'Projetos de conectividade sem fio com análise do espaço, posicionamento de equipamentos e configuração voltada à estabilidade.',
    items: ['Mapeamento de cobertura e interferência', 'Redes separadas para equipe e visitantes', 'Roaming e gestão centralizada'],
    icon: Wifi,
  },
  {
    id: 'suporte',
    title: 'Suporte e manutenção',
    shortDescription: 'Atendimento preventivo e corretivo para reduzir paradas e recuperar a produtividade.',
    description: 'Suporte técnico para estações, servidores, periféricos e rede, com acompanhamento próximo e linguagem simples.',
    items: ['Atendimento remoto e presencial', 'Manutenção preventiva e corretiva', 'Acompanhamento de ambiente e ativos'],
    icon: Headphones,
  },
  {
    id: 'monitoramento',
    title: 'CFTV e monitoramento',
    shortDescription: 'Visibilidade e proteção para áreas críticas, equipes e patrimônio.',
    description: 'Soluções de monitoramento por câmeras integradas à infraestrutura da empresa, com acesso organizado e configuração segura.',
    items: ['Projeto e instalação de câmeras IP', 'Gravação e acesso remoto', 'Organização da rede de monitoramento'],
    icon: Video,
  },
  {
    id: 'seguranca',
    title: 'Segurança de rede',
    shortDescription: 'Controles essenciais para proteger acessos, informações e continuidade operacional.',
    description: 'Boas práticas e configurações que reduzem exposição, organizam acessos e fortalecem a infraestrutura da empresa.',
    items: ['Segmentação e controle de acessos', 'Firewall, rotinas de backup e proteção', 'Orientação e revisão do ambiente'],
    icon: ShieldCheck,
  },
  {
    id: 'consultoria',
    title: 'Projetos e consultoria',
    shortDescription: 'Decisões de tecnologia alinhadas às prioridades e ao orçamento do negócio.',
    description: 'Diagnóstico do ambiente, plano de melhorias e acompanhamento técnico para implantações, expansões e modernização.',
    items: ['Levantamento técnico do ambiente', 'Plano de ação por prioridades', 'Acompanhamento de implantação'],
    icon: ClipboardCheck,
  },
];
