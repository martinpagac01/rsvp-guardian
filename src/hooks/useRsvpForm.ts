import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { ApprovedGuest } from "@/integrations/supabase/types";

interface AdditionalGuest {
  full_name: string;
  dietary: string;
}

interface FormData {
  fullName: string;
  phone: string;
  dietary: string;
}

export const useRsvpForm = (email: string) => {
  const [guestData, setGuestData] = useState<ApprovedGuest | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    dietary: "",
  });
  const [additionalGuests, setAdditionalGuests] = useState<AdditionalGuest[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasExistingResponse, setHasExistingResponse] = useState(false);
  const [attendanceResponse, setAttendanceResponse] = useState<boolean | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchGuestData = async () => {
      const { data: guestData, error: guestError } = await supabase
        .from('approved_guests')
        .select()
        .ilike('email', email)
        .maybeSingle();

      if (guestError) {
        console.error('Error fetching guest data:', guestError);
        toast({
          title: "Chyba",
          description: "Nastala chyba pri načítaní údajov. Skúste to prosím znova.",
          variant: "destructive",
        });
        return;
      }

      if (guestData) {
        setGuestData(guestData);
        setFormData(prev => ({ ...prev, fullName: guestData.full_name }));

        const { data: rsvpData } = await supabase
          .from('rsvp_responses')
          .select()
          .eq('approved_guest_id', guestData.id)
          .maybeSingle();

        if (rsvpData) {
          setHasExistingResponse(true);
          toast({
            title: "RSVP už bolo odoslané",
            description: "Vaša odpoveď už bola zaznamenaná. Pre zmenu odpovede nás prosím kontaktujte.",
            variant: "destructive",
          });
        }
      }
    };

    fetchGuestData();
  }, [email]);

  const handleAttendanceResponse = async (willAttend: boolean) => {
    setAttendanceResponse(willAttend);
    if (!willAttend) {
      try {
        await supabase
          .from('rsvp_responses')
          .insert({
            approved_guest_id: guestData?.id,
            phone: 'declined',
            dietary_requirements: null,
          });
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting decline:', error);
        toast({
          title: "Chyba",
          description: "Nastala chyba pri odosielaní odpovede. Skúste to prosím znova.",
          variant: "destructive",
        });
      }
    }
  };

  const handleFormDataChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addGuest = () => {
    if (!guestData || additionalGuests.length >= guestData.additional_guests_allowed) return;
    setAdditionalGuests([...additionalGuests, { full_name: '', dietary: '' }]);
  };

  const removeGuest = (index: number) => {
    setAdditionalGuests(additionalGuests.filter((_, i) => i !== index));
  };

  const updateAdditionalGuest = (index: number, field: keyof AdditionalGuest, value: string) => {
    const updatedGuests = [...additionalGuests];
    updatedGuests[index] = { ...updatedGuests[index], [field]: value };
    setAdditionalGuests(updatedGuests);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestData || hasExistingResponse) return;

    setIsLoading(true);
    try {
      const { data: rsvpData, error: rsvpError } = await supabase
        .from('rsvp_responses')
        .insert({
          approved_guest_id: guestData.id,
          phone: formData.phone,
          dietary_requirements: formData.dietary || null,
        })
        .select()
        .single();

      if (rsvpError) throw rsvpError;

      if (additionalGuests.length > 0) {
        const { error: additionalGuestsError } = await supabase
          .from('additional_guests')
          .insert(
            additionalGuests.map(guest => ({
              rsvp_response_id: rsvpData.id,
              full_name: guest.full_name,
              phone: formData.phone,
              dietary_requirements: guest.dietary || null,
              accommodation_status: guestData.accommodation_status,
            }))
          );

        if (additionalGuestsError) throw additionalGuestsError;
      }

      setIsSubmitted(true);
      toast({
        title: "RSVP odoslané",
        description: "Vaša odpoveď bola úspešne zaznamenaná.",
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Chyba",
        description: "Nastala chyba pri odosielaní RSVP. Skúste to prosím znova.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return {
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
  };
};