import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, getWhatsAppLink, SERVICE_MESSAGES } from '../utils/contact';

export const Footer = () => {
  return (
    <>
      <footer className="bg-black py-16 border-t border-brand-gray/20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Logo e Resumo */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="flex items-center gap-4">
              <img src="/logo-final.png" alt="Logo Cleiton Santos" className="h-16 w-auto object-contain" />
              <div className="text-2xl font-heading text-brand-white uppercase tracking-wider hidden sm:block">
                Cleiton <span className="text-brand-yellow">Santos</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm mt-4">
              Treinamento personalizado voltado para força, condicionamento e resultados reais baseados em biomecânica.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-brand-white font-bold uppercase tracking-widest mb-2">Navegação</h4>
            <div className="flex flex-col space-y-2 text-gray-400 text-sm font-medium">
              <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
              <Link to="/sobre" className="hover:text-brand-yellow transition-colors">Sobre</Link>
              <Link to="/servicos" className="hover:text-brand-yellow transition-colors">Serviços</Link>
              <Link to="/metodo" className="hover:text-brand-yellow transition-colors">Método</Link>
              <Link to="/contato" className="hover:text-brand-yellow transition-colors">Contato</Link>
            </div>
          </div>

          {/* Contato Direto */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-brand-white font-bold uppercase tracking-widest mb-2">Contato</h4>
            <div className="flex flex-col space-y-3 text-gray-400 text-sm">
              <span className="flex items-center gap-3"><MapPin size={16} className="text-brand-yellow"/> {CONTACT_INFO.location}</span>
              <a href={`tel:${CONTACT_INFO.phoneTel}`} className="flex items-center gap-3 hover:text-brand-yellow transition-colors"><Phone size={16} className="text-brand-yellow"/> {CONTACT_INFO.phoneDisplay}</a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-brand-yellow transition-colors"><Mail size={16} className="text-brand-yellow"/> {CONTACT_INFO.email}</a>
            </div>
          </div>

        </div>

        {/* Linha de Copyright e Agência */}
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-brand-gray/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
          <p className="text-gray-500">
            © 2026 Cleiton Santos. Todos os direitos reservados.
          </p>
          <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-yellow transition-colors flex items-center gap-1 md:pr-20">
            Produzida com 💛 por CAMALY
          </a>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a 
        href={getWhatsAppLink(SERVICE_MESSAGES.default)} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
};
