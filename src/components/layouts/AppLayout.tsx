import BottomNav from "../BottomNav";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50 relative">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[url('/bg_pattern.jpg')] bg-fixed bg-cover bg-center opacity-85" />
      <div className="absolute inset-0 bg-white/50" />

      {/* Content Layers */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />
        <main className="flex-grow overflow-y-auto pb-20"> 
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default AppLayout;
