import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-3 mb-8">
                <Heart className="h-6 w-6 text-[#9b87f5]" />
                <span className="font-serif text-2xl">Veronika & Martin</span>
              </div>
              
              <div className="space-y-3 text-[#A0AEC0]">
                <p className="text-base">15. júla 2024 • Přelouč, Česká republika</p>
                <p>
                  <a 
                    href="#rsvp" 
                    className="text-[#9b87f5] hover:text-white transition-colors duration-200"
                  >
                    Potvrdiť účasť
                  </a>
                </p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-[#2D3748]">
              <p className="text-[#A0AEC0]">
                2024 • Tešíme sa na vás
              </p>
              <p className="text-[#A0AEC0] text-sm">
                Expiring website from expurl.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;