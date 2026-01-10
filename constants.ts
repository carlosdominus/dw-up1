
import { PageData } from './types';

export const UPSELL_DATA = {
  instructor: "Lara Silveira",
  title: "OPORTUNIDADE ÚNICA",
  titleHighlight: "CONSULTA INDIVIDUAL",
  subtitle: "Você foi selecionado como o homem da semana para algo exclusivo.",
  oldPrice: "R$ 147,00",
  newPrice: "R$ 97,00",
  dailyPrice: "R$ 3,23",
  checkoutUrl: "https://www.google.com",
  guaranteeDays: 30,
  benefitsList: [
    { title: "Consulta Individual", desc: "Sessão exclusiva para ajuste de dosagem e tirar dúvidas.", price: "R$ 250", icon: "👩‍⚕️" },
    { title: "Grupo VIP WhatsApp", desc: "30 dias de acesso direto a mim e dicas exclusivas.", price: "R$ 197", icon: "💬" },
    { title: "Suporte Prioritário", desc: "Suas perguntas respondidas na frente de todos os outros.", price: "R$ 97", icon: "🚀" },
    { title: "Guia de Potência Máxima", desc: "Estratégias avançadas para resultados duradouros.", price: "R$ 47", icon: "💎" }
  ]
};

// Mantendo para compatibilidade
export const DOWNSELL_DATA = UPSELL_DATA;

export const COMMON_DATA: PageData = {
  title: "CONSULTA INDIVIDUAL",
  subtitle: "30 dias de acesso direto à Dra. Lara.",
  oldPrice: "R$ 147,00",
  newPrice: "R$ 97,00",
  ctaText: "QUERO MINHA VAGA AGORA",
  alertText: "🚨 Vaga única para o homem da semana!",
  benefits: [],
  bonusList: [],
  guaranteeDays: 30,
  checkoutUrl: "https://www.google.com"
};
