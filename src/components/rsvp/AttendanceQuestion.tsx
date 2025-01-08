import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AttendanceQuestionProps {
  onResponse: (willAttend: boolean) => void;
  guestName: string;
}

const AttendanceQuestion = ({ onResponse, guestName }: AttendanceQuestionProps) => {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertDescription>
          <p className="text-lg font-medium">
            {guestName}, zúčastníte sa našej svadby?
          </p>
        </AlertDescription>
      </Alert>
      
      <div className="flex gap-4 justify-center">
        <Button 
          onClick={() => onResponse(true)}
          size="lg"
        >
          Áno, s radosťou
        </Button>
        <Button 
          onClick={() => onResponse(false)}
          variant="outline"
          size="lg"
        >
          Nie, nemôžem sa zúčastniť
        </Button>
      </div>
    </div>
  );
};

export default AttendanceQuestion;