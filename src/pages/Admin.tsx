import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, User, Calendar, Phone, Utensils, Home, Users } from "lucide-react";
import type { AccommodationStatus } from "@/integrations/supabase/types/enums";

interface GuestResponse {
  id: string;
  email: string;
  full_name: string;
  accommodation_status: AccommodationStatus;
  rsvp_responses: {
    id: string;
    phone: string;
    dietary_requirements: string | null;
    created_at: string;
    additional_guests: {
      id: string;
      full_name: string;
      dietary_requirements: string | null;
    }[];
  }[] | null;
}

const Admin = () => {
  const { data: guestData, isLoading, error } = useQuery({
    queryKey: ['admin-guests'],
    queryFn: async () => {
      console.log('Fetching guest data...');
      const { data, error } = await supabase
        .from('approved_guests')
        .select(`
          id,
          email,
          full_name,
          accommodation_status,
          rsvp_responses (
            id,
            phone,
            dietary_requirements,
            created_at,
            additional_guests (
              id,
              full_name,
              dietary_requirements
            )
          )
        `);

      if (error) {
        console.error('Error fetching guest data:', error);
        throw error;
      }

      console.log('Fetched guest data:', data);
      return data as GuestResponse[];
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center h-32">
          <p className="text-gray-500">Loading guest data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center h-32">
          <p className="text-red-500">Error loading guest data. Please try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-serif mb-8">Guest Responses Overview</h1>
      
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Guest Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Accommodation</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Dietary Requirements</TableHead>
                <TableHead>Additional Guests</TableHead>
                <TableHead>Response Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guestData?.map((guest) => (
                <TableRow key={guest.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      {guest.full_name}
                    </div>
                  </TableCell>
                  <TableCell>{guest.email}</TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.[0] ? (
                      guest.rsvp_responses[0].phone === 'declined' ? (
                        <div className="flex items-center gap-1 text-red-500">
                          <XCircle className="h-4 w-4" />
                          Declined
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-emerald-500">
                          <CheckCircle className="h-4 w-4" />
                          Confirmed
                        </div>
                      )
                    ) : (
                      <span className="text-gray-500">No Response</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      {guest.accommodation_status === 'provided' ? (
                        <span className="text-emerald-500">Provided</span>
                      ) : (
                        <span className="text-amber-500">Not Provided</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.[0]?.phone !== 'declined' && (
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4 text-gray-500" />
                        {guest.rsvp_responses?.[0]?.phone || '-'}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.[0]?.phone !== 'declined' && (
                      <div className="flex items-center gap-1">
                        <Utensils className="h-4 w-4 text-gray-500" />
                        {guest.rsvp_responses?.[0]?.dietary_requirements || 'None'}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.[0]?.phone !== 'declined' && (
                      <div className="space-y-2">
                        {guest.rsvp_responses?.[0]?.additional_guests?.length > 0 ? (
                          <div className="flex items-center gap-1 mb-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">
                              {guest.rsvp_responses[0].additional_guests.length} additional guest(s):
                            </span>
                          </div>
                        ) : null}
                        {guest.rsvp_responses?.[0]?.additional_guests?.map((additionalGuest) => (
                          <div key={additionalGuest.id} className="ml-6 text-sm border-l-2 border-gray-200 pl-2">
                            <div className="font-medium">{additionalGuest.full_name}</div>
                            {additionalGuest.dietary_requirements && (
                              <div className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                                <Utensils className="h-3 w-3" />
                                {additionalGuest.dietary_requirements}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.[0] ? (
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(guest.rsvp_responses[0].created_at).toLocaleDateString()}
                      </div>
                    ) : '-'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Admin;