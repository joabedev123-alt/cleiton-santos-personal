
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contato = () => {
  return (
    <div className="py-32 container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-heading text-brand-white uppercase mb-16 text-center">
        Vamos Construir o Seu <span className="text-brand-yellow">Próximo Resultado</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Formulário de Contato */}
        <div className="bg-[#111111] p-8 md:p-12 border border-brand-gray/20">
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Nome Completo</label>
              <input type="text" className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="Digite seu nome" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Telefone / WhatsApp</label>
                <input type="text" className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">E-mail</label>
                <input type="email" className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="seu@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Modalidade Desejada</label>
              <select className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors appearance-none">
                <option value="">Selecione uma opção</option>
                <option value="presencial">Personal Presencial</option>
                <option value="online">Consultoria Online</option>
                <option value="dupla">Treino em Dupla</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Mensagem / Objetivo</label>
              <textarea rows={4} className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="Conte-me um pouco sobre seus objetivos..." />
            </div>
            <button type="button" className="w-full bg-brand-yellow text-black font-bold uppercase tracking-widest py-4 hover:bg-brand-yellowLight transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Informações de Contato Direto */}
        <div className="space-y-12 flex flex-col justify-center">
          <div className="mb-6 flex justify-start">
            <img src="/logo01.png" alt="Cleiton Santos Logo" className="h-24 w-auto object-contain" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-heading text-brand-white uppercase tracking-wider border-b border-brand-gray/30 pb-4">
              Informações Diretas
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-brand-yellow mt-1" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest">WhatsApp / Telefone</p>
                  <p className="text-gray-400">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-yellow mt-1" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest">E-mail</p>
                  <p className="text-gray-400">contato@cleitonsantos.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-yellow mt-1" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest">Local de Atendimento</p>
                  <p className="text-gray-400">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-heading text-brand-white uppercase tracking-wider border-b border-brand-gray/30 pb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a href="#" className="bg-[#1a1a1a] p-4 text-brand-white hover:text-brand-yellow transition-colors border border-brand-gray/30 hover:border-brand-yellow font-bold uppercase text-xs tracking-widest">
                Instagram
              </a>
              <a href="#" className="bg-[#1a1a1a] p-4 text-brand-white hover:text-brand-yellow transition-colors border border-brand-gray/30 hover:border-brand-yellow font-bold uppercase text-xs tracking-widest">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
