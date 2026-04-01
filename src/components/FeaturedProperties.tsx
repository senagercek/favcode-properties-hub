import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

const FeaturedProperties = () => {
  const featured = properties.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Öne Çıkan <span className="text-gradient-primary">İlanlar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            En çok ilgi gören ve özenle seçilmiş emlak fırsatları
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/ilanlar">
              Tüm İlanları Gör
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
