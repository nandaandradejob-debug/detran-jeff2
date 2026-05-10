import { ArrowRight, ShieldCheck, Zap, CheckCircle2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "./Services";

const badges = [
  { icon: ShieldCheck, text: "Segurança e Rapidez" },
  { icon: Zap, text: "Resposta em minutos" },
  { icon: CheckCircle2, text: "+500 clientes atendidos" },
  { icon: MapPin, text: "BH e região" },
];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-gradient-hero road-pattern overflow-hidden pt-20 pb-16"
    >
      {/* Decorative blurs */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-cta/15 rounded-full blur-3xl" aria-hidden />

      <div className="container mx-auto px-4 relative z-10 py-8 lg:py-12 mt-4 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Consultoria Veicular - BH E REGIÃO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] text-balance mb-6 drop-shadow-lg"
          >
            Assessoria Veicular de
            <span className="block text-accent">Alto Padrão.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg lg:text-xl text-foreground/90 max-w-2xl mb-8 leading-relaxed drop-shadow-md"
          >
            Assumimos toda a burocracia do seu veículo para que você tenha tranquilidade. Da análise cautelar à regularização completa, oferecemos uma consultoria especializada com total segurança jurídica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="https://wa.me/5531982927747?text=Olá!%20Quero%20um%20orçamento%20gratuito."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-4 rounded-xl shadow-glow hover:shadow-2xl hover:scale-105 transition-all"
            >
              Falar com um Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-accent hover:text-accent text-foreground font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Conhecer Soluções
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-3 bg-background/60 backdrop-blur-md border border-border rounded-xl px-4 py-3 hover:border-accent/60 hover:bg-background/80 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-4.5 h-4.5 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-foreground text-sm italic font-medium leading-tight drop-shadow">{badge.text}</span>
              </div>
            ))}
          </motion.div>
          </div>

          {/* Right column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur-2xl transform translate-x-4 translate-y-4" />
            <img
              src="/mulher-hero.jpg"
              alt="Consultora Veicular"
              className="relative z-10 w-full max-h-[60vh] object-cover rounded-3xl shadow-2xl border-4 border-background/50"
            />
          </motion.div>
        </div>
      </div>

      {/* Marquee at the bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full bg-background/20 border-t border-border/20 backdrop-blur-md py-4 overflow-hidden flex z-20">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...services, ...services].map((service, i) => (
            <div key={`${service.title}-${i}`} className="flex items-center gap-3 mx-8">
              <service.icon className="w-5 h-5 text-accent" />
              <span className="text-foreground/90 font-medium text-base uppercase tracking-wider">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
