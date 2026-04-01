import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Ana Sayfa", path: "/" },
  { label: "İlanlar", path: "/ilanlar" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "İletişim", path: "/iletisim" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FavCode Agency" className="h-8 lg:h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            <span>0850 123 45 67</span>
          </Button>
          <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-primary-glow">
            Talep Gönder
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="bg-gradient-primary text-primary-foreground mt-2">
              Talep Gönder
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
