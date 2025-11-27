import { Link } from "react-router-dom";

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

  // New Achievements Array
  const achievements = [
    {
      id: "Artemia",
      title: "Designathon Winner 2025",
      subtitle: "1st Place - Artemia 1.0",
      image: "images/my3.jpg",
      link: "/artemia",
    },
    {
      id: "logoicts",
      title: "ICT Society Logo 2024",
      subtitle: "Faculty of Technology, USJ",
      image: "images/achievements/logoicts.jpg",
      link: "/logoicts",
    },
    {
      id: "MSquiz",
      title: "Microsoft Champs June Month 2025",
      subtitle: "Microsoft Sri Lanka 2025",
      image: "images/achievements/2mq.jpg",
      link: "/msquiz",
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

        {/* Uxcel Profile Card */}
        <div className="w-full px-2 md:px-8 lg:px-20 mb-20">
          <div
            <div
            className="bg-gradient-to-r from-blue-900/40 via-purple-800/40 to-pink-600/40 
        rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden"
          >
            {/* Stars - subtle */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-1 h-1 bg-white/40 rounded-full absolute top-10 left-20 animate-pulse"></div>
              <div className="w-1 h-1 bg-white/30 rounded-full absolute top-1/3 left-1/2 animate-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full absolute bottom-20 right-28 animate-pulse"></div>
            </div>

            {/* Flex Layout */}
            <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
              {/* Certificate Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="images/uxcel.png"
                  alt="Uxcel Certificate"
                  className="w-full max-w-md rounded-xl shadow-2xl"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Certified UX/UI Designer
                </h2>

                <p className="text-purple-100 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                  Completed{" "}
                  <span className="text-pink-300 font-semibold">
                    10+ courses
                  </span>{" "}
                  including UX Foundations, Research, Accessibility, and Product
                  Thinking on Uxcel. Constantly leveling up to create designs
                  that feel magical and meaningful.
                </p>

                <a
                  href="https://app.uxcel.com/ux/amaya17"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="
    relative inline-block px-6 py-3 rounded-full font-semibold text-white
    backdrop-blur-xl bg-white/10 
    border border-white/20 
    shadow-lg overflow-hidden
    transition-all duration-300
    hover:bg-white/20 hover:shadow-pink-500/30 hover:scale-105
  "
>
  {/* Gradient Shine */}
  <span
    className="
      absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40
      opacity-60 mix-blend-overlay pointer-events-none
    "
  ></span>

  {/* Light Glow Line */}
  <span
    className="
      absolute top-0 left-0 w-full h-[2px]
      bg-gradient-to-r from-transparent via-pink-300 to-transparent
      opacity-70
    "
  ></span>

  <span className="relative z-10">Visit Uxcel Profile</span>
</a>
              </div>
            </div>
          </div>
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
          {achievements.map((a) =>
            a.link.startsWith("http") ? (
              <a
                key={a.id}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
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
            ) : (
              <Link
                key={a.id}
                to={a.link}
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
              </Link>
            )
          )}
        </div>
      </div>

      {/* Flicker Animation */}
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
