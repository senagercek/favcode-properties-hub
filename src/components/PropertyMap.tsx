import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Property } from "@/data/properties";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Approximate coordinates for cities
const cityCoords: Record<string, [number, number]> = {
  "İstanbul": [41.0082, 28.9784],
  "Ankara": [39.9334, 32.8597],
  "İzmir": [38.4237, 27.1428],
  "Muğla": [37.2153, 28.3636],
};

const locationOffsets: Record<string, [number, number]> = {
  "Beşiktaş, İstanbul": [41.0430, 29.0054],
  "Levent, İstanbul": [41.0819, 29.0133],
  "Kadıköy, İstanbul": [40.9819, 29.0290],
  "Beyoğlu, İstanbul": [41.0370, 28.9770],
  "Çankaya, Ankara": [39.9208, 32.8541],
  "Bodrum, Muğla": [37.0346, 27.4305],
};

const getCoords = (property: Property): [number, number] => {
  return locationOffsets[property.location] || cityCoords[property.city] || [39.9, 32.8];
};

const formatPrice = (price: number) => {
  if (price >= 1000000) return `${(price / 1000000).toFixed(1)}M ₺`;
  if (price >= 1000) return `${(price / 1000).toFixed(0)}K ₺`;
  return `${price.toLocaleString("tr-TR")} ₺`;
};

const PropertyMap = ({ properties }: { properties: Property[] }) => {
  const center: [number, number] = properties.length > 0
    ? getCoords(properties[0])
    : [39.9, 32.8];

  return (
    <div className="rounded-2xl overflow-hidden shadow-card h-[500px]">
      <MapContainer center={center} zoom={6} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((p) => {
          const coords = getCoords(p);
          return (
            <Marker key={p.id} position={coords}>
              <Popup>
                <div className="min-w-[180px]">
                  <img src={p.image} alt={p.title} className="w-full h-24 object-cover rounded mb-2" />
                  <p className="font-semibold text-sm">{p.title}</p>
                  <p className="text-primary font-bold text-sm">{formatPrice(p.price)}</p>
                  <p className="text-xs text-muted-foreground mb-2">{p.location}</p>
                  <Link to={`/ilan/${p.id}`} className="text-xs text-primary font-medium hover:underline">
                    İlanı Gör →
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
