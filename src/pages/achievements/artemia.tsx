import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface TimelineItem {
  title: string;
  description: string;
  image: string;
}

const Artemia2025: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      title: "Ideation & Brainstorming",
      description:
        "The journey began with crafting a design concept that solves a real problem about Women Safety in Sri Lanka. I and my team designed user journeys, wireframes, and UI screens that resonated with purpose and innovation.",
      image: "/images/artemia/1art.jpg",
    },
    {
      title: "Wireframe, User Flows & User Personas",
      description:
        "Our journey started with a shared vision — to design a solution that truly empowers women's safety in Sri Lanka. Together, we mapped user flows, created personas, and sketched wireframes that shaped the foundation of a purposeful, innovative experience.",
      image: "/images/artemia/2art.jpg",
    },
    {
      title: "UI Design & Prototype",
      description:
        "I brought the idea to life with a detailed UI design and prototype using Figma. Every screen was built with focus on usability, beauty, and story-driven interaction.",
      image: "/images/artemia/3art.jpg",
    },
    {
      title: "Presentation Day",
      description:
        "Showcased the prototype, explained my design thinking process, and presented the user experience flow. The judges loved the clarity and creativity.",
      image: "/images/artemia/4art.jpg",
    },
    {
      title: "Victory Moment",
      description:
        "After all the hard work and sleepless nights — Won First Place at Artemia 1.0 Designathon (USJ 2025)! A milestone that truly marked the start of my designer journey.",
      image: "/images/artemia/win.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#05060A] via-[#0C0F19] to-[#05060A] py-16">
      <div className="max-w-4xl mx-auto px-6">
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
            My creative journey — from concept to victory 🏆
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
              <div className="bg-[#0C0F19] shadow-xl rounded-2xl overflow-hidden border border-transparent">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
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
