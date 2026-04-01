import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";
import property5 from "@/assets/property5.jpg";
import property6 from "@/assets/property6.jpg";

export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  city: string;
  rooms: number;
  area: number;
  floor: number;
  type: "sale" | "rent";
  image: string;
  features: string[];
  description: string;
  furnished: boolean;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Rezidans Dairesi",
    price: 3500000,
    location: "Beşiktaş, İstanbul",
    city: "İstanbul",
    rooms: 3,
    area: 145,
    floor: 8,
    type: "sale",
    image: property1,
    features: ["Balkon", "Havuz", "Otopark", "Güvenlik"],
    description: "Şehir manzaralı, lüks donanımlı modern rezidans dairesi. Merkezi konumda, ulaşıma yakın.",
    furnished: true,
  },
  {
    id: 2,
    title: "Bahçeli Müstakil Ev",
    price: 5200000,
    location: "Çankaya, Ankara",
    city: "Ankara",
    rooms: 5,
    area: 280,
    floor: 2,
    type: "sale",
    image: property2,
    features: ["Bahçe", "Garaj", "Şömine", "Teras"],
    description: "Geniş bahçeli, ferah ve huzurlu bir yaşam alanı sunan müstakil villa.",
    furnished: false,
  },
  {
    id: 3,
    title: "Panoramik Penthouse",
    price: 12500000,
    location: "Levent, İstanbul",
    city: "İstanbul",
    rooms: 4,
    area: 320,
    floor: 25,
    type: "sale",
    image: property3,
    features: ["Teras", "Jakuzi", "Akıllı Ev", "Vale"],
    description: "360 derece şehir manzaralı, ultra lüks penthouse. Akıllı ev sistemleri mevcut.",
    furnished: true,
  },
  {
    id: 4,
    title: "Deniz Manzaralı Villa",
    price: 8750000,
    location: "Bodrum, Muğla",
    city: "Muğla",
    rooms: 6,
    area: 450,
    floor: 2,
    type: "sale",
    image: property4,
    features: ["Havuz", "Bahçe", "Deniz Manzarası", "BBQ"],
    description: "Ege'nin turkuaz sularına bakan, özel havuzlu muhteşem villa.",
    furnished: true,
  },
  {
    id: 5,
    title: "Tarihi Sokakta Daire",
    price: 15000,
    location: "Kadıköy, İstanbul",
    city: "İstanbul",
    rooms: 2,
    area: 95,
    floor: 3,
    type: "rent",
    image: property5,
    features: ["Balkon", "Merkezi Konum", "Metro Yakını"],
    description: "Kadıköy'ün kalbinde, yenilenmiş tarihi binada modern daire.",
    furnished: true,
  },
  {
    id: 6,
    title: "Loft Stüdyo Daire",
    price: 12000,
    location: "Beyoğlu, İstanbul",
    city: "İstanbul",
    rooms: 1,
    area: 75,
    floor: 4,
    type: "rent",
    image: property6,
    features: ["Yüksek Tavan", "Açık Plan", "Eşyalı"],
    description: "Endüstriyel tarzda, yüksek tavanlı şık loft daire. Tam eşyalı.",
    furnished: true,
  },
];
