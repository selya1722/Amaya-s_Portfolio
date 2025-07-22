
const Projects = () => {
  const projects = [
    {
      title: "BCS Solutions Website",
      description:"A modern responsive website, showcasing professional security solutions and services with a focus on trust, reliability, and client engagement.",
      tech: ["Typescript", "Next.js", "tailwindcss", "Vercel"],
      image: "bcs (2).png",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration.",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio website with stunning animations, responsive design, and optimized performance for creative professionals.",
      tech: ["React", "Framer Motion", "GSSP", "Vercel"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Learning Platform",
      description: "Interactive online learning platform with video streaming, progress tracking, and gamification elements for enhanced engagement.",
      tech: ["React", "Express", "AWS", "WebRTC"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and personalized weather insights.",
      tech: ["React Native", "OpenWeather API", "Redux", "Maps"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      gradient: "from-blue-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, featuring innovative solutions and creative implementations
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-effect rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 py-2 px-4 gradient-primary text-white rounded-lg hover:scale-105 transition-transform duration-300">
                    View Live
                  </button>
                  <button className="flex-1 py-2 px-4 glass-effect border border-purple-500/30 rounded-lg hover:scale-105 transition-transform duration-300">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
