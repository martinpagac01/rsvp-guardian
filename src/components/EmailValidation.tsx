import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface EmailValidationProps {
  onValidEmail: (email: string) => void;
}

const EmailValidation = ({ onValidEmail }: EmailValidationProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Temporary approved emails list (replace with API call later)
  const approvedEmails = ["test@example.com", "approved@test.com"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (approvedEmails.includes(email.toLowerCase())) {
      onValidEmail(email);
    } else {
      toast({
        title: "Neplatný email",
        description: "Ľutujeme, tento email sa nenachádza v zozname pozvaných hostí.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">RSVP Potvrdenie</h2>
        <p className="text-sm text-muted-foreground">
          Zadajte svoj email pre potvrdenie účasti na podujatí
        </p>
      </div>
      <div className="flex space-x-2">
        <Input
          type="email"
          placeholder="vas@email.sk"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Overujem..." : "Potvrdiť"}
        </Button>
      </div>
    </form>
  );
};

export default EmailValidation;