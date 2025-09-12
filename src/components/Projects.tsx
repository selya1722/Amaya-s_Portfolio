const Projects = () => {
  const projects = [
    
    {
      title: "TechFlow Solutions – Business Performance Dashboard",
      description: "A data-driven dashboard that simplifies decision-making with clear KPIs, performance insights, and smart visual analytics.",
      tech: ["Figma,", "Behance", "Prototyping"],
      image: "tfs.png",
      gradient: "from-purple-500 to-blue-600",
       live: "https://www.figma.com/proto/vWWKyOBgQSLoOw2IqyZQO3/TFS-dashboard--my-first-?page-id=0%3A1&node-id=21-83&p=f&viewport=420%2C201%2C0.1&t=ccxKPmSJQZ3JmLde-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=21%3A83",   
       code: "https://www.behance.net/gallery/234404347/TFS-Business-Performance-Dashboard"   
    },
    {
      title: "SheSafe – Women’s Safety App",
      description: "An empowering safety app designed to provide women with instant alerts, real-time tracking, and peace of mind at their fingertips.",
      tech: ["Figma","Behance", "Prototyping"],
      image: "she.png",
      gradient: "from-pink-200 to-rose-300",
       live: "https://www.figma.com/proto/DvsvEEiWdriVvehnvKkaCW/SheSafe?page-id=0%3A1&node-id=1-2&p=f&viewport=20%2C263%2C0.11&t=8onp5Ljvgmelgd88-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",  
       code: "https://www.behance.net/gallery/234253819/SheSafe-Smart-Safety-Stronger-You"   
    },
    {
      title: "AloeGuard – Smart Plant Health App",
      description: "An intelligent mobile app built to diagnose Aloe Vera diseases and offer tailored solutions for healthier plants.", 
      tech: ["Figma", "Behance", "Prototyping"],
      image: "aloe.png",
      gradient: "from-green-500 to-cyan-200",
      live: "https://www.figma.com/proto/aDSIPkAOJQBAu19wGI097h/AloeGuard?page-id=0%3A1&node-id=32-51&p=f&viewport=119%2C-3%2C0.19&t=tBlcApV47mrdjcQI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=32%3A51", 
      code: "https://www.behance.net/gallery/230392773/AloeGuard-Mobile-Application"
    },
    {
      title: "BCS Solutions Website",
      description:"A modern responsive website, showcasing professional security solutions and services with a focus on trust, reliability, and client engagement.",
      tech: ["Typescript", "Next.js", "tailwindcss", "Vercel"],
      image: "bcs (2).png",
      gradient: "from-purple-500 to-white-600",
      live: "https://bcs-solutions.vercel.app",  
      code: "https://github.com/selya1722/bcs-solutions"   
    },
    {
      title: "App Ratings Predictor – Smarter Insights with AI",
      description: "A concept project merging UI/UX insights with machine learning to forecast app performance and improve user experience.",
      tech: ["Python","Jupiter Notebook", "Machine Learning"],
      image: "uxml.png"  ,
      gradient: "from-blue-300 to-indigo-600",
      live: "https://www.behance.net/gallery/228959337/App-Ratings-Predictor-Merging-UIUX-Insight-with-ML",   
      code: "https://github.com/selya1722/app-rating-prediction-uxml"
    },
    {
      title: "FoodieBuddy – Your Smart Food Ordering App",
      description: "A sleek app that makes food ordering faster, smarter, and personalized with seamless browsing and easy checkout.",
      tech: ["Figma", "Behance", "Prototyping"],
      image: "foodiebuddy.png",
      gradient: "from-yellow-500 to-teal-600",
      live: "https://www.figma.com/proto/sVGqYfz3KPRA5qdg5LWMLZ/food_order_app?page-id=0%3A1&node-id=159-109&p=f&viewport=220%2C309%2C0.17&t=whIVEiIdShWAq4Yf-1&scaling=scale-down&content-scaling=fixed",   
      code: "https://www.behance.net/gallery/223349527/FoodieBuddy-Your-Online-Food-Ordering-Pal"
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
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 py-2 px-4 gradient-primary text-white rounded-lg hover:scale-105 transition-transform duration-300 text-center"
  >
    View Live
  </a>
  <a
    href={project.code}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 py-2 px-4 glass-effect border border-purple-500/30 rounded-lg hover:scale-105 transition-transform duration-300 text-center"
  >
    View More
  </a>
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
