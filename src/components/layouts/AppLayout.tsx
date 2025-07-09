import BottomNav from "../BottomNav";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[url('/bg_pattern.jpg')] bg-fixed bg-cover bg-center opacity-85" />
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative z-10">
        <Header />
        <main className="pt-16 pb-24">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default AppLayout;
