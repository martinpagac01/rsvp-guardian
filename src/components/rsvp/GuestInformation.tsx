import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="bg-white/50 backdrop-blur-sm border-none shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-gray-700 font-medium">
            Celé meno
          </Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => onFormDataChange('fullName', e.target.value)}
            disabled
            className="bg-white/70"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Telefónne číslo
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => onFormDataChange('phone', e.target.value)}
            required
            disabled={isDisabled}
            className="bg-white/70"
            placeholder="+421 XXX XXX XXX"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dietary" className="text-gray-700 font-medium">
            Špeciálne stravovanie
          </Label>
          <Textarea
            id="dietary"
            value={dietary}
            onChange={(e) => onFormDataChange('dietary', e.target.value)}
            placeholder="Vegetariánske, vegánske, alergie..."
            disabled={isDisabled}
            className="bg-white/70 min-h-[100px] resize-none"
          />
        </div>

        <div className="mt-4 p-4 bg-white/40 rounded-lg">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Ubytovanie:</span>{' '}
            {getAccommodationText(accommodationStatus)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuestInformation;