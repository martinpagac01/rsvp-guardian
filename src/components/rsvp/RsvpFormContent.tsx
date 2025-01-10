import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { AccommodationStatus } from "@/integrations/supabase/types/enums";
import GuestInformation from "./GuestInformation";
import AdditionalGuest from "./AdditionalGuest";

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
  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {hasExistingResponse && (
        <Alert className="bg-[#F5F3FF] border-[#9b87f5] text-[#1A1F2C]">
          <AlertDescription>
            Vaša RSVP odpoveď už bola zaznamenaná. Pre zmenu odpovede nás prosím kontaktujte.
          </AlertDescription>
        </Alert>
      )}

      <GuestInformation
        fullName={formData.fullName}
        phone={formData.phone}
        dietary={formData.dietary}
        accommodationStatus={guestData.accommodation_status}
        isDisabled={hasExistingResponse}
        onFormDataChange={onFormDataChange}
      />

      {guestData.additional_guests_allowed > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-[#1A1F2C]">
              Dodatoční hostia ({additionalGuests.length}/{guestData.additional_guests_allowed})
            </h3>
            <Button
              type="button"
              variant="outline"
              onClick={onAddGuest}
              disabled={additionalGuests.length >= guestData.additional_guests_allowed || hasExistingResponse}
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
            >
              <Plus className="h-4 w-4 mr-2" />
              Pridať hosťa
            </Button>
          </div>

          <div className="space-y-6">
            {additionalGuests.map((guest, index) => (
              <AdditionalGuest
                key={index}
                index={index}
                fullName={guest.full_name}
                dietary={guest.dietary}
                isDisabled={hasExistingResponse}
                onRemove={() => onRemoveGuest(index)}
                onUpdate={(field, value) => onUpdateAdditionalGuest(index, field, value)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="pt-6">
        <Button
          type="submit"
          className="w-full bg-[#9b87f5] hover:bg-[#8B5CF6] text-white text-lg py-6 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || hasExistingResponse}
        >
          {isLoading ? "Odosielam..." : hasExistingResponse ? "Už odoslané" : "Odoslať RSVP"}
        </Button>
      </div>
    </form>
  );
};

export default RsvpFormContent;