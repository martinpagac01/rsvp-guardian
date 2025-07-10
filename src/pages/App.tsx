import { Heart, Phone, Car, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhotoUploader } from "@/components/PhotoUploader";

const coordinator = {
  name: "Katka Mendelová",
  phone: "+420 775 995 982",
  note: "V prípade akýchkoľvek otázok alebo núdze v deň svadby.",
};

const taxi = {
  route: "Samota Pierre → Hotel GRAND, Čáslav",
  price: "300,- Kč (platba v hotovosti)",
  booking: "+420 734 759 593",
};

export default function AppPage() {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number.replace(/\s/g, "")}`;
  };

  return (
      <div className="container mx-auto max-w-md p-4 flex flex-col justify-center h-full">
        <div className="space-y-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="w-full h-16 bg-[#9b87f5] text-white backdrop-blur-sm shadow-lg rounded-2xl text-lg font-medium hover:bg-[#8B5CF6] hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center"
              >
                
                <span>Zdieľať fotky</span>
              </Button>
            </DialogTrigger>
            <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className="bg-white sm:rounded-lg border-gray-200 shadow-xl">
              <DialogHeader className="pt-2">
                <DialogTitle className="font-serif text-2xl text-center text-[#1A1F2C]">
                  Podeľte sa o momentky
                </DialogTitle>
                <DialogDescription className="font-sans text-center text-[#4A5568] pt-1">
                  Nahrajte fotky (nie videá), ktoré budú automaticky zmenšené.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <PhotoUploader />
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="w-full h-16 bg-white/80 border-[#9b87f5]/30 backdrop-blur-sm shadow-lg rounded-2xl text-lg font-medium text-[#1A1F2C] hover:bg-white hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center"
              >
                <span>Kontakt na koordinátorku</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:rounded-lg border-gray-200 shadow-xl">
              <DialogHeader className="pt-2">
                <DialogTitle className="font-serif text-2xl text-center text-[#1A1F2C]">
                  {coordinator.name}
                </DialogTitle>
                <DialogDescription className="font-sans text-center text-[#4A5568] pt-1">
                  {coordinator.note}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <Button
                  onClick={() => handleCall(coordinator.phone)}
                  size="lg"
                  className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] rounded-lg py-3"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {coordinator.phone}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="w-full h-16 bg-white/80 border-[#9b87f5]/30 backdrop-blur-sm shadow-lg rounded-2xl text-lg font-medium text-[#1A1F2C] hover:bg-white hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center"
              >
                <span>Objednať taxi</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:rounded-lg border-gray-200 shadow-xl">
              <DialogHeader className="pt-2">
                <DialogTitle className="font-serif text-2xl text-center text-[#1A1F2C]">
                  Objednanie taxi
                </DialogTitle>
              </DialogHeader>
              <div className="text-left font-sans text-gray-700 space-y-3 py-4 text-base">
                <p><strong>Trasa:</strong><br />{taxi.route}</p>
                <p><strong>Cena:</strong><br />{taxi.price}</p>
                <p><strong>Objednávka:</strong></p>
              </div>
              <Button
                onClick={() => handleCall(taxi.booking)}
                size="lg"
                className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] rounded-lg py-3"
              >
                <Car className="mr-2 h-5 w-5" />
                {taxi.booking}
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
  );
}
