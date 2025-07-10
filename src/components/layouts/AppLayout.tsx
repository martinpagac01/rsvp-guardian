import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { CalendarClock, Home, Menu, Puzzle, UtensilsCrossed, Camera } from "lucide-react";

const navLinks = [
  { to: "/app/schedule", label: "Harmonogram", icon: CalendarClock },
  { to: "/app/menu", label: "Menu", icon: UtensilsCrossed },
  { to: "/app/gallery", label: "Galéria", icon: Camera },
  { to: "/app/quiz", label: "Kvíz", icon: Puzzle },
  { to: "/app", label: "Domov", icon: Home },
];

const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen font-sans">
      {/* Background Image & Gradient */}
      <div 
        className="absolute inset-0 bg-[url('/bg_pattern.jpg')] bg-cover bg-center opacity-85 object-cover"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"
      />
      
      {/* Foreground Content */}
      <div className="relative flex flex-col h-dvh">
        <Header />
        <main className="flex-1 overflow-y-auto pb-20 pt-16">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
        <div className="fixed bottom-0 left-0 right-0 z-20">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
