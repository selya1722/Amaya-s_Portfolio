import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const words = ['UX/UI Designer', 'Frontend Developer'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 70;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentWord.length) {
          setDisplayText(currentWord.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentCharIndex > 0) {
          setDisplayText(currentWord.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.3) 0%, rgba(147, 51, 234, 0.2) 25%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 gradient-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 gradient-primary rounded-full opacity-25 animate-float" style={{ animationDelay: '-4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 items-center h-full min-h-screen">
          
          {/* Left Content */}
          <div className="animate-fade-in-up pt-20 lg:pt-0 px-4 lg:pl-12 flex flex-col justify-center h-full text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight overflow-visible">
  <span className="gradient-text animate-gradient block">Amaya</span>
  <span className="gradient-text animate-gradient block">Jayasekara</span>
</h1>


            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Crafting beautiful digital experiences with passion, creativity, and cutting-edge technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 gradient-primary text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass-effect border border-purple-500/30 text-foreground font-semibold rounded-full hover:scale-105 transition-transform duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end lg:pr-12 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src="0b268cdf-e05a-4e05-be54-2be545253639-removebg-preview.png"
                alt="Creative Developer Character"
                className="w-64 md:w-80 lg:w-96 h-auto object-contain animate-bounce-subtle"
              />
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full scale-75" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
