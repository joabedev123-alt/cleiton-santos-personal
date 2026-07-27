import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, MapPin, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';

interface DualVideoBlockProps {
  video1: string;
  video2: string;
  title1: string;
  title2: string;
}

const DualVideoBlock = ({ video1, video2, title1, title2 }: DualVideoBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Quando a seção de vídeo entra na viewport
            [video1Ref.current, video2Ref.current].forEach((v) => {
              if (v) {
                v.muted = false;
                const p = v.play();
                if (p !== undefined) {
                  p.then(() => setIsPlaying(true)).catch(() => {
                    if (v) {
                      v.muted = true;
                      setIsMuted(true);
                      v.play().then(() => setIsPlaying(true)).catch(() => {});
                    }
                  });
                }
              }
            });
          } else {
            // Quando sai da viewport
            [video1Ref.current, video2Ref.current].forEach((v) => {
              if (v) {
                v.pause();
                v.muted = true;
              }
            });
            setIsMuted(true);
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const nextPlaying = !isPlaying;
    [video1Ref.current, video2Ref.current].forEach((v) => {
      if (v) {
        if (!nextPlaying) {
          v.pause();
        } else {
          v.play().catch(() => {});
        }
      }
    });
    setIsPlaying(nextPlaying);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    [video1Ref.current, video2Ref.current].forEach((v) => {
      if (v) {
        v.muted = nextMuted;
      }
    });
    setIsMuted(nextMuted);
  };

  return (
    <div
      ref={containerRef}
      className="bg-black w-full max-w-[650px] mx-auto rounded-sm border-2 border-brand-yellow/40 relative overflow-hidden shadow-2xl p-3 sm:p-4 flex flex-col justify-between"
    >
      {/* Grade com os 2 Vídeos Lado a Lado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
        {/* VÍDEO 1 */}
        <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-black border border-brand-yellow/20 group">
          <video
            ref={video1Ref}
            src={video1}
            loop
            playsInline
            className="w-full h-full object-contain bg-black object-center"
          />
          <div className="absolute top-2 left-2 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow bg-black/80 px-2 py-0.5 rounded-sm border border-brand-yellow/30 shadow-md">
              {title1}
            </span>
          </div>
        </div>

        {/* VÍDEO 2 */}
        <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-black border border-brand-yellow/20 group">
          <video
            ref={video2Ref}
            src={video2}
            loop
            playsInline
            className="w-full h-full object-contain bg-black object-center"
          />
          <div className="absolute top-2 left-2 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow bg-black/80 px-2 py-0.5 rounded-sm border border-brand-yellow/30 shadow-md">
              {title2}
            </span>
          </div>
        </div>
      </div>

      {/* Barra de Controles Unificada */}
      <div className="relative z-10 p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex items-center justify-between gap-3 border-t border-brand-gray/20 rounded-b-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-white">
            Demonstrações em Vídeo
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Botão Play / Pause Sincronizado */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar vídeos" : "Reproduzir vídeos"}
            className="bg-brand-yellow text-black p-2.5 sm:p-3 rounded-full hover:scale-110 hover:bg-brand-yellowLight transition-all duration-200 shadow-xl flex items-center justify-center cursor-pointer touch-manipulation"
          >
            {isPlaying ? <Pause size={18} className="fill-black" /> : <Play size={18} className="fill-black ml-0.5" />}
          </button>

          {/* Botão de Som Mute / Unmute Sincronizado */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
            className="bg-black/80 text-white border border-brand-yellow/50 p-2.5 sm:p-3 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200 shadow-xl flex items-center justify-center cursor-pointer touch-manipulation"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-brand-yellow" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export const Sobre = () => {
  return (
    <div className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* CABEÇALHO */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={18} className="text-brand-yellow" />
          <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs">
            Atendimento em {CONTACT_INFO.location}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-brand-white uppercase mb-12">
          PROFISSIONALISMO, MÉTODO E COMPROMISSO COM A SUA EVOLUÇÃO
        </h1>
        
        {/* SEÇÃO PRINCIPAL COM TEXTO E BLOCO UNIFICADO DE 2 VÍDEOS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              Cleiton Santos é Personal Trainer com atendimento presencial em <strong className="text-brand-white font-semibold">{CONTACT_INFO.location}</strong> e consultoria online, atuando com treinamentos personalizados voltados para força, condicionamento, melhora da composição corporal e qualidade de vida.
            </p>
            <p>
              Sua trajetória é marcada por um estudo contínuo sobre biomecânica e fisiologia do exercício, garantindo que cada plano de treinamento seja fundamentado na ciência e adaptado à individualidade biológica de cada aluno.
            </p>
            <ul className="space-y-4 pt-4">
              {['Formação Acadêmica de Excelência', 'Análise Biomecânica Especializada', 'Estratégia Baseada em Evidências', 'Acompanhamento Multidisciplinar'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-brand-light">
                  <CheckCircle2 className="text-brand-yellow" size={24} />
                  <span className="font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPONENTE UNIFICADO DOS 2 VÍDEOS JUNTOS */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <DualVideoBlock
              video1="/videos/video01.mp4"
              video2="/videos/video02.mp4"
              title1="Demonstração 01"
              title2="Demonstração 02"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
