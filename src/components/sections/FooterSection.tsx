import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <Heart className="mx-auto h-8 w-8 mb-4" />
        <p className="font-serif text-xl">Lucia & Matej</p>
        <p className="mt-2">15. Júna 2024</p>
      </div>
    </footer>
  );
};

export default FooterSection;