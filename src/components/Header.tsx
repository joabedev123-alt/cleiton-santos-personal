import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Fecha o menu sempre que a rota mudar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* HEADER NAVBAR */}
      <header className="w-full bg-[#0d0d0d] z-50 py-4 px-6 md:px-10 flex justify-between items-center border-b border-brand-gray/10 sticky top-0">
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo-final.png" alt="Logo Cleiton Santos" className="h-14 md:h-20 w-auto object-contain" />
          <div className="text-2xl md:text-3xl font-heading text-brand-white uppercase tracking-wider hidden sm:block">
            Cleiton <span className="text-brand-yellow">Santos</span>
          </div>
        </Link>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-widest text-brand-white">
          <Link to="/" className="hover:text-brand-yellow transition-colors relative group">
            Início
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/sobre" className="hover:text-brand-yellow transition-colors relative group">
            Sobre
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/servicos" className="hover:text-brand-yellow transition-colors relative group">
            Serviços
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/metodo" className="hover:text-brand-yellow transition-colors relative group">
            Método
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/contato" className="bg-brand-white text-black px-6 py-2 hover:bg-brand-yellow transition-colors">
            Fale Comigo
          </Link>
        </nav>

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
        <div className="fixed inset-0 top-[73px] bg-[#0d0d0d] z-40 flex flex-col items-center pt-10 md:hidden border-t border-brand-gray/20">
          <nav className="flex flex-col gap-8 items-center text-lg font-bold uppercase tracking-widest text-brand-white w-full px-6">
            <Link to="/" className="hover:text-brand-yellow transition-colors w-full text-center py-4 border-b border-brand-gray/10">Início</Link>
            <Link to="/sobre" className="hover:text-brand-yellow transition-colors w-full text-center py-4 border-b border-brand-gray/10">Sobre</Link>
            <Link to="/servicos" className="hover:text-brand-yellow transition-colors w-full text-center py-4 border-b border-brand-gray/10">Serviços</Link>
            <Link to="/metodo" className="hover:text-brand-yellow transition-colors w-full text-center py-4 border-b border-brand-gray/10">Método</Link>
            <Link to="/contato" className="bg-brand-yellow text-black px-6 py-4 mt-4 w-full text-center rounded-sm">Fale Comigo</Link>
          </nav>
        </div>
      )}
    </>
  );
};
