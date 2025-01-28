import { Car, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function TaxiButton() {
  const taxiNumber = "+420 466 611 111" // Taxi Přelouč

  const handleCall = () => {
    window.location.href = `tel:${taxiNumber.replace(/\s/g, '')}`
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto w-full max-w-md px-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full bg-white/80 border-[#9b87f5]/20 hover:bg-[#9b87f5]/10 text-[#4A5568]"
          >
            <Car className="mr-2 h-4 w-4" />
            Už ma to nebaví 🚕
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white/95 border-[#9b87f5]/20">
          <DialogHeader>
            <DialogTitle className="font-serif text-[#1A1F2C]">Taxi služba Přelouč</DialogTitle>
            <DialogDescription className="font-sans text-[#4A5568]">
              Neboj, nikomu to nepovieme 🤫
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 py-4">
            <p className="text-2xl font-medium text-[#1A1F2C]">{taxiNumber}</p>
            <Button 
              onClick={handleCall}
              className="w-full bg-[#9b87f5] hover:bg-[#9b87f5]/90"
            >
              <Phone className="mr-2 h-4 w-4" />
              Zavolať taxi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
