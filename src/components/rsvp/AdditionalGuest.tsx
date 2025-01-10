import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AdditionalGuestProps {
  index: number;
  fullName: string;
  dietary: string;
  isDisabled: boolean;
  onRemove: () => void;
  onUpdate: (field: 'full_name' | 'dietary', value: string) => void;
}

const AdditionalGuest = ({
  index,
  fullName,
  dietary,
  isDisabled,
  onRemove,
  onUpdate,
}: AdditionalGuestProps) => {
  return (
    <div className="relative border border-[#E2E8F0] rounded-lg p-6 bg-white">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-[#4A5568] hover:text-[#1A1F2C] hover:bg-[#F5F3FF] rounded-full"
        onClick={onRemove}
        disabled={isDisabled}
      >
        <X className="h-4 w-4" />
      </Button>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-[#1A1F2C] font-medium">
            Meno hosťa {index + 1}
          </Label>
          <Input
            value={fullName}
            onChange={(e) => onUpdate('full_name', e.target.value)}
            required
            disabled={isDisabled}
            className="bg-white border-[#E2E8F0] focus:border-[#9b87f5] focus:ring-[#9b87f5]"
            placeholder="Zadajte meno hosťa"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-[#1A1F2C] font-medium">
            Špeciálne stravovanie
          </Label>
          <Textarea
            value={dietary}
            onChange={(e) => onUpdate('dietary', e.target.value)}
            disabled={isDisabled}
            className="bg-white border-[#E2E8F0] focus:border-[#9b87f5] focus:ring-[#9b87f5] min-h-[80px] resize-none"
            placeholder="Vegetariánske, vegánske, alergie..."
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalGuest;