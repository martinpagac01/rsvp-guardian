import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="bg-white/50 backdrop-blur-sm border-none shadow-lg">
      <CardContent className="space-y-6 p-6">
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

        {accommodationStatus === 'provided' ? (
          <Alert className="bg-emerald-50 border-emerald-200">
            <Home className="h-4 w-4 text-emerald-500" />
            <AlertDescription className="text-emerald-800 ml-2">
              Ubytovanie máte zabezpečené od nás. Nemusíte sa o nič starať.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="bg-amber-50 border-amber-200">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertDescription className="text-amber-800 ml-2">
              Ubytovanie nie je zabezpečené. Prosím, pozrite si sekciu s odporúčanými zariadeniami nižšie.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default GuestInformation;