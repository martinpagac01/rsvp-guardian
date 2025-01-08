import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ThankYouMessageProps {
  isAttending: boolean;
  onClose: () => void;
}

const ThankYouMessage = ({ isAttending, onClose }: ThankYouMessageProps) => {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertDescription>
          <p className="text-lg font-medium">
            {isAttending 
              ? "Ďakujeme za potvrdenie účasti! Tešíme sa na Vás."
              : "Ďakujeme za odpoveď. Mrzí nás, že sa nemôžete zúčastniť."}
          </p>
        </AlertDescription>
      </Alert>
      
      <div className="flex justify-center">
        <Button onClick={onClose}>
          Zavrieť
        </Button>
      </div>
    </div>
  );
};

export default ThankYouMessage;