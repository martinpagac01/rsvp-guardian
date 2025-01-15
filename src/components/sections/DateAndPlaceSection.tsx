import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DateAndPlaceSection = () => {
  return (
    <section className="py-16 bg-[#F5F3FF]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calendar className="mx-auto h-8 w-8 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">Program</h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Svadobný obrad a hostina sa uskutočnia na dvoch rôznych miestach. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-4">Svadobný obrad</h3>
                  <p className="text-[#4A5568] mb-2">Evanjelický kostol Přelouč</p>
                  <p className="text-[#4A5568]">Českobratská 53501</p>
                  <p className="font-medium text-[#9b87f5] mt-4">14:00 - 15:00</p>
                  <hr className="my-6 border-t border-[#E2E8F0]" />
                  <a 
                    href="https://maps.app.goo.gl/KWXd1dWDvbvtpocn7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#9b87f5] hover:underline"
                  >
                    Zobraziť na Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-4">Svadobná hostina</h3>
                  <p className="text-[#4A5568] mb-2">Samota Pierre</p>
                  <p className="text-[#4A5568]">Podhořany u Ronova 151</p>
                  <p className="font-medium text-[#9b87f5] mt-4">od 15:30</p>
                  <hr className="my-6 border-t border-[#E2E8F0]" />
                  <a 
                    href="https://maps.app.goo.gl/KWXd1dWDvbvtpocn7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#9b87f5] hover:underline"
                  >
                    Zobraziť na Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
            asChild
          >
            <a
              href="https://calendar.google.com/calendar/r/eventedit?text=Svadba%20Veroniky%20a%20Martina&dates=20240715T120000Z/20240715T230000Z&details=Svadobný%20obrad:%2014:00%20-%2015:00%20v%20Evanjelickom%20kostole%20Přelouč%0ASvadobná%20hostina:%20od%2015:30%20na%20Samote%20Pierre&location=Evanjelický%20kostol%20Přelouč,%20Českobratská%2053501"
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