import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface TimelineItem {
  title: string;
  description: string;
  image: string;
}

const MicrosoftChampsTimeline: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      title: "At Microsoft Champs Sri Lanka June 2025",
      description:
        "A proud moment representing myself at the Microsoft Champs Sri Lanka June 2025. Gained knowledge to build an image classifier with Azure Custom Vision!",
      image: "/achievements/2mq.jpg",
    },
    {
      title: "My Reward",
      description:
        "Receiving the gift for winning the Microsoft Champs Quiz 2025 — a token of achievement and motivation to keep pushing forward!",
      image: "/achievements/1mq.jpg",
    },
    {
      title: "Microsoft Session",
      description:
        "Attending the official Microsoft session, connecting with peers, and learning new tech insights that inspired me for the future.",
      image: "/achievements/3mq.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#05060A] via-[#0C0F19] to-[#05060A] py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-pink-400 font-semibold mb-12 hover:text-pink-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Microsoft Champs June Month 2025
          </h1>
          <p className="text-gray-300 text-lg">
            Celebrating a memorable experience, the reward, and the learning
            journey at Microsoft Champs Sri Lanka June 2025.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 space-y-16">
          {/* Gradient Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gradient Dot */}
              <div
                className="absolute -left-5 w-6 h-6 rounded-full border-4 border-[#0C0F19] shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #F472B6, #C084FC, #60A5FA)",
                }}
              />

              {/* Card */}
              <div className="bg-[#0C0F19] shadow-xl rounded-2xl overflow-hidden border border-transparent">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-72 object-cover rounded-t-2xl"
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
      </div>
    </section>
  );
};

export default MicrosoftChampsTimeline;
