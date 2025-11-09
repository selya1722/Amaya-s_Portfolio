import { useEffect } from "react";
import { motion, MotionProps } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function TfsCaseStudy() {
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
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white hover:text-pink-400 transition-colors text-sm md:text-base bg-[#0B0C1A]/80 px-3 py-2 rounded-md backdrop-blur"
      >
        <ChevronLeft size={18} />
        Back to Projects
      </a>

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-semibold gradient-text leading-tight">
            TFS: Enterprise KPI Dashboard
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A centralized dashboard concept designed to help managers track
            KPIs, project progress, and operational tasks efficiently, reducing
            cognitive load and enabling better decision-making.
          </p>
          <div className="mt-10 flex gap-4">
            <Button asChild className="gradient-primary text-white">
              <a href="https://www.behance.net/gallery/234404347/TFS-Business-Performance-Dashboard">View Behance</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className=" border border-white text-white hover:text-pink-100 hover:border-pink-100"
            >
              <a href="">Prototype</a>
            </Button>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="images/tfspc.png" // replace with your dashboard hero/mockup
          alt="TFS Dashboard"
          className="w-full max-w-xl"
        />
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* ===== PROBLEM & SOLUTION ===== */}
      <section className="px-8 md:px-24 py-16 grid md:grid-cols-2 gap-12">
        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Problem & Context
          </h2>
          <p className="text-white/80 mb-4">
            Enterprise managers often face difficulties tracking KPIs, project
            progress, and operational tasks across multiple platforms.
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Cluttered → too much data at once.</li>
            <li>
              Fragmented → KPIs, appointments, and progress reports spread
              across tools.
            </li>
            <li>
              Time-consuming → managers spend more time searching for insights
              than making decisions.
            </li>
          </ul>
        </motion.div>

        <motion.div
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Solution
          </h2>
          <p className="text-white/80 mb-4">
            Designed a centralized, user-friendly dashboard that provides
            clarity at a glance, helps managers track KPIs, projects, and
            schedules seamlessly, and reduces cognitive load with a clean,
            modern design.
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Improved decision-making by surfacing critical KPIs.</li>
            <li>
              Reduced cognitive overload through clear categorization of data.
            </li>
            <li>
              Aligned directly with organizational goals — ROI, cost savings,
              asset utilization, and project performance.
            </li>
          </ul>
        </motion.div>
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* ===== PROCESS ===== */}
      <section className="px-8 md:px-24 py-16 space-y-12">
        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Research & Insights
          </h2>
          <p className="text-white/80 mb-2">
            As a concept project, secondary research was conducted:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Studied enterprise dashboards from O2B Technologies blog.</li>
            <li>
              Identified common issues: lack of hierarchy, inconsistent visuals,
              cluttered charts.
            </li>
            <li>Derived design principle: “Show less, but show it clearly.”</li>
          </ul>
        </motion.div>

        <motion.div {...sectionAnimation}>
          <h3 className="text-2xl font-semibold gradient-text mb-2">
            Usability Testing (Simulated)
          </h3>
          <p className="text-white/80 mb-2">
            Showed prototypes to a small peer group:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>
              KPIs needed more clarity → added icons + percentage changes.
            </li>
            <li>
              Progress tracking felt flat → introduced color-coded labels
              (Critical, High, Medium).
            </li>
          </ul>
        </motion.div>

        <motion.div {...sectionAnimation}>
          <h3 className="text-2xl font-semibold gradient-text mb-2">
            Data & Insights
          </h3>
          <p className="text-white/80">
            Dashboard balances business KPIs with usability goals:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>
              ROI, Cost Savings, Asset Utilization, and Project Performance
              shown upfront.
            </li>
            <li>
              Analytics-driven prioritization: high-value KPIs appear first.
            </li>
            <li>
              Progress bars used instead of plain text for visual clarity.
            </li>
          </ul>
        </motion.div>
        <motion.div {...sectionAnimation}>
          <h3 className="text-2xl font-semibold gradient-text mb-2">
            User Research (Self-Simulated)
          </h3>
          <p className="text-white/80">
            Since no real company was involved, I simulated user scenarios:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>
              Task: “Check the ROI for this quarter.” → Users found KPI cards
              effective.
            </li>
            <li>
              Task: “Find upcoming training.” → The appointments panel made it
              quick.
            </li>
            <li>
              Feedback: The Implementation Journey timeline gave better
              visibility than simple lists.
            </li>
          </ul>
        </motion.div>

        <motion.div {...sectionAnimation}>
          <h3 className="text-2xl font-semibold gradient-text mb-2">
            Key Decisions
          </h3>

          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>
              Prioritization - Focused on 4 KPIs instead of overwhelming users
              with 10+.
            </li>
            <li>
              Visualization - Chose line graphs for trends (time-based clarity)
              and progress bars for tasks.
            </li>
            <li>
              Clarity over Features - Considered adding alerts/chat but removed
              to avoid clutter.
            </li>
            <li>
              Branding - Adopted a purple/blue gradient to make the dashboard
              modern yet professional.
            </li>
          </ul>
        </motion.div>
      </section>

      <section className="py-16 px-0">
        <div className="w-screen">
          <img
            src="/images/Frame3.png"
            alt="User Journey Map"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
      <Separator className="my-10 bg-white/10" />

      {/* ===== REFLECTION & LEARNINGS ===== */}
      <section className="px-8 md:px-24 py-16 grid md:grid-cols-2 gap-12">
        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            What Worked Well
          </h2>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Clear hierarchy with cards → easier to scan.</li>
            <li>Strong branding gave a recognizable identity.</li>
            <li>Timeline + color-coded status labels improved usability.</li>
          </ul>
        </motion.div>

        <motion.div {...sectionAnimation}>
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            What Didn't Go as Planned
          </h2>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Initial designs had too many graphs → felt overwhelming.</li>
            <li>
              Needed multiple iterations to balance data density vs readability.
            </li>
          </ul>
        </motion.div>
      </section>

      <Separator className="my-10 bg-white/10" />

      {/* ===== FUTURE STEPS ===== */}
      <section className="px-8 md:px-24 py-16">
        <motion.h2
          {...sectionAnimation}
          className="text-3xl font-semibold gradient-text mb-4"
        >
          What I'd Do Differently / Future Steps
        </motion.h2>
        <ul className="list-disc pl-6 text-white/80 space-y-2">
          <li>
            Add customization: allow managers to pick their most relevant KPIs.
          </li>
          <li>
            Conduct formal usability testing with real users for validation.
          </li>
          <li>
            Explore AI-driven insights (e.g., “This project is at risk”) to
            increase business value.
          </li>
        </ul>
      </section>

      {/* ===== CONTACT / CTA ===== */}
      <section id="contact" className="text-center py-12 glass-effect">
        <motion.div {...sectionAnimation}>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Let's Collaborate 💕
          </h2>
          <p className="mb-8 text-white/80 max-w-md mx-auto">
            Want to discuss UX, dashboards, or future collaborations? Drop me a
            line!
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
