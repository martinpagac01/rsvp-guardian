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
  const taxiService = {
    name: "Taxi Přelouč",
    number: "+420 466 611 111",
    note: "Spoľahlivá lokálna taxi služba."
  };

  const handleCall = () => {
    window.location.href = `tel:${taxiService.number.replace(/\s/g, '')}`;
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto w-full max-w-md px-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            size="lg"
            className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] shadow-lg rounded-full py-3"
          >
            <Car className="mr-2 h-5 w-5" />
            Zavolať Taxi
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white sm:rounded-lg border-gray-200 shadow-xl">
          <DialogHeader className="pt-2">
            <DialogTitle className="font-serif text-2xl text-center text-[#1A1F2C]">{taxiService.name}</DialogTitle>
            {taxiService.note && (
              <DialogDescription className="font-sans text-center text-[#4A5568] pt-1">
                {taxiService.note}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="flex flex-col items-center space-y-6 py-6">
            <p className="text-3xl font-bold tracking-tight text-[#1A1F2C]">{taxiService.number}</p>
            <Button 
              onClick={handleCall}
              size="lg"
              className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] rounded-full py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Vytočiť číslo
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
