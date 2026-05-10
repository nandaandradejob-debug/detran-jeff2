import {
  Car,
  ClipboardList,
  RefreshCw,
  FileText,
  Ban,
  Tag,
  Truck,
  Scale,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export const services = [
  {
    icon: Car,
    title: "Transferência de Propriedade",
    desc: "Transferimos a propriedade do seu veículo com total segurança jurídica, blindando você contra fraudes e pendências de terceiros.",
  },
  {
    icon: ClipboardList,
    title: "Primeiro Emplacamento",
    desc: "Regularizamos seu veículo zero km com rapidez e total conformidade para que você rode com tranquilidade.",
  },
  {
    icon: RefreshCw,
    title: "Licenciamento Anual (CRLV)",
    desc: "Mantenha seu veículo regularizado sem sair de casa. Cuidamos de todo o processo de emissão do CRLV digital.",
  },
  {
    icon: FileText,
    title: "2ª Via de Documentos",
    desc: "Recuperação imediata e emissão de segundas vias para manter seu prontuário impecável.",
  },
  {
    icon: Ban,
    title: "Baixa de Restrições",
    desc: "Análise aprofundada e resolução definitiva de bloqueios administrativos, multas e restrições legais.",
  },
  {
    icon: Tag,
    title: "Placas Automotivas",
    desc: "Emissão e estampagem de placas Mercosul com homologação oficial, seguindo rigorosos padrões técnicos.",
  },
  {
    icon: Truck,
    title: "Gestão de Frota",
    desc: "Terceirize a burocracia da sua empresa. Gestão documental estratégica para maximizar a eficiência da sua frota.",
  },
  {
    icon: Scale,
    title: "Recursos de Multas",
    desc: "Defesa especializada para proteção da sua CNH. Análise técnica de infrações e elaboração de recursos consistentes.",
  },
  {
    icon: ClipboardCheck,
    title: "Pré Vistoria",
    desc: "Evite prejuízos. Avaliação técnica minuciosa para garantir a procedência e integridade do veículo antes da compra.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Nossos serviços
          </span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary leading-tight mb-5 text-balance">
            Nossas Soluções <span className="text-accent">Especializadas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descomplicamos a burocracia do trânsito para que você foque no que realmente importa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-accent hover:shadow-card hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary group-hover:bg-accent transition-colors flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
