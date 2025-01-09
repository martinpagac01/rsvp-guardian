import HeroSection from "@/components/sections/HeroSection";
import DateAndPlaceSection from "@/components/sections/DateAndPlaceSection";
import TravelSection from "@/components/sections/TravelSection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import DressCodeSection from "@/components/sections/DressCodeSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import RsvpSection from "@/components/sections/RsvpSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-background">
      <HeroSection />
      <DateAndPlaceSection />
      <TravelSection />
      <AccommodationSection />
      <DressCodeSection />
      <FaqSection />
      <ContactSection />
      <RsvpSection />
      <FooterSection />
    </div>
  );
};

export default Index;