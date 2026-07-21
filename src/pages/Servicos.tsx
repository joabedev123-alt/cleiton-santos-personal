

export const Servicos = () => {
  const servicos = [
    { title: "Personal Presencial", indicacao: "Iniciantes ou avançados que precisam de correção máxima", desc: "Acompanhamento individual durante toda a sessão de treino com correção técnica extrema." },
    { title: "Treino em Dupla", indicacao: "Casais ou amigos com objetivos similares", desc: "Treinamento personalizado para duas pessoas com objetivos alinhados." },
    { title: "Preparação Física", indicacao: "Atletas amadores ou profissionais", desc: "Treinamentos direcionados para força, resistência e desempenho atlético." },
    { title: "Consultoria Online", indicacao: "Pessoas com experiência prévia e disciplina", desc: "Planejamento personalizado com acompanhamento à distância e suporte diário." },
    { title: "Avaliação Física", indicacao: "Quem deseja mapear seu estado atual", desc: "Análise inicial e criação de uma estratégia de treino altamente detalhada." },
    { title: "Correção Postural", indicacao: "Pessoas com dores ou desvios de postura", desc: "Foco no fortalecimento de base e melhora técnica dos padrões de movimento." }
  ];

  return (
    <div className="py-32 container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-heading text-brand-white uppercase mb-16 text-center">
        Serviços <span className="text-brand-yellow">Premium</span>
      </h1>
      <div className="space-y-12">
        {servicos.map((servico, i) => (
          <div key={i} className="bg-[#111111] border border-brand-gray/20 p-8 md:p-12 lg:w-3/4 mx-auto hover:border-brand-yellow/30 transition-colors">
            <h2 className="text-3xl font-heading text-brand-white uppercase mb-4">{servico.title}</h2>
            <div className="mb-4">
              <span className="bg-brand-yellow/10 text-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                Indicado para: {servico.indicacao}
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-8">{servico.desc}</p>
            <p className="text-sm text-gray-500 italic mb-6">Valores e disponibilidade sob consulta.</p>
            <button className="bg-transparent border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black font-bold uppercase px-8 py-3 transition-colors text-sm tracking-widest">
              Solicitar Informações
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
