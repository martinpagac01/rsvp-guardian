import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  CheckCircle, 
  XCircle, 
  User, 
  Calendar, 
  Phone, 
  Utensils, 
  Home, 
  Users,
  Copy,
  Filter,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import GuestAnalytics from "@/components/admin/GuestAnalytics";
import { toast } from "@/components/ui/use-toast";
import { AccommodationStatus } from "@/integrations/supabase/types/enums";

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
  } | null;
}

const Admin = () => {
  const [selectedGuests, setSelectedGuests] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    status: {
      confirmed: true,
      declined: true,
      noResponse: true
    },
    accommodation: {
      provided: true,
      notProvided: true
    }
  });

  const [sortConfig, setSortConfig] = useState<{
    key: 'responseDate' | null;
    direction: 'ascending' | 'descending';
  }>({
    key: null,
    direction: 'ascending'
  });

  const { data: guestData, isLoading } = useQuery({
    queryKey: ['admin-guests'],
    queryFn: async () => {
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

      if (error) throw error;
      return data as GuestResponse[];
    },
  });

  const analytics = {
    totalGuests: guestData?.length || 0,
    responded: guestData?.filter(g => g.rsvp_responses).length || 0,
    confirmed: guestData?.filter(g => g.rsvp_responses && g.rsvp_responses.phone !== 'declined').length || 0,
    declined: guestData?.filter(g => g.rsvp_responses?.phone === 'declined').length || 0,
    needAccommodation: 0, // Removed accommodation needed status as per requirements
    totalAdditionalGuests: guestData?.reduce((total, guest) => {
      return total + (guest.rsvp_responses?.additional_guests?.length || 0);
    }, 0) || 0,
  };

  const filteredGuests = guestData?.filter(guest => {
    const statusMatch = 
      (filters.status.confirmed && guest.rsvp_responses && guest.rsvp_responses.phone !== 'declined') ||
      (filters.status.declined && guest.rsvp_responses?.phone === 'declined') ||
      (filters.status.noResponse && !guest.rsvp_responses);

    const accommodationMatch = 
      (filters.accommodation.provided && guest.accommodation_status === AccommodationStatus.Provided) ||
      (filters.accommodation.notProvided && guest.accommodation_status !== AccommodationStatus.Provided);

    return statusMatch && accommodationMatch;
  });

  const sortedGuests = filteredGuests?.sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (sortConfig.key === 'responseDate') {
      const dateA = a.rsvp_responses?.created_at || '';
      const dateB = b.rsvp_responses?.created_at || '';
      
      if (dateA < dateB) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (dateA > dateB) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    }
    
    return 0;
  });

  const handleSelectAll = () => {
    if (selectedGuests.length === filteredGuests?.length) {
      setSelectedGuests([]);
    } else {
      setSelectedGuests(filteredGuests?.map(g => g.id) || []);
    }
  };

  const handleSelectGuest = (guestId: string) => {
    setSelectedGuests(prev => 
      prev.includes(guestId) 
        ? prev.filter(id => id !== guestId)
        : [...prev, guestId]
    );
  };

  const handleCopyEmails = async () => {
    if (!selectedGuests.length) {
      toast({
        title: "No guests selected",
        description: "Please select at least one guest to copy their email addresses.",
        variant: "destructive",
      });
      return;
    }

    const selectedEmails = guestData
      ?.filter(guest => selectedGuests.includes(guest.id))
      .map(guest => guest.email)
      .join(', ');

    try {
      await navigator.clipboard.writeText(selectedEmails || '');
      toast({
        title: "Emails copied successfully",
        description: `${selectedGuests.length} email addresses copied to clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy emails",
        description: "There was an error copying emails to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const generateVCard = (guest: GuestResponse) => {
    if (!guest.rsvp_responses || guest.rsvp_responses.phone === 'declined') return null;
    
    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${guest.full_name}`,
      `TEL;TYPE=CELL:${guest.rsvp_responses.phone}`,
      `EMAIL;TYPE=WORK,INTERNET:${guest.email}`,
      `NOTE:MPVHG wedding guest`,
      'END:VCARD'
    ].join('\n');

    return vCard;
  };

  const downloadVCard = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadContacts = () => {
    if (!selectedGuests.length) {
      toast({
        title: "No guests selected",
        description: "Please select at least one guest to download their contact information.",
        variant: "destructive",
      });
      return;
    }

    const selectedGuestsData = guestData
      ?.filter(guest => 
        selectedGuests.includes(guest.id) &&
        guest.rsvp_responses &&
        guest.rsvp_responses.phone !== 'declined'
      ) || [];

    if (!selectedGuestsData.length) {
      toast({
        title: "No valid contacts",
        description: "Selected guests either declined or haven't provided contact information.",
        variant: "destructive",
      });
      return;
    }

    try {
      const vCards = selectedGuestsData
        .map(guest => generateVCard(guest))
        .filter(Boolean)
        .join('\n');

      downloadVCard(vCards, 'MPVHG_wedding_contacts.vcf');
      
      toast({
        title: "Contacts downloaded successfully",
        description: `${selectedGuestsData.length} contacts saved as vCard file.`,
      });
    } catch (err) {
      toast({
        title: "Failed to download contacts",
        description: "There was an error creating the contact file. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center h-32">
          <p className="text-gray-500">Loading guest data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-serif mb-8">Guest Responses Overview</h1>
      
      <GuestAnalytics {...analytics} />

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="confirmed-filter"
              checked={filters.status.confirmed}
              onCheckedChange={(checked) => setFilters(prev => ({
                ...prev,
                status: { ...prev.status, confirmed: !!checked }
              }))}
            />
            <label htmlFor="confirmed-filter" className="text-sm font-medium leading-none">
              Confirmed
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="declined-filter"
              checked={filters.status.declined}
              onCheckedChange={(checked) => setFilters(prev => ({
                ...prev,
                status: { ...prev.status, declined: !!checked }
              }))}
            />
            <label htmlFor="declined-filter" className="text-sm font-medium leading-none">
              Declined
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="no-response-filter"
              checked={filters.status.noResponse}
              onCheckedChange={(checked) => setFilters(prev => ({
                ...prev,
                status: { ...prev.status, noResponse: !!checked }
              }))}
            />
            <label htmlFor="no-response-filter" className="text-sm font-medium leading-none">
              No Response
            </label>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="accommodation-provided"
              checked={filters.accommodation.provided}
              onCheckedChange={(checked) => setFilters(prev => ({
                ...prev,
                accommodation: { ...prev.accommodation, provided: !!checked }
              }))}
            />
            <label htmlFor="accommodation-provided" className="text-sm font-medium leading-none">
              Accommodation Provided
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="accommodation-not-provided"
              checked={filters.accommodation.notProvided}
              onCheckedChange={(checked) => setFilters(prev => ({
                ...prev,
                accommodation: { ...prev.accommodation, notProvided: !!checked }
              }))}
            />
            <label htmlFor="accommodation-not-provided" className="text-sm font-medium leading-none">
              Accommodation Not Provided
            </label>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button
            variant="default"
            onClick={handleCopyEmails}
            disabled={selectedGuests.length === 0}
            className="flex-1 min-w-[200px]"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy Selected Emails
          </Button>

          <Button
            variant="default"
            onClick={handleDownloadContacts}
            disabled={selectedGuests.length === 0}
            className="flex-1 min-w-[200px]"
          >
            <Phone className="h-4 w-4 mr-2" />
            Download Selected Contacts
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedGuests.length === filteredGuests?.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Guest Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Accommodation</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Dietary Requirements</TableHead>
                <TableHead>Additional Guests</TableHead>
                <TableHead>
                  <div 
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md group"
                    onClick={() => {
                      setSortConfig(prev => ({
                        key: 'responseDate',
                        direction: prev.direction === 'ascending' ? 'descending' : 'ascending'
                      }));
                    }}
                    title="Click to sort by response date"
                  >
                    <span>Response Date</span>
                    <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                      {sortConfig.key === 'responseDate' ? (
                        sortConfig.direction === 'ascending' ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )
                      ) : (
                        <ArrowUp className="h-4 w-4 opacity-50" />
                      )}
                    </div>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedGuests?.map((guest) => (
                <TableRow key={guest.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedGuests.includes(guest.id)}
                      onCheckedChange={() => handleSelectGuest(guest.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      {guest.full_name}
                    </div>
                  </TableCell>
                  <TableCell>{guest.email}</TableCell>
                  <TableCell>
                    {guest.rsvp_responses ? (
                      guest.rsvp_responses.phone === 'declined' ? (
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
                      {guest.accommodation_status === AccommodationStatus.Provided ? (
                        <span className="text-emerald-500">Provided</span>
                      ) : (
                        <span className="text-amber-500">Not Provided</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.phone !== 'declined' && (
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4 text-gray-500" />
                        {guest.rsvp_responses?.phone || '-'}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.phone !== 'declined' && (
                      <div className="flex items-center gap-1">
                        <Utensils className="h-4 w-4 text-gray-500" />
                        {guest.rsvp_responses?.dietary_requirements || 'None'}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {guest.rsvp_responses?.phone !== 'declined' && (
                      <div className="space-y-2">
                        {guest.rsvp_responses?.additional_guests?.length > 0 ? (
                          <div className="flex items-center gap-1 mb-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">
                              {guest.rsvp_responses.additional_guests.length} additional guest(s):
                            </span>
                          </div>
                        ) : null}
                        {guest.rsvp_responses?.additional_guests?.map((additionalGuest) => (
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
                    {guest.rsvp_responses ? (
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(guest.rsvp_responses.created_at).toLocaleDateString()}
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
