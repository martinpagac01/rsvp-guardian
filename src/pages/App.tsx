import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Heart, CalendarDays, Utensils, Gamepad2, Gift, Users, Phone, Mail } from "lucide-react"
import { TaxiButton } from "@/components/TaxiButton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Program",
    href: "/schedule",
    icon: CalendarDays,
  },
  {
    title: "Menu",
    href: "/menu",
    icon: Utensils,
  },
  {
    title: "Hra",
    href: "/game",
    icon: Gamepad2,
  },
  {
    title: "Rady",
    href: "/advice",
    icon: Gift,
  },
  {
    title: "Koordinátorka",
    icon: Users,
    isCoordinatorContact: true,
    contactDetails: {
      name: "Katka Mendelová",
      phone: "+420 775 995 982",
      email: "mendelovakatarina@gmail.com",
      note: "V prípade akýchkoľvek otázok alebo núdze v deň svadby."
    }
  }
]

export default function AppPage() {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number.replace(/\s/g, '')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F3FF]/30 p-4 pb-28"> {/* Increased pb for TaxiButton */}
      <div className="container mx-auto max-w-md pt-6 sm:pt-8">
        <div className="text-center mb-10">
          <Heart className="mx-auto text-[#9b87f5] h-10 w-10 animate-pulse mb-3" />
          <h1 className="font-serif text-4xl font-medium text-[#1A1F2C] mb-2">Veronika & Martin</h1>
          <p className="font-sans text-lg text-[#4A5568]">Vitajte v našej svadobnej aplikácii</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            if (item.isCoordinatorContact && item.contactDetails) {
              const contact = item.contactDetails;
              return (
                <Dialog key={item.title}>
                  <DialogTrigger asChild>
                    <Card className={cn(
                      "h-40 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-[#9b87f5]/30",
                      "flex flex-col items-center justify-center text-center bg-white/90 backdrop-blur-sm shadow-lg rounded-xl cursor-pointer group"
                    )}>
                      <CardContent className="pt-6 flex flex-col items-center justify-center">
                        <IconComponent className="h-10 w-10 text-[#9b87f5] mb-3 transition-colors duration-300 group-hover:text-[#8B5CF6]" />
                        <h2 className="font-serif text-xl font-medium text-[#1A1F2C] transition-colors duration-300 group-hover:text-[#8B5CF6]">{item.title}</h2>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-white sm:rounded-lg border-gray-200 shadow-xl">
                    <DialogHeader className="pt-2">
                      <DialogTitle className="font-serif text-2xl text-center text-[#1A1F2C]">{contact.name}</DialogTitle>
                      {contact.note && (
                        <DialogDescription className="font-sans text-center text-[#4A5568] pt-1">
                          {contact.note}
                        </DialogDescription>
                      )}
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <Button 
                        onClick={() => handleCall(contact.phone)}
                        size="lg"
                        className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] rounded-lg py-3"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        {contact.phone}
                      </Button>
                      <Button 
                        variant="outline"
                        size="lg"
                        onClick={() => window.location.href = `mailto:${contact.email}`}
                        className="w-full border-[#9b87f5]/50 text-[#9b87f5] hover:bg-[#9b87f5]/10 hover:text-[#8B5CF6] rounded-lg py-3"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        {contact.email}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            }
            return (
              <Link 
                key={item.title} 
                to={item.href || "#"} // Fallback href if not defined
                className="block no-underline group"
              >
                <Card className={cn(
                  "h-40 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl border-[#9b87f5]/30",
                  "flex flex-col items-center justify-center text-center bg-white/90 backdrop-blur-sm shadow-lg rounded-xl"
                )}>
                  <CardContent className="pt-6 flex flex-col items-center justify-center">
                    <IconComponent className="h-10 w-10 text-[#9b87f5] mb-3 transition-colors duration-300 group-hover:text-[#8B5CF6]" />
                    <h2 className="font-serif text-xl font-medium text-[#1A1F2C] transition-colors duration-300 group-hover:text-[#8B5CF6]">{item.title}</h2>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
      <TaxiButton />
    </div>
  )
}
