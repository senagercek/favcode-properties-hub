import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { CompareProvider } from "@/contexts/CompareContext";
import Index from "./pages/Index.tsx";
import Listings from "./pages/Listings.tsx";
import PropertyDetail from "./pages/PropertyDetail.tsx";
import Favorites from "./pages/Favorites.tsx";
import Compare from "./pages/Compare.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <CompareProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ilanlar" element={<Listings />} />
              <Route path="/ilan/:id" element={<PropertyDetail />} />
              <Route path="/favoriler" element={<Favorites />} />
              <Route path="/karsilastir" element={<Compare />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CompareProvider>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
