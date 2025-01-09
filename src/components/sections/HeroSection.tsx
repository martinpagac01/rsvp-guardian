import { Heart, ChevronDown } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AspectRatio ratio={16 / 9}>
          <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30" />
        </AspectRatio>
      </div>
      <div className="container relative z-10 text-center space-y-8 px-4 animate-fade-in">
        <Heart className="mx-auto text-rose-500 h-16 w-16 animate-pulse" />
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-800">
          Lucia & Matej
        </h1>
        <p className="font-serif text-2xl md:text-4xl text-gray-600 italic">
          Pozývame Vás na našu svadbu
        </p>
        <ChevronDown className="mx-auto h-8 w-8 text-gray-600 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;