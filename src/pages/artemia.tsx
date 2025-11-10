import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface TimelineItem {
  title: string;
  description: string;
  image: string;
  link?: string;
  buttonLabel?: string;
}

const Artemia2025: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      title: "Ideation & Brainstorming",
      description:
        "The journey began with crafting a design concept that solves a real problem about Women Safety in Sri Lanka. I and my team designed user journeys, wireframes, and UI screens that resonated with purpose and innovation.",
      image: "/images/art1.jpeg",
      link: "https://drive.google.com/file/d/10Jjde5mq1fGtWr05hW3maAJrEfUgW5Li/view?usp=sharing",
      buttonLabel: "Watch Video",
    },
    {
      title: "Wireframe, User Flows & User Personas",
      description:
        "Our journey started with a shared vision — to design a solution that truly empowers women's safety in Sri Lanka. Together, we mapped user flows, created personas, and sketched wireframes that shaped the foundation of a purposeful, innovative experience.",
      image: "/images/art02.png",
      link: "https://www.figma.com/design/rDpoYLiyumW57abNtUzfch/Team-Valkyries?node-id=0-1&t=w7BeLAMUy0g0Xyce-1",
      buttonLabel: "View Design",
    },
    {
      title: "UI Design & Prototype",
      description:
        "I brought the idea to life with a detailed UI design and prototype using Figma. Every screen was built with focus on usability, beauty, and story-driven interaction.",
      image: "/images/auracover.png",
      link: "https://drive.google.com/drive/folders/16r3xfVhaDDUnrObt-lzNXKwb0G19TZrg?usp=drive_link",
      buttonLabel: "View Prototype",
    },
    {
      title: "Presentation Day",
      description:
        "Showcased the prototype, explained my design thinking process, and presented the user experience flow. The judges loved the clarity and creativity.",
      image: "/images/art3.png",
      link: "https://docs.google.com/presentation/d/11Rq89KOcaC7DY6ABPlRbTl3W7ESNxXFIoxAJbNwt1Ig/edit?usp=sharing",
      buttonLabel: "Watch Presentation",
    },
    {
      title: "Victory Moment",
      description:
        "After all the hard work and sleepless nights — Won First Place at Artemia 1.0 Designathon (USJ 2025)! A milestone that truly marked the start of my designer journey.",
      image: "/images/win.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#05060A] via-[#0C0F19] to-[#05060A] py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-pink-400 font-semibold mb-8 hover:text-pink-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Artemia 1.0 Designathon 2025
          </h1>
          <p className="text-gray-300 text-lg">
            My creative journey — from concept to victory
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative pl-8 space-y-16">
          {/* Gradient Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Gradient Dot */}
              <div
                className="absolute -left-5 w-6 h-6 rounded-full border-4 border-[#0C0F19] shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #F472B6, #C084FC, #60A5FA)",
                }}
              />
              <div className="bg-[#0C0F19] shadow-xl rounded-2xl overflow-hidden border border-transparent hover:border-pink-400/40 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-90 text-white font-medium px-5 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-pink-500/30"
                    >
                      {item.buttonLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outro Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 italic">
            “Every pixel told a story — and that story won the stage.” 🌸
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Artemia2025;
