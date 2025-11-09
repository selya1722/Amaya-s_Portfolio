import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ICTLogo2024: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#05060A] via-[#0C0F19] to-[#05060A] flex items-center justify-center py-16 px-6">
      <div className="max-w-3xl w-full text-center">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-pink-400 font-semibold mb-8 hover:text-pink-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        {/* Logo Image */}
        <motion.img
          src="/images/achievements/logoicts.jpg" 
          alt="ICT Society Logo 2024"
          className="mx-auto w-64 h-64 md:w-80 md:h-80 object-contain rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I designed the official logo of the ICT Society, Faculty of Technology, University of Sri Jayewardenepura, 2024.  
          A symbol of creativity, innovation, and the tech-forward spirit of our community.
        </motion.p>
      </div>
    </section>
  );
};

export default ICTLogo2024;
