import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DateAndPlaceSection = () => {
  return (
    <section className="py-16 bg-[#F5F3FF]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#1A1F2C]">Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <Calendar className="mx-auto h-8 w-8 text-[#9b87f5]" />
              <h3 className="font-serif text-xl font-medium text-[#1A1F2C]">Svadobný obrad</h3>
              <div className="space-y-2 text-[#4A5568]">
                <p>Evanjelický kostol Přelouč</p>
                <p>Českobratská 53501</p>
                <p className="font-medium text-[#9b87f5]">13:00 - 14:00</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <MapPin className="mx-auto h-8 w-8 text-[#9b87f5]" />
              <h3 className="font-serif text-xl font-medium text-[#1A1F2C]">Svadobná hostina</h3>
              <div className="space-y-2 text-[#4A5568]">
                <p>Samota Pierre</p>
                <p>Podhořany u Ronova 151</p>
                <p className="font-medium text-[#9b87f5]">14:30 - 14:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
            asChild
          >
            <a
              href="https://calendar.google.com/calendar/r/eventedit?text=Svadba%20Veroniky%20a%20Martina&dates=20240715T110000Z/20240715T220000Z&details=Svadobný%20obrad:%2013:00%20-%2014:00%20v%20Evanjelickom%20kostole%20Přelouč%0ASvadobná%20hostina:%2014:30%20-%2014:00%20v%20Samota%20Pierre&location=Evanjelický%20kostol%20Přelouč,%20Českobratská%2053501"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Pridať do kalendára
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DateAndPlaceSection;