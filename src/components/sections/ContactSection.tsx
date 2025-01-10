import { Phone, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contacts = [
  {
    name: "Veronika",
    phone: "+420 777 888 999",
    email: "veronika@email.com",
    icon: Phone,
  },
  {
    name: "Martin",
    phone: "+420 666 777 888",
    email: "martin@email.com",
    icon: Phone,
  }
];

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <MessageCircle className="mx-auto h-10 w-10 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">
              Kontaktujte nás
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Máte otázky? Neváhajte nás kontaktovať. Radi vám pomôžeme s čímkoľvek potrebujete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((contact) => (
              <Card key={contact.name} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <contact.icon className="mx-auto h-8 w-8 text-[#9b87f5]" />
                    <h3 className="font-serif text-xl font-medium text-[#1A1F2C]">
                      {contact.name}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[#4A5568]">
                        <a
                          href={`tel:${contact.phone}`}
                          className="hover:text-[#9b87f5] transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </p>
                      <p className="text-[#4A5568]">
                        <a
                          href={`mailto:${contact.email}`}
                          className="hover:text-[#9b87f5] transition-colors"
                        >
                          {contact.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;