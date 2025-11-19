export function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-2xl border border-white/10 p-8">
        <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Resume</h2>
        <p className="mt-3 text-white/80">Download my latest resume for details on my experience and skills.</p>
        <a
          href="/I_Harshith_Reddy.pdf"
          className="mt-5 inline-block rounded-full bg-accent-yellow px-6 py-3 font-medium text-black hover:brightness-95 transition"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}


