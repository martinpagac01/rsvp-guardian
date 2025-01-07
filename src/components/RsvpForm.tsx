import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

interface RsvpFormProps {
  email: string;
  onClose: () => void;
}

interface GuestData {
  id: string;
  full_name: string;
  additional_guests_allowed: number;
  accommodation_status: 'not_needed' | 'needed' | 'provided';
}

const RsvpForm = ({ email, onClose }: RsvpFormProps) => {
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    dietary: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGuestData = async () => {
      const { data, error } = await supabase
        .from('approved_guests')
        .select()
        .ilike('email', email)
        .maybeSingle();

      if (error) {
        console.error('Error fetching guest data:', error);
        toast({
          title: "Chyba",
          description: "Nastala chyba pri načítaní údajov. Skúste to prosím znova.",
          variant: "destructive",
        });
        return;
      }

      if (data) {
        setGuestData(data as GuestData);
        setFormData(prev => ({ ...prev, fullName: data.full_name }));
      }
    };

    fetchGuestData();
  }, [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestData) return;

    setIsLoading(true);
    try {
      // Insert RSVP response
      const { data: rsvpData, error: rsvpError } = await supabase
        .from('rsvp_responses')
        .insert({
          approved_guest_id: guestData.id,
          phone: formData.phone,
          dietary_requirements: formData.dietary || null,
        })
        .select()
        .single();

      if (rsvpError) throw rsvpError;

      toast({
        title: "RSVP odoslané",
        description: "Vaša odpoveď bola úspešne zaznamenaná.",
      });

      onClose();
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Chyba",
        description: "Nastala chyba pri odosielaní RSVP. Skúste to prosím znova.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  if (!guestData) {
    return null;
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-semibold">RSVP Formulár</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={email} disabled />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fullName">Celé meno</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            disabled
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefónne číslo</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dietary">Špeciálne stravovanie</Label>
          <Textarea
            id="dietary"
            value={formData.dietary}
            onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
            placeholder="Vegetariánske, vegánske, alergie..."
          />
        </div>

        <div className="pt-6 border-t">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Odosielam..." : "Odoslať RSVP"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;