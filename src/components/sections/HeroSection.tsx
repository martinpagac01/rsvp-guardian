import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/10 to-transparent" />
      <div className="container relative z-10 text-center space-y-12 px-4">
        <div className="animate-fade-in space-y-8">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] blur-lg opacity-75" />
            <Heart className="relative mx-auto text-[#9b87f5] h-16 w-16 animate-pulse" />
          </div>
          <div className="space-y-6">
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-[#1A1F2C] to-[#403E43] bg-clip-text text-transparent">
              Lucia & Matej
            </h1>
            <p className="font-serif text-2xl md:text-4xl text-[#403E43] italic">
              Pozývame Vás na našu svadbu
            </p>
          </div>
          <div className="pt-8">
            <div className="mx-auto h-16 w-[1px] bg-gradient-to-b from-[#9b87f5] to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;