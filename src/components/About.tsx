
const About = () => {
  const techStack = [
  { name: "React" },
  { name: "HTML/CSS" },
  { name: "Java" },
  { name: "Python" },
  { name: "C/C++" },
  { name: "Figma" },
  { name: "Git/Github" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Miro" },
  { name: "MongoDB" },
  { name: "Firebase" },
  { name: "Framer" },
  { name: "Adobe XD" },
  { name: "Tailwind CSS"},
  { name: "Formspree" },
  { name: "Vercel" },
  {name:"Kaggle/Jupyter Notebooks/Google Colab"},
  {name:"Uizard/lovable" },
  {name:"ChatGPT/Gemini AI/Google Stich" }
   
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative animate-scale-in">
              <div className="relative z-10 glass-effect rounded-3xl p-8 border border-purple-500/20">
                <div className="w-full h-96 rounded-2xl overflow-hidden">
                  <img
                    src="images/IMG_0516.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              {/* Add this inside the Content Side div, after the grid */}
              {/* Add this inside the Content Side div, after the grid */}
              <center>
                <div className="pt-6">
                  {/* replace with your actual CV file path */}
                  <a
                    href="Amaya Jayasekara CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 text-white text-lg font-medium rounded-full
  bg-pink-500/10 backdrop-blur-md border border-white/40 shadow-lg
  hover:bg-pink-500/30 transition duration-200"
                  >
                    View CV
                  </a>
                </div>
              </center>
              <div className="absolute -top-4 -right-4 w-32 h-32 gradient-primary rounded-full opacity-20 animate-float" />
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 gradient-primary rounded-full opacity-30 animate-float"
                style={{ animationDelay: "-2s" }}
              />
            </div>

            {/* Content Side */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "2s" }}
            >
              <h3 className="text-3xl font-bold gradient-text">
                Design-Driven Developer with a Passion for UX
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a UX/UI designer with a love for coding — bringing ideas to
                life through intuitive design and clean development. With a
                focus on modern aesthetics and seamless user experiences, I
                craft websites and applications that are not just beautiful, but
                meaningful and user-centered.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not designing or coding, I'm exploring emerging
                technologies, diving into open-source contributions, or
                experimenting with creative side projects that challenge the
                limits of what's possible on the web.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="glass-effect rounded-xl p-6 border border-pink-500/20">
                  <h4 className="text-2xl font-bold gradient-text mb-2">5+</h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="glass-effect rounded-xl p-6 border border-purple-500/20">
                  <h4 className="text-2xl font-bold gradient-text mb-2">2+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

         
         {/* Tech Stack Scrolling Section */}
<div className="mt-20">
  <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
    Technologies I Work With
  </h3>

  <div
    className="relative overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing no-scrollbar"
    style={{
      scrollBehavior: "smooth",
      overscrollBehaviorX: "none",
    }}
    onScroll={(e) => {
      // cast currentTarget to HTMLDivElement so we can access scroll properties safely
      const container = e.currentTarget as HTMLDivElement;
      const maxScrollLeft = container.scrollWidth / 2;
      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollLeft = 0;
      }
    }}
  >
    <div
      className="flex animate-scroll space-x-8 min-w-max"
      style={{ width: "fit-content" }}
    >
      {techStack.concat(techStack).map((tech, index) => (
        <div
          key={index}
          className="flex-shrink-0 glass-effect rounded-2xl px-10 py-6 border border-purple-500/20 
          hover:border-purple-500/40 transition-all duration-300 hover:scale-105 min-w-[180px]
          flex items-center justify-center"
        >
          <span className="text-xl font-semibold text-white tracking-wide">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;
