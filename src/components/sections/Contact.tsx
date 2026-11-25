"use client";

import { useState } from "react";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Custom Software Development",
  "Cloud Solutions",
  "AI & Automation",
  "Something else",
];

const initial = { name: "", email: "", company: "", service: SERVICE_OPTIONS[0], message: "", honeypot: "" };

const field =
  "mt-2 w-full rounded-md border border-line bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-[#b5b5b5] focus:border-ink";

export function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFeedback("Thank you. We have received your message and will reply within 24 hours.");
        setForm(initial);
      } else {
        setStatus("error");
        setFeedback(data.error || `Something went wrong. Please email ${site.email}.`);
      }
    } catch {
      setStatus("error");
      setFeedback(`Network issue. Please email ${site.email} or message us on WhatsApp.`);
    }
  };

  return (
    <section id="contact" className="border-t border-line bg-soft">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionMark label="Contact" />
          <h2 className="mt-3 text-2xl font-medium leading-[1.2] tracking-tight sm:text-3xl lg:text-[34px]">
            Have an idea? Let&apos;s build it.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Tell us a little about your project. We read every message and reply within a day.
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-[13px] text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[13px] text-muted">WhatsApp</dt>
              <dd className="mt-1">
                <a href={site.whatsappUrl()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  {site.whatsappDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="grid gap-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[13px] text-muted">
                Name
                <input name="name" value={form.name} onChange={onChange} required autoComplete="name" className={field} placeholder="Your name" />
              </label>
              <label className="block text-[13px] text-muted">
                Email
                <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" className={field} placeholder="you@company.com" />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[13px] text-muted">
                Company <span className="text-[#b5b5b5]">(optional)</span>
                <input name="company" value={form.company} onChange={onChange} autoComplete="organization" className={field} />
              </label>
              <label className="block text-[13px] text-muted">
                Interested in
                <select name="service" value={form.service} onChange={onChange} className={field}>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block text-[13px] text-muted">
              Message
              <textarea name="message" value={form.message} onChange={onChange} required rows={5} className={field} placeholder="What are you looking to build?" />
            </label>
            {/* Honeypot: hidden from people, filled by bots */}
            <input name="honeypot" value={form.honeypot} onChange={onChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-7 text-sm font-medium text-white transition-colors hover:bg-accent disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
              <p role="status" aria-live="polite" className={status === "error" ? "text-sm text-red-600" : "text-sm text-muted"}>
                {feedback}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
