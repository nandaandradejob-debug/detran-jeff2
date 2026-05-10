import { ShieldCheck, FileCheck, Scale, Award } from "lucide-react";
import { motion } from "framer-motion";

const trustSignals = [
  { icon: ShieldCheck, text: "Segurança Jurídica Total" },
  { icon: FileCheck, text: "Processos 100% Regulares" },
  { icon: Scale, text: "Conformidade Técnica" },
  { icon: Award, text: "Atendimento Premium" },
];

const TrustBar = () => {
  return (
    <section className="py-12 border-y border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <signal.icon className="w-8 h-8 text-border/80" strokeWidth={1.5} />
              <span className="font-semibold text-sm tracking-wide uppercase">{signal.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
