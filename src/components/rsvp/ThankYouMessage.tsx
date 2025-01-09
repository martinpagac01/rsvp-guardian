import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CheckCircle2, XCircle } from "lucide-react";

interface ThankYouMessageProps {
  isAttending: boolean;
  onClose: () => void;
}

const ThankYouMessage = ({ isAttending, onClose }: ThankYouMessageProps) => {
  return (
    <Card className="max-w-xl mx-auto bg-emerald-50 border-emerald-100 shadow-lg">
      <CardContent className="p-8 space-y-8">
        {isAttending ? (
          <CheckCircle2 className="mx-auto text-emerald-500 h-12 w-12 animate-bounce" />
        ) : (
          <Heart className="mx-auto text-rose-500 h-12 w-12 animate-pulse" />
        )}
        
        <Alert className="bg-white/90 border-none">
          <AlertDescription>
            <p className="text-xl font-serif text-center text-gray-800">
              {isAttending 
                ? "Ďakujeme za potvrdenie účasti! Tešíme sa na Vás."
                : "Ďakujeme za odpoveď. Mrzí nás, že sa nemôžete zúčastniť."}
            </p>
          </AlertDescription>
        </Alert>
        
        <div className="flex justify-center">
          <Button 
            onClick={onClose}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg transition-all duration-300"
          >
            Zavrieť
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThankYouMessage;