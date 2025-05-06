import { Phone, MessageSquare, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const preWeddingContacts = [
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

  const weddingDayContact = {
    name: "Katka",
    phone: "+420 775 995 982",
    email: "mendelovakatarina@gmail.com"
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Phone className="mx-auto h-8 w-8 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">Kontakt</h2>
          </div>

          {/* Kontakty pred svadbou */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-center text-[#1A1F2C] mb-8">
              Kontakty pred svadbou
            </h3>
            <p className="text-center text-[#4A5568] mb-8 max-w-2xl mx-auto">
              V prípade akýchkoľvek otázok pred dňom svadby nás neváhajte kontaktovať.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {preWeddingContacts.map((contact) => (
                <Card key={contact.name} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <h4 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-4">
                        {contact.name}
                      </h4>
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

          {/* Kontakt v deň svadby */}
          <div>
            <h3 className="text-2xl font-serif text-center text-[#1A1F2C] mb-8">
              Kontakt v deň svadby
            </h3>
            <p className="text-center text-[#4A5568] mb-8 max-w-2xl mx-auto">
              V prípade urgentných záležitostí v deň konania svadby, prosím, kontaktujte našu koordinátorku Katku.
            </p>
            <div className="max-w-md mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h4 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-4">
                      {weddingDayContact.name}
                    </h4>
                    <div className="space-y-4">
                      <a
                        href={`tel:${weddingDayContact.phone.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-2 text-[#4A5568] hover:text-[#9b87f5] transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{weddingDayContact.phone}</span>
                      </a>
                      <a
                        href={`mailto:${weddingDayContact.email}`}
                        className="flex items-center justify-center gap-2 text-[#4A5568] hover:text-[#9b87f5] transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{weddingDayContact.email}</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
