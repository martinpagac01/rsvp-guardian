import { Calendar, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DateAndPlaceSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="glass-panel overflow-hidden">
            <CardContent className="pt-6 text-center space-y-4 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]" />
              <Calendar className="mx-auto h-10 w-10 text-[#7E69AB]" />
              <h3 className="font-serif text-2xl font-semibold text-[#1A1F2C]">Dátum</h3>
              <p className="text-[#403E43]">15. Júna 2024</p>
              <p className="text-[#403E43]">16:00</p>
            </CardContent>
          </Card>
          <Card className="glass-panel overflow-hidden">
            <CardContent className="pt-6 text-center space-y-4 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]" />
              <MapPin className="mx-auto h-10 w-10 text-[#7E69AB]" />
              <h3 className="font-serif text-2xl font-semibold text-[#1A1F2C]">Miesto</h3>
              <p className="text-[#403E43]">Kaštieľ Mojmírovce</p>
              <p className="text-[#403E43]">Námestie sv. Ladislava 1</p>
            </CardContent>
          </Card>
          <Card className="glass-panel overflow-hidden">
            <CardContent className="pt-6 text-center space-y-4 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]" />
              <Heart className="mx-auto h-10 w-10 text-[#7E69AB]" />
              <h3 className="font-serif text-2xl font-semibold text-[#1A1F2C]">Oslava</h3>
              <p className="text-[#403E43]">Svadobná hostina</p>
              <p className="text-[#403E43]">& Večerná zábava</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DateAndPlaceSection;