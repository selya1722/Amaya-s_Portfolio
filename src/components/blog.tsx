import React from "react";
import { motion } from "framer-motion";

interface Blog {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Designing with Empathy — My UX Process",
    date: "October 25, 2025",
    description:
      "How I craft experiences that balance usability and emotion, building designs that connect with real people.",
    tags: ["UX Design", "Empathy", "User Research"],
    image: "images/blog-ux.jpg",
    link: "https://www.behance.net/gallery/xxxxx",
  },
  {
    title: "From Figma to Code — My Frontend Workflow",
    date: "September 17, 2025",
    description:
      "Turning Figma prototypes into production-ready code while maintaining design consistency and responsiveness.",
    tags: ["Figma", "Frontend", "React"],
    image: "images/blog-frontend.jpg",
    link: "https://medium.com/@yourblog2",
  },
  {
    title: "The Future of AI x UX — Designing Intelligently",
    date: "August 08, 2025",
    description:
      "Exploring the intersection between artificial intelligence and user experience — the next evolution of design.",
    tags: ["AI", "UX", "Innovation"],
    image: "images/blog-ai.jpg",
    link: "https://medium.com/@yourblog3",
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            My little corner to share stories, lessons, and creative thoughts ✨
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-effect rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {blog.title}
                </h3>
                <p className="text-sm text-purple-300 mb-2">{blog.date}</p>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {blog.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto py-2 px-4 gradient-primary text-white rounded-lg hover:scale-105 transition-transform duration-300 text-center text-sm sm:text-base whitespace-nowrap"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
