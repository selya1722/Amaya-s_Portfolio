const Certifications = () => {
  const certifications = [
    {
      title: "AI/ML Engineer - Stage 1",
      issuer: "SLIIT",
      date: "2025",
      image: "sliit.jpg",
      link: "https://code.sliit.org/certificates/dzmt7qcdyh",
    },
    {
      title: "Introduction to User Experience Design",
      issuer: "Georgia Institute of Technology - Coursera",
      date: "2024",
      image: "coursera.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/5I85LQ4IHNSJ",
    },
    {
      title: "Figma Essential for UI/UX",
      issuer: "Udemy - Learnify IT",
      date: "2024",
      image: "udemy.jpg",
      link: "https://www.udemy.com/certificate/UC-e9756da0-4d06-4bf0-bbdb-0b82780032ef/",
    },
    {
      title:
        "Build Your Generative AI Productivity Skills with Microsoft and LinkedIn",
      issuer: "Microsoft & LinkedIn",
      date: "2025",
      image: "linkedin.jpeg",
      link: "https://linkedin.com/certificate-link",
    },
    {
      title: "IT Essentials",
      issuer: "Cisco Networking Academy",
      date: "2025",
      image: "cisco.jpg",
      link: "https://cisco.com/certificate-link",
    },
    {
      title: "Build a free website with WordPress",
      issuer: "Coursera",
      date: "2024",
      image: "wordpress.png",
      link: "https://www.coursera.org/account/accomplishments/verify/5WVC9VRNAMDR",
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">
              Certifications & Uxcel Profile
            </span>
          </h2>
        </div>

        {/* Uxcel Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 animate-fade-in-up">
          <div className="w-full h-48 md:h-56 lg:h-64 max-w-sm overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src="uxcel.png" 
              alt="Uxcel Certificate"
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Floating badge */}
            <div className="absolute top-3 right-3 bg-pink-300 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-bounce">
              10+ Courses
            </div>
          </div>

          <div className="text-center md:text-left max-w-md">
            <h3 className="text-xl font-bold mb-2 text-gray-200 dark:text-white">
              Certified UX/UI Designer
            </h3>
            <p className="text-gray-350 dark:text-gray-300 mb-4">
              Completed{" "}
              <span className="font-semibold text-pink-300">10+ courses</span>{" "}
              including UX Design Foundations, Research, Accessibility, and
              Product Thinking on Uxcel. Constantly upgrading my skills to
              design experiences that shine 🌸
            </p>

            <a
              href="https://app.uxcel.com/ux/amaya17"
              target="_blank"
              rel="noopener noreferrer"
             className="inline-block px-5 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-full transition-all duration-300 hover:bg-pink-500 hover:scale-105"
            >
              Visit Uxcel Profile
            </a>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass-effect rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                {cert.title}
              </h3>

              <p className="text-purple-300 text-sm mb-2">{cert.issuer}</p>

              <p className="text-muted-foreground text-sm">{cert.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
