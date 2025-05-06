import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RsvpSection = () => {
  return (
    <section className="py-20" id="rsvp">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Info className="mx-auto h-10 w-10 text-gray-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">
              RSVP uzavreté
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Ďakujeme za Váš záujem, možnosť potvrdenia účasti bola ukončená.
              V prípade akýchkoľvek otázok nás neváhajte kontaktovať priamo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
