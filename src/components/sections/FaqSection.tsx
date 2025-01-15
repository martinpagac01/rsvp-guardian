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
    answer: "Prosíme o potvrdenie účasti do 31. januára 2025. Pomôže nám to s plánovaním a organizáciou."
  },
  {
    question: "Môžem prísť s partnerom/partnerkou?",
    answer: "Pozvánka je viazaná len na jednu osobu. V prípade, že počítame aj s vašim partnerom/partnerkou, systém vám umoží dopozvať ďalších ľudí."
  },
  {
    question: "Ako je to s deťmi? Môžem priniesť aj psa?",
    answer: "Boli by sme veľmi radi, keby na svadobnú hostinu prídete bez detí a domácich miláčikov. Radi by sme, aby ste si deň užili naplno a veríme, že vám to situácia dovolí. V prípade, že by vám to situácia nedovolila, kontaktujte nás prosím vopred."
  },
  {
    question: "Aké je menu?",
    answer: "Menu bude obsahovať výber z tradičných českých a slovenských jedál. Ak máte špeciálne diétne požiadavky, prosím, vyplňte ich pri potvrdení svojej účasti."
  },
  {
    question: "Čo ak potrebujem prenocovať?",
    answer: "Najbližsia rodina a spoluorganizátori majú ubytovanie zabezpečené priamo na mieste hostiny. Ostatných prosíme o zabezpečenie ubytovania po vlastnej ose. V sekcii Ubytovanie nájdete naše odporúčané možnosti ubytovania v okolí. Miesto si, prosím, rezervujte čo najskôr."
  },
  {
    question: "Ako riešiť svadobné dary?",
    answer: "Najväčším darom pre nás bude vaša účasť. V prípade, že sa rozhodnete nám predsa niečo podarovať, poteší nás finančný príspevok na pokrytie nákladov spojených s organizáciou svadby."
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