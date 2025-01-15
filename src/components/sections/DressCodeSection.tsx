import { useState } from 'react';
import { Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const dressCodeItems = [
  {
    title: "--Garden Party--",
    description: "Očakávame krásny slnečný a horúci deň. Oblečte sa a obujte sa preto pohodle, aby ste vydržali tancovať do rána. Miesto má veľkú záhradu a radi by sme trávili vačšinu času vonku.",
    recommendations: [
      "Páni: Oblek/nohavice a košeľa svetlých farieb (béžová, svetlo modrá, svetlo zelená)",
      "Dámy: Šaty vo svetlých farbách, ľahké, vzdušné.",
    ],
    notes: "Prosíme, žiadnu čiernu, bielu, červenú a výrazné farby."
  }
];

const galleryImages = [
  "/img/dresscode_1.jpeg",
  "/img/dresscode_2.jpeg",
  "/img/dresscode_3.jpeg",
  "/img/dresscode_4.jpeg",
  "/img/dresscode_5.jpeg",
  "/img/dresscode_6.jpeg",
  "/img/dresscode_7.jpeg",
  "/img/dresscode_8.jpeg"
];

const DressCodeSection = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shirt className="mx-auto h-8 w-8 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">Dress Code</h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto mb-8">
              Aby sme vytvorili elegantnú atmosféru, ktorú si tento výnimočný deň zaslúži.
            </p>
          </div>

          {dressCodeItems.map((item) => (
            <Card key={item.title} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-[#4A5568] mb-6 text-center">
                  {item.description}
                </p>
                <div className="space-y-4 mb-6">
                  {item.recommendations.map((rec, index) => (
                    <p key={index} className="text-[#4A5568] pl-4 border-l-2 border-[#9b87f5]">
                      {rec}
                    </p>
                  ))}
                </div>
                <p className="text-[#4A5568] font-medium text-center bg-[#F7F9FC] p-4 rounded-lg">
                  {item.notes}
                </p>
              </CardContent>
            </Card>
          ))}

          <div className="mt-12 space-y-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-6">Odporúčané farby</h3>
              <div className="flex justify-center gap-8 flex-wrap">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#C5CFB1] rounded-full shadow-md" />
                  <span className="mt-3 text-[#4A5568]">Sage zelená</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#BBD8D8] rounded-full shadow-md" />
                  <span className="mt-3 text-[#4A5568]">Baby blue</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#E8D8BD] rounded-full shadow-md" />
                  <span className="mt-3 text-[#4A5568]">Béžová</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowGallery(!showGallery)}
                className="text-[#9b87f5] font-medium hover:underline focus:outline-none transition-colors"
              >
                {showGallery ? 'Skryť inšpirácie' : 'Zobraziť inšpirácie'}
              </button>

              {showGallery && (
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img
                        src={image}
                        alt={`Dress Code Inspiration ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;