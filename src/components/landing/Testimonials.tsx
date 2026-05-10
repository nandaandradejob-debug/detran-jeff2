import { Star, Quote, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Marcos T.",
    city: "Belo Horizonte",
    text: "A equipe cuidou da transferência da minha caminhonete de forma impecável. Não precisei pisar no Detran, resolveram tudo digitalmente e o documento saiu antes do prazo estipulado.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Amaro R.",
    city: "Belo Horizonte",
    text: "Tive um problema complexo com meu veículo antigo. Eles não só resolveram a pendência com agilidade, como me deram suporte durante todo o processo.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/86.jpg",
    name: "Lígia M.",
    city: "Belo Horizonte",
    text: "Se não fosse a pré-vistoria da Jeff Veicular, eu teria comprado um carro cheio de problemas que eu nem imaginava. Me livrei de um prejuízo grande.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary leading-tight">
            O que nossos <span className="text-accent">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/15" strokeWidth={2} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-base leading-relaxed mb-7">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-border">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.city}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <BadgeCheck className="w-6 h-6 text-whatsapp mb-1" />
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
