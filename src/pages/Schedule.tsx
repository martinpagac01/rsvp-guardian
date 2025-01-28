import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TaxiButton } from "@/components/TaxiButton"

const schedule = [
  {
    time: "14:00",
    title: "Sobášny obrad",
    description: "Kostol v Přelouči",
    icon: "💒"
  },
  {
    time: "15:00",
    title: "Svadobná hostina",
    description: "Hotel Fontána",
    icon: "🍽️"
  },
  {
    time: "18:00",
    title: "Prvý mladomanželský tanec",
    description: "Tanečný parket",
    icon: "💃"
  },
  {
    time: "19:00",
    title: "Krájanie torty",
    description: "Svadobná torta",
    icon: "🎂"
  },
  {
    time: "20:00",
    title: "Večerná zábava",
    description: "Hudba a tanec",
    icon: "🎵"
  }
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F3FF]/30 p-4 pb-20">
      <div className="container mx-auto max-w-md pt-8">
        <div className="text-center mb-8">
          <Link to="/app">
            <Button variant="ghost" className="mb-4">
              ← Späť
            </Button>
          </Link>
          <Heart className="mx-auto text-[#9b87f5] h-8 w-8 animate-pulse mb-4" />
          <h1 className="font-serif text-3xl text-[#1A1F2C] mb-2">Program svadby</h1>
          <p className="font-sans text-[#4A5568]">Sobota 12. júla 2025</p>
        </div>

        <div className="space-y-4">
          {schedule.map((item) => (
            <Card key={item.time} className="border-[#9b87f5]/20 bg-white/80">
              <CardContent className="pt-6 flex items-center space-x-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <div className="font-serif text-xl text-[#1A1F2C]">{item.title}</div>
                  <div className="font-sans text-[#4A5568]">{item.time}</div>
                  <div className="font-sans text-sm text-[#4A5568]">{item.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <TaxiButton />
    </div>
  )
}
