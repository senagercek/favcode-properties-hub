import { Heart, MapPin, BedDouble, Maximize2, GitCompareArrows } from "lucide-react";
import { Link } from "react-router-dom";
import type { Property } from "@/data/properties";
import { Badge } from "@/components/ui/badge";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCompare } from "@/contexts/CompareContext";
import { toast } from "@/hooks/use-toast";

const PropertyCard = ({ property }: { property: Property }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isComparing, toggleCompare, compareIds } = useCompare();
  const liked = isFavorite(property.id);
  const comparing = isComparing(property.id);

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `${(price / 1000000).toFixed(1)}M ₺`;
    if (price >= 1000) return `${(price / 1000).toFixed(0)}K ₺`;
    return `${price.toLocaleString("tr-TR")} ₺`;
  };

  return (
    <Link
      to={`/ilan/${property.id}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={property.type === "sale" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-accent text-accent-foreground"}>
            {property.type === "sale" ? "Satılık" : "Kiralık"}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-1.5">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!comparing && compareIds.length >= 3) {
                toast({ title: "En fazla 3 ilan karşılaştırabilirsiniz", variant: "destructive" });
                return;
              }
              toggleCompare(property.id);
              toast({ title: comparing ? "Karşılaştırmadan çıkarıldı" : "Karşılaştırmaya eklendi" });
            }}
            className={`w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
              comparing ? "bg-primary text-primary-foreground" : "bg-background/80 hover:bg-background"
            }`}
          >
            <GitCompareArrows className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(property.id);
            }}
            className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-background"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${liked ? "fill-destructive text-destructive" : "text-muted-foreground"}`}
            />
          </button>
        </div>
      </div>

      <div className="p-5">
        <p className="text-2xl font-bold text-foreground mb-1">
          {formatPrice(property.price)}
          {property.type === "rent" && <span className="text-sm font-normal text-muted-foreground">/ay</span>}
        </p>
        <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4" />
            <span>{property.rooms} Oda</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
