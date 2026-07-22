import { useState } from 'react';
import { CONTACT_INFO, getWhatsAppLink, SERVICE_MESSAGES } from '../utils/contact';
import { HeartPulse, ShieldCheck, Activity, UserCheck, Play, X, Image as ImageIcon, Video, CheckCircle2, MessageSquare } from 'lucide-react';

export const TreinoIdosos = () => {
  const [activeMediaModal, setActiveMediaModal] = useState<{ type: 'image' | 'video'; src: string; title: string } | null>(null);

  // Lista de Fotos para a Galeria 50+
  const fotosIdosos = [
    { title: "Fortalecimento e Mobilidade Articular", desc: "Exercícios seguros para preservação da saúde dos joelhos e coluna.", src: "/logo.jpeg" },
    { title: "Treino de Equilíbrio & Propriocepção", desc: "Prevenção ativa de quedas e ganho de estabilidade diária.", src: "/logo-final.png" },
    { title: "Fortalecimento de Massa Magra 50+", desc: "Combate à sarcopenia com adaptação de cargas anatômicas.", src: "/logo.jpeg" },
    { title: "Acompanhamento Individual Atencioso", desc: "Correção postura contínua e atenção total a cada movimento.", src: "/logo-final.png" }
  ];

  // Lista de Vídeos para a Seção de Vídeos 50+
  const videosIdosos = [
    { title: "Demonstração de Exercício de Equilíbrio", desc: "Treinamento funcional focado na prevenção de quedas para 50+.", videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumb: "/logo-final.png" },
    { title: "Fortalecimento Seguro de Membros Inferiores", desc: "Execução controlada para proteção articular de joelhos e quadril.", videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumb: "/logo.jpeg" }
  ];

  return (
    <div className="py-24 container mx-auto px-6">
      
      {/* HERO SECTION DEDICADA 50+ */}
      <section className="mb-20 bg-gradient-to-br from-[#181818] via-[#111111] to-[#0a0a0a] border-2 border-brand-yellow/50 p-8 md:p-16 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-brand-yellow text-black font-bold uppercase text-xs px-3 py-1 tracking-widest rounded-sm">
                Destaque Especial
              </span>
              <span className="bg-black/60 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold px-3 py-1 uppercase tracking-widest rounded-sm">
                Longevidade & Saúde 50+
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading text-brand-white uppercase mb-6 leading-tight">
              Treino para Idosos <span className="text-brand-yellow">50+ & Longevidade</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              O envelhecimento ativo e saudável exige um olhar atento e metodológico. Desenvolvo um programa de treinamento personalizado para a população 50+, combinando biomecânica segura, ganho de força funcional e cuidado individualizado em {CONTACT_INFO.location}.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href={getWhatsAppLink(SERVICE_MESSAGES.idosos || SERVICE_MESSAGES.default)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto text-center bg-brand-yellow text-black font-bold uppercase px-8 py-4 hover:bg-brand-yellowLight transition-colors text-sm tracking-widest shadow-xl rounded-sm"
              >
                Agendar Avaliação para Idosos 50+
              </a>

              <a 
                href="#galeria-midia" 
                className="w-full sm:w-auto text-center bg-transparent border border-brand-gray/40 text-gray-300 hover:border-brand-yellow hover:text-brand-yellow font-bold uppercase px-8 py-4 transition-colors text-sm tracking-widest rounded-sm"
              >
                Ver Fotos & Vídeos
              </a>
            </div>
          </div>

          {/* Destaque 50+ Badge Card */}
          <div className="lg:w-1/3 flex justify-center w-full">
            <div className="w-full h-80 rounded-sm border-2 border-brand-yellow/40 bg-[#161616] p-8 flex flex-col justify-center items-center text-center shadow-2xl relative">
              <span className="text-7xl font-heading text-brand-yellow mb-2">50+</span>
              <h3 className="font-heading text-2xl uppercase text-white mb-2">Longevidade Ativa</h3>
              <p className="text-sm text-gray-300 italic">
                "Cuidar do seu corpo hoje é garantir autonomia, vitalidade e alegria para os próximos anos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OS 4 PILARES DO TREINAMENTO 50+ */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-brand-white uppercase mb-4">
            Pilares do <span className="text-brand-yellow">Treinamento 50+</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Metodologia adaptada com foco na preservação física, segurança articular e independência rotineira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#111111] border border-brand-gray/20 p-8 hover:border-brand-yellow/40 transition-all rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-2xl font-heading text-brand-white uppercase mb-3">Saúde Articular & Óssea</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exercícios direcionados para fortalecer os músculos estabilizadores da coluna, quadril e joelhos, combatendo a osteopenia e reduzindo dores articulares recorrentes.
            </p>
          </div>

          <div className="bg-[#111111] border border-brand-gray/20 p-8 hover:border-brand-yellow/40 transition-all rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-heading text-brand-white uppercase mb-3">Equilíbrio & Prevenção de Quedas</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Treinamento específico de estabilidade postural e resposta reflexa, garantindo mais firmeza e segurança nos passos do dia a dia.
            </p>
          </div>

          <div className="bg-[#111111] border border-brand-gray/20 p-8 hover:border-brand-yellow/40 transition-all rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
              <Activity size={28} />
            </div>
            <h3 className="text-2xl font-heading text-brand-white uppercase mb-3">Massa Magra & Autonomia</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Combate à sarcopenia (perda natural de massa muscular), restaurando a energia necessária para subir escadas, carregar compras e realizar atividades com independência.
            </p>
          </div>

          <div className="bg-[#111111] border border-brand-gray/20 p-8 hover:border-brand-yellow/40 transition-all rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
              <UserCheck size={28} />
            </div>
            <h3 className="text-2xl font-heading text-brand-white uppercase mb-3">Adaptação Individual de Carga</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Progressão de carga calculada com precisão. Respeito rigoroso ao histórico médico, patologias preexistentes e ritmo de recuperação de cada aluno.
            </p>
          </div>

        </div>
      </section>

      {/* SEÇÃO GALERIA DE FOTOS 50+ */}
      <section id="galeria-midia" className="mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-1">
              <ImageIcon size={16} /> Galeria de Fotos
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-brand-white uppercase">
              Registros dos <span className="text-brand-yellow">Treinos 50+</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Confira como funcionam os atendimentos práticos e a atenção dedicada durante as sessões presenciais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fotosIdosos.map((foto, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveMediaModal({ type: 'image', src: foto.src, title: foto.title })}
              className="bg-[#111111] border border-brand-gray/20 rounded-sm overflow-hidden group cursor-pointer hover:border-brand-yellow/50 transition-all"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={foto.src} alt={foto.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="bg-brand-yellow text-black font-bold text-xs px-3 py-1 uppercase tracking-wider rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">Ampliar Foto</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white text-sm mb-1">{foto.title}</h4>
                <p className="text-xs text-gray-400">{foto.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO DEMONSTRAÇÕES EM VÍDEO 50+ */}
      <section className="mb-24 bg-[#111111] border border-brand-gray/20 p-8 md:p-12 rounded-sm">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-1">
            <Video size={16} /> Demonstrações em Vídeo
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-brand-white uppercase mb-2">
            Vídeos & Bastidores das Aulas 50+
          </h2>
          <p className="text-gray-400 text-sm">
            Assista à aplicação prática das técnicas de mobilidade e exercícios educativos para idosos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videosIdosos.map((video, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveMediaModal({ type: 'video', src: video.videoSrc, title: video.title })}
              className="relative aspect-video rounded-sm overflow-hidden border border-brand-yellow/30 group cursor-pointer bg-black shadow-xl"
            >
              <img src={video.thumb} alt={video.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-brand-yellow text-black flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={28} className="ml-1 fill-black" />
                </div>
                <div className="text-center px-4">
                  <span className="text-xs font-bold text-brand-white bg-black/80 px-3 py-1 rounded-sm border border-brand-yellow/30 block mb-1">
                    {video.title}
                  </span>
                  <span className="text-[11px] text-gray-300 block">{video.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS E BENEFÍCIOS REAIS */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-white uppercase mb-6">
            Por que investir no <span className="text-brand-yellow">Treino 50+</span> com Personal Trainer?
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20} />
              <p className="text-gray-300 text-sm"><strong className="text-white">Acompanhamento Exclusivo:</strong> Atenção total em cada repetição para evitar lesões.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20} />
              <p className="text-gray-300 text-sm"><strong className="text-white">Respeito a Condições Médicas:</strong> Programa adaptado para quem tem artrose, hipertensão, diabetes ou hérnia de disco.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20} />
              <p className="text-gray-300 text-sm"><strong className="text-white">Melhora do Sono e Disposição:</strong> Estímulo metabólico natural que renova a vitalidade diária.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20} />
              <p className="text-gray-300 text-sm"><strong className="text-white">Conforto de Localidade:</strong> Atendimento presencial direto em {CONTACT_INFO.location}.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#111111] border border-brand-yellow/40 p-8 rounded-sm text-center">
          <MessageSquare className="text-brand-yellow mx-auto mb-4" size={40} />
          <h3 className="text-2xl font-heading text-brand-white uppercase mb-2">Deseja Agendar para um Familiar?</h3>
          <p className="text-gray-400 text-xs mb-6">
            Você pode agendar uma primeira avaliação presencial ou conversa sem compromisso para pais ou familiares 50+.
          </p>
          <a 
            href={getWhatsAppLink(SERVICE_MESSAGES.idosos || SERVICE_MESSAGES.default)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-brand-yellow text-black font-bold uppercase px-6 py-3 hover:bg-brand-yellowLight transition-colors text-xs tracking-widest rounded-sm w-full"
          >
            Falar no WhatsApp Sobre 50+
          </a>
        </div>
      </section>

      {/* MEDIA MODAL CONTAINER */}
      {activeMediaModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={() => setActiveMediaModal(null)}
            className="absolute top-6 right-6 text-white hover:text-brand-yellow text-3xl focus:outline-none"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-4xl w-full flex flex-col items-center justify-center">
            {activeMediaModal.type === 'image' ? (
              <div className="bg-[#161616] p-3 rounded-sm border border-brand-yellow/40 max-w-3xl">
                <img src={activeMediaModal.src} alt={activeMediaModal.title} className="max-h-[75vh] w-auto object-contain" />
                <p className="text-center text-white text-sm font-bold mt-3">{activeMediaModal.title}</p>
              </div>
            ) : (
              <div className="w-full aspect-video rounded-sm overflow-hidden border border-brand-yellow/40 bg-black">
                <iframe 
                  src={`${activeMediaModal.src}?autoplay=1`} 
                  title={activeMediaModal.title} 
                  className="w-full h-full border-0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
