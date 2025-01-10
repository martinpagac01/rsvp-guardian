import { Bed, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const accommodations = [
  {
    name: "Hotel Fontána",
    description: "Najbližší hotel k miestu konania svadby, 5 minút chôdze",
    address: "Přelouč, Česká republika",
    price: "od 60€ za noc",
    link: "https://hotel-fontana.cz",
    features: ["Wi-Fi", "Parkovanie", "Raňajky v cene"]
  },
  {
    name: "Penzión U Radnice",
    description: "Útulný penzión v centre mesta",
    address: "Přelouč, Česká republika",
    price: "od 45€ za noc",
    link: "https://penzion-uradnice.cz",
    features: ["Wi-Fi", "Parkovanie", "Rodinná atmosféra"]
  }
];

const AccommodationSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Bed className="mx-auto h-10 w-10 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">Ubytovanie</h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Ubytovenie priamo na mieste svadobnej hostiny je zabezpečené len pre limitovaný počet hostí. Informáciu o tom, či pre Vás máme miesto priamo tam sa dozviete pri potvrdzovaní účasti. 
              Pre váš komfort sme pripravili zoznam odporúčaných ubytovaní v blízkosti svadobného miesta.
              Odporúčame rezervovať ho v dostatočnom predstihu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.name} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-medium text-[#1A1F2C] mb-2">
                    {accommodation.name}
                  </h3>
                  <p className="text-[#4A5568] mb-4">{accommodation.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-[#4A5568]">{accommodation.address}</p>
                    <p className="font-medium text-[#9b87f5]">{accommodation.price}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {accommodation.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-[#F5F3FF] text-[#9b87f5] text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                    asChild
                  >
                    <a href={accommodation.link} target="_blank" rel="noopener noreferrer">
                      Rezervovať
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#4A5568] text-sm">
              Potrebujete pomoc s ubytovaním? <a href="#contact" className="text-[#9b87f5] hover:underline">Kontaktujte nás</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;