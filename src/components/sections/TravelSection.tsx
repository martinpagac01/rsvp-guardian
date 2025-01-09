import { Car, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TravelSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">Doprava</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 space-y-4">
              <Car className="h-8 w-8 text-gray-600" />
              <h3 className="font-serif text-xl font-semibold">Autom</h3>
              <p className="text-gray-600">Parkovanie je k dispozícii priamo v areáli kaštieľa.</p>
            </CardContent>
          </Card>
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 space-y-4">
              <Plane className="h-8 w-8 text-gray-600" />
              <h3 className="font-serif text-xl font-semibold">Hromadná doprava</h3>
              <p className="text-gray-600">Zabezpečíme kyvadlovú dopravu z Nitry.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;