import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import AttendanceQuestion from "./rsvp/AttendanceQuestion";
import ThankYouMessage from "./rsvp/ThankYouMessage";
import RsvpFormContent from "./rsvp/RsvpFormContent";
import { useRsvpForm } from "@/hooks/useRsvpForm";
import { useEffect } from "react";

interface RsvpFormProps {
  email: string;
  onClose: () => void;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ email, onClose }) => {
  useEffect(() => {
    document.body.classList.add('rsvp-form-open');
    return () => {
      document.body.classList.remove('rsvp-form-open');
    };
  }, []);

  const {
    guestData,
    formData,
    additionalGuests,
    isLoading,
    hasExistingResponse,
    attendanceResponse,
    isSubmitted,
    handleAttendanceResponse,
    handleFormDataChange,
    addGuest,
    removeGuest,
    updateAdditionalGuest,
    handleSubmit,
  } = useRsvpForm(email);

  if (!guestData) {
    return null;
  }

  return (
    <>
      {true && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <div className="relative w-full max-w-lg mx-4 z-50">
            <div 
              className="bg-white rounded-3xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-[#F5F3FF]">
                <h2 className="font-serif text-3xl text-[#1A1F2C]">RSVP Formulár</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={onClose}
                  className="-mr-2 text-[#4A5568] hover:text-[#1A1F2C] rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="px-8 py-10">
                {isSubmitted ? (
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-serif text-[#1A1F2C]">
                      {attendanceResponse ? 'Tešíme sa na Vás!' : 'Ďakujeme za odpoveď'}
                    </h3>
                    <p className="text-[#4A5568]">
                      {attendanceResponse 
                        ? 'Vaša účasť bola potvrdená. Ak potrebujete urobiť zmeny, kontaktujte nás prosím.'
                        : 'Je nám ľúto, že sa nemôžete zúčastniť. Ak by sa vaše plány zmenili, kontaktujte nás prosím.'}
                    </p>
                  </div>
                ) : hasExistingResponse ? (
                  <div className="text-center py-8">
                    <p className="text-[#4A5568] text-lg">
                      Už ste potvrdili svoju účasť. Ak potrebujete urobiť zmeny, kontaktujte nás prosím.
                    </p>
                  </div>
                ) : !attendanceResponse ? (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-serif text-center text-[#1A1F2C]">
                      {guestData.full_name}, zúčastníte sa našej svadby?
                    </h3>
                    <div className="flex gap-4 justify-center">
                      <Button 
                        onClick={() => handleAttendanceResponse(true)}
                        className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white px-8 py-3 rounded-xl"
                      >
                        Áno, s radosťou
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleAttendanceResponse(false)}
                        className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#F5F3FF] px-8 py-3 rounded-xl"
                      >
                        Nie, nemôžem sa zúčastniť
                      </Button>
                    </div>
                  </div>
                ) : (
                  <RsvpFormContent
                    guestData={guestData}
                    formData={formData}
                    additionalGuests={additionalGuests}
                    isLoading={isLoading}
                    hasExistingResponse={hasExistingResponse}
                    onFormDataChange={handleFormDataChange}
                    onAddGuest={addGuest}
                    onRemoveGuest={removeGuest}
                    onUpdateAdditionalGuest={updateAdditionalGuest}
                    onSubmit={handleSubmit}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RsvpForm;