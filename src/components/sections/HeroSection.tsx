import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-[url('/bg_pattern.jpg')] bg-cover bg-center opacity-90">
      <div className="absolute inset-0 bg-transparent" />
      <div className="container relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in space-y-12">
          <div className="relative mb-8">
            <Heart className="relative mx-auto text-[#9b87f5] h-14 w-14 animate-pulse" />
          </div>
          
          <div className="space-y-8">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium tracking-wide text-[#1A1F2C] leading-tight">
              Veronika & Martin
            </h1>
            
            <div className="space-y-2">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
                Pretože patríte do kruhu našich najbližších,
                <br />
                radi by sme náš sviatočný deň prežili spolu s Vami.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-medium text-[#9b87f5] tracking-wide">
                15. JÚL 2025
              </p>
            </div>
            
            <div className="space-y-1 text-[#4A5568] text-lg md:text-xl">
              <p>o 14. hodine</p>
              <p>v kostole v Přelouči,</p>
              <p>Česká republika</p>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <button className="px-10 py-4 bg-[#9b87f5] text-white rounded-lg text-lg font-medium hover:bg-[#8B5CF6] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Potvrdiť účasť
            </button>
            <p className="text-sm text-[#4A5568] mt-2">
              Prosíme, potvrďte účasť na svadobnej hostine do 15. júna 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;