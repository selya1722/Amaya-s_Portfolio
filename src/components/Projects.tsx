import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "TechFlow Solutions - Business Performance Dashboard",
      description: "Smart dashboard for faster decisions with visual KPIs.",
      tech: ["Figma", "Behance", "Prototyping"],
      image: "images/tfs.png",
      gradient: "from-purple-500 to-white-600",
      live: "https://www.figma.com/proto/vWWKyOBgQSLoOw2IqyZQO3/TFS-dashboard--my-first-?page-id=0%3A1&node-id=21-83&p=f&viewport=420%2C201%2C0.1&t=ccxKPmSJQZ3JmLde-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=21%3A83",
      code: "/tfs",
    },
    {
      title: "SheSafe - Women's Safety App",
      description:
        "An empowering safety app designed to provide women with instant alerts, real-time tracking, and peace of mind at their fingertips.",
      tech: ["Figma", "Behance", "Prototyping"],
      image: "images/she.png",
      gradient: "from-purple-500 to-white-600",
      live: "https://www.figma.com/proto/DvsvEEiWdriVvehnvKkaCW/SheSafe?page-id=0%3A1&node-id=1-2&p=f&viewport=20%2C263%2C0.11&t=8onp5Ljvgmelgd88-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      code: "/shesafe",
    },
    {
      title: "AloeGuard - Smart Plant Health App",
      description:
        "An intelligent mobile app built to diagnose Aloe Vera diseases and offer tailored solutions for healthier plants.",
      tech: ["Figma", "Behance", "Prototyping"],
      image: "images/aloe.png",
      gradient: "from-purple-500 to-white-600",
      live: "https://www.figma.com/proto/aDSIPkAOJQBAu19wGI097h/AloeGuard?page-id=0%3A1&node-id=32-51&p=f&viewport=119%2C-3%2C0.19&t=tBlcApV47mrdjcQI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=32%3A51",
      code: "/aloe",
    },
    {
      title: "AuraSafe - Women's Safety App (Designathon Winner)",
      description:
        "A smart women's safety app with quick action button, SOS alerts and smart ring integration, proudly winning 1st place at Designathon for redefining modern protection.",
      tech: ["Figma", "Figjam", "Canva", "Google Forms"],
      image: "images/auracover.png",
      gradient: "from-purple-500 to-white-600",
      live: "https://www.figma.com/proto/rDpoYLiyumW57abNtUzfch/Team-Valkyries?page-id=0%3A1&node-id=95-1392&p=f&viewport=116%2C240%2C0.04&t=3Tdf1d18TEvQttC4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=95%3A1392",
      code: "https://www.figma.com/design/rDpoYLiyumW57abNtUzfch/Team-Valkyries?node-id=0-1&t=n2mxFtbfgMRhoNFJ-1",
    },
    {
      title: "BCS Solutions - Security Services Providers' Website",
      description:
        "A modern, fully responsive website designed to showcase professional security solutions and services, emphasizing trust, reliability, and strong client engagement.",
      tech: ["Typescript", "Next.js", "tailwindcss", "Vercel"],
      image: "images/bcs (2).png",
      gradient: "from-purple-500 to-white-600",
      live: "https://bcs-solutions.vercel.app",
      code: "https://github.com/selya1722/bcs-solutions",
    },
    {
      title:
        "Bloomly - a SaaS product landing page for a wellness and productivity app.",
      description:
        "Find your flow with mindful planning, habit tracking, and AI-powered mood journaling — helping you stay productive, peaceful, and in tune with yourself.",
      tech: ["Figma", "Canva"],
      image: "images/bloomy1.png",
      gradient: "from-purple-500 to-white-600",
      live: "https://www.figma.com/proto/bDh0R5OqPSH4eWl6GuyDQ1/Bloomly-Saas?page-id=0%3A1&node-id=20-3163&p=f&viewport=120%2C-89%2C0.18&t=kWoAcVX46EComzBi-1&scaling=scale-down-width&content-scaling=fixed",
      code: "https://www.figma.com/design/bDh0R5OqPSH4eWl6GuyDQ1/Bloomly-Saas?node-id=0-1&t=eaIunvt2ki7TmxPV-1",
    },

    {
      title: "App Ratings Predictor - Smarter Insights with AI",
      description: "UI/UX + ML to predict app performance and enhance UX.",
      tech: ["Python", "Jupiter Notebook", "Machine Learning"],
      image: "images/uxml.png",
      gradient: "from-purple-500 to-white-600",
      live: "https://www.behance.net/gallery/228959337/App-Ratings-Predictor-Merging-UIUX-Insight-with-ML",
      code: "https://github.com/selya1722/app-rating-prediction-uxml",
    },
    {
      title: "FoodieBuddy - Your Smart Food Ordering App",
      description:
        "A sleek app that makes food ordering faster, smarter, and personalized with seamless browsing and easy checkout.",
      tech: ["Figma", "Behance", "Prototyping"],
      image: "images/foodiebuddy.png",
      gradient: "from-purple-500 to-white-600",
      live: "https://www.figma.com/proto/sVGqYfz3KPRA5qdg5LWMLZ/food_order_app?page-id=0%3A1&node-id=159-109&p=f&viewport=220%2C309%2C0.17&t=whIVEiIdShWAq4Yf-1&scaling=scale-down&content-scaling=fixed",
      code: "https://www.behance.net/gallery/223349527/FoodieBuddy-Your-Online-Food-Ordering-Pal",
    },
  ];

  const blogs = [
    {
      title: "How I Fell in Love with UX Design and Found My Voice in Pixels",
      date: "October 16, 2025",
      description:
        "How I craft experiences that balance usability and emotion, building designs that connect with real people.",
      tags: ["UX Design", "Empathy", "User Research"],
      image: "images/dew.jpg",
      link: "https://medium.com/@dewjayasekara78/how-i-fell-in-love-with-ux-design-and-found-my-voice-in-pixels-dd834821c740",
    },
    {
      title:
        "Designing the Designer: My Journey to Building a UX Portfolio That Never Feels Done",
      date: "October 31, 2025",
      description:
        "Explore my evolving UX journey — how I built, learned, and found inspiration.",
      tags: ["Figma", "Portfolio", "Case studies"],
      image: "images/blog2.png",
      link: "https://medium.com/@dewjayasekara78/designing-the-designer-my-journey-to-building-a-ux-portfolio-that-never-feels-done-17826b813660",
    },
    {
      title: "The Future of AI x UX — Designing Intelligently",
      date: "November 02, 2025",
      description:
        "Exploring the intersection between artificial intelligence and user experience — the next evolution of design.",
      tags: ["AI", "UX", "Innovation"],
      image: "images/ai.png",
      link: "https://medium.com/@dewjayasekara78/the-future-of-ai-ux-designing-intelligently-f49346f81538",
    },
  ];

  return (
    <>
      {/* 🌸 Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work, featuring innovative solutions and
              creative implementations
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
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
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 w-full">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 w-full sm:w-auto py-2 px-4 gradient-primary text-white rounded-lg hover:scale-105 transition-transform duration-300 text-center whitespace-nowrap"
                    >
                      View Live
                    </a>

                    {project.code.startsWith("/") ? (
                      <Link
                        to={project.code}
                        className="flex-1 w-full sm:w-auto py-2 px-4 glass-effect border border-purple-500/30 rounded-lg hover:scale-105 transition-transform duration-300 text-center whitespace-nowrap"
                      >
                        View Case Study
                      </Link>
                    ) : (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 w-full sm:w-auto py-2 px-4 glass-effect border border-purple-500/30 rounded-lg hover:scale-105 transition-transform duration-300 text-center whitespace-nowrap"
                      >
                        View More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌷 Blog Section */}
      <section id="blog" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              My <span className="gradient-text">Blogs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My corner to share thoughts, lessons, and creative sparks 💭
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group glass-effect rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-purple-300 mb-2">{blog.date}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {blog.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-2 px-4 gradient-primary text-white rounded-lg hover:scale-105 transition-transform duration-300 text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
