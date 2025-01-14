import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 text-[#4A5568]">
          <span className="font-serif">Veronika</span>
          <Heart className="h-4 w-4 text-[#9b87f5]" />
          <span className="font-serif">Martin</span>
        </div>
        
        <div className="text-center mt-4 text-sm text-[#4A5568]">
          <p>&copy; 2025 Veronika & Martin. Všetky práva vyhradené.</p>
          <p>Web application by <a href="https://expurl.com/" className="text-[#9b87f5]" target="_blank">expurl.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
