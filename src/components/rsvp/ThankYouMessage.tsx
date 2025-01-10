import { Button } from "@/components/ui/button";
import { Heart, CheckCircle2 } from "lucide-react";

interface ThankYouMessageProps {
  isAttending: boolean;
  onClose: () => void;
}

const ThankYouMessage = ({ isAttending, onClose }: ThankYouMessageProps) => {
  return (
    <div className="max-w-xl mx-auto text-center space-y-8">
      {isAttending ? (
        <CheckCircle2 className="mx-auto text-[#9b87f5] h-14 w-14 animate-bounce" />
      ) : (
        <Heart className="mx-auto text-[#9b87f5] h-14 w-14 animate-pulse" />
      )}
      
      <div className="space-y-4">
        <h3 className="font-serif text-2xl text-[#1A1F2C]">
          {isAttending 
            ? "Ďakujeme za potvrdenie účasti!"
            : "Ďakujeme za odpoveď"}
        </h3>
        <p className="text-lg text-[#4A5568]">
          {isAttending 
            ? "Tešíme sa na Vás."
            : "Mrzí nás, že sa nemôžete zúčastniť."}
        </p>
      </div>
      
      <div className="pt-4">
        <Button 
          onClick={onClose}
          className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Zavrieť
        </Button>
      </div>
    </div>
  );
};

export default ThankYouMessage;