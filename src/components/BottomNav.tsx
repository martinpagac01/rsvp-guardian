import { NavLink } from "react-router-dom";
import { Home, CalendarDays, Utensils, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app", label: "Domov", icon: Home },
  { href: "/app/schedule", label: "Program", icon: CalendarDays },
  { href: "/app/menu", label: "Menu", icon: Utensils },
  { href: "/app/quiz", label: "Kvíz", icon: Gamepad2 },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-20">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center text-sm font-medium transition-colors",
                isActive
                  ? "text-[#9b87f5]"
                  : "text-gray-500 hover:text-[#9b87f5]/80"
              )
            }
          >
            <item.icon className="h-6 w-6 mb-1" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
