import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, User, Calendar } from "lucide-react";

const Admin = () => {
  const { data: guestData, isLoading } = useQuery({
    queryKey: ['admin-guests'],
    queryFn: async () => {
      const { data: approvedGuests } = await supabase
        .from('approved_guests')
        .select(`
          *,
          rsvp_responses (
            *,
            additional_guests (*)
          )
        `);
      return approvedGuests;
    },
  });

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
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
                    {guest.accommodation_status === 'provided' ? (
                      <span className="text-emerald-500">Provided</span>
                    ) : (
                      <span className="text-amber-500">Not Provided</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.[0]?.phone !== 'declined' 
                      ? guest.rsvp_responses?.[0]?.phone 
                      : '-'}
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.[0]?.dietary_requirements || '-'}
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.[0]?.additional_guests?.map((additionalGuest, index) => (
                      <div key={additionalGuest.id} className="text-sm">
                        {index + 1}. {additionalGuest.full_name}
                        {additionalGuest.dietary_requirements && (
                          <div className="text-xs text-gray-500 ml-4">
                            Diet: {additionalGuest.dietary_requirements}
                          </div>
                        )}
                      </div>
                    )) || '-'}
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