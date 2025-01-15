import { Car, Train, Map, Bus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const travelOptions = [
  {
    title: "Autom",
    icon: Car,
    description: "Z Prahy: 1 hodina cesty po diaľnici D11",
    directions: [
      "Choďte po diaľnici D11 smerom na Hradec Králové",
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

const busSchedule = [
  { time: "13:00", event: "Odchod z Hotela Grand Čáslav" },
  { time: "13:30", event: "Príjazd do kostola v Přelouči" },
  { time: "15:30", event: "Odchod z kostola v Přelouči" },
  { time: "16:00", event: "Príjazd na Samotu Pierre" }
];

const TravelSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Map className="mx-auto h-8 w-8 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">
              Doprava na miesto obradu a hostiny
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Na miesto svadobného obradu sa bez problémov dostanete autom alebo vlakom. Prípadne môžete využiť "Wedding Shuttle" podľa rozvrhu nižšie. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {travelOptions.map((option) => (
              <Card key={option.title} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <option.icon className="mx-auto h-8 w-8 text-[#9b87f5] mb-4" />
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
                          <li key={index} className="text-[#4A5568] flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#9b87f5] mt-2" />
                            <span>{direction}</span>
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

          {/* Bus Schedule Card - Below other transport options */}
          <Card className="bg-gradient-to-br from-[#9b87f5]/10 to-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Bus className="mx-auto h-8 w-8 text-[#9b87f5] mb-4" />
                <h3 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-4">
                "Wedding Shuttle" - svadobná autobusová doprava
                </h3>
                <p className="text-[#4A5568] mb-6 max-w-2xl mx-auto">
                  Pre váš komfort sme zabezpečili autobusovú dopravu medzi všetkými dôležitými miestami
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="space-y-4">
                  {busSchedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="font-medium text-[#9b87f5] min-w-[4.5rem] text-center">
                        {item.time}
                      </div>
                      <div className="text-[#4A5568] flex-1">
                        {item.event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;