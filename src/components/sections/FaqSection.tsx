import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FaqSection = () => {
  return (
    <section className="py-24 bg-white bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">Často kladené otázky</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 space-y-4">
              <HelpCircle className="h-8 w-8 text-gray-600" />
              <h3 className="font-serif text-xl font-semibold">Môžem si priniesť +1?</h3>
              <p className="text-gray-600">
                Áno, ak máte možnosť pridať ďalšieho hosťa, bude to uvedené vo vašom RSVP formulári.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;