import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import PatientsPage from "./pages/services/PatientsPage";
import PhysiciansPage from "./pages/services/PhysiciansPage";
import HospitalsPage from "./pages/services/HospitalsPage";
import TechnologyPage from "./pages/TechnologyPage";
import IndustryNewsPage from "./pages/IndustryNewsPage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route element={<Layout />}>
            <Route path="/services/patients" element={<PatientsPage />} />
            <Route path="/services/physicians" element={<PhysiciansPage />} />
            <Route path="/services/hospitals" element={<HospitalsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/industry-news" element={<IndustryNewsPage />} />
            <Route path="/industry-news/:slug" element={<ArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
