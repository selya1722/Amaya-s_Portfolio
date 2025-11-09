import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronLeft, ChevronRight, Feather } from "lucide-react";

const personas = [
  {
    name: "Sunil Perera",
    age: "45 | Aloe farmer, smallholder (Kurunegala)",
    quote:
      "I need to know what's wrong with my plants fast — I can't wait for a technician.",
    img: "/images/farmer.jpeg",
    goals: [
      "Get fast disease detection without complicated tech.",
      "Use offline tools since network is unreliable.",
      "Understand simple steps to treat plants and save yield.",
    ],
    painPoints: [
      "Unclear guidance from agricultural ext. services.",
      "Limited smartphone familiarity.",
      "Loss of crops due to late detection.",
    ],
  },
  {
    name: "Tharushi Silva",
    age: "23 | Agri-student & farm assistant",
    quote:
      "I want to learn and help my family — an app that teaches while it shows will be perfect.",
    img: "/images/unigirl.jpg",
    goals: [
      "Learn to identify diseases and suggest prevention.",
      "Trust the app's guidance with easy-to-follow steps.",
      "Share results with family and extension services.",
    ],
    painPoints: [
      "Too much jargon in agritech apps.",
      "Connectivity issues when out on the field.",
      "Mistrust of AI if it doesn't explain itself.",
    ],
  },
];

/* ------------------------------
   Persona Slider Component
   ------------------------------ */
function PersonasSection() {
  const [index, setIndex] = useState(0);

  const nextPersona = () => setIndex((prev) => (prev + 1) % personas.length);
  const prevPersona = () =>
    setIndex((prev) => (prev - 1 + personas.length) % personas.length);
  const persona = personas[index];

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center px-6 md:px-24 py-12"
    >
      <div className="w-full text-center mb-8">
        <h3 className="text-3xl font-semibold gradient-text mb-2">Personas</h3>
        <p className="text-white/70 max-w-2xl mx-auto">
          Representative users distilled from field interviews and co-design
          sessions — empathetic, real, and actionable.
        </p>
      </div>

      <div className="relative w-full max-w-4xl flex items-center justify-center">
        <button
          onClick={prevPersona}
          className="absolute left-0 md:-left-10 text-white hover:text-green-400 transition-all"
          aria-label="Previous persona"
        >
          <ChevronLeft size={30} />
        </button>

        <div className="overflow-hidden w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45 }}
              className="bg-white/6 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-white/70 italic mb-3 px-4">
                  “{persona.quote}”
                </p>
                <img
                  src={persona.img}
                  alt={persona.name}
                  className="w-50 h-auto rounded-2xl border border-white/10"
                />
              </div>

              <div className="text-left text-white/90 max-w-sm">
                <h4 className="text-2xl font-bold mb-1">{persona.name}</h4>
                <p className="text-white/70 mb-4">{persona.age}</p>

                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-1">Goals</h5>
                  <ul className="list-decimal list-inside text-white/80 space-y-1">
                    {persona.goals.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-1">Pain Points</h5>
                  <ul className="list-decimal list-inside text-white/80 space-y-1">
                    {persona.painPoints.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextPersona}
          className="absolute right-0 md:-right-10 text-white hover:text-green-400 transition-all"
          aria-label="Next persona"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </motion.section>
  );
}

/* ------------------------------
   Empathy Map Component
   ------------------------------ */
