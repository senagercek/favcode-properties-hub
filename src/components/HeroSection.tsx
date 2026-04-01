import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Hayalinizdeki{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Evi
            </span>{" "}
            Bulun
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Türkiye'nin en seçkin emlak portföyüyle tanışın. Satılık ve kiralık binlerce ilan arasından size en uygun olanı keşfedin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-background/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-card-hover"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <div className="flex-1">
                <label className="text-xs font-medium text-muted-foreground">Konum</label>
                <select className="w-full bg-transparent text-sm font-medium text-foreground outline-none">
                  <option>Tüm Şehirler</option>
                  <option>İstanbul</option>
                  <option>Ankara</option>
                  <option>İzmir</option>
                  <option>Muğla</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3">
              <DollarSign className="h-5 w-5 text-primary shrink-0" />
              <div className="flex-1">
                <label className="text-xs font-medium text-muted-foreground">Fiyat Aralığı</label>
                <select className="w-full bg-transparent text-sm font-medium text-foreground outline-none">
                  <option>Tümü</option>
                  <option>0 - 2M ₺</option>
                  <option>2M - 5M ₺</option>
                  <option>5M - 10M ₺</option>
                  <option>10M+ ₺</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3">
              <Home className="h-5 w-5 text-primary shrink-0" />
              <div className="flex-1">
                <label className="text-xs font-medium text-muted-foreground">Oda Sayısı</label>
                <select className="w-full bg-transparent text-sm font-medium text-foreground outline-none">
                  <option>Tümü</option>
                  <option>1+1</option>
                  <option>2+1</option>
                  <option>3+1</option>
                  <option>4+1</option>
                  <option>5+</option>
                </select>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-primary-glow h-full min-h-[56px] gap-2 text-base font-semibold rounded-xl"
            >
              <Search className="h-5 w-5" />
              Ara
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
