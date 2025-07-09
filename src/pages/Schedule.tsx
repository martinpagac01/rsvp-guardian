import { Camera, Church, Clapperboard, GlassWater, HeartHandshake, Music, PartyPopper, Gem, Cake, Users, Gamepad2, Bus, MapPin, Car, CalendarDays } from 'lucide-react';
import React from 'react';

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
  { type: 'common', event: { time: "9:30 - 12:15", title: "Prípravy & Fotenie", icon: Clapperboard, location: "Samota Pierre" } },
  { type: 'common', event: { time: "12:15 - 13:00", title: "Welcome drink", icon: GlassWater, location: "Samota Pierre" } },
  {
    type: 'travel',
    title: 'Cesta na obrad',
    groups: [
      {
        from: 'Z Hotelu Grand, Čáslav',
        transportIcon: Bus,
        events: [
          { time: "13:00", title: "Odchod autobusu", icon: Bus },
        ]
      },
      {
        from: 'Zo Samoty Pierre',
        transportIcon: Car,
        events: [
          { time: "13:15", title: "Odchod autami", icon: Car },
        ]
      }
    ],
    commonDestination: { time: "13:30 - 13:45", title: "Príchod ku kostolu", icon: Church, location: "Evanjelický kostol, Přelouč" }
  },
  { type: 'common', event: { time: "14:00", title: "Svadobný obrad", icon: Church, location: "Evanjelický kostol, Přelouč, Českobratrská 53501" } },
  { type: 'common', event: { time: "14:45 - 15:15", title: "Gratulácie", icon: HeartHandshake, location: "Evanjelický kostol, Přelouč" } },
  {
    type: 'travel',
    title: 'Cesta na hostinu',
    groups: [
      {
        from: 'Od kostola (autobusom)',
        transportIcon: Bus,
        events: [
          { time: "15:30", title: "Odchod od kostola", icon: Bus },
        ]
      },
      {
        from: 'Od kostola (autom)',
        transportIcon: Car,
        events: [
          { time: "15:30", title: "Odchod od kostola", icon: Car },
        ]
      }
    ],
    commonDestination: { time: "16:00", title: "Príchod na hostinu", icon: PartyPopper, location: "Samota Pierre, Podhořany u Ronova 151", description: "Hádzanie taniera a prípitky" }
  },
  { type: 'common', event: { time: "16:15", title: "Svadobný obed", icon: GlassWater } },
  { type: 'common', event: { time: "18:00", title: "Prvý tanec & Saxofonista", icon: Gem } },
  { type: 'common', event: { time: "18:10", title: "Tanec s rodičmi", icon: Users } },
  { type: 'common', event: { time: "18:30", title: "Krájanie torty", icon: Cake } },
  { type: 'common', event: { time: "19:00", title: "Hádzanie kytice", icon: Music } },
  { type: 'common', event: { time: "19:30", title: "Zábava", icon: Music } },
  { type: 'common', event: { time: "20:00", title: "Svadobná hra: Stoličky", icon: Gamepad2, description: "Moderuje svedkyňa" } },
  { type: 'common', event: { time: "20:30", title: "Zábava", icon: Music } },
  { type: 'common', event: { time: "21:00", title: "Svadobná hra: Whitney", icon: Gamepad2 } },
  { type: 'common', event: { time: "21:30", title: "Zábava", icon: Music } },
  { type: 'common', event: { time: "22:00", title: "Prskavkový tanec", icon: PartyPopper } },
  { type: 'common', event: { time: "22:30 - 6:00", title: "Voľná zábava & Kapela", icon: Music } },
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

export default function SchedulePage() {
  return (
    <div className="container mx-auto max-w-md p-4">
      <div className="text-center mb-8">
        <CalendarDays className="mx-auto text-[#9b87f5] h-10 w-10 mb-4" />
        <h1 className="font-serif text-4xl font-medium text-[#1A1F2C]">Program dňa</h1>
      </div>
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-[#9b87f5]/30">
        {timeline.map((item, index) => {
          if (item.type === 'common') {
            return <TimelineItem key={index} item={item.event} />;
          } else if (item.type === 'travel') {
            return <TravelTimeline key={index} travelData={item} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
