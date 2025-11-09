const Certifications = () => {
  const certifications = [
    {
      title: "AI/ML Engineer - Stage 1",
      issuer: "SLIIT",
      date: "2025",
      image: "images/sliit.jpg",
      link: "https://code.sliit.org/certificates/dzmt7qcdyh",
    },
    {
      title: "Introduction to User Experience Design",
      issuer: "Georgia Institute of Technology - Coursera",
      date: "2024",
      image: "images/coursera.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/5I85LQ4IHNSJ",
    },
    {
      title: "Figma Essential for UI/UX",
      issuer: "Udemy - Learnify IT",
      date: "2024",
      image: "images/udemy.jpg",
      link: "https://www.udemy.com/certificate/UC-e9756da0-4d06-4bf0-bbdb-0b82780032ef/",
    },
    {
      title:
        "Build Your Generative AI Productivity Skills with Microsoft and LinkedIn",
      issuer: "Microsoft & LinkedIn",
      date: "2025",
      image: "images/linkedin.jpeg",
      link: "https://linkedin.com/certificate-link",
    },
    {
      title: "Aretmia 1.0 Designathon Winner 2025",
      issuer: "University of Sri Jayewardenepura",
      date: "2025",
      image: "/images/artemiachamps.jpg",
      
    },
    {
      title: "Build a free website with WordPress",
      issuer: "Coursera",
      date: "2024",
      image: "images/wordpress.png",
      link: "https://www.coursera.org/account/accomplishments/verify/5WVC9VRNAMDR",
    },
  ];

  // ✨ New Achievements Array
  const achievements = [
    {
      id: "Artemia",
      title: "Designathon Winner 2025",
      subtitle: "1st Place - Artemia 1.0",
      image: "images/hackathon.jpg",
      link: "/achievements/artemia",
    },
    {
      id: "logoicts",
      title: "ICT Society Logo 2024",
      subtitle: "Faculty of Technology, USJ",
      image: "/achievements/logoicts.jpg",
      link: "/achievements/logoicts",
    },
    {
      id: "MSquiz",
      title: "Microsoft Champs June Month 2024",
      subtitle: "Microsoft Sri Lanka 2024",
      image: "/achievements/2mq.jpg",
      link: "/achievements/MSquiz",
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

        
        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

        {/* 🌟 Achievements Section */}
        <div className="text-center mb-12">
          <h3 className="text-5xl font-semibold mb-6 gradient-text">
            Achievements
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            A few milestones that shaped my creative and tech journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((a) => (
            <a
              key={a.id}
              href={a.link}
              className="group block bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105"
            >
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <h4 className="text-lg font-bold mb-2 text-white group-hover:text-pink-400 transition-all duration-300">
                {a.title}
              </h4>
              <p className="text-sm text-purple-300">{a.subtitle}</p>
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
