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
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">
              Certifications & Uxcel Profile
            </span>
          </h2>
        </div>

        {/* Uxcel Profile Section with Flickering Stars */}
       <div 
  className="relative overflow-hidden rounded-xl py-12 px-6 md:px-16 mb-16"
  style={{ borderRadius: "1rem" }}
>
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-pink-900 to-purple-900 opacity-80 rounded-xl backdrop-blur-lg"></div>

          {/* ✨ Flickering Stars Layer */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `flicker ${
                    2 + Math.random() * 3
                  }s infinite alternate ease-in-out`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
         <div className="relative flex flex-col md:flex-row items-center gap-8">
    <div 
      className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
      style={{ maxWidth: "100%" }} >
    
              <img
                  src="uxcel.png"
                  alt="Uxcel Certificate"
    className="w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-xl mx-auto transition-transform duration-300 hover:scale-105"
/>
            </div>  
            {/* Text Content */}
            <div className="text-center md:text-left text-white md:w-1/2">
              <h3 className="text-xl md:text-3xl font-bold mb-4">
                Certified UX/UI Designer
              </h3>
              <p className="mb-6 text-sm md:text-base">
                Completed <span className="font-semibold">10+ courses</span>{" "}
                including UX Design Foundations, Research, Accessibility, and
                Product Thinking on Uxcel. Constantly upgrading my skills to
                design experiences that shine 🌸
              </p>
              <a
                href="https://app.uxcel.com/ux/amaya17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                Visit Uxcel Profile
              </a>
            </div>
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
              className="group block bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-pink-400 transition-all duration-300">
                {cert.title}
              </h3>

              <p className="text-purple-300 text-sm mb-2">{cert.issuer}</p>

              <p className="text-gray-400 text-sm">{cert.date}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Flicker Animation Keyframes */}
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
