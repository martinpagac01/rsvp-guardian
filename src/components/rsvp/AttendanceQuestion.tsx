import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface AttendanceQuestionProps {
  onResponse: (willAttend: boolean) => void;
  guestName: string;
}

const AttendanceQuestion = ({ onResponse, guestName }: AttendanceQuestionProps) => {
  return (
    <Card className="max-w-xl mx-auto bg-white/50 backdrop-blur-sm border-none shadow-lg">
      <CardContent className="p-8 space-y-8">
        <Alert className="bg-white/70 border-none">
          <AlertDescription>
            <p className="text-xl font-serif text-gray-800 text-center">
              {guestName}, zúčastníte sa našej svadby?
            </p>
          </AlertDescription>
        </Alert>
        
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => onResponse(true)}
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Check className="h-5 w-5 mr-2" />
            Áno, s radosťou
          </Button>
          <Button 
            onClick={() => onResponse(false)}
            variant="outline"
            size="lg"
            className="bg-white hover:bg-gray-50 px-8 py-6 text-lg border-2 transition-all duration-300"
          >
            <X className="h-5 w-5 mr-2" />
            Nie, nemôžem sa zúčastniť
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceQuestion;