import { Calendar, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DateAndPlaceSection = () => {
  return (
    <section className="py-24 bg-white bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 text-center space-y-4">
              <Calendar className="mx-auto h-10 w-10 text-gray-600" />
              <h3 className="font-serif text-2xl font-semibold">Dátum</h3>
              <p className="text-gray-600">15. Júna 2024</p>
              <p className="text-gray-600">16:00</p>
            </CardContent>
          </Card>
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 text-center space-y-4">
              <MapPin className="mx-auto h-10 w-10 text-gray-600" />
              <h3 className="font-serif text-2xl font-semibold">Miesto</h3>
              <p className="text-gray-600">Kaštieľ Mojmírovce</p>
              <p className="text-gray-600">Námestie sv. Ladislava 1</p>
            </CardContent>
          </Card>
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 text-center space-y-4">
              <Heart className="mx-auto h-10 w-10 text-gray-600" />
              <h3 className="font-serif text-2xl font-semibold">Oslava</h3>
              <p className="text-gray-600">Svadobná hostina</p>
              <p className="text-gray-600">& Večerná zábava</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DateAndPlaceSection;