import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center space-y-6">
        <Heart className="mx-auto h-10 w-10 text-rose-400 animate-pulse" />
        <div className="space-y-4">
          <p className="font-serif text-3xl">Lucia & Matej</p>
          <p className="text-xl text-gray-300">15. Júna 2024</p>
          <div className="w-24 h-1 bg-rose-400 mx-auto mt-6 rounded-full" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;