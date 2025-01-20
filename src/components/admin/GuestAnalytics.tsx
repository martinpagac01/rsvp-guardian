import { Card } from "@/components/ui/card";
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Home,
  UserPlus 
} from "lucide-react";

interface AnalyticsProps {
  totalGuests: number;
  responded: number;
  confirmed: number;
  declined: number;
  needAccommodation: number;
  totalAdditionalGuests: number;
}

export const GuestAnalytics = ({ 
  totalGuests, 
  responded, 
  confirmed, 
  declined,
  needAccommodation,
  totalAdditionalGuests
}: AnalyticsProps) => {
  const stats = [
    {
      title: "Total Invited Guests",
      value: totalGuests,
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Have Responded",
      value: responded,
      icon: CheckCircle,
      color: "text-emerald-500",
    },
    {
      title: "Confirmed Attending",
      value: confirmed,
      icon: CheckCircle,
      color: "text-emerald-500",
    },
    {
      title: "Declined",
      value: declined,
      icon: XCircle,
      color: "text-red-500",
    },
    {
      title: "Pending Response",
      value: totalGuests - responded,
      icon: Clock,
      color: "text-amber-500",
    },
    {
      title: "Additional Guests",
      value: totalAdditionalGuests,
      icon: UserPlus,
      color: "text-purple-500",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
            <stat.icon className={`h-8 w-8 ${stat.color}`} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GuestAnalytics;