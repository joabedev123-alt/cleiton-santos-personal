import { useState, useRef } from 'react';
import { CheckCircle2, MapPin, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';

interface VideoCardProps {
  src: string;
  title: string;
}

const VideoCardWithControls = ({ src, title }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-black w-full max-w-[320px] sm:max-w-[360px] mx-auto aspect-[9/16] rounded-sm border-2 border-brand-yellow/30 relative overflow-hidden group shadow-2xl flex flex-col justify-between">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain bg-black object-center z-0"
      />

      {/* Header Overlay */}
      <div className="relative z-10 p-3 bg-gradient-to-b from-black/80 via-black/20 to-transparent flex justify-between items-center pointer-events-none">
        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-yellow bg-black/70 px-2.5 py-1 rounded-sm border border-brand-yellow/30 shadow-md">
          {title}
        </span>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-10 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          className="bg-brand-yellow text-black p-3 rounded-full hover:scale-110 hover:bg-brand-yellowLight transition-all duration-200 shadow-xl flex items-center justify-center cursor-pointer touch-manipulation"
        >
          {isPlaying ? <Pause size={20} className="fill-black" /> : <Play size={20} className="fill-black ml-0.5" />}
        </button>

        {/* Volume Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
          className="bg-black/80 text-white border border-brand-yellow/50 p-3 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200 shadow-xl flex items-center justify-center cursor-pointer touch-manipulation"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="text-brand-yellow" />}
        </button>
      </div>
    </div>
  );
};

export const Sobre = () => {
  return (
    <div className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* SEÇÃO PRINCIPAL COM VÍDEO 01 */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={18} className="text-brand-yellow" />
          <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs">
            Atendimento em {CONTACT_INFO.location}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-brand-white uppercase mb-12">
          PROFISSIONALISMO, MÉTODO E COMPROMISSO COM A SUA EVOLUÇÃO
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
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

          {/* PRIMEIRO VÍDEO (video01) */}
          <div className="flex justify-center w-full">
            <VideoCardWithControls src="/videos/video01.mp4" title="Demonstração 01" />
          </div>
        </div>

        {/* SEGUNDA SEÇÃO CENTRALIZADA COM VÍDEO 02 */}
        <div className="mt-20 sm:mt-24 pt-16 border-t border-brand-gray/20 text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-2 block">
              Prática & Metodologia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-brand-white uppercase mb-4">
              Acompanhamento <span className="text-brand-yellow">Especializado</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Confira mais um registro prático dos treinamentos personalizados e da atenção dedicada a cada detalhe biomecânico.
            </p>
          </div>

          {/* SEGUNDO VÍDEO (video02) CENTRALIZADO ABAIXO */}
          <div className="flex justify-center w-full">
            <VideoCardWithControls src="/videos/video02.mp4" title="Demonstração 02" />
          </div>
        </div>

      </div>
    </div>
  );
};
