import { Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const dressCodeItems = [
  {
    title: "Formálne oblečenie",
    description: "Prosíme o dodržanie formálneho dress codu",
    recommendations: [
      "Páni: Oblek alebo sako s kravatou",
      "Dámy: Koktejlové alebo večerné šaty",
    ],
    notes: "Odporúčané farby: tmavé odtiene pre pánov, ľubovoľné farby pre dámy (okrem bielej)"
  }
];

const DressCodeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shirt className="mx-auto h-10 w-10 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">Dress Code</h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Aby sme vytvorili elegantnú atmosféru, ktorá si tento výnimočný deň zaslúži
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {dressCodeItems.map((item) => (
              <Card key={item.title} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="max-w-3xl mx-auto">
                    <h3 className="font-serif text-xl font-medium text-[#1A1F2C] mb-6 text-center">
                      {item.title}
                    </h3>
                    <p className="text-[#4A5568] text-center mb-8">
                      {item.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-medium text-[#1A1F2C]">Odporúčané oblečenie:</h4>
                        <ul className="space-y-2">
                          {item.recommendations.map((rec) => (
                            <li key={rec} className="text-[#4A5568] flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#9b87f5]" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium text-[#1A1F2C]">Poznámky:</h4>
                        <p className="text-[#4A5568]">{item.notes}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#4A5568] text-sm">
              Máte otázky ohľadom dress codu? <a href="#contact" className="text-[#9b87f5] hover:underline">Kontaktujte nás</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;