
import { Figma } from 'lucide-react';


const About = () => {
  const techStack = [
   
    { name: 'React', icon: '⚛️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Figma', icon: <Figma className="w-6 h-6" /> },
    { name: 'Git', icon: '📦' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
   {
  name: 'Miro',
  icon: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0v24l6.938-6.938L14.125 24v-9.938l9.875 9.875V0L17.062 6.938 9.875 0v9.938L0 0Z" />
    </svg>
  ),
},

    { name: 'MongoDB', icon: '🍃' }
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
                    src="dew (2).png"
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 gradient-primary rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 gradient-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '-2s' }} />
            </div>

            {/* Content Side */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold gradient-text">
                Design-Driven Developer with a Passion for UX
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
               I'm a UX/UI designer with a love for coding — bringing ideas to life through intuitive design and clean development.
               With a focus on modern aesthetics and seamless user experiences, I craft websites and applications that are not just beautiful,
               but meaningful and user-centered.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
               When I’m not designing or coding, I’m exploring emerging technologies, diving into open-source contributions,
               or experimenting with creative side projects that challenge the limits of what’s possible on the web.
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
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-8">
                {/* First set of items */}
                {techStack.map((tech, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 glass-effect rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 min-w-[200px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl flex items-center justify-center">
                        {typeof tech.icon === 'string' ? tech.icon : tech.icon}
                      </div>
                      <span className="text-lg font-semibold text-white">{tech.name}</span>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {techStack.map((tech, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 glass-effect rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 min-w-[200px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl flex items-center justify-center">
                        {typeof tech.icon === 'string' ? tech.icon : tech.icon}
                      </div>
                      <span className="text-lg font-semibold text-white">{tech.name}</span>
                    </div>
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
