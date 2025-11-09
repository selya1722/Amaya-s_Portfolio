import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import Projects from "@/components/Projects";

// Projects
import SheSafe from "./pages/shesafe";
import TFS from "./pages/tfs";
import Aloe from "./pages/aloe";

// Achievements
import Artemia from "./pages/artemia";
import ICTLogo from "./pages/logo";
import MSQuiz from "./pages/MSquiz";

// Misc
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Auto scrolls to top on route change */}
          <ScrollToTop />

          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />

            {/* Project Routes */}
            <Route path="/shesafe" element={<SheSafe />} />
            <Route path="/tfs" element={<TFS />} />
            <Route path="/aloe" element={<Aloe />} />

            {/* Achievements */}
            <Route path="/artemia" element={<Artemia />} />
            <Route path="/logoicts" element={<ICTLogo />} />
            <Route path="/msquiz" element={<MSQuiz />} />

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
