import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Servicos } from './pages/Servicos';
import { TreinoIdosos } from './pages/TreinoIdosos';
import { Metodo } from './pages/Metodo';
import { Contato } from './pages/Contato';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0d0d0d] text-brand-light font-sans selection:bg-brand-yellow selection:text-brand-dark">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/treino-idosos" element={<TreinoIdosos />} />
            <Route path="/metodo" element={<Metodo />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
