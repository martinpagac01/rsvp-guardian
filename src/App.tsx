import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import AppPage from "./pages/App";
import SchedulePage from "./pages/Schedule";
import MenuPage from "./pages/Menu";
import AdvicePage from "./pages/Advice";
import QuizPage from "./pages/Quiz";
import AppLayout from "@/components/layouts/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/advice" element={<AdvicePage />} />
          
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<AppPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="quiz" element={<QuizPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;