export const CONTACT_INFO = {
  phoneDisplay: '(603) 438-3419',
  phoneRaw: '16034383419',
  phoneTel: '+16034383419',
  email: 'cleiton.cjs1987@gmail.com',
  location: 'Riverview, FL e Região',
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
};

export const SERVICE_MESSAGES: Record<string, string> = {
  default: 'Olá, Cleiton! Vim pelo site e gostaria de saber mais sobre o atendimento de personal trainer.',
  general: 'Olá, Cleiton! Gostaria de agendar uma conversa sobre o treinamento personalizado em Riverview FL e Região.',
  presencial: 'Olá, Cleiton! Gostaria de solicitar informações e valores sobre o Personal Presencial em Riverview FL e Região.',
  dupla: 'Olá, Cleiton! Gostaria de solicitar informações sobre o Treino em Dupla em Riverview FL e Região.',
  preparacao: 'Olá, Cleiton! Gostaria de saber mais sobre a Preparação Física.',
  consultoria: 'Olá, Cleiton! Gostaria de solicitar informações sobre a Consultoria Online.',
  avaliacao: 'Olá, Cleiton! Gostaria de agendar uma Avaliação Física.',
  postural: 'Olá, Cleiton! Gostaria de informações sobre o trabalho de Correção Postural.',
};
