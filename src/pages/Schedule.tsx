import { Link } from "react-router-dom"
import { ArrowLeft, Church, Utensils, Users, Cake, Music } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TaxiButton } from "@/components/TaxiButton"

const schedule = [
  {
    time: "14:00",
    title: "Sobášny obrad",
    description: "Kostol v Přelouči",
    icon: Church
  },
  {
    time: "15:00",
    title: "Svadobná hostina",
    description: "Hotel Fontána",
    icon: Utensils
  },
  {
    time: "18:00",
    title: "Prvý mladomanželský tanec",
    description: "Tanečný parket",
    icon: Users
  },
  {
    time: "19:00",
    title: "Krájanie torty",
    description: "Svadobná torta",
    icon: Cake
  },
  {
    time: "20:00",
    title: "Večerná zábava",
    description: "Hudba a tanec",
    icon: Music
  }
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F3FF]/30 p-4 pb-20">
      <div className="container mx-auto max-w-md pt-6 sm:pt-8">

        {/* Back Button */}
        <Link to="/app" className="absolute top-3 left-3 text-[#4A5568] hover:text-[#9b87f5] transition-colors flex items-center">
          <ArrowLeft className="h-5 w-5 mr-1" />
          Späť
        </Link>

        <div className="text-center mb-8 mt-6">
          <h1 className="font-serif text-4xl font-medium text-[#1A1F2C] mb-2">Program svadby</h1>
          <p className="font-sans text-lg text-[#4A5568]">Sobota 12. júla 2025</p>
        </div>

        <div className="space-y-5">
          {schedule.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.time} className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-[#9b87f5]/30">
                <CardContent className="py-5 px-6 flex items-center space-x-5">
                  <IconComponent className="h-10 w-10 text-[#9b87f5]" />
                  <div>
                    <div className="font-serif text-xl font-medium text-[#1A1F2C]">{item.title}</div>
                    <div className="font-sans text-[#4A5568]">{item.time}</div>
                    <div className="font-sans text-sm text-[#4A5568]">{item.description}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <TaxiButton />
    </div>
  )
}
