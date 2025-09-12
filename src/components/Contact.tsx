import { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast"; // 👈 make sure shadcn toast is set up

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvldglg", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "💌 Message Sent!",
          description:
            "Your note is flying through the pink clouds to my inbox ✨",
          className:
            "bg-pink-600 text-white font-medium rounded-xl shadow-lg border border-pink-400",
        });
        form.reset();
      } else {
        toast({
          title: "😢 Oops, didn’t work!",
          description: "Looks like something broke. Please try again soon 💔",
          className:
            "bg-pink-900 text-pink-100 font-medium rounded-xl shadow-lg border border-pink-500",
        });
      }
    } catch (err) {
      toast({
        title: "⚠️ Network Trouble!",
        description: "The internet fairies are asleep 💤 Try again later.",
        className:
          "bg-pink-900 text-pink-100 font-medium rounded-xl shadow-lg border border-pink-500",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. I'd love to
            hear from you!
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left side (contact info) */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="glass-effect rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Let's Connect
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a
                      href="mailto:dewjayasekara78@gmail.com"
                      className="text-foreground underline hover:text-primary transition-colors"
                    >
                      dewjayasekara78@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">Li</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/amaya-1722selya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline hover:text-primary transition-colors"
                    >
                      linkedin.com/in/amaya-1722selya
                    </a>
                  </div>
                </div>

                {/* Uxcel */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">Ux</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Uxcel</p>
                    <a
                      href="https://app.uxcel.com/ux/amaya17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline hover:text-primary transition-colors"
                    >
                      app.uxcel.com/ux/amaya17
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">git</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">GitHub</p>
                    <a
                      href="https://github.com/selya1722"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline hover:text-primary transition-colors"
                    >
                      github.com/selya1722
                    </a>
                  </div>
                </div>

                {/* Behance */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">B</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Behance</p>
                    <a
                      href="https://www.behance.net/amayajayasekara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline hover:text-primary transition-colors"
                    >
                      behance.net/amayajayasekara
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 border border-pink-500/20">
              <h4 className="text-xl font-bold mb-4 gradient-text">
                Currently Available For
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 gradient-primary rounded-full mr-3" />
                  Full-time opportunities
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 gradient-primary rounded-full mr-3" />
                  Freelance projects
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 gradient-primary rounded-full mr-3" />
                  Collaboration
                </li>
              </ul>
            </div>
          </div>

          {/* Right side (contact form) */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form
              onSubmit={handleSubmit}
              className="glass-effect rounded-2xl p-8 border border-purple-500/20 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 gradient-primary text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50"
              >
                {loading ? "Sending...💖" : "Send Message "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
