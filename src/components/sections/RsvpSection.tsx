import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import EmailValidation from "@/components/EmailValidation";
import RsvpForm from "@/components/RsvpForm";

const RsvpSection = () => {
  const [validatedEmail, setValidatedEmail] = useState<string | null>(null);

  return (
    <>
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

      <div className={`form-slide ${validatedEmail ? 'active' : ''}`}>
        {validatedEmail && (
          <RsvpForm
            email={validatedEmail}
            onClose={() => setValidatedEmail(null)}
          />
        )}
      </div>
    </>
  );
};

export default RsvpSection;