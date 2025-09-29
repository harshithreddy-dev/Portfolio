"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hi, I’m <span className="text-accent-yellow">Harshith</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 max-w-prose text-base text-white/80"
            >
              "Building cool stuff 💻 | Hustling hard 💪 | Living limitless ✨"
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex gap-4"
            >
              <a href="#projects" className="rounded-full bg-accent-yellow px-6 py-3 font-medium text-black hover:brightness-95 transition">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition">
                Contact Me
              </a>
            </motion.div>
          </div>
          <div className="relative">
            <div className="glass card-grad float relative aspect-square w-full max-w-sm overflow-hidden rounded-full md:ml-auto">
              <Image
                src="/harshithreddy.jpg"
                alt="Harshith portrait"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-accent-yellow/50" />
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-accent-yellow/40 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-accent-blue/40 blur-2xl" />
              <div className="pointer-events-none absolute left-1/3 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-pink/40 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


