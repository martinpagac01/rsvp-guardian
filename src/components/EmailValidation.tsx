import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface EmailValidationProps {
  onValidEmail: (email: string) => void;
}

const EmailValidation = ({ onValidEmail }: EmailValidationProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from('approved_guests')
        .select()
        .ilike('email', email.toLowerCase())
        .maybeSingle();

      if (error) throw error;

      if (data) {
        onValidEmail(email);
      } else {
        toast({
          title: "Neplatný email",
          description: "Ľutujeme, tento email sa nenachádza v zozname pozvaných hostí.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error checking email:', error);
      toast({
        title: "Chyba",
        description: "Nastala chyba pri overovaní emailu. Skúste to prosím znova.",
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