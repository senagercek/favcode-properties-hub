import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { useFavorites } from "@/contexts/FavoritesContext";

const Favorites = () => {
  const { getFavoriteProperties } = useFavorites();
  const favProperties = getFavoriteProperties();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              <span className="text-gradient-primary">Favorilerim</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              {favProperties.length} ilan favorilere eklendi
            </p>
          </motion.div>

          {favProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favProperties.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Heart className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">Henüz favori ilanınız yok.</p>
              <p className="text-sm text-muted-foreground/60 mt-1">İlanları beğenerek favorilerinize ekleyin.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
