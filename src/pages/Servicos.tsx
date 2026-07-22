import { CONTACT_INFO, getWhatsAppLink, SERVICE_MESSAGES } from '../utils/contact';
import { HeartPulse, ShieldCheck, Activity, UserCheck } from 'lucide-react';

export const Servicos = () => {
  const servicos = [
    { 
      key: "idosos", 
      title: "Treino para Idosos 50+ & Longevidade", 
      indicacao: "Pessoas 50+ buscando saúde, mobilidade, força e autonomia", 
      desc: `Programa exclusivo focado na longevidade e fortalecimento muscular seguro para a melhor idade. Exercícios personalizados para preservação de massa magra, saúde articular, equilíbrio e independência no dia a dia em ${CONTACT_INFO.location}.` 
    },
    { 
      key: "presencial", 
      title: "Personal Presencial", 
      indicacao: "Iniciantes ou avançados que precisam de correção máxima", 
      desc: `Acompanhamento individual durante toda a sessão de treino com correção técnica extrema. Atendimento presencial em ${CONTACT_INFO.location}.` 
    },
    { 
      key: "dupla", 
      title: "Treino em Dupla", 
      indicacao: "Casais ou amigos com objetivos similares", 
      desc: `Treinamento personalizado para duas pessoas com objetivos alinhados em ${CONTACT_INFO.location}.` 
    },
    { 
      key: "preparacao", 
      title: "Preparação Física", 
      indicacao: "Atletas amadores ou profissionais", 
      desc: "Treinamentos direcionados para força, resistência e desempenho atlético." 
    },
    { 
      key: "consultoria", 
      title: "Consultoria Online", 
      indicacao: "Pessoas com experiência prévia e disciplina", 
      desc: "Planejamento personalizado com acompanhamento à distância e suporte diário." 
    },
    { 
      key: "avaliacao", 
      title: "Avaliação Física", 
      indicacao: "Quem deseja mapear seu estado atual", 
      desc: "Análise inicial e criação de uma estratégia de treino altamente detalhada." 
    },
    { 
      key: "postural", 
      title: "Correção Postural", 
      indicacao: "Pessoas com dores ou desvios de postura", 
      desc: "Foco no fortalecimento de base e melhora técnica dos padrões de movimento." 
    }
  ];

  return (
    <div className="py-24 container mx-auto px-6">
      
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-heading text-brand-white uppercase mb-4">
          Serviços <span className="text-brand-yellow">Premium</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Atendimento presencial em {CONTACT_INFO.location} e consultoria online.
        </p>
      </div>

      {/* COMPONENTE DE DESTAQUE: TREINO PARA IDOSOS 50+ */}
      <div className="mb-20 bg-gradient-to-br from-[#161616] via-[#111111] to-[#0a0a0a] border-2 border-brand-yellow/50 p-8 md:p-14 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-2/3">
            <span className="bg-brand-yellow text-black font-bold uppercase text-xs px-3 py-1 tracking-widest inline-block mb-3">
              Destaque Especial
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-brand-white uppercase mb-4">
              Treino para Idosos 50+ & Longevidade
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              O envelhecimento ativo e saudável exige um olhar atento e metodológico. Desenvolvo um programa de treinamento personalizado para a população 50+, combinando biomecânica segura, ganho de força funcional e cuidado individualizado.
            </p>

            {/* Pilares do Treino 50+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-black/50 p-4 border border-brand-gray/20 rounded-sm">
                <HeartPulse className="text-brand-yellow shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white text-sm">Saúde Articular & Óssea</h4>
                  <p className="text-xs text-gray-400">Prevenção contra osteopenia e alívio de dores nas articulações.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black/50 p-4 border border-brand-gray/20 rounded-sm">
                <ShieldCheck className="text-brand-yellow shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white text-sm">Equilíbrio & Prevenção de Quedas</h4>
                  <p className="text-xs text-gray-400">Treinamento de propriocepção e estabilidade postural no cotidiano.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black/50 p-4 border border-brand-gray/20 rounded-sm">
                <Activity className="text-brand-yellow shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white text-sm">Massa Magra & Autonomia</h4>
                  <p className="text-xs text-gray-400">Combate à sarcopenia para manter a força e independência física.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black/50 p-4 border border-brand-gray/20 rounded-sm">
                <UserCheck className="text-brand-yellow shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white text-sm">Adaptação Individual de Carga</h4>
                  <p className="text-xs text-gray-400">Respeito rigoroso aos limites e necessidades de cada aluno.</p>
                </div>
              </div>
            </div>

            <a 
              href={getWhatsAppLink(SERVICE_MESSAGES.idosos)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-brand-yellow text-black font-bold uppercase px-8 py-4 hover:bg-brand-yellowLight transition-colors text-sm tracking-widest shadow-lg"
            >
              Agendar Avaliação para Idosos 50+
            </a>
          </div>

          <div className="lg:w-1/3 flex justify-center">
            <div className="w-full h-72 md:h-96 rounded-sm overflow-hidden border border-brand-yellow/30 bg-[#161616] p-2 flex flex-col justify-center items-center text-center">
              <span className="text-6xl font-heading text-brand-yellow mb-2">50+</span>
              <h3 className="font-heading text-2xl uppercase text-white mb-2">Longevidade Ativa</h3>
              <p className="text-xs text-gray-400 px-4">
                "Cuidar do seu corpo hoje é garantir autonomia, vitalidade e alegria para os próximos anos."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LISTA COMPLETA DE SERVIÇOS */}
      <div className="space-y-12">
        <h3 className="text-3xl font-heading text-brand-white uppercase text-center mb-8">
          Todos os Serviços Atendidos
        </h3>
        {servicos.map((servico, i) => (
          <div key={i} className="bg-[#111111] border border-brand-gray/20 p-8 md:p-12 lg:w-3/4 mx-auto hover:border-brand-yellow/30 transition-colors">
            <h2 className="text-3xl font-heading text-brand-white uppercase mb-4">{servico.title}</h2>
            <div className="mb-4">
              <span className="bg-brand-yellow/10 text-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                Indicado para: {servico.indicacao}
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-8">{servico.desc}</p>
            <p className="text-sm text-gray-500 italic mb-6">Valores e disponibilidade sob consulta.</p>
            <a 
              href={getWhatsAppLink(SERVICE_MESSAGES[servico.key] || SERVICE_MESSAGES.default)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-transparent border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black font-bold uppercase px-8 py-3 transition-colors text-sm tracking-widest"
            >
              Solicitar Informações via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
