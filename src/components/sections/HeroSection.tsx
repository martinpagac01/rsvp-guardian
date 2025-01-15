import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden text-center px-4 py-8 md:py-12">
      <div className="absolute inset-0 bg-[url('/bg_pattern.jpg')] bg-cover bg-center opacity-85 object-cover" />
      <div className="absolute inset-0 bg-white opacity-50" />
      <div className="container relative z-10 max-w-4xl mx-auto">
        <div className="animate-fade-in space-y-10 md:space-y-12">
          <div className="relative">
            <Heart className="relative mx-auto text-[#9b87f5] h-12 w-12 md:h-14 md:w-14 animate-pulse" />
          </div>
          
          <div className="space-y-8 md:space-y-10">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-wide text-[#1A1F2C] leading-tight">
              Veronika & Martin
            </h1>
            
            <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-[#4A5568] max-w-2xl mx-auto leading-relaxed px-4 md:px-8">
              Pretože patríte do kruhu našich najbližších,
              radi by sme náš sviatočný deň prežili spolu s vami.
            </p>
          </div>

          <div className="space-y-8 md:space-y-10">
            <p className="font-sans text-xl sm:text-2xl md:text-3xl font-medium text-[#9b87f5] tracking-wide">
              Sobota 12. júla 2025
            </p>

            <div className="space-y-2 text-[#4A5568] font-sans text-base sm:text-lg md:text-xl">
              <p>o 14. hodine</p>
              <p>v kostole v Přelouči,</p>
              <p>v Českej republike</p>
            </div>
          </div>

          <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] mx-auto mt-10 md:mt-12 opacity-85">
            <img 
              src="/img/illustration.svg" 
              alt="Illustration" 
              className="w-full h-auto" 
              style={{
                filter: 'contrast(0.95) brightness(1.02)'
              }}
            />
          </div>

          <div className="space-y-4 mt-10 md:mt-12">
            <a 
              href="#rsvp" 
              className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-[#9b87f5] text-white rounded-lg text-base sm:text-lg font-medium hover:bg-[#8B5CF6] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Potvrdiť účasť
            </a>
            <p className="font-sans text-xs sm:text-sm text-[#4A5568] mt-4">
              Prosíme, potvrďte účasť na svadobnej hostine do 31. januára 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;