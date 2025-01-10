import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import DateAndPlaceSection from "@/components/sections/DateAndPlaceSection";
import TravelSection from "@/components/sections/TravelSection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import DressCodeSection from "@/components/sections/DressCodeSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import RsvpSection from "@/components/sections/RsvpSection";
import { cn } from "@/lib/utils";

const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#F5F3FF]/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#E2E8F0]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="font-serif text-lg text-[#1A1F2C]">V&M</span>
            <div className="hidden md:flex space-x-8">
              <a href="#program" className="text-[#4A5568] hover:text-[#9b87f5] transition-colors">Program</a>
              <a href="#travel" className="text-[#4A5568] hover:text-[#9b87f5] transition-colors">Doprava</a>
              <a href="#accommodation" className="text-[#4A5568] hover:text-[#9b87f5] transition-colors">Ubytovanie</a>
              <a href="#dresscode" className="text-[#4A5568] hover:text-[#9b87f5] transition-colors">Dress Code</a>
              <a href="#faq" className="text-[#4A5568] hover:text-[#9b87f5] transition-colors">FAQ</a>
              <a href="#contact" className="text-[#4A5568] hover:text-[#9b87f5] transition-colors">Kontakt</a>
            </div>
            <a href="#rsvp">
              <button className="px-4 py-2 bg-[#9b87f5] text-white rounded-lg text-sm font-medium hover:bg-[#8B5CF6] transition-colors">
                Potvrdiť účasť
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="pt-16"> {/* Offset for fixed navbar */}
        <HeroSection />
        <div id="program">
          <DateAndPlaceSection />
        </div>
        <div id="travel" className={cn("section-wrapper", "bg-white")}>
          <TravelSection />
        </div>
        <div id="accommodation" className={cn("section-wrapper", "bg-[#F5F3FF]/30")}>
          <AccommodationSection />
        </div>
        <div id="dresscode" className={cn("section-wrapper", "bg-white")}>
          <DressCodeSection />
        </div>
        <div id="faq" className={cn("section-wrapper", "bg-[#F5F3FF]/30")}>
          <FaqSection />
        </div>
        <div id="contact" className={cn("section-wrapper", "bg-white")}>
          <ContactSection />
        </div>
        <div id="rsvp" className={cn("section-wrapper", "bg-gradient-to-b from-[#F5F3FF] to-[#9b87f5]/10")}>
          <RsvpSection />
        </div>
      </div>
      <footer className="py-4 text-center text-[#9b87f5]">
        <p className="text-sm">Veronika & Martin</p>
      </footer>
    </main>
  );
};

export default Index;