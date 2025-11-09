import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

// Personas data and component moved outside of the JSX to avoid syntax errors
const personas = [
  {
    name: "Kavini Perera",
    age: "20 | University student, part-time tutor",
    quote: "I just want to press one button and know someone’s coming to help.",
    img: "images/kavini.jpg",
    goals: [
      "Stay safe during evening commutes after classes or tutoring.",
      "Get location-based help quickly.",
      "Use a simple, no-confusion interface during stressful moments.",
    ],
    painPoints: [
      "Struggles with complex UIs when under stress.",
      "Manual calling/texting feels too slow during panic.",
      "Needs reassurance that help is coming immediately.",
    ],
  },
  {
    name: "Nadeesha Fernando",
    age: "32 | Working mother, daily commuter",
    quote:
      "Balancing work, kids, and travel—safety needs to be effortless and reliable.",
    img: "images/fernando.jpg",
    goals: [
      "Ensure safety during early morning and late-night commutes.",
      "Alert family automatically in emergencies.",
      "Access trusted locations in unfamiliar areas.",
    ],
    painPoints: [
      "Often travels alone early or late due to work.",
      "Worries about response delays during emergencies.",
      "Needs quick, voice-based activation while driving.",
    ],
  },
];

function PersonasSection() {
  const [index, setIndex] = useState(0);

  const nextPersona = () => setIndex((prev) => (prev + 1) % personas.length);
  const prevPersona = () =>
    setIndex((prev) => (prev - 1 + personas.length) % personas.length);
  const persona = personas[index];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center px-6 md:px-24 py-16"
    >
      {/* Heading */}
      <div className="w-full text-center mb-10">
        <h3 className="text-3xl font-semibold gradient-text mb-2">Personas</h3>
        <p className="text-white/70 max-w-2xl mx-auto">
          Crafted through user research to represent real-world motivations,
          goals, and pain points of our target audience.
        </p>
      </div>

      {/* Persona Slider */}
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevPersona}
          className="absolute left-0 md:-left-10 text-white hover:text-pink-500 transition-all"
          aria-label="Previous persona"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Animated Card */}
        <div className="overflow-hidden w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto]"
            >
              {/* Left - Persona Image + Quote */}
              <div className="flex flex-col items-center text-center">
                <p className="text-white/70 italic mb-2 px-4">
                  “{persona.quote}”
                </p>
                <img
                  src={persona.img}
                  alt={persona.name}
                  className="w-56 h-auto rounded-2xl border border-white/10"
                />
              </div>

              {/* Right - Persona Info */}
              <div className="text-left text-white/90 max-w-sm">
                <h4 className="text-2xl font-bold mb-1">{persona.name}</h4>
                <p className="text-white/70 mb-4">{persona.age}</p>

                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-1">Goals</h5>
                  <ul className="list-decimal list-inside text-white/80 space-y-1">
                    {persona.goals.map((goal, i) => (
                      <li key={i}>{goal}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-1">Pain Points</h5>
                  <ul className="list-decimal list-inside text-white/80 space-y-1">
                    {persona.painPoints.map((pain, i) => (
                      <li key={i}>{pain}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextPersona}
          className="absolute right-0 md:-right-10 text-white hover:text-pink-500 transition-all"
          aria-label="Next persona"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </motion.section>
  );
}

export default function SheSafe() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sectionAnimation: MotionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="relative bg-[#0B0C1A] text-white font-inter">
      {/* 🔙 Back to Projects button */}
      <a
        href="/" // <- change this if needed
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white hover:text-pink-400 transition-colors text-sm md:text-base bg-[#0B0C1A]/80 px-3 py-2 rounded-md backdrop-blur"
      >
        <ChevronLeft size={18} />
        Back to Projects
      </a>
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-semibold gradient-text leading-tight">
            SheSafe: Empowering Women's Safety with Confidence
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A user-centered emergency app designed to provide quick access to
            safety features, real-time location sharing, and community-verified
            safe zones for women in Sri Lanka.
          </p>

          <div className="mt-10 flex gap-4">
            <Button asChild className="gradient-primary text-white">
              <a href="https://www.behance.net/gallery/234253819/SheSafe-Smart-Safety-Stronger-You">View Behance</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className=" border border-white text-white hover:text-pink-100 hover:border-pink-100"
            >
              <a href="https://www.figma.com/proto/DvsvEEiWdriVvehnvKkaCW/SheSafe?page-id=0%3A1&node-id=1-2&p=f&viewport=20%2C263%2C0.11&t=8onp5Ljvgmelgd88-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2">
                Prototype
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          // Replace with your hero image (e.g., the 3 phone mockups together)
          src="images/MacBook .png"
          alt="SheSafe app cover"
          className="w-full max-w-xl"
        />
      </section>
      <Separator className="my-4 bg-white/10" />
      <section className="px-8 md:px-24 py-16">
        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Empowering safety for women in Sri Lanka
          </h2>
          <p className="leading-relaxed text-white/80">
            Concerns about women's safety continue to grow in Sri Lanka. I
            noticed a surprising gap: there was no widely adopted emergency app
            to help women in urgent situations. Many depended on manual calls or
            texts when every second counts—a method that is slow and often
            impractical during a crisis.
          </p>
        </motion.div>
      </section>
      <Separator className="my-10 bg-white/10" />

      {/* ===== OVERVIEW (Problem & Solution) ===== */}
      <section className="px-8 md:px-24 py-16 grid md:grid-cols-2 gap-12">
        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-2">
            The Problem
          </h2>
          <p className="leading-relaxed text-white/80">
            Concerns about women's safety continue to grow in Sri Lanka. I
            noticed a surprising gap: there was no widely adopted emergency app
            to help women in urgent situations. Many depended on manual calls or
            texts when every second counts—a method that is slow and often
            impractical during a crisis.
          </p>
        </motion.div>

        <motion.div
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            The Solution
          </h2>
          <p className="leading-relaxed text-white/80">
            SheSafe is an intuitive, easy-to-access safety app guided by user
            research. It offers quick emergency actions like one-tap SOS alerts,
            real-time location sharing with trusted contacts, and a map of
            verified safe places—all streamlined for stressful situations and
            easy navigation.
          </p>
        </motion.div>
      </section>
      <Separator className="my-10 bg-white/10" />
      {/* ===== ROLE & TOOLS ===== */}
      <section className="px-8 md:px-24 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...sectionAnimation}>
            <h3 className="text-2xl font-semibold gradient-text mb-2">
              My Role
            </h3>
            <p className="text-white/80">UX/UI Designer & Researcher</p>
          </motion.div>
          <motion.div {...sectionAnimation}>
            <h3 className="text-2xl font-semibold gradient-text mb-2">
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-4">
              {["Figma", "Miro", "Google Forms", "Canva"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white/5 rounded-full text-white/90 glass-effect"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* ===== GOALS SECTION ===== */}
      <section className="px-8 md:px-24 py-16">
        <motion.h2
          {...sectionAnimation}
          className="text-3xl font-semibold gradient-text mb-8 text-center"
        >
          Project Goals
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "One-Tap Alerts",
              text: "Enable one-tap emergency alerts to quickly notify trusted contacts and authorities.",
            },
            {
              title: "Real-Time Tracking",
              text: "Provide real-time location tracking so loved ones can monitor safety.",
            },
            {
              title: "Safe Zone Map",
              text: "Offer a map with community-verified safe places for quick help.",
            },
          ].map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="p-6 glass-effect rounded-2xl text-center"
            >
              <h3 className="text-xl font-semibold gradient-text mb-3">
                {goal.title}
              </h3>
              <p className="text-white/80">{goal.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* ===== RESEARCH PROCESS ===== */}
      <section className="px-8 md:px-24 py-16 space-y-16">
        <motion.h2
          {...sectionAnimation}
          className="text-4xl font-semibold gradient-text text-center"
        >
          My Research Process
        </motion.h2>

        {/* Step 1: Interviews */}
        <motion.div {...sectionAnimation}>
          <h3 className="text-2xl font-semibold gradient-text mb-4">
            Step 1: User Interviews
          </h3>
          <p className="text-white/80 mb-6">
            Conducted in-depth interviews with 10 women from diverse backgrounds
            to understand their daily routines, safety fears, and experiences.
            The findings shaped the feature set and the emotional tone of the
            app.
          </p>
          <div className="p-6 glass-effect rounded-xl space-y-3">
            <h4 className="font-semibold text-lg text-white/90">
              During this research phase, I also tried to understand;
            </h4>
            <p className="flex items-start gap-2">
              <CheckCircle
                className="text-pink-500 mt-1 flex-shrink-0"
                size={18}
              />{" "}
              Users need quick-access emergency features that don't require
              complex navigation.
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle
                className="text-pink-500 mt-1 flex-shrink-0"
                size={18}
              />{" "}
              Users distrust apps asking for excessive personal data upfront,
              highlighting a need for privacy controls.
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle
                className="text-pink-500 mt-1 flex-shrink-0"
                size={18}
              />{" "}
              Overly complex interfaces add to stress rather than reducing it in
              an emergency.
            </p>
          </div>
        </motion.div>

        {/* Step 2: Surveys */}
        <motion.div {...sectionAnimation}>
          <h3 className="text-2xl font-semibold gradient-text mb-4">
            Step 2: Quantitative Surveys
          </h3>
          <p className="text-white/80 mb-6">
            A digital survey targeting over 100 women in urban and suburban
            areas validated insights and directly informed feature
            prioritization and interface clarity.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 glass-effect rounded-xl text-center">
              <p className="text-4xl font-bold gradient-text">65%</p>
              <p className="text-white/80 mt-2">
                cited privacy as their top concern with safety apps.
              </p>
            </div>
            <div className="p-6 glass-effect rounded-xl text-center">
              <p className="text-4xl font-bold gradient-text">58%</p>
              <p className="text-white/80 mt-2">
                preferred live location sharing with trusted contacts over
                contacting authorities.
              </p>
            </div>
            <div className="p-6 glass-effect rounded-xl text-center">
              <p className="text-4xl font-bold gradient-text">Top Request</p>
              <p className="text-white/80 mt-2">
                was for a one-tap SOS functionality for immediate help.
              </p>
            </div>
          </div>
        </motion.div>
        {/* ===== USER JOURNEY ===== */}
        <motion.section {...sectionAnimation} className="px-8 md:px-0 py-16">
          <div className="text-center mb-10 px-6 md:px-24">
            <h2 className="text-3xl font-semibold gradient-text mb-4">
              User Journey
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              This journey map visualizes a typical scenario where a user might
              interact with SheSafe—capturing key emotional moments and pain
              points across their experience.
            </p>
          </div>

          <div className="w-full">
            <img
              src="images/user journey shesafe.png" // <-- update path if different
              alt="User Journey Map"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.section>

        {/* Step 3: Personas */}
        <PersonasSection />
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* ===== UI DESIGN SECTION ===== */}
      <section id="ui-design" className="px-8 md:px-24 py-16">
        <motion.h2
          {...sectionAnimation}
          className="text-4xl font-semibold gradient-text mb-4 text-center"
        >
          UI Design
        </motion.h2>
        <motion.p
          {...sectionAnimation}
          className="mb-10 leading-relaxed text-white/80 max-w-3xl mx-auto text-center"
        >
          The UI uses a calming yet assertive pink color palette to balance
          reassurance with urgency. Clear iconography, bold action buttons, and
          strong visual hierarchy help users respond quickly under stress. The
          design provides transparent controls for location sharing, directly
          addressing privacy concerns from research.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[
            // Replace these with the paths to your final UI screen images
            "/images/screens/Frame 30.png",
            "/images/screens/Frame 31.png",
            "/images/screens/Frame 32.png",
            "/images/screens/Frame 38.png",
            "/images/screens/Frame 34.png",
            "/images/screens/Frame 35.png",
            "/images/screens/Frame 36.png",
            "/images/screens/Frame 39.png",
            "/images/screens/Frame 33.png",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`SheSafe UI Screen ${i + 1}`}
              className="w-full max-w-[250px]  hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            />
          ))}
        </div>
      </section>

      <section className="py-16 px-0">
        <div className="w-screen">
          <img
            src="/images/hifi.png"
            alt="User Journey Map"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* ===== USABILITY TESTING ===== */}
      <section className="px-8 md:px-24 py-16">
        <motion.h2
          {...sectionAnimation}
          className="text-4xl font-semibold gradient-text mb-8 text-center"
        >
          Usability Testing & Refinements
        </motion.h2>
        <motion.p
          {...sectionAnimation}
          className="mb-10 text-center max-w-3xl mx-auto text-white/80"
        >
          Conducted remote usability tests with 8 women, simulating emergency
          scenarios. Observing how they navigated onboarding, triggered alerts,
          and managed privacy settings provided crucial feedback for refinement.
        </motion.p>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 p-8 glass-effect rounded-2xl">
          <div>
            <h4 className="font-semibold text-lg text-pink-400 mb-2">
              Insight
            </h4>
            <p className="text-white/90">
              Users hesitated on the emergency screen due to a lack of clear
              button hierarchy, causing confusion about the primary action.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-green-400 mb-2">
              Solution
            </h4>
            <p className="text-white/90">
              Redesigned the screen with a single, prominent SOS button and
              placed secondary actions underneath. This improved clarity and
              reduced response time.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* ===== LEARNINGS & FUTURE STEPS ===== */}
      <section className="px-8 md:px-24 py-16 grid md:grid-cols-2 gap-12">
        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-8">
            Key Learnings
          </h2>
          <ul className="space-y-4 list-disc pl-6 text-white/80">
            <li>
              User trust is built through transparency and minimal data
              requests.
            </li>
            <li>
              Designing for emotional stress is crucial; simplicity and clarity
              are paramount in safety-focused design.
            </li>
            <li>
              Diverse feedback from various user groups is essential for
              surfacing edge cases and ensuring inclusivity.
            </li>
          </ul>
        </motion.div>

        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-8">
            Future Steps
          </h2>
          <ul className="space-y-4 list-disc pl-6 text-white/80">
            <li>
              Integrate voice-activated emergency triggers for hands-free use.
            </li>
            <li>Expand compatibility to wearable devices like smartwatches.</li>
            <li>
              Launch community-led safety workshops to gather continuous
              feedback and build trust.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section id="contact" className="text-center py-12 glass-effect">
        <motion.div {...sectionAnimation}>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Let's Collaborate 💕
          </h2>
          <p className="mb-8 text-white/80 max-w-md mx-auto">
            Would you like to get in touch? Drop me a line—let's share ideas and
            discuss ways to collaborate!
          </p>
          <Button
            asChild
            className="gradient-primary text-white px-8 py-6 text-lg rounded-xl"
          >
            {/* Replace with your email address */}
            <a href="mailto:dewjayasekara78@gmail.com">Get in Touch</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
