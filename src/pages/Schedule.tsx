import { Camera, GlassWater, Music, PartyPopper, Gem, Cake, Gamepad2, Bus, Car, Heart, Utensils, Puzzle, Sparkles, Flower2, MapPin } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

// Type Definitions
interface TimelineEvent {
  time: string;
  title: string;
  icon: React.ElementType;
  location?: string;
  description?: string;
}

interface TravelEvent {
  time: string;
  title: string;
  icon: React.ElementType;
}

interface TravelGroup {
  from: string;
  events: TravelEvent[];
  transportIcon: React.ElementType;
}

interface TravelSectionData {
  type: 'travel';
  title: string;
  groups: TravelGroup[];
  commonDestination: TimelineEvent;
}

interface CommonEventData {
  type: 'common';
  event: TimelineEvent;
}

type TimelineItemData = CommonEventData | TravelSectionData;

const timeline: TimelineItemData[] = [
  { type: 'common', event: { time: "15:30", title: "Príchod na Samotu Pierre", icon: PartyPopper } },
  { type: 'common', event: { time: "16:00", title: "Slávnostný obed", icon: Utensils } },
  { type: 'common', event: { time: "17:00", title: "Fotenie", icon: Camera } },
  { type: 'common', event: { time: "18:00", title: "Prvý tanec", icon: Heart } },
  { type: 'common', event: { time: "18:30", title: "Torta", icon: Cake } },
  { type: 'common', event: { time: "20:00", title: "Svadobná hra: Stoličky", icon: Puzzle, description: "Moderuje: Svedkyňa Zuzka" } },
  { type: 'common', event: { time: "21:00", title: "Svadobná hra: Whitney", icon: Puzzle, description: "Moderuje: Svedok Michal" } },
  { type: 'common', event: { time: "22:00", title: "Prskavkový tanec", icon: Sparkles } },
  { type: 'common', event: { time: "23:00", title: "Hádzanie kytice", icon: Flower2 } },
];

const TimelineItem: React.FC<{ item: TimelineEvent; isLastInBranch?: boolean }> = ({ item, isLastInBranch = false }) => (
  <div className="flex items-start pl-4">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full border border-[#9b87f5]/50 shadow-md">
        <item.icon className="w-5 h-5 text-[#9b87f5]" />
      </div>
      {!isLastInBranch && <div className="w-px h-10 bg-gray-300 mt-2"></div>}
    </div>
    <div className="pt-1.5">
      <p className="font-bold text-md text-[#1A1F2C]">{item.time}</p>
      <h3 className="font-serif text-lg text-[#1A1F2C]">{item.title}</h3>
      {item.location && <div className="flex items-center text-sm text-gray-500 mt-1"><MapPin className='w-3 h-3 mr-1.5' /><span>{item.location}</span></div>}
      {item.description && <p className="text-sm text-gray-500 mt-1">{item.description}</p>}
    </div>
  </div>
);

const TravelTimeline: React.FC<{ travelData: TravelSectionData }> = ({ travelData }) => (
  <div className="relative pl-4 my-2">
    {/* Main vertical line continues through the section */}
    <div className="absolute left-9 top-0 bottom-0 w-px bg-gray-300"></div>

    {/* Section Title (e.g., Cesta na obrad) */}
    <div className="flex items-start mb-4">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full border border-[#9b87f5]/50 shadow-md z-10 mr-4">
        <MapPin className="w-5 h-5 text-[#9b87f5]" />
      </div>
      <div className="pt-1.5">
        <h3 className="font-serif text-xl text-[#1A1F2C]">{travelData.title}</h3>
      </div>
    </div>

    {/* Sub-timeline for travel groups */}
    <div className="ml-10 pl-5 space-y-3">
      {travelData.groups.map((group, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full border border-[#9b87f5]/30 mr-4 z-10">
            <group.transportIcon className="w-4 h-4 text-[#9b87f5]" />
          </div>
          <div className="pt-0.5">
            <p className="font-bold text-md text-gray-700">{group.from}</p>
            {group.events.map((event, eventIndex) => (
              <div key={eventIndex} className="flex items-center mt-1">
                <p className="font-semibold text-sm text-gray-500 w-16">{event.time}</p>
                <p className="text-sm text-gray-600">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Common Destination */}
    <div className="mt-4">
      <TimelineItem item={travelData.commonDestination} isLastInBranch />
    </div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SchedulePage() {
  return (
    <div className="container mx-auto max-w-md p-4">
      <div className="text-center pt-8 pb-12">
        <h1 className="font-serif text-4xl text-[#1A1F2C]">Harmonogram</h1>
        <p className="font-sans text-lg text-[#4A5568] mt-2">Prehľad svadobného dňa</p>
      </div>
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-[#9b87f5]/30">
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {timeline.map((item, index) => {
            const key = `timeline-item-${index}`;
            if (item.type === 'common') {
              return (
                <motion.div key={key} variants={itemVariants}>
                  <TimelineItem item={item.event} />
                </motion.div>
              );
            }
            if (item.type === 'travel') {
              return (
                <motion.div key={key} variants={itemVariants}>
                  <TravelTimeline travelData={item} />
                </motion.div>
              );
            }
            return null;
          })}
        </motion.div>
      </div>
    </div>
  );
}
