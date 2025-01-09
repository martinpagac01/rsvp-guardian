import { Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DressCodeSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">Dress Code</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 space-y-4">
              <Shirt className="mx-auto h-8 w-8 text-gray-600" />
              <p className="text-gray-600">
                Formálne oblečenie. Páni v oblekoch, dámy v koktejlových šatách.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;