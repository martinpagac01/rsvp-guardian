import { useState } from "react";
import { Heart, Calendar, MapPin } from "lucide-react";
import EmailValidation from "@/components/EmailValidation";
import RsvpForm from "@/components/RsvpForm";

const Index = () => {
  const [validatedEmail, setValidatedEmail] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-wedding-background">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <Heart className="mx-auto text-rose-500 h-12 w-12 mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800">
            Lucia & Matej
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-gray-600 italic">
            Pozývame Vás na našu svadbu
          </p>
          
          {/* Wedding Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="space-y-2">
              <Calendar className="mx-auto h-8 w-8 text-gray-600" />
              <h3 className="font-serif text-xl font-semibold">Dátum</h3>
              <p className="text-gray-600">15. Júna 2024</p>
            </div>
            <div className="space-y-2">
              <MapPin className="mx-auto h-8 w-8 text-gray-600" />
              <h3 className="font-serif text-xl font-semibold">Miesto</h3>
              <p className="text-gray-600">Kaštieľ Mojmírovce</p>
            </div>
            <div className="space-y-2">
              <Heart className="mx-auto h-8 w-8 text-gray-600" />
              <h3 className="font-serif text-xl font-semibold">Oslava</h3>
              <p className="text-gray-600">16:00</p>
            </div>
          </div>

          {/* RSVP Section */}
          <div className="mt-16 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="font-serif text-3xl font-semibold mb-6">RSVP</h2>
            <p className="text-gray-600 mb-8">
              Prosím, potvrďte svoju účasť do 1. Mája 2024
            </p>
            {!validatedEmail && (
              <EmailValidation onValidEmail={(email) => setValidatedEmail(email)} />
            )}
          </div>
        </div>
      </main>

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