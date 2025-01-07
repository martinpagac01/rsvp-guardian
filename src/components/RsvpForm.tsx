import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { X, Plus, Minus } from "lucide-react";
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

interface AdditionalGuest {
  full_name: string;
  dietary: string;
}

const RsvpForm = ({ email, onClose }: RsvpFormProps) => {
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    dietary: "",
  });
  const [additionalGuests, setAdditionalGuests] = useState<AdditionalGuest[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasExistingResponse, setHasExistingResponse] = useState(false);

  useEffect(() => {
    const fetchGuestData = async () => {
      // Fetch guest data
      const { data: guestData, error: guestError } = await supabase
        .from('approved_guests')
        .select()
        .ilike('email', email)
        .maybeSingle();

      if (guestError) {
        console.error('Error fetching guest data:', guestError);
        toast({
          title: "Chyba",
          description: "Nastala chyba pri načítaní údajov. Skúste to prosím znova.",
          variant: "destructive",
        });
        return;
      }

      if (guestData) {
        setGuestData(guestData as GuestData);
        setFormData(prev => ({ ...prev, fullName: guestData.full_name }));

        // Check for existing RSVP response
        const { data: rsvpData } = await supabase
          .from('rsvp_responses')
          .select()
          .eq('approved_guest_id', guestData.id)
          .maybeSingle();

        if (rsvpData) {
          setHasExistingResponse(true);
          toast({
            title: "RSVP už bolo odoslané",
            description: "Vaša odpoveď už bola zaznamenaná. Pre zmenu odpovede nás prosím kontaktujte.",
            variant: "destructive",
          });
        }
      }
    };

    fetchGuestData();
  }, [email]);

  const addGuest = () => {
    if (!guestData || additionalGuests.length >= guestData.additional_guests_allowed) return;
    setAdditionalGuests([...additionalGuests, { full_name: '', dietary: '' }]);
  };

  const removeGuest = (index: number) => {
    setAdditionalGuests(additionalGuests.filter((_, i) => i !== index));
  };

  const updateAdditionalGuest = (index: number, field: keyof AdditionalGuest, value: string) => {
    const updatedGuests = [...additionalGuests];
    updatedGuests[index] = { ...updatedGuests[index], [field]: value };
    setAdditionalGuests(updatedGuests);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestData || hasExistingResponse) return;

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

      // Insert additional guests if any
      if (additionalGuests.length > 0) {
        const { error: additionalGuestsError } = await supabase
          .from('additional_guests')
          .insert(
            additionalGuests.map(guest => ({
              rsvp_response_id: rsvpData.id,
              full_name: guest.full_name,
              phone: formData.phone,
              dietary_requirements: guest.dietary || null,
              accommodation_status: guestData.accommodation_status,
            }))
          );

        if (additionalGuestsError) throw additionalGuestsError;
      }

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
        {/* Guest Information Alert */}
        <Alert>
          <AlertDescription>
            <div className="space-y-2">
              <p><strong>Ubytovanie:</strong> {guestData.accommodation_status === 'provided' ? 'Zabezpečené' : guestData.accommodation_status === 'needed' ? 'Potrebné' : 'Nepotrebné'}</p>
              <p><strong>Počet možných hostí:</strong> {guestData.additional_guests_allowed}</p>
            </div>
          </AlertDescription>
        </Alert>

        {hasExistingResponse && (
          <Alert variant="destructive">
            <AlertDescription>
              Vaša RSVP odpoveď už bola zaznamenaná. Pre zmenu odpovede nás prosím kontaktujte.
            </AlertDescription>
          </Alert>
        )}

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
            disabled={hasExistingResponse}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dietary">Špeciálne stravovanie</Label>
          <Textarea
            id="dietary"
            value={formData.dietary}
            onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
            placeholder="Vegetariánske, vegánske, alergie..."
            disabled={hasExistingResponse}
          />
        </div>

        {/* Additional Guests Section */}
        {guestData.additional_guests_allowed > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Dodatoční hostia ({additionalGuests.length}/{guestData.additional_guests_allowed})</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addGuest}
                disabled={additionalGuests.length >= guestData.additional_guests_allowed || hasExistingResponse}
              >
                <Plus className="h-4 w-4 mr-2" />
                Pridať hosťa
              </Button>
            </div>

            {additionalGuests.map((guest, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg relative">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => removeGuest(index)}
                  disabled={hasExistingResponse}
                >
                  <Minus className="h-4 w-4" />
                </Button>

                <div className="space-y-2">
                  <Label>Meno hosťa {index + 1}</Label>
                  <Input
                    value={guest.full_name}
                    onChange={(e) => updateAdditionalGuest(index, 'full_name', e.target.value)}
                    required
                    disabled={hasExistingResponse}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Špeciálne stravovanie hosťa {index + 1}</Label>
                  <Textarea
                    value={guest.dietary}
                    onChange={(e) => updateAdditionalGuest(index, 'dietary', e.target.value)}
                    placeholder="Vegetariánske, vegánske, alergie..."
                    disabled={hasExistingResponse}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-6 border-t">
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || hasExistingResponse}
          >
            {isLoading ? "Odosielam..." : hasExistingResponse ? "Už odoslané" : "Odoslať RSVP"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;