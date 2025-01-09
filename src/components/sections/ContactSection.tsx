import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">Kontakt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 space-y-4">
              <Mail className="mx-auto h-8 w-8 text-gray-600" />
              <p className="text-gray-600">svadoba@email.com</p>
            </CardContent>
          </Card>
          <Card className="glass-panel hover:scale-105 transition-transform duration-300">
            <CardContent className="pt-6 space-y-4">
              <Phone className="mx-auto h-8 w-8 text-gray-600" />
              <p className="text-gray-600">+421 900 000 000</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;