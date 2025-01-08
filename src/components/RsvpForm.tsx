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
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-semibold">RSVP Formulár</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {isSubmitted ? (
          <div className="p-6">
            <ThankYouMessage 
              isAttending={attendanceResponse!} 
              onClose={onClose} 
            />
          </div>
        ) : !attendanceResponse && !hasExistingResponse ? (
          <div className="p-6">
            <AttendanceQuestion 
              onResponse={handleAttendanceResponse}
              guestName={guestData.full_name}
            />
          </div>
        ) : attendanceResponse && (
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
  );
};

export default RsvpForm;