import { motion } from "framer-motion";
import { Zap, Shield, Camera, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Hızlı Satış",
    description: "Profesyonel pazarlama stratejileriyle ilanlarınızı hızlıca alıcıyla buluşturuyoruz.",
  },
  {
    icon: Shield,
    title: "Güvenilir Danışmanlık",
    description: "Uzman ekibimiz her adımda yanınızda, şeffaf ve güvenilir hizmet anlayışıyla.",
  },
  {
    icon: Camera,
    title: "Profesyonel Fotoğraf",
    description: "İlanlarınızı en iyi şekilde yansıtan profesyonel fotoğraf ve video çekimi.",
  },
  {
    icon: HeadphonesIcon,
    title: "7/24 Destek",
    description: "Her sorunuza anında yanıt, size özel danışmanlık hizmetimiz her zaman aktif.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Neden <span className="text-gradient-primary">Biz?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Sektördeki farkımızı yaratan özelliklerimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary group-hover:shadow-primary-glow transition-all duration-300">
                <reason.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
