import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { getWhatsAppLink, SERVICE_MESSAGES } from '../utils/contact';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => localStorage.getItem('site_lang') || 'PT');
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha menus ao mudar de página
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
  }, [location.pathname]);

  // Trava a rolagem do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Fecha dropdown de idioma ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'PT', name: 'Português', flagUrl: '/flags/br.svg', googleCode: 'pt' },
    { code: 'EN', name: 'English', flagUrl: '/flags/us.svg', googleCode: 'en' },
    { code: 'ES', name: 'Español', flagUrl: '/flags/es.svg', googleCode: 'es' },
  ];

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setCurrentLang(lang.code);
    localStorage.setItem('site_lang', lang.code);
    setIsLangOpen(false);

    // Dispara a tradução via Cookie do Google Translate ou elemento select
    const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = lang.googleCode;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      document.cookie = `googtrans=/pt/${lang.googleCode}; path=/; domain=${window.location.hostname}`;
      document.cookie = `googtrans=/pt/${lang.googleCode}; path=/;`;
      window.location.reload();
    }
  };

  const activeLang = languages.find(l => l.code === currentLang) || languages[0];

  // Helper para verificar se a rota está ativa
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* HEADER NAVBAR */}
      <header className="w-full bg-[#0d0d0d] z-50 py-4 px-4 sm:px-6 md:px-10 flex justify-between items-center border-b border-brand-gray/10 sticky top-0">
        
        {/* Logo & Marca */}
        <Link to="/" className="flex items-center gap-3 md:gap-4">
          <img src="/logo-final.png" alt="Logo Cleiton Santos" className="h-12 sm:h-14 md:h-20 w-auto object-contain" />
          <div className="text-xl sm:text-2xl md:text-3xl font-heading text-brand-white uppercase tracking-wider hidden sm:block">
            Cleiton <span className="text-brand-yellow">Santos</span>
          </div>
        </Link>
        
        {/* Menu Desktop com Destaque Dinâmico */}
        <nav className="hidden lg:flex space-x-6 text-sm font-semibold uppercase tracking-widest">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-brand-yellow font-bold' : 'text-gray-300 hover:text-brand-yellow'}`}
          >
            Home
          </Link>
          <Link 
            to="/sobre" 
            className={`transition-colors ${isActive('/sobre') ? 'text-brand-yellow font-bold' : 'text-gray-300 hover:text-brand-yellow'}`}
          >
            Sobre
          </Link>
          <Link 
            to="/servicos" 
            className={`transition-colors ${isActive('/servicos') ? 'text-brand-yellow font-bold' : 'text-gray-300 hover:text-brand-yellow'}`}
          >
            Serviços
          </Link>
          <Link 
            to="/treino-idosos" 
            className={`transition-colors ${isActive('/treino-idosos') ? 'text-brand-yellow font-bold' : 'text-gray-300 hover:text-brand-yellow'}`}
          >
            Treino 50+
          </Link>
          <Link 
            to="/metodo" 
            className={`transition-colors ${isActive('/metodo') ? 'text-brand-yellow font-bold' : 'text-gray-300 hover:text-brand-yellow'}`}
          >
            Método
          </Link>
          <Link 
            to="/contato" 
            className={`transition-colors ${isActive('/contato') ? 'text-brand-yellow font-bold' : 'text-gray-300 hover:text-brand-yellow'}`}
          >
            Contato
          </Link>
        </nav>

        {/* CTA & Botão Tradutor (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Botão Tradutor de Idioma (Desktop com Bandeiras) */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 border border-brand-gray/30 bg-[#161616] text-white px-3 py-2.5 rounded-sm hover:border-brand-yellow transition-all text-xs font-bold uppercase tracking-wider"
              title="Mudar Idioma / Change Language"
            >
              <img src={activeLang.flagUrl} alt={activeLang.name} className="w-5 h-3.5 object-cover rounded-[2px]" />
              <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Menu Dropdown de Idiomas */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-36 bg-[#161616] border border-brand-yellow/30 rounded-sm shadow-2xl z-50 py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full text-left px-3 py-2 text-xs font-bold flex items-center gap-2.5 hover:bg-brand-yellow hover:text-black transition-colors ${
                      currentLang === lang.code ? 'text-brand-yellow bg-black/40' : 'text-white'
                    }`}
                  >
                    <img src={lang.flagUrl} alt={lang.name} className="w-5 h-3.5 object-cover rounded-[2px]" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botão CTA Fale Comigo */}
          <a 
            href={getWhatsAppLink(SERVICE_MESSAGES.general)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-yellow text-black px-6 py-3 font-bold hover:bg-brand-yellowLight transition-colors uppercase tracking-wider text-sm rounded-sm"
          >
            Fale Comigo
          </a>
        </div>

        {/* Área Mobile: Bandeiras no Navbar + Botão Hambúrguer */}
        <div className="flex md:hidden items-center gap-3">
          {/* Bandeiras de Idioma no Nav Bar (Mobile) */}
          <div className="flex items-center gap-1 bg-[#161616] p-1.5 border border-brand-gray/30 rounded-sm">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                title={lang.name}
                aria-label={lang.name}
                className={`p-1 rounded-sm transition-all duration-200 flex items-center justify-center ${
                  currentLang === lang.code 
                    ? 'bg-brand-yellow/20 ring-1 ring-brand-yellow scale-110' 
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img src={lang.flagUrl} alt={lang.name} className="w-5 h-3.5 object-cover rounded-[2px]" />
              </button>
            ))}
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button 
            className="text-brand-white p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-[#0d0d0d] z-40 flex flex-col items-center pt-6 pb-12 md:hidden border-t border-brand-gray/20 overflow-y-auto max-h-[calc(100vh-73px)]">
          <nav className="flex flex-col gap-6 items-center text-lg font-bold uppercase tracking-widest w-full px-6">
            <Link 
              to="/" 
              className={`w-full text-center py-3 border-b border-brand-gray/10 transition-colors ${
                isActive('/') ? 'text-brand-yellow font-bold' : 'text-brand-white hover:text-brand-yellow'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/sobre" 
              className={`w-full text-center py-3 border-b border-brand-gray/10 transition-colors ${
                isActive('/sobre') ? 'text-brand-yellow font-bold' : 'text-brand-white hover:text-brand-yellow'
              }`}
            >
              Sobre
            </Link>
            <Link 
              to="/servicos" 
              className={`w-full text-center py-3 border-b border-brand-gray/10 transition-colors ${
                isActive('/servicos') ? 'text-brand-yellow font-bold' : 'text-brand-white hover:text-brand-yellow'
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/treino-idosos" 
              className={`w-full text-center py-3 border-b border-brand-gray/10 transition-colors ${
                isActive('/treino-idosos') ? 'text-brand-yellow font-bold' : 'text-brand-white hover:text-brand-yellow'
              }`}
            >
              Treino 50+
            </Link>
            <Link 
              to="/metodo" 
              className={`w-full text-center py-3 border-b border-brand-gray/10 transition-colors ${
                isActive('/metodo') ? 'text-brand-yellow font-bold' : 'text-brand-white hover:text-brand-yellow'
              }`}
            >
              Método
            </Link>
            <Link 
              to="/contato" 
              className={`w-full text-center py-3 border-b border-brand-gray/10 transition-colors ${
                isActive('/contato') ? 'text-brand-yellow font-bold' : 'text-brand-white hover:text-brand-yellow'
              }`}
            >
              Contato
            </Link>
            
            <a 
              href={getWhatsAppLink(SERVICE_MESSAGES.general)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-yellow text-black px-6 py-4 mt-2 w-full text-center rounded-sm font-bold"
            >
              Fale Comigo
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
