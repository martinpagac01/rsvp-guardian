import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TaxiButton } from "@/components/TaxiButton"

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
      <div className="container mx-auto max-w-md pt-8">
        <div className="text-center mb-8">
          <Link to="/app">
            <Button variant="ghost" className="mb-4">
              ← Späť
            </Button>
          </Link>
          <Heart className="mx-auto text-[#9b87f5] h-8 w-8 animate-pulse mb-4" />
          <h1 className="font-serif text-3xl text-[#1A1F2C] mb-2">Svadobné menu</h1>
          <p className="font-sans text-[#4A5568]">Hotel Fontána</p>
        </div>

        <Card className="border-[#9b87f5]/20 bg-white/80">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-xl text-[#1A1F2C] mb-2">Predjedlo</h2>
                <ul className="list-disc list-inside space-y-1">
                  {menu.predjedlo.map((item) => (
                    <li key={item} className="font-sans text-[#4A5568]">{item}</li>
                  ))}
                </ul>
              </div>

              <Separator className="bg-[#9b87f5]/20" />

              <div>
                <h2 className="font-serif text-xl text-[#1A1F2C] mb-2">Polievka</h2>
                <ul className="list-disc list-inside space-y-1">
                  {menu.polievka.map((item) => (
                    <li key={item} className="font-sans text-[#4A5568]">{item}</li>
                  ))}
                </ul>
              </div>

              <Separator className="bg-[#9b87f5]/20" />

              <div>
                <h2 className="font-serif text-xl text-[#1A1F2C] mb-2">Hlavné jedlo</h2>
                <ul className="list-disc list-inside space-y-1">
                  {menu.hlavneJedlo.map((item) => (
                    <li key={item} className="font-sans text-[#4A5568]">{item}</li>
                  ))}
                </ul>
              </div>

              <Separator className="bg-[#9b87f5]/20" />

              <div>
                <h2 className="font-serif text-xl text-[#1A1F2C] mb-2">Dezert</h2>
                <ul className="list-disc list-inside space-y-1">
                  {menu.dezert.map((item) => (
                    <li key={item} className="font-sans text-[#4A5568]">{item}</li>
                  ))}
                </ul>
              </div>

              <Separator className="bg-[#9b87f5]/20" />

              <div>
                <h2 className="font-serif text-xl text-[#1A1F2C] mb-2">Večerné občerstvenie</h2>
                <ul className="list-disc list-inside space-y-1">
                  {menu.vecerneObcerstvenie.map((item) => (
                    <li key={item} className="font-sans text-[#4A5568]">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <TaxiButton />
    </div>
  )
}
