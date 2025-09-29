"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Harvis",
    description:
      "A lightweight local AI assistant for voice-controlled tasks like reminders, scheduling, and summaries.",
    link: "https://github.com/harshithreddy-dev/Harvis",
    tags: ["Python", "AI", "Voice"],
    ongoing: true,
  },
  {
    title: "rewarDO-App",
    description:
      "A TypeScript-based application focused on rewarding and engagement flows with a modern web stack.",
    link: "https://github.com/harshithreddy-dev/rewarDO-App",
    tags: ["TypeScript", "Web App"],
  },
  {
    title: "GrindGraph",
    description:
      "Progress tracker that visualizes daily grind: workouts, coding streaks, and habits.",
    link: "https://github.com/harshithreddy-dev/GrindGraph",
    tags: ["Next.js", "TypeScript", "Data Viz"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 card-grad transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent-yellow/10 blur-2xl transition-transform duration-300 group-hover:scale-125" />
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {p.title}
                {"ongoing" in p && p.ongoing ? (
                  <span className="rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-2 py-0.5 text-xs text-accent-yellow">
                    Ongoing
                  </span>
                ) : null}
              </h3>
              <FiExternalLink className="mt-1 opacity-70 transition group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-white/70">{p.description}</p>
            {"tags" in p && Array.isArray(p.tags) && p.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-2 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            )}
            <span className="mt-4 inline-block text-accent-yellow">View Repo →</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}


