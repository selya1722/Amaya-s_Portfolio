import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Projects from "@/components/Projects";
import SheSafe from "./pages/shesafe";
import TFS from "./pages/tfs";
import NotFound from "./pages/NotFound";
import Aloe from "./pages/aloe";
import artemia from "./pages/artemia";
import logoicts from "./pages/logoicts";
import MSquiz from "./pages/MSquiz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/shesafe" element={<SheSafe />} />
          <Route path="/tfs" element={<TFS />} />
          <Route path="/aloe" element={<Aloe />} />

          {/*Achievements */}

          <Route path="/artemia" element={<artemia />} />
          <Route path="/logoicts" element={<logoicts />} />
          <Route path="/MSquiz" element={<MSquiz />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
