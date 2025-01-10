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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vas@email.com"
          required
          className="w-full border-[#E2E8F0] focus:border-[#9b87f5] focus:ring-[#9b87f5]"
          disabled={isLoading}
        />
        <p className="text-sm text-[#4A5568]">
          Zadajte email, na ktorý ste dostali pozvánku
        </p>
      </div>
      <Button
        type="submit"
        className="w-full bg-[#9b87f5] hover:bg-[#8B5CF6] text-white"
        disabled={isLoading}
      >
        {isLoading ? "Overujem..." : "Pokračovať"}
      </Button>
    </form>
  );
};

export default EmailValidation;