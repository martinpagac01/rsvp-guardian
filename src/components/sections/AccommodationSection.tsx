import { Bed, ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const accommodations = [
  {
    name: "Hotel Grand",
    description: "Najbližší hotel k miestu konania svadby, 10 minút jazdy autom, ideálny pomer cena/výkon",
    address: "Čáslav, Česká republika",
    price: "od 1690,- Kč za noc",
    link: "https://www.grandcaslav.cz/cs/",
    features: ["Wi-Fi", "Parkovanie zdarma", "Raňajky v cene"],
    recommended: true
  },
  {
    name: "Ubytovanie u Horských",
    description: "Útulný penzión v centre mesta, v pešej vzdialenosti od Hotelu Grand",
    address: "Čáslav, Česká republika",
    price: "od 1312,- Kč za noc",
    link: "https://www.booking.com/hotel/cz/ubytovani-u-horskych.cs.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDqIAAQGYAQW4AQfIAQzYAQHoAQH4AQyIAgGoAgO4Asicm7wGwAIB0gIkOWE4NjI0ZWUtYzk0NC00ODFkLWI0NGYtNGU2ZWZlNmRkOTk32AIG4AIB&sid=4d81d0183c67a5e052d665c6087d5788&atlas_src=hp_iw_title&checkin=2025-07-12&checkout=2025-07-13&dist=0&group_adults=2&group_children=0&no_rooms=1&room1=A%2CA&sb_price_type=total&srepoch=1736888350&srpvid=f46092b456cc014e&type=total",
    features: ["Wi-Fi", "Parkovanie zdarma"],
    recommended: false
  }
];

const AccommodationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Bed className="mx-auto h-8 w-8 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">Ubytovanie</h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Ubytovanie priamo na mieste svadobnej hostiny je zabezpečené len pre limitovaný počet hostí. Informáciu o tom, či pre vás máme miesto priamo tam sa dozviete pri potvrdzovaní účasti. 
              Pre váš komfort sme pripravili zoznam odporúčaných ubytovaní v blízkosti svadobného miesta. Odporúčame rezervovať ho v dostatočnom predstihu. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodations.map((accommodation) => (
              <Card 
                key={accommodation.name} 
                className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  accommodation.recommended ? 'ring-2 ring-[#9b87f5] ring-opacity-50' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-4">{accommodation.name}</h3>
                    {accommodation.recommended && (
                      <div className="flex items-center text-[#9b87f5] text-sm font-medium">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Odporúčané
                      </div>
                    )}
                  </div>
                  <p className="text-[#4A5568] mb-4">{accommodation.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-[#4A5568]">{accommodation.address}</p>
                    <p className="font-medium text-[#9b87f5]">{accommodation.price}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {accommodation.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-[#F7F9FC] text-[#4A5568] text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                    <a
                      href={accommodation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#9b87f5] hover:underline"
                    >
                      Rezervovať
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                    {accommodation.name === "Hotel Grand" && (
                      <>
                        <div className="mt-4 p-4 bg-[#F7F9FC] rounded-lg">
                          <p className="text-[#4A5568] font-medium mb-2">
                            Dostupné izby: <span className="text-[#9b87f5]">7</span>
                          </p>
                          <p className="text-[#4A5568] text-sm">
                            Zostávajúce izby sa rýchlo vypredávajú. Odporúčame rezervovať čo najskôr. Celý hotel je rezervovaný pre našich svadobných hostí a máme 10% zľavu z cenníkovej ceny ubytovania. Pre rezerváciu kontaktujte recepciu hotela. Nie je možné rezervovať online.
                          </p>
                        </div>
                      </>
                    )}
                    {accommodation.name === "Ubytovanie u Horských" && (
                      <p className="text-[#4A5568] text-sm mt-4">
                        
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Message */}
          <div className="mt-12">
            <div className="bg-[#FFF5F5] border border-[#FED7D7] rounded-lg p-6 flex items-start gap-4">
              <div className="text-[#E53E3E] text-xl font-bold">!</div>
              <div className="text-[#4A5568]">
                Zvážte prenocovanie v blízkom okolí Čáslavy. Z Čáslavy odchádza aj "Wedding Shuttle", ktorý môžu využiť všetci hostia svadby. V prípade, že zvolíte ubytovanie v inej lokalite, napr. Kutná Hora, počítajte s vyššími nákladmi na taxi a dĺžkou cesty cca 30 minúť.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
