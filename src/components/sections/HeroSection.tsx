import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
      <div className="absolute inset-0 bg-[url('/bg_pattern.jpg')] bg-cover bg-center opacity-85 object-cover" />
      <div className="absolute inset-0 bg-white opacity-50" />
      <div className="container relative z-10 max-w-4xl mx-auto space-y-2">
        <div className="animate-fade-in space-y-6">
          <div className="relative mb-4">
            <Heart className="relative mx-auto text-[#9b87f5] h-14 w-14 animate-pulse" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-wide text-[#1A1F2C] leading-tight mb-3">
            Veronika & Martin
          </h1>
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-[#4A5568] max-w-3xl mx-auto leading-relaxed mb-2">
            Pretože patríte do kruhu našich najbližších,<br />
            radi by sme náš sviatočný deň prežili spolu s vami.
          </p>
          <div className="pt-2">
            <p className="text-2xl md:text-3xl font-medium text-[#9b87f5] tracking-wide mb-2">
              sobota 12. JÚL 2025
            </p>
          </div>
          <div className="space-y-1 text-[#4A5568] text-lg md:text-xl mb-2">
            <p>o 14. hodine</p>
            <p>v kostole v Přelouči,</p>
            <p>Česká republika</p>
          </div>
          <img src="/img/illustration.svg" alt="Illustration" className="mx-auto my-0" style={{ maxWidth: '70%', height: 'auto' }} />
          <div className="pt-4">
            <button className="px-10 py-4 bg-[#9b87f5] text-white rounded-lg text-lg font-medium hover:bg-[#8B5CF6] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <a href="#rsvp" className="block">Potvrdiť účasť</a>
            </button>
            <p className="text-sm text-[#4A5568] mt-2">Prosíme, potvrďte účasť na svadobnej hostine do 15. júna 2024.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;