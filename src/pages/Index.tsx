import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import SheSafe from "@/pages/shesafe";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 gradient-primary opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 gradient-primary opacity-10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Education />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center border-t border-purple-500/20">
          <div className="container mx-auto px-6">
            <p className="text-muted-foreground">
              © 2025 Amaya Jayasekara. Crafted with love and passion.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
