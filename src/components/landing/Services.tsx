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
    desc: "Assessoria completa de ponta a ponta para transferência, garantindo segurança jurídica na compra ou venda.",
  },
  {
    icon: ClipboardList,
    title: "Primeiro Emplacamento",
    desc: "Processo ágil para o seu veículo novo rodar em total conformidade com as exigências do Detran.",
  },
  {
    icon: RefreshCw,
    title: "Licenciamento Anual (CRLV)",
    desc: "Atualização do seu documento de rodagem anual de forma remota, rápida e sem necessidade de enfrentar filas.",
  },
  {
    icon: FileText,
    title: "2ª Via de Documentos",
    desc: "Emissão ágil de segundas vias para manter a conformidade do seu prontuário sem estresse.",
  },
  {
    icon: Ban,
    title: "Baixa de Restrições",
    desc: "Análise e regularização de pendências administrativas, multas e restrições legais do seu prontuário.",
  },
  {
    icon: Tag,
    title: "Placas Automotivas",
    desc: "Fornecimento e instalação de placas padrão Mercosul com total rigor técnico e homologação.",
  },
  {
    icon: Truck,
    title: "Gestão de Frota",
    desc: "Terceirização completa da gestão documental da sua frota comercial, focada em eficiência e compliance.",
  },
  {
    icon: Scale,
    title: "Recursos de Multas",
    desc: "Análise e defesa especializada para recursos de multas e pontuação na CNH.",
  },
  {
    icon: ClipboardCheck,
    title: "Pré Vistoria",
    desc: "Análise cautelar rigorosa para atestar a procedência e a integridade estrutural do veículo antes da negociação.",
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
