"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaVideo, FaUsers, FaDumbbell } from "react-icons/fa";

const highlights = [
  {
    icon: <FaUsers />,
    title: "Event Lead",
    text: "Organized and hosted engaging college events with smooth ops and high energy.",
    stat: "5+ events",
  },
  {
    icon: <FaVideo />,
    title: "Freelance Editor",
    text: "Edited shorts/reels for creators; fast turnarounds with story-first cuts.",
    stat: "50K+ views",
  },
  {
    icon: <FaDumbbell />,
    title: "Fitness Page",
    text: "Building a fitness brand: workouts, consistency, and aesthetics.",
    stat: "250k+ views",
  },
];

export function CreatorJourney() {
  return (
    <section id="creator" className="relative py-24">
      <div className="band-bg absolute inset-0 -z-10 opacity-80" />
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Creator Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-3xl text-white/80"
        >
          Events, editing, collabs, and fitness — a hustle-driven path blending storytelling,
          production, and discipline.
        </motion.p>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass card-grad relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-7 lg:p-8 min-h-[180px] md:min-h-[220px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent-yellow/10 blur-2xl" />
              <div className="flex items-center gap-3 text-accent-yellow">
                <span className="text-[20px] md:text-[22px]">{h.icon}</span>
                <h3 className="text-lg md:text-xl font-semibold text-white">{h.title}</h3>
              </div>
              <p className="mt-2 text-white/75 md:text-[15px]">{h.text}</p>
              <div className="mt-4 inline-block rounded-full border border-white/15 px-3 py-1 text-xs md:text-[13px] text-white/80">
                {h.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


