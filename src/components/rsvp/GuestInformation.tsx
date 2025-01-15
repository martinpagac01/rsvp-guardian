import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Home, AlertTriangle } from "lucide-react";
import type { AccommodationStatus } from "@/integrations/supabase/types/enums";

interface GuestInformationProps {
  fullName: string;
  phone: string;
  dietary: string;
  accommodationStatus: AccommodationStatus;
  isDisabled: boolean;
  onFormDataChange: (field: string, value: string) => void;
}

const GuestInformation = ({
  fullName,
  phone,
  dietary,
  accommodationStatus,
  isDisabled,
  onFormDataChange,
}: GuestInformationProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-[#1A1F2C] font-medium">
            Meno
          </Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => onFormDataChange('fullName', e.target.value)}
            disabled
            className="bg-white border-[#E2E8F0] focus:border-[#9b87f5] focus:ring-[#9b87f5]"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#1A1F2C] font-medium">
            Telefónne číslo
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => onFormDataChange('phone', e.target.value)}
            required
            disabled={isDisabled}
            className="bg-white border-[#E2E8F0] focus:border-[#9b87f5] focus:ring-[#9b87f5]"
            placeholder="+421 XXX XXX XXX"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dietary" className="text-[#1A1F2C] font-medium">
            Špeciálne stravovanie
          </Label>
          <Textarea
            id="dietary"
            value={dietary}
            onChange={(e) => onFormDataChange('dietary', e.target.value)}
            placeholder="Vegetariánske, vegánske, alergie..."
            disabled={isDisabled}
            className="bg-white border-[#E2E8F0] focus:border-[#9b87f5] focus:ring-[#9b87f5] min-h-[100px] resize-none"
          />
        </div>
      </div>

      {accommodationStatus === 'provided' ? (
        <Alert className="bg-[#F5F3FF] border-[#9b87f5]">
          <Home className="h-4 w-4 text-[#9b87f5]" />
          <AlertDescription className="text-[#1A1F2C] ml-2">
            Ubytovanie máte zabezpečené od nás. Nemusíte sa o nič starať.
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="bg-[#F5F3FF] border-[#9b87f5]">
          <AlertTriangle className="h-4 w-4 text-[#9b87f5]" />
          <AlertDescription className="text-[#1A1F2C] ml-2">
            Ubytovanie nie je zabezpečené. Prosím, pozrite si sekciu s odporúčanými zariadeniami nižšie.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default GuestInformation;