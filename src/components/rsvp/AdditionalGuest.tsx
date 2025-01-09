import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="relative bg-white/50 backdrop-blur-sm border-none shadow-lg">
      <CardContent className="space-y-4 p-6">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 hover:bg-red-100 hover:text-red-600 transition-colors"
          onClick={onRemove}
          disabled={isDisabled}
        >
          <Minus className="h-4 w-4" />
        </Button>

        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">
            Meno hosťa {index + 1}
          </Label>
          <Input
            value={fullName}
            onChange={(e) => onUpdate('full_name', e.target.value)}
            required
            disabled={isDisabled}
            className="bg-white/70"
            placeholder="Zadajte meno hosťa"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">
            Špeciálne stravovanie hosťa {index + 1}
          </Label>
          <Textarea
            value={dietary}
            onChange={(e) => onUpdate('dietary', e.target.value)}
            placeholder="Vegetariánske, vegánske, alergie..."
            disabled={isDisabled}
            className="bg-white/70 min-h-[100px] resize-none"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AdditionalGuest;