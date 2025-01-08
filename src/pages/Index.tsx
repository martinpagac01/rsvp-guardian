import { useState } from "react";
import { Heart, Calendar, MapPin, Plane, Car, Hotel, Shirt, HelpCircle, Mail, Phone, ChevronDown } from "lucide-react";
import EmailValidation from "@/components/EmailValidation";
import RsvpForm from "@/components/RsvpForm";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [validatedEmail, setValidatedEmail] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-wedding-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30" />
          </AspectRatio>
        </div>
        <div className="container relative z-10 text-center space-y-8 px-4">
          <Heart className="mx-auto text-rose-500 h-16 w-16 animate-pulse" />
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-800">
            Lucia & Matej
          </h1>
          <p className="font-serif text-2xl md:text-4xl text-gray-600 italic">
            Pozývame Vás na našu svadbu
          </p>
          <ChevronDown className="mx-auto h-8 w-8 text-gray-600 animate-bounce" />
        </div>
      </section>

      {/* Date and Place */}
      <section className="py-24 bg-white bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass-panel">
              <CardContent className="pt-6 text-center space-y-4">
                <Calendar className="mx-auto h-10 w-10 text-gray-600" />
                <h3 className="font-serif text-2xl font-semibold">Dátum</h3>
                <p className="text-gray-600">15. Júna 2024</p>
                <p className="text-gray-600">16:00</p>
              </CardContent>
            </Card>
            <Card className="glass-panel">
              <CardContent className="pt-6 text-center space-y-4">
                <MapPin className="mx-auto h-10 w-10 text-gray-600" />
                <h3 className="font-serif text-2xl font-semibold">Miesto</h3>
                <p className="text-gray-600">Kaštieľ Mojmírovce</p>
                <p className="text-gray-600">Námestie sv. Ladislava 1</p>
              </CardContent>
            </Card>
            <Card className="glass-panel">
              <CardContent className="pt-6 text-center space-y-4">
                <Heart className="mx-auto h-10 w-10 text-gray-600" />
                <h3 className="font-serif text-2xl font-semibold">Oslava</h3>
                <p className="text-gray-600">Svadobná hostina</p>
                <p className="text-gray-600">& Večerná zábava</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Travel */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Doprava</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-panel">
              <CardContent className="pt-6 space-y-4">
                <Car className="h-8 w-8 text-gray-600" />
                <h3 className="font-serif text-xl font-semibold">Autom</h3>
                <p className="text-gray-600">Parkovanie je k dispozícii priamo v areáli kaštieľa.</p>
              </CardContent>
            </Card>
            <Card className="glass-panel">
              <CardContent className="pt-6 space-y-4">
                <Plane className="h-8 w-8 text-gray-600" />
                <h3 className="font-serif text-xl font-semibold">Hromadná doprava</h3>
                <p className="text-gray-600">Zabezpečíme kyvadlovú dopravu z Nitry.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-24 bg-white bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Ubytovanie</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="glass-panel">
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

      {/* Dress Code */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Dress Code</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="glass-panel">
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

      {/* FAQ */}
      <section className="py-24 bg-white bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Často kladené otázky</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <Card className="glass-panel">
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

      {/* Contact */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-panel">
              <CardContent className="pt-6 space-y-4">
                <Mail className="mx-auto h-8 w-8 text-gray-600" />
                <p className="text-gray-600">svadoba@email.com</p>
              </CardContent>
            </Card>
            <Card className="glass-panel">
              <CardContent className="pt-6 space-y-4">
                <Phone className="mx-auto h-8 w-8 text-gray-600" />
                <p className="text-gray-600">+421 900 000 000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-24 bg-white bg-opacity-50" id="rsvp">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-8">RSVP</h2>
            <p className="text-gray-600 mb-12">
              Prosím, potvrďte svoju účasť do 1. Mája 2024
            </p>
            {!validatedEmail && (
              <Card className="glass-panel">
                <CardContent className="pt-6">
                  <EmailValidation onValidEmail={(email) => setValidatedEmail(email)} />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="mx-auto h-8 w-8 mb-4" />
          <p className="font-serif text-xl">Lucia & Matej</p>
          <p className="mt-2">15. Júna 2024</p>
        </div>
      </footer>

      {/* Sliding form panel */}
      <div className={`form-slide ${validatedEmail ? 'active' : ''}`}>
        {validatedEmail && (
          <RsvpForm
            email={validatedEmail}
            onClose={() => setValidatedEmail(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;