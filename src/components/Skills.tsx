"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 81 },
  { name: "SQL", level: 86 },
  { name: "Machine Learning", level: 58 },
  { name: "Data Visualization tools", level: 53 },
  { name: "Microsoft Tools", level: 85 },
  { name: "Web Designing", level: 69 },
  { name: "Video Editing", level: 85 },
  { name: "AWS", level: 20, style: "loading" },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Skills</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skills.map((skill, idx) => (
          <div key={skill.name} className="rounded-2xl border border-white/10 p-5">
            <div className="mb-2 flex items-center justify-between">
              <span>{skill.name}</span>
              <span className="text-white/70">{skill.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <motion.div
                className={`h-2 rounded-full ${skill.style === "loading" ? "progress-loading" : "bg-accent-yellow"}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


