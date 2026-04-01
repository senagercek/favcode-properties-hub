import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, MessageCircle, Briefcase, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="FavCode Agency" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Modern emlak çözümleriyle hayalinizdeki eve ulaşmanızı sağlıyoruz. Güvenilir, hızlı ve profesyonel hizmet.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/60 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Ana Sayfa", path: "/" },
                { label: "İlanlar", path: "/ilanlar" },
                { label: "Hakkımızda", path: "/hakkimizda" },
                { label: "İletişim", path: "/iletisim" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İlan Türleri</h4>
            <div className="flex flex-col gap-3">
              {["Satılık Daire", "Kiralık Daire", "Satılık Villa", "Ticari Gayrimenkul"].map((item) => (
                <span key={item} className="text-sm text-primary-foreground/60">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Levent Mahallesi, Teknoloji Cad. No:42, İstanbul</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 shrink-0" />
                <span>0850 123 45 67</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@favcode.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © 2026 FavCode Agency. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
