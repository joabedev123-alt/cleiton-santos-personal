
import { motion } from 'framer-motion';
import { Target, Dumbbell, Activity, Users, PlayCircle, Star, MapPin } from 'lucide-react';
import { VideoCarousel } from '../components/VideoCarousel';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, getWhatsAppLink, SERVICE_MESSAGES } from '../utils/contact';

export const Home = () => {
  return (
    <>
      {/* 1. HERO PRINCIPAL */}
      <section id="home" className="relative min-h-[85vh] flex items-center bg-[#0d0d0d] overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 h-full z-10 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6 pt-10 pb-20 lg:py-0 relative z-20 pr-10"
          >
            <div className="flex items-center gap-2">
              <span className="text-brand-yellow font-bold tracking-[0.2em] text-sm uppercase">
                Desde 2015
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300 font-medium tracking-wider text-xs uppercase flex items-center gap-1">
                <MapPin size={14} className="text-brand-yellow" /> {CONTACT_INFO.location}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading leading-[0.9] text-brand-white uppercase">
              Construa sua <br/>
              <span className="text-brand-yellow">Melhor Versão</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Treinamento individualizado para quem busca mais força, desempenho, saúde e resultados consistentes com acompanhamento profissional em {CONTACT_INFO.location}.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href={getWhatsAppLink(SERVICE_MESSAGES.general)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-yellow text-black px-8 py-4 font-bold hover:bg-brand-yellowLight transition-all uppercase tracking-wider text-sm rounded-sm text-center"
              >
                Quero Começar
              </a>
              <Link to="/metodo" className="border border-brand-gray text-brand-white px-8 py-4 font-bold hover:bg-brand-grayDark transition-all uppercase tracking-wider text-sm rounded-sm text-center">
                Conhecer o Método
              </Link>
            </div>
          </motion.div>
        </div>

        {/* BACKGROUND COM CORTE DIAGONAL */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 overflow-hidden">
          <div className="absolute top-0 -left-10 w-20 h-full bg-brand-yellow transform -skew-x-12 z-10 hidden lg:block"></div>
          <div className="absolute inset-0 ml-0 lg:ml-10">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent z-10 opacity-60"></div>
            <img src="/hero-bg.jpeg" alt="Cleiton Santos Treino" className="w-full h-full object-cover object-top border-l-2 border-brand-yellow/50" />
          </div>
        </div>
      </section>

      {/* 2. FAIXA DE AUTORIDADE */}
      <section className="border-y border-brand-gray/30 bg-[#111111] py-10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-gray/30">
            {[
              { number: "100+", text: "Alunos Transformados" },
              { number: "100%", text: "Treinos Adaptados" },
              { number: "24/7", text: "Evolução Monitorada" },
              { number: "Online", text: "E Presencial" },
            ].map((item, i) => (
              <div key={i} className="text-center px-4">
                <h3 className="text-4xl md:text-5xl font-heading text-brand-yellow mb-2">{item.number}</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US / SOBRE CLEITON */}
      <section id="sobre" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute top-0 left-0 lg:-left-20 w-80 h-80 border-[20px] border-brand-yellow rounded-full z-0 transform translate-x-10 translate-y-10 lg:translate-x-0 opacity-80"></div>
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-[#0d0d0d] z-10 bg-brand-grayDark flex items-center justify-center">
               <img src="/sobre-bg.jpeg" alt="Cleiton Santos Diferenciais" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <span className="text-brand-yellow font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                Nossos Diferenciais
              </span>
              <h2 className="text-5xl md:text-6xl font-heading text-brand-white uppercase leading-none">
                Mais do que treino, <br/><span className="text-brand-yellow">um plano para sua evolução</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Cleiton Santos é Personal Trainer e atua com treinamentos personalizados voltados para força, condicionamento, melhora da composição corporal e qualidade de vida. Seu trabalho é baseado em planejamento, técnica, acompanhamento e progressão individual.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Target size={32} className="text-brand-yellow" />, title: "Progressão", desc: "Planejamento estruturado para resultados consistentes." },
                { icon: <Dumbbell size={32} className="text-brand-yellow" />, title: "Treino Específico", desc: "Exercícios adaptados para sua necessidade e objetivo." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <div className="bg-[#1a1a1a] p-4 rounded-md w-16 h-16 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-brand-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/sobre" className="inline-block border-b-2 border-brand-yellow text-brand-white pb-2 font-bold hover:text-brand-yellow transition-colors uppercase tracking-widest mt-8">
              Conhecer a trajetória
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PARA QUEM É O TREINAMENTO */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-heading text-brand-white uppercase">
              Seu treino precisa acompanhar o seu <span className="text-brand-yellow">objetivo</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target size={32} />, title: "Emagrecimento", desc: "Redução de gordura corporal com preservação de massa magra." },
              { icon: <Dumbbell size={32} />, title: "Hipertrofia", desc: "Ganho de massa muscular através de sobrecarga progressiva." },
              { icon: <Activity size={32} />, title: "Performance", desc: "Melhora do condicionamento físico geral e atlético." },
              { icon: <Users size={32} />, title: "Qualidade de Vida", desc: "Treinos voltados para saúde, postura e longevidade." }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 border border-brand-gray/20 hover:border-brand-yellow/50 transition-all duration-300 group">
                <div className="text-brand-gray group-hover:text-brand-yellow transition-colors mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-brand-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MÉTODO DE TREINAMENTO (Resumo) */}
      <section id="metodo" className="py-24 bg-[#0d0d0d] relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-heading text-brand-white uppercase mb-16 text-center">
            Um método construído para <span className="text-brand-yellow">gerar evolução</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {[
              { num: "01", title: "Avaliação inicial", desc: "Análise do objetivo, rotina e histórico." },
              { num: "02", title: "Planejamento individual", desc: "Construção de um programa específico." },
              { num: "03", title: "Execução acompanhada", desc: "Correção técnica e segurança absoluta." },
              { num: "04", title: "Monitoramento", desc: "Acompanhamento constante da evolução." },
              { num: "05", title: "Ajustes estratégicos", desc: "Atualização conforme os resultados." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-heading text-brand-gray group-hover:text-brand-yellow transition-colors duration-300 mb-6">{step.num}.</div>
                <h4 className="text-lg font-bold uppercase tracking-wide mb-3 text-brand-white">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.desc}</p>
                {i !== 4 && <div className="hidden lg:block absolute top-8 -right-4 w-8 border-t-2 border-brand-gray/30 border-dashed" />}
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <Link to="/metodo" className="bg-brand-white text-brand-dark px-10 py-4 font-bold hover:bg-brand-yellow transition-all uppercase tracking-wider inline-block">
              Conhecer o Método Completo
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVIÇOS */}
      <section id="servicos" className="py-24 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-yellow font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
              Nossos Serviços
            </span>
            <h2 className="text-5xl md:text-6xl font-heading text-brand-white uppercase">
              Programas de Treinamento
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Personal Presencial", 
                desc: "Acompanhamento individual durante toda a sessão de treino com correção técnica extrema.",
                videos: ['/videos/vid1.mp4', '/videos/vid2.mp4', '/videos/vid3.mp4', '/videos/vid4.mp4', '/videos/vid5.mp4']
              },
              { 
                title: "Treino em Dupla", 
                desc: "Treinamento personalizado para duas pessoas com objetivos alinhados.",
                image: "/dupla.jpeg"
              },
              { 
                title: "Preparação Física", 
                desc: "Treinamentos direcionados para força, resistência e desempenho atlético.",
                videos: ['/videos/vid6.mp4', '/videos/vid7.mp4', '/videos/vid8.mp4']
              }
            ].map((programa, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-md overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-brand-gray/10 group flex flex-col h-full">
                <div className="h-[400px] bg-black flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/20 transition-colors duration-500 z-10" />
                  {programa.videos ? (
                    <VideoCarousel videos={programa.videos} />
                  ) : programa.image ? (
                    <img src={programa.image} alt={programa.title} className="absolute inset-0 w-full h-full object-cover object-center z-0" />
                  ) : (
                    <span className="text-brand-gray font-heading text-2xl z-0">FOTO</span>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-bold uppercase tracking-wider text-brand-white mb-4 group-hover:text-brand-yellow transition-colors">{programa.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{programa.desc}</p>
                  <Link to="/servicos" className="text-brand-yellow text-sm font-bold tracking-widest uppercase hover:text-white transition-colors mt-auto block">
                    Ver Todos os Serviços
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PORTFÓLIO */}
      <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading text-brand-white uppercase mb-4">
              Portfólio <span className="text-brand-yellow">de Treinos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Estratégia, execução e acompanhamento em cada etapa do processo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/videos/vid13.mp4', '/videos/vid10.mp4', '/videos/vid12.mp4', '/videos/vid11.mp4'].map((video, i) => (
              <div key={i} className="bg-[#111111] border border-brand-gray/20 flex items-center justify-center relative group cursor-pointer overflow-hidden aspect-[9/16]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 pointer-events-none"></div>
                <PlayCircle className="absolute z-20 text-brand-white opacity-50 group-hover:opacity-100 group-hover:text-brand-yellow transition-all pointer-events-none" size={48} />
                <video src={video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DEPOIMENTOS */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-heading text-brand-white uppercase mb-16 text-center">
            Quem treina, <span className="text-brand-yellow">sente a diferença</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 border border-brand-gray/20">
                <div className="flex gap-1 text-brand-yellow mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "O acompanhamento foi essencial. A evolução que tive nos últimos meses foi algo que não consegui em anos treinando sozinho. Correção técnica impecável."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-grayDark rounded-full"></div>
                  <div>
                    <h4 className="text-brand-white font-bold uppercase tracking-wider text-sm">Nome do Aluno</h4>
                    <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">Hipertrofia</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 10. CALL TO ACTION FINAL */}
      <section className="py-32 bg-[#111111] border-t border-brand-gray/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-darker opacity-80 z-0"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-heading text-brand-white uppercase mb-8">
            Seu próximo nível começa com <br/><span className="text-brand-yellow">uma decisão</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Tenha um plano construído para o seu objetivo e acompanhamento profissional em cada etapa da sua evolução.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={getWhatsAppLink(SERVICE_MESSAGES.general)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-yellow text-black px-10 py-5 font-bold hover:bg-brand-yellowLight transition-all uppercase tracking-wider text-lg"
            >
              Falar com Cleiton
            </a>
            <Link to="/servicos" className="border border-brand-white text-brand-white px-10 py-5 font-bold hover:bg-brand-white hover:text-black transition-all uppercase tracking-wider text-lg">
              Conhecer os Planos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
