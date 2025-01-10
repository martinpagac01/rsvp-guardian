import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import AttendanceQuestion from "./rsvp/AttendanceQuestion";
import ThankYouMessage from "./rsvp/ThankYouMessage";
import RsvpFormContent from "./rsvp/RsvpFormContent";
import { useRsvpForm } from "@/hooks/useRsvpForm";

interface RsvpFormProps {
  email: string;
  onClose: () => void;
}

const RsvpForm = ({ email, onClose }: RsvpFormProps) => {
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
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl my-8">
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
          <h2 className="font-serif text-2xl text-[#1A1F2C]">RSVP Formulár</h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="text-[#4A5568] hover:text-[#1A1F2C] hover:bg-[#F5F3FF] rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <ThankYouMessage 
              isAttending={attendanceResponse === "yes"}
              onClose={onClose}
            />
          ) : hasExistingResponse ? (
            <div className="text-center py-8">
              <p className="text-[#4A5568] text-lg">
                Už ste potvrdili svoju účasť. Ak potrebujete urobiť zmeny, kontaktujte nás prosím.
              </p>
            </div>
          ) : !attendanceResponse ? (
            <AttendanceQuestion 
              guestName={guestData.full_name}
              onResponse={handleAttendanceResponse}
            />
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
  );
};

export default RsvpForm;