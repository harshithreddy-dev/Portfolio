import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mx-auto mt-16 max-w-6xl px-4 pb-12">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 p-6 md:flex-row">
        <span className="text-white/70">© {new Date().getFullYear()} Harshith Reddy</span>
        <div className="flex items-center gap-4">
          <a aria-label="GitHub" className="hover:text-accent-yellow" href="https://github.com/harshithreddy-dev"><FaGithub size={20} /></a>
          <a aria-label="LinkedIn" className="hover:text-accent-yellow" href="https://www.linkedin.com/in/harshith-reddy-563745353/"><FaLinkedin size={20} /></a>
          <a aria-label="Instagram" className="hover:text-accent-yellow" href="https://www.instagram.com/liftwithharshith"><FaInstagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
}


