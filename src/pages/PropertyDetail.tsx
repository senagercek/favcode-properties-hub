import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, Heart, Share2, MapPin, BedDouble, Maximize2,
  Building2, Sofa, CheckCircle2, Send
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [liked, setLiked] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-foreground">İlan bulunamadı</h1>
          <Link to="/ilanlar" className="text-primary mt-4 inline-block">İlanlara Dön</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const similar = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3);

  const formatPrice = (price: number) => {
    return price.toLocaleString("tr-TR") + " ₺";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/ilanlar"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            İlanlara Dön
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/7] relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className={property.type === "sale" ? "bg-gradient-primary text-primary-foreground text-sm px-4 py-1" : "bg-gradient-accent text-accent-foreground text-sm px-4 py-1"}>
                  {property.type === "sale" ? "Satılık" : "Kiralık"}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
                </button>
                <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{property.location}</span>
                  </div>
                </div>

                <p className="text-3xl font-extrabold text-primary mb-8">
                  {formatPrice(property.price)}
                  {property.type === "rent" && <span className="text-lg font-normal text-muted-foreground">/ay</span>}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: BedDouble, label: "Oda Sayısı", value: `${property.rooms} Oda` },
                    { icon: Maximize2, label: "Alan", value: `${property.area} m²` },
                    { icon: Building2, label: "Kat", value: `${property.floor}. Kat` },
                    { icon: Sofa, label: "Eşya", value: property.furnished ? "Eşyalı" : "Boş" },
                  ].map((item) => (
                    <div key={item.label} className="bg-secondary rounded-xl p-4 text-center">
                      <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-3">Açıklama</h2>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Özellikler</h2>
                  <div className="flex flex-wrap gap-3">
                    {property.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-card rounded-2xl shadow-card p-6 sticky top-24">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Talep Gönder</h3>
                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      className="bg-secondary rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      className="bg-secondary rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <input
                      type="tel"
                      placeholder="Telefon Numaranız"
                      className="bg-secondary rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <textarea
                      placeholder="Mesajınız..."
                      rows={4}
                      className="bg-secondary rounded-xl px-4 py-3 text-sm text-foreground outline-none resize-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Button className="bg-gradient-primary text-primary-foreground shadow-primary-glow gap-2 h-12 mt-1">
                      <Send className="h-4 w-4" />
                      Talep Gönder
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {similar.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">Benzer İlanlar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {similar.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
