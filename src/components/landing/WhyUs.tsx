import { Landmark, Zap, MessageCircleHeart, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Landmark,
    title: "Segurança e Conformidade em Cada Processo",
    desc: "Atuação pautada na legalidade e transparência, garantindo respaldo técnico em todas as etapas.",
  },
  {
    icon: Zap,
    title: "Velocidade na Execução",
    desc: "Tratamos seu processo como prioridade, otimizando cada etapa junto aos órgãos de trânsito.",
  },
  {
    icon: MessageCircleHeart,
    title: "Suporte Direto e Especializado",
    desc: "Sem robôs ou respostas prontas. Você fala diretamente com consultores que entendem e resolvem o problema.",
  },
  {
    icon: MapPinned,
    title: "Domínio do Ecossistema Local",
    desc: "Amplo relacionamento e conhecimento prático dos trâmites no Detran-MG para uma resolução imediata.",
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
