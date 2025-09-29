"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-[18px]">
            <span className="text-[22px]" style={{ fontFamily: "var(--font-heading)" }}>@</span>
            <span className="ml-1">Portfolio</span>
            <span className="ml-2 text-accent-yellow">●</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm hover:text-accent-yellow transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
        {open && (
          <div className="mt-3 grid gap-2 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}


