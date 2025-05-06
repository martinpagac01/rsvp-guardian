import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TaxiButton } from "@/components/TaxiButton"
import { cn } from "@/lib/utils"

const menu = {
  predjedlo: [
    "Prosciutto s melónom",
    "Grilovaný kozí syr s rukolou"
  ],
  polievka: [
    "Slepačí vývar s domácimi rezancami"
  ],
  hlavneJedlo: [
    "Sviečková na smotane s karlovarskou knedľou",
    "Grilovaný losos s bylinkovým maslom",
    "Vegetariánske rizoto s hríbami (v)"
  ],
  dezert: [
    "Svadobná torta",
    "Domáce koláčiky"
  ],
  vecerneObcerstvenie: [
    "Zabíjačkové špeciality",
    "Chlebíčky a kanapky",
    "Ovocný a syrový tanier"
  ]
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F3FF]/30 p-4 pb-20">
      <div className="container mx-auto max-w-md pt-6 sm:pt-8">

        {/* Back Button */}
        <Link to="/app" className="absolute top-3 left-3 text-[#4A5568] hover:text-[#9b87f5] transition-colors flex items-center">
          <ArrowLeft className="h-5 w-5 mr-1" />
          Späť
        </Link>

        <div className="text-center mb-8 mt-6">
          <h1 className="font-serif text-4xl font-medium text-[#1A1F2C] mb-2">Svadobné menu</h1>
          <p className="font-sans text-lg text-[#4A5568]">Hotel Fontána</p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border-[#9b87f5]/30">
          <CardContent className="py-6 px-5">
            <div className="space-y-5">
              {Object.entries(menu).map(([category, items]) => (
                <div key={category}>
                  <h2 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-3">{
                    category === "predjedlo" ? "Predjedlo" :
                    category === "polievka" ? "Polievka" :
                    category === "hlavneJedlo" ? "Hlavné jedlo" :
                    category === "dezert" ? "Dezert" :
                    category === "vecerneObcerstvenie" ? "Večerné občerstvenie" :
                    category
                  }</h2>
                  <ul className="list-none pl-0 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="font-sans text-lg text-[#4A5568]">{item}</li>
                    ))}
                  </ul>
                  {category !== Object.keys(menu).pop() && (
                    <Separator className="bg-[#9b87f5]/20 mt-4" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <TaxiButton />
    </div>
  )
}
