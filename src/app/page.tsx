import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CreatorJourney } from "@/components/CreatorJourney";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CreatorJourney />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
