import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus } from "lucide-react";
import type { AccommodationStatus } from "@/integrations/supabase/types/enums";

interface RsvpFormContentProps {
  guestData: {
    id: string;
    full_name: string;
    additional_guests_allowed: number;
    accommodation_status: AccommodationStatus;
  };
  formData: {
    fullName: string;
    phone: string;
    dietary: string;
  };
  additionalGuests: Array<{ full_name: string; dietary: string; }>;
  isLoading: boolean;
  hasExistingResponse: boolean;
  onFormDataChange: (field: string, value: string) => void;
  onAddGuest: () => void;
  onRemoveGuest: (index: number) => void;
  onUpdateAdditionalGuest: (index: number, field: 'full_name' | 'dietary', value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RsvpFormContent = ({
  guestData,
  formData,
  additionalGuests,
  isLoading,
  hasExistingResponse,
  onFormDataChange,
  onAddGuest,
  onRemoveGuest,
  onUpdateAdditionalGuest,
  onSubmit
}: RsvpFormContentProps) => {
  const getAccommodationText = (status: AccommodationStatus) => {
    switch (status) {
      case 'provided':
        return 'Zabezpečené';
      case 'not_provided':
        return 'Nepotrebné';
      default:
        return 'Neznámy stav';
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
      <Alert>
        <AlertDescription>
          <div className="space-y-2">
            <p><strong>Ubytovanie:</strong> {getAccommodationText(guestData.accommodation_status)}</p>
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
        <Label htmlFor="fullName">Celé meno</Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => onFormDataChange('fullName', e.target.value)}
          disabled
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Telefónne číslo</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => onFormDataChange('phone', e.target.value)}
          required
          disabled={hasExistingResponse}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dietary">Špeciálne stravovanie</Label>
        <Textarea
          id="dietary"
          value={formData.dietary}
          onChange={(e) => onFormDataChange('dietary', e.target.value)}
          placeholder="Vegetariánske, vegánske, alergie..."
          disabled={hasExistingResponse}
        />
      </div>

      {guestData.additional_guests_allowed > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Dodatoční hostia ({additionalGuests.length}/{guestData.additional_guests_allowed})</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onAddGuest}
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
                onClick={() => onRemoveGuest(index)}
                disabled={hasExistingResponse}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <div className="space-y-2">
                <Label>Meno hosťa {index + 1}</Label>
                <Input
                  value={guest.full_name}
                  onChange={(e) => onUpdateAdditionalGuest(index, 'full_name', e.target.value)}
                  required
                  disabled={hasExistingResponse}
                />
              </div>

              <div className="space-y-2">
                <Label>Špeciálne stravovanie hosťa {index + 1}</Label>
                <Textarea
                  value={guest.dietary}
                  onChange={(e) => onUpdateAdditionalGuest(index, 'dietary', e.target.value)}
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
  );
};

export default RsvpFormContent;