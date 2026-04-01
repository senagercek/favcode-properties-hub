import { motion } from "framer-motion";
import { GitCompareArrows, X, BedDouble, Maximize2, Building2, Sofa, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCompare } from "@/contexts/CompareContext";

const Compare = () => {
  const { getCompareProperties, toggleCompare, clearCompare } = useCompare();
  const items = getCompareProperties();

  const formatPrice = (price: number) => {
    return price.toLocaleString("tr-TR") + " ₺";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                İlan <span className="text-gradient-primary">Karşılaştırma</span>
              </h1>
              <p className="text-muted-foreground">{items.length} ilan karşılaştırılıyor</p>
            </div>
            {items.length > 0 && (
              <Button variant="outline" size="sm" onClick={clearCompare}>
                Temizle
              </Button>
            )}
          </motion.div>

          {items.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground bg-secondary rounded-tl-xl"></th>
                    {items.map((p) => (
                      <th key={p.id} className="p-4 bg-secondary min-w-[250px] last:rounded-tr-xl">
                        <div className="relative">
                          <button
                            onClick={() => toggleCompare(p.id)}
                            className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20"
                          >
                            <X className="h-3 w-3" />
                          </button>
                          <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                          <Link to={`/ilan/${p.id}`} className="text-sm font-semibold text-foreground hover:text-primary">
                            {p.title}
                          </Link>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Fiyat", render: (p: typeof items[0]) => <span className="font-bold text-primary">{formatPrice(p.price)}{p.type === "rent" ? "/ay" : ""}</span> },
                    { label: "Tür", render: (p: typeof items[0]) => p.type === "sale" ? "Satılık" : "Kiralık" },
                    { label: "Konum", render: (p: typeof items[0]) => p.location },
                    { label: "Oda Sayısı", render: (p: typeof items[0]) => `${p.rooms} Oda` },
                    { label: "Alan", render: (p: typeof items[0]) => `${p.area} m²` },
                    { label: "Kat", render: (p: typeof items[0]) => `${p.floor}. Kat` },
                    { label: "Eşya", render: (p: typeof items[0]) => p.furnished ? "Eşyalı" : "Boş" },
                    { label: "Özellikler", render: (p: typeof items[0]) => (
                      <div className="flex flex-wrap gap-1">
                        {p.features.map((f) => (
                          <span key={f} className="text-xs bg-secondary rounded px-2 py-0.5 flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                            {f}
                          </span>
                        ))}
                      </div>
                    )},
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <td className="p-4 text-sm font-medium text-muted-foreground whitespace-nowrap">{row.label}</td>
                      {items.map((p) => (
                        <td key={p.id} className="p-4 text-sm text-foreground">{row.render(p)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-20">
              <GitCompareArrows className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">Karşılaştırma listeniz boş.</p>
              <p className="text-sm text-muted-foreground/60 mt-1">İlanlar sayfasından en fazla 3 ilan ekleyebilirsiniz.</p>
              <Button asChild className="mt-4 bg-gradient-primary text-primary-foreground">
                <Link to="/ilanlar">İlanları Gör</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