function EmpathyMap() {
  // Four quadrants: Think & Feel, See, Say & Do, Pain & Gain
  const quadrants = [
    {
      title: "Think & Feel",
      bullets: [
        "Worries about losing crop and income",
        "Wants reliable guidance, not confusing tech talk",
        "Feels anxious when disease spreads quickly",
      ],
    },
    {
      title: "See",
      bullets: [
        "Other farmers using simple tools and paper notes",
        "Extension officers who sometimes arrive late",
        "Photos of damaged leaves and symptoms",
      ],
    },
    {
      title: "Say & Do",
      bullets: [
        "Asks neighbours and family for help",
        "Searches for symptoms online if they can",
        "Takes photos and saves them on phone",
      ],
    },
    {
      title: "Pains & Gains",
      bullets: [
        "Pain: unreliable diagnoses, confusing info",
        "Pain: weak network coverage in fields",
        "Gain: confidence with offline, step-by-step remedies",
      ],
    },
  ];

  return (
    <section className="px-8 md:px-24 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold gradient-text mb-2">
          Empathy Map
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          An empathy map synthesizes farmer emotions, behaviours, and needs —
          guiding the product's voice and feature priorities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {quadrants.map((q, i) => (
          <motion.div
            key={q.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="p-6 glass-effect rounded-xl bg-white/4"
          >
            <h4 className="font-semibold text-xl gradient-text mb-3">
              {q.title}
            </h4>
            <ul className="space-y-2 text-white/80 list-disc pl-5">
              {q.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------
   Research Highlights Component
   ------------------------------ */
function ResearchSection() {
  const stats = [
    { label: "Farmers interviewed", value: "12+" },
    { label: "Field visits", value: "6 regions" },
    { label: "Survey responses", value: "120+" },
  ];

  return (
    <section className="px-8 md:px-24 py-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold gradient-text mb-3">
          User Research
        </h2>
        <p className="text-white/80 max-w-3xl">
          Field research prioritized farmer context: device familiarity,
          connectivity limits, language needs, and the emotional cost of crop
          loss. Research shaped offline-first ML, local language UI, and
          microcopy that reduces cognitive load.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-6 glass-effect rounded-xl text-center"
            >
              <p className="text-4xl font-bold gradient-text">{s.value}</p>
              <p className="text-white/80 mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 glass-effect rounded-xl">
          <h4 className="font-semibold text-lg text-pink-400 mb-2">
            Key insights
          </h4>
          <ul className="text-white/90 space-y-2">
            <li>
              <CheckCircle size={16} className="inline mr-2" />
              Farmers prefer clear visual cues and step-by-step actions over
              technical explanations.
            </li>
            <li>
              <CheckCircle size={16} className="inline mr-2" />
              Offline-first model boosts trust — people need diagnoses even when
              network drops.
            </li>
            <li>
              <CheckCircle size={16} className="inline mr-2" />
              Local language support (Sinhala/Tamil) increased clarity and
              adoption in tests.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------
   User Journey Component
   ------------------------------ */
function UserJourney() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-8 md:px-24 py-12"
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold gradient-text mb-2">
          User Journey
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto">
          A day-in-the-life flow showing how a farmer uses AloeGuard to detect,
          treat, and prevent plant disease.
        </p>
      </div>

      <div className="max-w-5xl mx-auto p-6 glass-effect rounded-xl">
        {/* Replace the image with your journey map graphic */}
        <img
          src="/images/journey.png"
          alt="AloeGuard User Journey Map"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-4 text-white/80">
          <h4 className="font-semibold text-lg mb-2">Discover</h4>
          <p>
            Farmer notices unhealthy leaf and opens AloeGuard to capture a
            photo.
          </p>
        </div>
        <div className="p-4 text-white/80">
          <h4 className="font-semibold text-lg mb-2">Diagnose</h4>
          <p>
            Offline ML model predicts disease (e.g., Leaf Spot) with confidence.
          </p>
        </div>
        <div className="p-4 text-white/80">
          <h4 className="font-semibold text-lg mb-2">Act & Learn</h4>
          <p>
            App shows treatment steps, preventive tips, and an easy checklist.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

/* ------------------------------
   Main AloeGuard Component
   ------------------------------ */
export default function AloeGuard() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sectionAnimation: MotionProps = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="relative bg-[#07110A] text-white font-inter">
      {/* Back */}
      <a
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white hover:text-green-300 transition-colors text-sm md:text-base bg-[#07110A]/80 px-3 py-2 rounded-md backdrop-blur"
      >
        <ChevronLeft size={18} />
        Back to Projects
      </a>

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-semibold gradient-text leading-tight">
            AloeGuard: AI for healthier Aloe Vera farms
          </h1>
          <p className="mt-6 text-lg text-white/80">
            An offline-capable mobile app that identifies Aloe Vera leaf
            diseases, provides actionable treatment steps, and empowers farmers
            to protect yield.
          </p>

          <div className="mt-8 flex gap-4">
            <Button asChild className="gradient-primary text-white">
              <a
                href="https://www.behance.net/gallery/230392773/AloeGuard-Mobile-Application/modules/1320664451"
                target="_blank"
                rel="noreferrer"
              >
                View Behance
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className=" border border-white text-white hover:text-green-200 hover:border-green-200"
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
                Prototype
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="/images/MacBookaloe.png"
          alt="AloeGuard hero"
          className="w-full max-w-xl"
        />
      </section>

      {/* ROLE / DURATION / TOOLS + PROBLEMS & SOLUTIONS */}
      <section className="px-8 md:px-24 py-16 bg-gradient-to-b from-green-50/10 to-transparent">
        <motion.h2
          className="text-4xl font-semibold gradient-text mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Project Overview 🌿
        </motion.h2>

        {/* Role / Duration / Tools */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "My Role", value: "UX/UI Designer, Researcher" },
            { label: "Duration", value: "8 Weeks (June – August 2025)" },
            { label: "Tools", value: "Figma, FigJam, Notion, Framer, Canva" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-2xl text-center hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-green-300 mb-2">
                {item.label}
              </h3>
              <p className="text-white/80">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Problems & Solutions */}
        <motion.h3
          className="text-3xl font-semibold gradient-text mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Problems & Solutions
        </motion.h3>

        <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
          Understanding the real challenges Aloe farmers face — and how design
          thinking + AI can bridge those gaps sustainably.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              problem: "Aloe Vera diseases are hard to identify early.",
              solution:
                "AloeGuard uses AI-powered image recognition to detect common Aloe diseases like Leaf Spot or Soft Rot within seconds.",
            },
            {
              problem: "Farmers lack guidance on treatment methods.",
              solution:
                "The app provides step-by-step treatment plans and prevention tips in local languages to empower farmers with knowledge.",
            },
            {
              problem: "Limited internet access in rural areas.",
              solution:
                "AloeGuard supports offline mode through TensorFlow Lite, ensuring predictions even without connectivity.",
            },
            {
              problem:
                "Difficulty tracking and monitoring plant health over time.",
              solution:
                "With History and Mapping features, users can log disease reports and visualize trends across regions.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-white mb-2">
                🌱 Problem {index + 1}
              </h4>
              <p className="text-white/70 mb-4">{item.problem}</p>
              <h5 className="text-lg font-semibold text-green-400 mb-1">
                💡 Solution
              </h5>
              <p className="text-white/80">{item.solution}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-6 bg-white/8" />

      {/* OVERVIEW */}
      <section className="px-8 md:px-24 py-12">
        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-3">
            Why AloeGuard?
          </h2>
          <p className="text-white/80 max-w-3xl">
            Many smallholder farmers lose valuable crop yield because diseases
            are detected too late, or they receive inconsistent advice.
            AloeGuard brings an ML model to the farmer's pocket — fast,
            explainable, and available even offline.
          </p>
        </motion.div>
      </section>

      <Separator className="my-8 bg-white/8" />

      {/* RESEARCH HIGHLIGHTS (PRIORITIZED) */}
      <ResearchSection />

      <Separator className="my-8 bg-white/8" />

      {/* EMPATHY MAP (PRIORITIZED) */}
      <EmpathyMap />

      <Separator className="my-8 bg-white/8" />

      {/* USER JOURNEY (PRIORITIZED) */}
      <UserJourney />

      <Separator className="my-8 bg-white/8" />

      {/* Personas (PRIORITIZED) */}
      <PersonasSection />

      <Separator className="my-8 bg-white/8" />

      {/* UI DESIGN PREVIEW */}
      <section id="ui-design" className="px-8 md:px-24 py-12">
        <motion.h2
          {...sectionAnimation}
          className="text-4xl font-semibold gradient-text mb-4 text-center"
        >
          UI Design & Screens
        </motion.h2>
        <motion.p
          {...sectionAnimation}
          className="mb-8 leading-relaxed text-white/80 max-w-3xl mx-auto text-center"
        >
          Organic, clear visual language — large CTAs, clear affordances for
          photo capture and diagnosis results, and localised microcopy.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 justify-items-center">
          {[
            "/images/screens/Frame 42.png",
            "/images/screens/Frame 43.png",
            "/images/screens/Frame 44.png",
            "/images/screens/Frame 45.png",
            "/images/screens/Frame 46.png",
            "/images/screens/Frame 55.png",
            "/images/screens/Frame 56.png",
            "/images/screens/Frame 57.png",
            "/images/screens/Frame 51.png",
            "/images/screens/Frame 53.png",
            "/images/screens/Frame 54.png",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`AloeGuard UI ${i + 1}`}
              className="w-full max-w-[260px] hover:scale-[1.02] transition-all duration-300 rounded-xl"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.5 }}
            />
          ))}
        </div>
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* USABILITY TESTING */}
      <section className="px-8 md:px-24 py-12">
        <motion.h2
          {...sectionAnimation}
          className="text-4xl font-semibold gradient-text mb-6 text-center"
        >
          Usability Testing & Refinements
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 p-6 glass-effect rounded-2xl">
          <div>
            <h4 className="font-semibold text-lg text-pink-400 mb-2">
              Insight
            </h4>
            <p className="text-white/90">
              Farmers hesitated on confirmation screens — worried about taking
              the wrong action and losing time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-green-400 mb-2">
              Solution
            </h4>
            <p className="text-white/90">
              Added clear success/failure states, a confidence score
              explanation, and a short “what to do next” checklist tailored per
              diagnosis.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* LEARNINGS & NEXT STEPS */}
      <section className="px-8 md:px-24 py-12 grid md:grid-cols-2 gap-8">
        <motion.div {...sectionAnimation}>
          <h3 className="text-2xl font-semibold gradient-text mb-3">
            Key Learnings
          </h3>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>
              Simplicity and local language copy drastically improve trust.
            </li>
            <li>Offline ML models empower low-connectivity users.</li>
            <li>
              Explainability (confidence + short reasons) reduces AI mistrust.
            </li>
          </ul>
        </motion.div>

        <motion.div {...sectionAnimation}>
          <h3 className="text-2xl font-semibold gradient-text mb-3">
            Future Steps
          </h3>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Extend the model to more crops and disease types.</li>
            <li>
              Add community-shared case studies and field photos for model
              improvement.
            </li>
            <li>
              Partner with local agro-extension services for verified
              interventions.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="text-center py-12 glass-effect">
        <motion.div {...sectionAnimation}>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Let's Grow Together 🌱
          </h2>
          <p className="mb-6 text-white/80 max-w-md mx-auto">
            Want to collaborate on AloeGuard or try the prototype with farmers?
            Let's chat — I'd love to bring this to more fields.
          </p>
          <Button
            asChild
            className="gradient-primary text-white px-8 py-6 text-lg rounded-xl"
          >
            <a href="mailto:dewjayasekara78@gmail.com">Get in Touch</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
