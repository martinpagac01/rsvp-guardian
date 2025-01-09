import { Heart, ChevronDown } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AspectRatio ratio={16 / 9}>
          <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30" />
        </AspectRatio>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50" />
      <div className="container relative z-10 text-center space-y-12 px-4">
        <div className="animate-fade-in space-y-8">
          <Heart className="mx-auto text-rose-500 h-16 w-16 animate-pulse" />
          <div className="space-y-4">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-gray-800 tracking-tight">
              Lucia & Matej
            </h1>
            <p className="font-serif text-2xl md:text-4xl text-gray-700 italic">
              Pozývame Vás na našu svadbu
            </p>
          </div>
          <div className="pt-8">
            <ChevronDown className="mx-auto h-8 w-8 text-gray-600 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;