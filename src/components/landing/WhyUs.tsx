import { Landmark, Zap, MessageCircleHeart, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Landmark,
    title: "Segurança Jurídica",
    desc: "Atuamos com total transparência e rigor técnico, garantindo que seu veículo esteja 100% regularizado e livre de riscos.",
  },
  {
    icon: Zap,
    title: "Agilidade sem Burocracia",
    desc: "Otimizamos cada etapa do seu processo nos órgãos de trânsito para entregar resultados no menor tempo possível.",
  },
  {
    icon: MessageCircleHeart,
    title: "Atendimento Premium",
    desc: "Esqueça robôs e respostas genéricas. Aqui você tem acesso direto a especialistas focados em resolver o seu problema.",
  },
  {
    icon: MapPinned,
    title: "Especialistas no Detran-MG",
    desc: "Anos de experiência com os trâmites locais nos permitem destravar processos com máxima eficiência e rapidez.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-background text-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" aria-hidden />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Diferenciais
          </span>
          <h2 className="font-display text-5xl lg:text-6xl leading-tight text-balance">
            Excelência em <span className="text-accent">Assessoria Veicular</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-accent/50 hover:bg-white/[0.07] transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 shadow-glow">
                <pillar.icon className="w-7 h-7 text-primary" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">{pillar.title}</h3>
                <p className="text-foreground/85 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
