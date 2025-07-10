import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

import { motion, Variants } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100 } 
  },
};

const classicMenu = {
  courses: [
    { name: 'Polievka', items: ['Hovädzia polievka', 's pečeňovými haluškami'] },
    { name: 'Hlavný chod', items: ['Kuracie prso', 'Grilovaná sezónna zelenina'] },
    { name: 'Dezert', items: ['Candybar', 'Svadobná torta'] },
  ],
};

const vegetarianMenu = {
  courses: [
    { name: 'Polievka', items: ['Dýňová krémová polievka'] },
    { name: 'Hlavný chod', items: ['Grilovaný baklažán a cuketa', 'Kuskus'] },
    { name: 'Dezert', items: ['Candybar', 'Svadobná torta'] },
  ],
};

interface MenuCardProps {
  menu: typeof classicMenu;
}

const MenuContent: React.FC<MenuCardProps> = ({ menu }) => (
  <motion.div variants={itemVariants}>
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl border border-rose-200/30">
      <CardContent className="p-6">
        <div className="space-y-6">
          {menu.courses.map((course, index) => (
            <div key={course.name}>
              <h2 className="font-display text-2xl font-medium text-gray-700 mb-3">{course.name}</h2>
              <ul className="list-none pl-0 space-y-2">
                {course.items.map((item) => (
                  <li key={item} className="font-sans text-lg text-gray-600">{item}</li>
                ))}
              </ul>
              {index < menu.courses.length - 1 && (
                <Separator className="bg-rose-200/50 mt-6" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function MenuPage() {
  return (
    <div className="container mx-auto max-w-md p-4 pb-8">
      <div className="text-center pt-8 pb-12">
        <h1 className="font-serif text-4xl text-[#1A1F2C]">Svadobné menu</h1>
        <p className="font-sans text-lg text-[#4A5568] mt-2">Čo sa bude servírovať</p>
      </div>
      <motion.div 
        className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl border border-[#9b87f5]/30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Tabs defaultValue="klasicke" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-transparent">
            <TabsTrigger 
              value="klasicke" 
              className="font-serif text-lg font-medium data-[state=active]:bg-white/90 data-[state=active]:text-[#1A1F2C] data-[state=active]:shadow-md rounded-t-lg py-3"
            >
              Klasické
            </TabsTrigger>
            <TabsTrigger 
              value="vegetarianske" 
              className="font-serif text-lg font-medium data-[state=active]:bg-white/90 data-[state=active]:text-[#1A1F2C] data-[state=active]:shadow-md rounded-t-lg py-3"
            >
              Vegetariánske
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="klasicke" className="mt-0">
            <div className="bg-white/90 rounded-b-2xl rounded-tr-2xl p-8 flex flex-col items-center">
              <div className="w-full space-y-6">
                <div className="text-center">
                  <div className="font-serif text-base font-semibold tracking-widest uppercase mb-2">Polievka</div>
                  <div className="font-serif text-base text-gray-700 leading-tight">Hovädzia polievka<br/>s pečeňovými haluškami</div>
                </div>
                <Separator className="bg-rose-200/50" />
                <div className="text-center">
                  <div className="font-serif text-base font-semibold tracking-widest uppercase mb-2">Hlavný chod</div>
                  <div className="font-serif text-base text-gray-700 leading-tight">Kuracie prso<br/>s grilovanou sezónnou zeleninou<br/>a gratinovanými zemiakmi</div>
                </div>
                <Separator className="bg-rose-200/50" />
                <div className="text-center">
                  <div className="font-serif text-base font-semibold tracking-widest uppercase mb-2">Dezert</div>
                  <div className="font-serif text-base text-gray-700 leading-tight">Candybar<br/>Svadobná torta</div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="vegetarianske" className="mt-0">
            <div className="bg-white/90 rounded-b-2xl rounded-tl-2xl p-8 flex flex-col items-center">
              <div className="w-full space-y-6">
                <div className="text-center">
                  <div className="font-serif text-base font-semibold tracking-widest uppercase mb-2">Polievka</div>
                  <div className="font-serif text-base text-gray-700 leading-tight">Dýňová krémová polievka</div>
                </div>
                <Separator className="bg-rose-200/50" />
                <div className="text-center">
                  <div className="font-serif text-base font-semibold tracking-widest uppercase mb-2">Hlavný chod</div>
                  <div className="font-serif text-base text-gray-700 leading-tight">Grilovaný baklažán a cuketa<br/>s kuskusom<br/>a gratinovanými zemiakmi</div>
                </div>
                <Separator className="bg-rose-200/50" />
                <div className="text-center">
                  <div className="font-serif text-base font-semibold tracking-widest uppercase mb-2">Dezert</div>
                  <div className="font-serif text-base text-gray-700 leading-tight">Candybar<br/>Svadobná torta</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
