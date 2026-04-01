import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const Listings = () => {
  const [type, setType] = useState<"all" | "sale" | "rent">("all");
  const [city, setCity] = useState("all");
  const [rooms, setRooms] = useState("all");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let result = [...properties];
    if (type !== "all") result = result.filter((p) => p.type === type);
    if (city !== "all") result = result.filter((p) => p.city === city);
    if (rooms !== "all") result = result.filter((p) => p.rooms === Number(rooms));
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [type, city, rooms, sort]);

  const cities = [...new Set(properties.map((p) => p.city))];

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
              Tüm <span className="text-gradient-primary">İlanlar</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              {filtered.length} ilan bulundu
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-8 p-4 bg-card rounded-2xl shadow-card">
            <div className="flex gap-2">
              {(["all", "sale", "rent"] as const).map((t) => (
                <Button
                  key={t}
                  size="sm"
                  variant={type === t ? "default" : "outline"}
                  onClick={() => setType(t)}
                  className={type === t ? "bg-gradient-primary text-primary-foreground" : ""}
                >
                  {t === "all" ? "Tümü" : t === "sale" ? "Satılık" : "Kiralık"}
                </Button>
              ))}
            </div>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-secondary rounded-lg px-3 py-2 text-sm text-foreground outline-none border border-border"
            >
              <option value="all">Tüm Şehirler</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="bg-secondary rounded-lg px-3 py-2 text-sm text-foreground outline-none border border-border"
            >
              <option value="all">Tüm Odalar</option>
              {[1, 2, 3, 4, 5, 6].map((r) => (
                <option key={r} value={r}>{r} Oda</option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-secondary rounded-lg px-3 py-2 text-sm text-foreground outline-none border border-border ml-auto"
            >
              <option value="newest">En Yeni</option>
              <option value="price-asc">Fiyat (Artan)</option>
              <option value="price-desc">Fiyat (Azalan)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
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

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">Seçilen filtrelere uygun ilan bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Listings;
