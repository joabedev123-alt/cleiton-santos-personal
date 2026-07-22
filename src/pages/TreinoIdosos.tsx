import { useState } from 'react';
import { CONTACT_INFO, getWhatsAppLink, SERVICE_MESSAGES } from '../utils/contact';
import { HeartPulse, ShieldCheck, Activity, UserCheck, Play, X, Image as ImageIcon, Video, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const TreinoIdosos = () => {
  const [activeMediaModal, setActiveMediaModal] = useState<{ type: 'image' | 'video'; src: string; title: string } | null>(null);

  // Lista Completa de Fotos Reais da Pasta cleiton001
  const fotosIdosos = [
    { 
      title: "Fortalecimento & Saúde Articular", 
      desc: "Exercícios seguros focados na preservação das articulações e joelhos.", 
      src: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.55.jpeg" 
    },
    { 
      title: "Treino de Equilíbrio & Estabilidade", 
      desc: "Treinamento proprioceptivo para prevenção ativa de quedas.", 
      src: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.54 (1).jpeg" 
    },
    { 
      title: "Manutenção de Massa Magra 50+", 
      desc: "Combate à sarcopenia com carga adaptada às necessidades individuais.", 
      src: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.54.jpeg" 
    },
    { 
      title: "Acompanhamento Individualizado", 
      desc: "Atenção total à correção técnica e amplitude anatômica.", 
      src: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.25.55.jpeg" 
    },
    { 
      title: "Postura & Alinhamento Corporal", 
      desc: "Fortalecimento da musculatura do tronco e alívio de dores lombares.", 
      src: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.26.20.jpeg" 
    },
    { 
      title: "Condicionamento & Vitalidade", 
      desc: "Estímulo cardiovascular leve para mais disposição diária.", 
      src: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.26.26.jpeg" 
    },
    { 
      title: "Treino Presencial em Riverview FL", 
      desc: "Atendimento exclusivo e seguro direto na sua região.", 
      src: "/images/cleiton001/WhatsApp Image 2026-07-17 at 11.12.24 (1).jpeg" 
    },
    { 
      title: "Evolução & Longevidade Ativa", 
      desc: "Resultados reais para uma rotina independente e saudável.", 
      src: "/images/cleiton001/WhatsApp Image 2026-07-17 at 11.12.24.jpeg" 
    }
  ];

  // Lista Completa de TODOS os 17 Vídeos Reais da Pasta cleiton 001
  const videosIdosos = [
    { 
      id: 1, 
      title: "Treino Funcional 01 - Estabilidade & Postura", 
      desc: "Exercícios práticos de postura e estabilidade funcional.", 
      videoSrc: "/videos/v1.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.55.jpeg" 
    },
    { 
      id: 2, 
      title: "Treino Funcional 02 - Mobilidade Articular", 
      desc: "Execução orientada para preservação de quadril e joelhos.", 
      videoSrc: "/videos/v2.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.54 (1).jpeg" 
    },
    { 
      id: 3, 
      title: "Treino Funcional 03 - Prevenção de Dores Lombares", 
      desc: "Técnicas educativas focadas no alívio de dores nas costas.", 
      videoSrc: "/videos/v3.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.25.55.jpeg" 
    },
    { 
      id: 4, 
      title: "Treino Funcional 04 - Fortalecimento Muscular", 
      desc: "Estímulo controlado de força funcional.", 
      videoSrc: "/videos/v4.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.26.26.jpeg" 
    },
    { 
      id: 5, 
      title: "Treino Funcional 05 - Equilíbrio Corporal", 
      desc: "Trabalho proprioceptivo de prevenção de quedas.", 
      videoSrc: "/videos/v5.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.26.20.jpeg" 
    },
    { 
      id: 6, 
      title: "Treino Funcional 06 - Mobilidade de Tronco", 
      desc: "Movimentos adaptados para ganho de flexibilidade.", 
      videoSrc: "/videos/v6.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-17 at 11.12.24 (1).jpeg" 
    },
    { 
      id: 7, 
      title: "Treino Funcional 07 - Fortalecimento de Membros", 
      desc: "Recuperação de massa muscular e independência.", 
      videoSrc: "/videos/v7.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.54.jpeg" 
    },
    { 
      id: 8, 
      title: "Treino Funcional 08 - Correção Postural", 
      desc: "Alinhamento das articulações e marcha.", 
      videoSrc: "/videos/v8.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-17 at 11.12.24.jpeg" 
    },
    { 
      id: 9, 
      title: "Treino Funcional 09 - Vitalidade & Disposição", 
      desc: "Estímulo metabólico seguro para o dia a dia.", 
      videoSrc: "/videos/v9.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.55.jpeg" 
    },
    { 
      id: 10, 
      title: "Treino Funcional 10 - Amplitude de Movimento", 
      desc: "Exercícios com apoio e acompanhamento individual.", 
      videoSrc: "/videos/v10.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.54 (1).jpeg" 
    },
    { 
      id: 11, 
      title: "Treino Funcional 11 - Controle Biomecânico", 
      desc: "Adaptação precisa de carga e ritmo.", 
      videoSrc: "/videos/v11.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.25.55.jpeg" 
    },
    { 
      id: 12, 
      title: "Treino Funcional 12 - Equilíbrio Avançado", 
      desc: "Foco na prevenção de perdas de estabilidade.", 
      videoSrc: "/videos/v12.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.26.26.jpeg" 
    },
    { 
      id: 13, 
      title: "Treino Funcional 13 - Fortalecimento de Joelho", 
      desc: "Preservação da cartilagem e cartilagem articular.", 
      videoSrc: "/videos/v13.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.26.20.jpeg" 
    },
    { 
      id: 14, 
      title: "Treino Funcional 14 - Resposta Reflexa", 
      desc: "Exercícios dinâmicos de coordenação.", 
      videoSrc: "/videos/v14.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-17 at 11.12.24 (1).jpeg" 
    },
    { 
      id: 15, 
      title: "Treino Funcional 15 - Autonomia & Caminhada", 
      desc: "Melhora da caminhada diária e rotina física.", 
      videoSrc: "/videos/v15.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.54.jpeg" 
    },
    { 
      id: 16, 
      title: "Treino Funcional 16 - Acompanhamento Presencial", 
      desc: "Sessão individualizada ministrada em Riverview FL.", 
      videoSrc: "/videos/v16.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-17 at 11.12.24.jpeg" 
    },
    { 
      id: 17, 
      title: "Treino Funcional 17 - Longevidade Ativa", 
      desc: "Resultado final de vitalidade e bem-estar constante.", 
      videoSrc: "/videos/v17.mp4", 
      thumb: "/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.55.jpeg" 
    }
  ];

  return (
    <div className="py-20 md:py-24 container mx-auto px-4 sm:px-6">
      
      {/* 1. HERO SECTION DEDICADA 50+ COM FOTO REAL */}
      <section className="mb-20 bg-gradient-to-br from-[#181818] via-[#111111] to-[#0a0a0a] border-2 border-brand-yellow/50 p-6 sm:p-10 md:p-16 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="lg:w-7/12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-brand-yellow text-black font-bold uppercase text-xs px-3 py-1 tracking-widest rounded-sm flex items-center gap-1.5">
                <Sparkles size={14} /> Destaque Especial
              </span>
              <span className="bg-black/70 border border-brand-yellow/40 text-brand-yellow text-xs font-semibold px-3 py-1 uppercase tracking-widest rounded-sm">
                Longevidade & Saúde 50+
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-brand-white uppercase mb-6 leading-tight">
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
                href="#secao-videos" 
                className="w-full sm:w-auto text-center bg-transparent border border-brand-gray/40 text-gray-300 hover:border-brand-yellow hover:text-brand-yellow font-bold uppercase px-8 py-4 transition-colors text-sm tracking-widest rounded-sm"
              >
                Ver Vídeos Cleiton 001 (17)
              </a>
            </div>
          </div>

          {/* Destaque 50+ Card com Vídeo Real WhatsApp Video 2026-07-21 at 09.47.29 */}
          <div className="lg:w-5/12 flex justify-center w-full">
            <div 
              onClick={() => setActiveMediaModal({ type: 'video', src: '/videos/v17.mp4', title: 'Cleiton Santos Atendimento 50+ (WhatsApp Video 09.47.29)' })}
              className="w-full h-80 sm:h-96 rounded-sm border-2 border-brand-yellow/50 overflow-hidden relative group shadow-2xl bg-black cursor-pointer"
            >
              <img 
                src="/images/cleiton001/WhatsApp Image 2026-07-17 at 11.12.24 (1).jpeg" 
                alt="Cleiton Santos Atendimento 50+" 
                className="w-full h-full object-cover object-top opacity-50 group-hover:scale-105 transition-transform duration-700" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-between text-center">
                <span className="bg-brand-yellow text-black font-bold uppercase text-[10px] px-3 py-1 tracking-widest rounded-sm self-end shadow-md">
                  Vídeo Destaque 50+
                </span>

                <div className="w-16 h-16 rounded-full bg-brand-yellow text-black flex items-center justify-center text-xl font-bold shadow-2xl mx-auto group-hover:scale-110 transition-transform my-auto">
                  <Play size={28} className="ml-1 fill-black" />
                </div>

                <div>
                  <span className="text-4xl font-heading text-brand-yellow mb-0.5 block drop-shadow-md">50+</span>
                  <h3 className="font-heading text-xl uppercase text-white mb-1 tracking-wider">Cleiton Santos Atendimento 50+</h3>
                  <p className="text-[11px] text-gray-200 italic max-w-xs mx-auto leading-relaxed">
                    Clique para assistir ao vídeo do atendimento (WhatsApp Video 09.47.29)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OS 4 PILARES COM DESTAQUE VISUAL */}
      <section className="mb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-brand-white uppercase mb-4">
            Pilares do <span className="text-brand-yellow">Treinamento 50+</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Metodologia adaptada com foco na preservação física, segurança articular e independência rotineira.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Card com Vídeo Real WhatsApp Video 2026-07-21 at 09.36.16 */}
          <div className="lg:col-span-5 h-full">
            <div 
              onClick={() => setActiveMediaModal({ type: 'video', src: '/videos/v5.mp4', title: 'Treino de Longevidade Cleiton Santos (WhatsApp Video 09.36.16)' })}
              className="relative rounded-sm overflow-hidden border border-brand-yellow/40 h-full min-h-[350px] shadow-xl group bg-black cursor-pointer"
            >
              <img 
                src="/images/cleiton001/WhatsApp Image 2026-07-20 at 12.21.55.jpeg" 
                alt="Treino de Longevidade Cleiton Santos" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex flex-col justify-between">
                <span className="bg-brand-yellow text-black font-bold uppercase text-[10px] px-2.5 py-1 tracking-widest rounded-sm w-max shadow-md">
                  Vídeo Pilares 50+
                </span>

                <div className="w-16 h-16 rounded-full bg-brand-yellow text-black flex items-center justify-center text-xl font-bold shadow-2xl mx-auto group-hover:scale-110 transition-transform my-auto">
                  <Play size={28} className="ml-1 fill-black" />
                </div>

                <div>
                  <h3 className="font-heading text-2xl text-white uppercase">Preservação & Autonomia</h3>
                  <p className="text-xs text-gray-200 mt-1 italic">
                    Clique para assistir à demonstração da metodologia 50+ (WhatsApp Video 09.36.16)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Os 4 Cards dos Pilares */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-[#111111] border border-brand-gray/20 p-6 hover:border-brand-yellow/40 transition-all rounded-sm">
              <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4">
                <HeartPulse size={26} />
              </div>
              <h3 className="text-xl font-heading text-brand-white uppercase mb-2">Saúde Articular & Óssea</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Exercícios para fortalecer músculos estabilizadores da coluna, quadril e joelhos, prevenindo osteopenia e aliviando dores.
              </p>
            </div>

            <div className="bg-[#111111] border border-brand-gray/20 p-6 hover:border-brand-yellow/40 transition-all rounded-sm">
              <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-xl font-heading text-brand-white uppercase mb-2">Equilíbrio & Quedas</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Treinamento de estabilidade postural e propriocepção para dar mais firmeza e segurança nos passos do dia a dia.
              </p>
            </div>

            <div className="bg-[#111111] border border-brand-gray/20 p-6 hover:border-brand-yellow/40 transition-all rounded-sm">
              <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4">
                <Activity size={26} />
              </div>
              <h3 className="text-xl font-heading text-brand-white uppercase mb-2">Massa Magra & Força</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Combate à sarcopenia para manter a força necessária ao subir escadas, carregar objetos e ter independência física.
              </p>
            </div>

            <div className="bg-[#111111] border border-brand-gray/20 p-6 hover:border-brand-yellow/40 transition-all rounded-sm">
              <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4">
                <UserCheck size={26} />
              </div>
              <h3 className="text-xl font-heading text-brand-white uppercase mb-2">Carga Adaptada</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Progressão de carga calculada com respeito rigoroso ao histórico médico e limites anatomofisiológicos do aluno.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GALERIA DE FOTOS REAIS DA PASTA CLEITON001 */}
      <section id="galeria-fotos" className="mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-1">
              <ImageIcon size={16} /> Fotos Cleiton 001
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading text-brand-white uppercase">
              Fotos Reais dos <span className="text-brand-yellow">Treinos 50+</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Confira as imagens reais dos atendimentos e técnicas de fortalecimento aplicadas com os alunos.
          </p>
        </div>

        {/* Grid de Fotos Reais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fotosIdosos.map((foto, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveMediaModal({ type: 'image', src: foto.src, title: foto.title })}
              className="bg-[#111111] border border-brand-gray/20 rounded-sm overflow-hidden group cursor-pointer hover:border-brand-yellow/60 transition-all shadow-lg flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={foto.src} 
                  alt={foto.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="bg-brand-yellow text-black font-bold text-xs px-3 py-1.5 uppercase tracking-wider rounded-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    Ampliar Foto
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{foto.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{foto.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO DEMONSTRAÇÕES EM VÍDEO REAIS DA PASTA CLEITON 001 (17 VÍDEOS) */}
      <section id="secao-videos" className="mb-24 bg-[#111111] border border-brand-gray/20 p-6 sm:p-10 md:p-12 rounded-sm">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-1">
            <Video size={16} /> Vídeos Reais (17) Pasta Cleiton 001
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-white uppercase mb-2">
            Demonstrações em Vídeo das Aulas
          </h2>
          <p className="text-gray-400 text-sm">
            Assista a todos os 17 vídeos originais da pasta cleiton 001 com a aplicação prática das técnicas de mobilidade, equilíbrio e exercícios de força.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosIdosos.map((video) => (
            <div 
              key={video.id}
              onClick={() => setActiveMediaModal({ type: 'video', src: video.videoSrc, title: video.title })}
              className="relative aspect-[3/4] sm:aspect-square rounded-sm overflow-hidden border border-brand-yellow/30 group cursor-pointer bg-black shadow-xl"
            >
              <img 
                src={video.thumb} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-between p-4 text-center">
                <span className="bg-brand-yellow text-black text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-sm tracking-wider self-end shadow-md">
                  Vídeo {video.id} / 17
                </span>
                
                <div className="w-14 h-14 rounded-full bg-brand-yellow text-black flex items-center justify-center text-xl font-bold shadow-2xl group-hover:scale-110 transition-transform">
                  <Play size={24} className="ml-1 fill-black" />
                </div>

                <div>
                  <h4 className="text-xs font-bold text-brand-white block mb-1">
                    {video.title}
                  </h4>
                  <p className="text-[10px] text-gray-300 line-clamp-2">{video.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DIFERENCIAIS E BENEFÍCIOS REAIS COM CONTATO DIRETO */}
      <section className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-white uppercase mb-6">
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
            className="inline-block bg-brand-yellow text-black font-bold uppercase px-6 py-4 hover:bg-brand-yellowLight transition-colors text-xs tracking-widest rounded-sm w-full shadow-lg"
          >
            Falar no WhatsApp Sobre 50+
          </a>
        </div>
      </section>

      {/* MEDIA MODAL CONTAINER PARA FOTOS E VÍDEOS */}
      {activeMediaModal && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={() => setActiveMediaModal(null)}
            className="absolute top-4 right-4 bg-brand-yellow/20 text-brand-yellow hover:bg-brand-yellow hover:text-black p-3 rounded-full transition-all focus:outline-none z-50"
            aria-label="Fechar Modal"
          >
            <X size={28} />
          </button>
          
          <div className="max-w-4xl w-full flex flex-col items-center justify-center">
            {activeMediaModal.type === 'image' ? (
              <div className="bg-[#161616] p-3 rounded-sm border border-brand-yellow/40 max-w-3xl w-full">
                <img 
                  src={activeMediaModal.src} 
                  alt={activeMediaModal.title} 
                  className="max-h-[75vh] w-auto mx-auto object-contain rounded-sm" 
                />
                <p className="text-center text-white text-sm font-bold mt-3">{activeMediaModal.title}</p>
              </div>
            ) : (
              <div className="w-full aspect-video rounded-sm overflow-hidden border border-brand-yellow/40 bg-black">
                <video 
                  src={activeMediaModal.src} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                >
                  Seu navegador não suporta a reprodução deste vídeo.
                </video>
                <p className="text-center text-white text-sm font-bold p-2 bg-[#161616]">{activeMediaModal.title}</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
