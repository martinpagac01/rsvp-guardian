import BottomNav from "../BottomNav";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[url('/bg_pattern.jpg')] bg-fixed bg-cover bg-center opacity-85" />
      <div className="absolute inset-0 bg-white/50" />

      <Header />
      {/* Padded, scrollable content area */}
      <main className="relative z-10 pt-16 pb-20 flex flex-col min-h-screen">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
