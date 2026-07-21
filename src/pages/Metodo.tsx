

export const Metodo = () => {
  const steps = [
    { num: "01", title: "Avaliação inicial", desc: "Análise minuciosa do objetivo, rotina, histórico de lesões, limitações de movimento e nível de condicionamento atual." },
    { num: "02", title: "Definição de Objetivos", desc: "Alinhamento das expectativas e estabelecimento de metas claras, mensuráveis e realistas a curto, médio e longo prazo." },
    { num: "03", title: "Planejamento Individualizado", desc: "Construção de um programa de treinamento específico, periodizado de acordo com o calendário e rotina do aluno." },
    { num: "04", title: "Execução Acompanhada", desc: "Foco absoluto na correção técnica, cadência, controle de intensidade e segurança durante todos os exercícios." },
    { num: "05", title: "Monitoramento e Suporte", desc: "Acompanhamento constante da evolução, com suporte para dúvidas, ajustes rápidos e motivação contínua." },
    { num: "06", title: "Reavaliação e Ajustes", desc: "Ciclos periódicos de reavaliação para medir os resultados alcançados e atualizar as estratégias de treino." }
  ];

  return (
    <div className="py-32 container mx-auto px-6">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-heading text-brand-white uppercase mb-6">
          Um Método Construído Para <span className="text-brand-yellow">Gerar Evolução</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          O treinamento não é um palpite. É um sistema estruturado onde cada detalhe importa para garantir a sua transformação física e mental.
        </p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto relative">
        {/* Linha do tempo visual */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-gray/30 hidden md:block"></div>
        
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative group">
            <div className="bg-[#0d0d0d] z-10 hidden md:block py-2">
              <div className="w-16 h-16 rounded-full bg-[#111111] border border-brand-yellow flex items-center justify-center text-xl font-heading text-brand-yellow group-hover:scale-110 transition-transform">
                {step.num}
              </div>
            </div>
            
            <div className="bg-[#111111] p-8 border border-brand-gray/20 hover:border-brand-yellow/30 transition-colors flex-1 w-full">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-brand-white mb-3">
                <span className="text-brand-yellow mr-3 md:hidden">{step.num}.</span>
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
