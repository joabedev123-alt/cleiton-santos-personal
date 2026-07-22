
import { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink, SERVICE_MESSAGES } from '../utils/contact';

export const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    modalidade: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá, Cleiton! Meu nome é ${formData.nome || 'visitante'}.`;
    if (formData.modalidade) {
      text += `\nTenho interesse em: ${formData.modalidade}.`;
    }
    if (formData.email) {
      text += `\nMeu e-mail: ${formData.email}.`;
    }
    if (formData.mensagem) {
      text += `\nMensagem: ${formData.mensagem}`;
    } else {
      text += `\nGostaria de mais informações sobre os treinamentos.`;
    }
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <div className="py-32 container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-heading text-brand-white uppercase mb-16 text-center">
        Vamos Construir o Seu <span className="text-brand-yellow">Próximo Resultado</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Formulário de Contato */}
        <div className="bg-[#111111] p-8 md:p-12 border border-brand-gray/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Nome Completo</label>
              <input 
                type="text" 
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors" 
                placeholder="Digite seu nome" 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Telefone / WhatsApp</label>
                <input 
                  type="text" 
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors" 
                  placeholder="(603) 000-0000" 
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">E-mail</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors" 
                  placeholder="seu@email.com" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Modalidade Desejada</label>
              <select 
                value={formData.modalidade}
                onChange={(e) => setFormData({ ...formData, modalidade: e.target.value })}
                className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors appearance-none"
              >
                <option value="">Selecione uma opção</option>
                <option value="Personal Presencial (Riverview FL)">Personal Presencial (Riverview FL)</option>
                <option value="Consultoria Online">Consultoria Online</option>
                <option value="Treino em Dupla">Treino em Dupla</option>
                <option value="Preparação Física">Preparação Física</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Mensagem / Objetivo</label>
              <textarea 
                rows={4} 
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full bg-[#1a1a1a] border border-brand-gray/30 p-4 text-white focus:outline-none focus:border-brand-yellow transition-colors" 
                placeholder="Conte-me um pouco sobre seus objetivos..." 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-brand-yellow text-black font-bold uppercase tracking-widest py-4 hover:bg-brand-yellowLight transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              Enviar via WhatsApp
            </button>
          </form>
        </div>

        {/* Informações de Contato Direto */}
        <div className="space-y-12 flex flex-col justify-center">
          <div className="mb-6 flex justify-start">
            <img src="/logo-final.png" alt="Cleiton Santos Logo" className="h-24 w-auto object-contain" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-heading text-brand-white uppercase tracking-wider border-b border-brand-gray/30 pb-4">
              Informações Diretas
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-brand-yellow mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest">WhatsApp / Telefone</p>
                  <a href={getWhatsAppLink(SERVICE_MESSAGES.default)} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-yellow mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest">E-mail</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-brand-yellow transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-yellow mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest">Local de Atendimento</p>
                  <p className="text-gray-400">{CONTACT_INFO.location}</p>
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
