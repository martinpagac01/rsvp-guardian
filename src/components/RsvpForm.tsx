import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

interface RsvpFormProps {
  email: string;
  onClose: () => void;
}

const RsvpForm = ({ email, onClose }: RsvpFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    dietary: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

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
            required
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
          <Button type="submit" className="w-full">
            Odoslať RSVP
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;