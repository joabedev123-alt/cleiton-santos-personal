

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      {/* HEADER NAVBAR */}
      <header className="w-full bg-[#0d0d0d] z-50 py-4 px-10 flex justify-between items-center border-b border-brand-gray/10 sticky top-0">
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo01.png" alt="Logo Cleiton Santos" className="h-20 w-auto object-contain" />
          <div className="text-3xl font-heading text-brand-white uppercase tracking-wider hidden sm:block">
            Cleiton <span className="text-brand-yellow">Santos</span>
          </div>
        </Link>
        <nav className="hidden lg:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-gray-300">
          <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
          <Link to="/sobre" className="hover:text-brand-yellow transition-colors">Sobre</Link>
          <Link to="/servicos" className="hover:text-brand-yellow transition-colors">Serviços</Link>
          <Link to="/metodo" className="hover:text-brand-yellow transition-colors">Método</Link>
          <Link to="/contato" className="hover:text-brand-yellow transition-colors">Contato</Link>
        </nav>
        <Link to="/contato" className="hidden md:block bg-brand-yellow text-black px-6 py-3 font-bold hover:bg-brand-yellowLight transition-colors uppercase tracking-wider text-sm">
          Fale Comigo
        </Link>
      </header>
    </>
  );
};
