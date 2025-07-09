import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Utensils } from 'lucide-react';

const classicMenu = {
  courses: [
    { name: "Polievka", items: ["Hovädzia polievka s pečeňovými haluškami"] },
    { name: "Hlavný chod", items: ["Kuracie prso, grilovaná sezónna zelenina"] },
    { name: "Dezert", items: ["Candybar", "Svadobná torta"] },
  ]
};

const vegetarianMenu = {
  courses: [
    { name: "Polievka", items: ["Dýňová krémová polievka"] },
    { name: "Hlavný chod", items: ["Grilovaný baklažán a cuketa, kuskus"] },
    { name: "Dezert", items: ["Candybar", "Svadobná torta"] },
  ]
};

interface MenuCardProps {
  menu: typeof classicMenu;
  title: string;
}

const MenuContent: React.FC<MenuCardProps> = ({ menu, title }) => (
  <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl border border-[#9b87f5]/30">
    <CardContent className="p-6">
      <div className="space-y-6">
        {menu.courses.map((course, index) => (
          <div key={course.name}>
            <h2 className="font-serif text-2xl font-medium text-[#1A1F2C] mb-3">{course.name}</h2>
            <ul className="list-none pl-0 space-y-2">
              {course.items.map((item) => (
                <li key={item} className="font-sans text-lg text-gray-600">{item}</li>
              ))}
            </ul>
            {index < menu.courses.length - 1 && (
              <Separator className="bg-[#9b87f5]/30 mt-6" />
            )}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function MenuPage() {
  return (
    <div className="container mx-auto max-w-md p-4 pb-24">
      <div className="text-center mb-8">
        <Utensils className="mx-auto text-[#9b87f5] h-10 w-10 mb-4" />
        <h1 className="font-serif text-4xl font-medium text-[#1A1F2C]">Svadobné menu</h1>
      </div>

      <Tabs defaultValue="classic" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/60 backdrop-blur-sm rounded-xl border border-[#9b87f5]/20 p-1">
          <TabsTrigger value="classic" className="rounded-lg data-[state=active]:bg-white/80 data-[state=active]:text-[#9b87f5] data-[state=active]:shadow-md">Klasické</TabsTrigger>
          <TabsTrigger value="vegetarian" className="rounded-lg data-[state=active]:bg-white/80 data-[state=active]:text-[#9b87f5] data-[state=active]:shadow-md">Vegetariánske</TabsTrigger>
        </TabsList>
        <TabsContent value="classic">
          <MenuContent menu={classicMenu} title="Klasické menu" />
        </TabsContent>
        <TabsContent value="vegetarian">
          <MenuContent menu={vegetarianMenu} title="Vegetariánske menu" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
