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
    { code: 'PT', name: 'Português', flag: '🇧🇷', googleCode: 'pt' },
    { code: 'EN', name: 'English', flag: '🇺🇸', googleCode: 'en' },
    { code: 'ES', name: 'Español', flag: '🇪🇸', googleCode: 'es' },
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

  return (
    <>
      {/* HEADER NAVBAR */}
      <header className="w-full bg-[#0d0d0d] z-50 py-4 px-6 md:px-10 flex justify-between items-center border-b border-brand-gray/10 sticky top-0">
        
        {/* Logo & Marca */}
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo-final.png" alt="Logo Cleiton Santos" className="h-14 md:h-20 w-auto object-contain" />
          <div className="text-2xl md:text-3xl font-heading text-brand-white uppercase tracking-wider hidden sm:block">
            Cleiton <span className="text-brand-yellow">Santos</span>
          </div>
        </Link>
        
        {/* Menu Desktop */}
        <nav className="hidden lg:flex space-x-6 text-sm font-semibold uppercase tracking-widest text-gray-300">
          <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
          <Link to="/sobre" className="hover:text-brand-yellow transition-colors">Sobre</Link>
          <Link to="/servicos" className="hover:text-brand-yellow transition-colors">Serviços</Link>
          <Link to="/treino-idosos" className="hover:text-brand-yellow transition-colors text-brand-yellow">Treino 50+</Link>
          <Link to="/metodo" className="hover:text-brand-yellow transition-colors">Método</Link>
          <Link to="/contato" className="hover:text-brand-yellow transition-colors">Contato</Link>
        </nav>

        {/* CTA & Botão Tradutor */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Botão Tradutor de Idioma */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 border border-brand-gray/30 bg-[#161616] text-white px-3 py-2.5 rounded-sm hover:border-brand-yellow transition-all text-xs font-bold uppercase tracking-wider"
              title="Mudar Idioma / Change Language"
            >
              <Globe size={16} className="text-brand-yellow" />
              <span>{activeLang.flag} {activeLang.code}</span>
              <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Menu Dropdown de Idiomas */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-[#161616] border border-brand-yellow/30 rounded-sm shadow-2xl z-50 py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-brand-yellow hover:text-black transition-colors ${
                      currentLang === lang.code ? 'text-brand-yellow bg-black/40' : 'text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    <span className="text-[10px] opacity-70">({lang.code})</span>
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

        {/* Botão Mobile */}
        <button 
          className="md:hidden text-brand-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-[#0d0d0d] z-40 flex flex-col items-center pt-6 pb-12 md:hidden border-t border-brand-gray/20 overflow-y-auto max-h-[calc(100vh-73px)]">
          
          {/* Seletor de Idiomas no Mobile */}
          <div className="flex items-center gap-2 mb-6 bg-[#161616] p-2 border border-brand-gray/20 rounded-sm w-[90%] justify-center">
            <Globe size={18} className="text-brand-yellow mr-1" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                className={`px-3 py-1.5 text-xs font-bold rounded-sm transition-colors ${
                  currentLang === lang.code ? 'bg-brand-yellow text-black' : 'text-white hover:text-brand-yellow'
                }`}
              >
                {lang.flag} {lang.code}
              </button>
            ))}
          </div>

          <nav className="flex flex-col gap-6 items-center text-lg font-bold uppercase tracking-widest text-brand-white w-full px-6">
            <Link to="/" className="hover:text-brand-yellow transition-colors w-full text-center py-3 border-b border-brand-gray/10">Home</Link>
            <Link to="/sobre" className="hover:text-brand-yellow transition-colors w-full text-center py-3 border-b border-brand-gray/10">Sobre</Link>
            <Link to="/servicos" className="hover:text-brand-yellow transition-colors w-full text-center py-3 border-b border-brand-gray/10">Serviços</Link>
            <Link to="/treino-idosos" className="hover:text-brand-yellow transition-colors text-brand-yellow w-full text-center py-3 border-b border-brand-gray/10">Treino 50+</Link>
            <Link to="/metodo" className="hover:text-brand-yellow transition-colors w-full text-center py-3 border-b border-brand-gray/10">Método</Link>
            <Link to="/contato" className="hover:text-brand-yellow transition-colors w-full text-center py-3 border-b border-brand-gray/10">Contato</Link>
            
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
