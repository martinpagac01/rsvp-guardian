import { Phone, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contacts = [
    {
      name: "Veronika",
      phone: "+420 702 188 493",
      whatsapp: "https://wa.me/420735865474"
    },
    {
      name: "Martin",
      phone: "+421 907 584 332",
      whatsapp: "https://wa.me/421907584332"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Phone className="mx-auto h-8 w-8 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">Kontakt</h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              V prípade akýchkoľvek otázok nás neváhajte kontaktovať
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((contact) => (
              <Card key={contact.name} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-4">
                      {contact.name}
                    </h3>
                    <div className="space-y-4">
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-2 text-[#4A5568] hover:text-[#9b87f5] transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{contact.phone}</span>
                      </a>
                      <a
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-[#4A5568] hover:text-[#9b87f5] transition-colors"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>WhatsApp správa</span>
                      </a>
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