import { useState } from "react";
import EmailValidation from "@/components/EmailValidation";
import RsvpForm from "@/components/RsvpForm";

const Index = () => {
  const [validatedEmail, setValidatedEmail] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Svadobná RSVP</h1>
          {!validatedEmail && (
            <EmailValidation onValidEmail={(email) => setValidatedEmail(email)} />
          )}
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