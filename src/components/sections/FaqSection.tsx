import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Kedy mám potvrdiť účasť?",
    answer: "Prosíme o potvrdenie účasti do 15. júna 2024. Pomôže nám to s plánovaním a organizáciou."
  },
  {
    question: "Môžem prísť s partnerom/partnerkou?",
    answer: "Áno, pozvánka platí pre vás a vášho partnera/partnerku. Prosíme, uveďte to pri potvrdení účasti."
  },
  {
    question: "Bude k dispozícii parkovanie?",
    answer: "Áno, pri kostole aj na mieste hostiny je dostatok parkovacích miest."
  },
  {
    question: "Aké je menu?",
    answer: "Menu bude obsahovať výber z tradičných českých a slovenských jedál. Ak máte špeciálne diétne požiadavky, prosím, informujte nás."
  },
  {
    question: "Čo ak potrebujem prenocovať?",
    answer: "V sekcii Ubytovanie nájdete naše odporúčané možnosti ubytovania v okolí. Odporúčame rezervovať čo najskôr."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="mx-auto h-10 w-10 text-[#9b87f5] mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1F2C]">
              Často kladené otázky
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Odpovede na najčastejšie otázky. Ak tu nenájdete odpoveď na vašu otázku, neváhajte nás kontaktovať.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg bg-white shadow-sm px-4"
              >
                <AccordionTrigger className="text-left font-medium text-[#1A1F2C] hover:text-[#9b87f5] transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A5568] pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-[#4A5568] text-sm">
              Nenašli ste odpoveď na vašu otázku?{" "}
              <a href="#contact" className="text-[#9b87f5] hover:underline">
                Kontaktujte nás
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;