"use client";
import { useState } from "react";
 
export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Contact</h2>
      <form
        className="mt-6 grid gap-4 md:grid-cols-2"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          setError(null);
          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const payload = {
            name: String(formData.get("name") || ""),
            email: String(formData.get("email") || ""),
            message: String(formData.get("message") || ""),
          };
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error("Request failed");
            setSent(true);
            form.reset();
          } catch (_err) {
            setError("Failed to send. Please try again later.");
          } finally {
            setLoading(false);
          }
        }}
      >
        <div className="grid gap-2">
          <label className="text-sm text-white/70" htmlFor="name">Name</label>
          <input name="name" id="name" required className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent-yellow" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/70" htmlFor="email">Email</label>
          <input name="email" id="email" type="email" required className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent-yellow" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm text-white/70" htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} required className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent-yellow" />
        </div>
        <div>
          <button disabled={loading} aria-live="polite" className="rounded-full bg-accent-yellow px-6 py-3 font-medium text-black hover:brightness-95 transition disabled:opacity-60">
            {loading ? "Sending..." : sent ? "Sent!" : "Send Message"}
          </button>
        </div>
        {error && <p className="md:col-span-2 text-sm text-red-400">{error}</p>}
      </form>
    </section>
  );
}
