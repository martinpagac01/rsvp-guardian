import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface AttendanceQuestionProps {
  onResponse: (willAttend: boolean) => void;
  guestName: string;
}

const AttendanceQuestion = ({ onResponse, guestName }: AttendanceQuestionProps) => {
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <h3 className="font-serif text-2xl text-[#1A1F2C] text-center">
        {guestName}, zúčastníte sa našej svadby?
      </h3>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={() => onResponse(true)}
          className="text-white bg-[#9b87f5] hover:bg-[#8B5CF6] px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          <Check className="h-5 w-5 mr-2" />
          Áno, s radosťou
        </Button>
        <Button 
          onClick={() => onResponse(false)}
          variant="outline"
          className="bg-white hover:bg-gray-50 px-8 py-6 text-lg border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
        >
          <X className="h-5 w-5 mr-2" />
          Nie, nemôžem sa zúčastniť
        </Button>
      </div>
    </div>
  );
};

export default AttendanceQuestion;