import { Car, Train, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const travelOptions = [
  {
    title: "Autom",
    icon: Car,
    description: "Z Prahy: 1 hodina cesty po diaľnici D11",
    directions: [
      "Sledujte diaľnicu D11 smerom na Hradec Králové",
      "Zíďte na výjazde 84 smerom na Přelouč",
      "Pokračujte po ceste II/333"
    ],
    parking: "Bezplatné parkovanie je k dispozícii pri kostole aj na mieste hostiny"
  },
  {
    title: "Vlakom",
    icon: Train,
    description: "Priame spojenie z Prahy každú hodinu",
    directions: [
      "Z Praha hl.n. smerom na Pardubice",
      "Vystúpte na stanici Přelouč",
      "Od stanice 10 minút pešo ku kostolu"
    ],
    timetable: "Vlaky premávajú každú hodinu od 5:00 do 23:00"
  }
];

const TravelSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Map className="mx-auto h-10 w-10 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">
              Ako sa k nám dostať
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Nájdite najlepší spôsob dopravy na našu svadbu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {travelOptions.map((option) => (
              <Card key={option.title} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <option.icon className="mx-auto h-10 w-10 text-[#9b87f5] mb-4" />
                    <h3 className="font-serif text-xl font-medium text-[#1A1F2C] mb-2">
                      {option.title}
                    </h3>
                    <p className="text-[#4A5568]">{option.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#1A1F2C] mb-2">Navigácia:</h4>
                      <ul className="space-y-2">
                        {option.directions.map((direction, index) => (
                          <li key={index} className="text-[#4A5568] flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#9b87f5]" />
                            {direction}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {option.parking && (
                      <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                        <p className="text-[#4A5568]">
                          <span className="font-medium text-[#1A1F2C]">Parkovanie: </span>
                          {option.parking}
                        </p>
                      </div>
                    )}
                    
                    {option.timetable && (
                      <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                        <p className="text-[#4A5568]">
                          <span className="font-medium text-[#1A1F2C]">Cestovný poriadok: </span>
                          {option.timetable}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
              asChild
            >
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Otvoriť v Google Maps
                <Map className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;