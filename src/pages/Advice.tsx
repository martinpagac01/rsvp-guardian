import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { TaxiButton } from "@/components/TaxiButton"

export default function AdvicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F3FF]/30 p-4 pb-20">
      <div className="container mx-auto max-w-md pt-6 sm:pt-8">

        {/* Back Button */}
        <Link to="/app" className="absolute top-3 left-3 text-[#4A5568] hover:text-[#9b87f5] transition-colors flex items-center">
          <ArrowLeft className="h-5 w-5 mr-1" />
          Späť
        </Link>

        <div className="text-center mb-8 mt-6">
          <h1 className="font-serif text-4xl font-medium text-[#1A1F2C] mb-2">Svadobné rady</h1>
          <p className="font-sans text-lg text-[#4A5568]">Táto funkcia je momentálne nedostupná.</p>
        </div>
      </div>
      <TaxiButton />
    </div>
  )
}
