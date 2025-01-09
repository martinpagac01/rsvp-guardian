import { Hotel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AccommodationSection = () => {
  return (
    <section className="py-24 bg-white bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">Ubytovanie</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 space-y-4">
              <Hotel className="mx-auto h-8 w-8 text-gray-600" />
              <p className="text-gray-600">
                Ubytovanie je možné priamo v Kaštieli Mojmírovce. Pri potvrdzovaní účasti prosím nezabudnite uviesť, či máte záujem o ubytovanie.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;