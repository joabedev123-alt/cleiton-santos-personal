
import { CheckCircle2, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../utils/contact';

export const Sobre = () => {
  return (
    <div className="py-32 container mx-auto px-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPin size={18} className="text-brand-yellow" />
        <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs">
          Atendimento em {CONTACT_INFO.location}
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl font-heading text-brand-white uppercase mb-12">
        PROFISSIONALISMO, MÉTODO E COMPROMISSO COM A SUA EVOLUÇÃO
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
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
        <div className="bg-black w-full max-w-[320px] lg:max-w-[380px] mx-auto lg:ml-auto lg:mr-0 aspect-[9/16] flex items-center justify-center border-4 border-brand-yellow/20 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
          <video src="/videos/sobre.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        </div>
      </div>
    </div>
  );
};
