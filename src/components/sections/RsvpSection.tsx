import { useState } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import EmailValidation from "@/components/EmailValidation";
import RsvpForm from "@/components/RsvpForm";

const RsvpSection = () => {
  const [validatedEmail, setValidatedEmail] = useState<string | null>(null);

  return (
    <section className="py-20" id="rsvp">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Check className="mx-auto h-10 w-10 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">
              Odpovedať na pozvánku
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Prosíme o odpoveď do 31. januára 2025
            </p>
          </div>

          {!validatedEmail && (
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="max-w-md mx-auto">
                  <h3 className="font-serif text-xl font-medium text-[#1A1F2C] mb-6 text-center">
                    Zadajte svoj email
                  </h3>
                  <EmailValidation onValidEmail={(email) => setValidatedEmail(email)} />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className={`form-slide ${validatedEmail ? 'active' : ''}`}>
        {validatedEmail && (
          <RsvpForm
            email={validatedEmail}
            onClose={() => setValidatedEmail(null)}
          />
        )}
      </div>
    </section>
  );
};

export default RsvpSection;