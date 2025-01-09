import { Hotel, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AccommodationSection = () => {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">Ubytovanie</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Hotel className="h-8 w-8 text-emerald-600" />
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-serif text-center font-medium text-gray-800">
                Ubytovanie je pre Vás zabezpečené
              </h3>
              <p className="text-gray-600 text-center">
                Rezervovali sme pre Vás ubytovanie priamo v Kaštieli Mojmírovce. Nemusíte sa o nič starať, všetko je pripravené pre Váš komfort.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;