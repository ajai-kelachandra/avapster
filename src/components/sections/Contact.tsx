"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const SERVICE_OPTIONS = [
  "IT Services & Consulting",
  "Software Development",
  "Web & Mobile Application Development",
  "Cloud & Digital Transformation",
  "AI & Technology Solutions",
  "Strategic Enterprise Partnership",
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: SERVICE_OPTIONS[0],
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [submittedMailto, setSubmittedMailto] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Please provide your name, valid business email, and project brief.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(
          data.message || "Thank you. Your message has been sent directly to ppk2600@gmail.com."
        );
        if (data.mailtoUrl) {
          setSubmittedMailto(data.mailtoUrl);
        }
        setFormData({
          name: "",
          email: "",
          company: "",
          service: SERVICE_OPTIONS[0],
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "Unable to submit enquiry. Please email us directly at ppk2600@gmail.com.");
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("Network issue. Please connect directly via email at ppk2600@gmail.com or WhatsApp at +91 96331 62989.");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact AVAPSTER Technologies"
      className="py-24 sm:py-32 bg-[#080A09] text-[#F5F5F0] relative overflow-hidden"
    >
      {/* Background Violet Glow Accent */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A78BFA]/5 blur-[180px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
              CONTACT US
            </span>
          </div>
          <span className="text-xs font-mono text-[#A5ADA2] tracking-widest uppercase hidden sm:inline">
            DIRECT CHANNEL & HOTLINE
          </span>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dramatic Narrative & WhatsApp Hotline (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F0] font-heading leading-[0.98]">
                Let&apos;s build{" "}
                <span className="text-[#A78BFA] italic font-normal font-heading">
                  what comes next.
                </span>
              </h2>

              <p className="mt-6 text-lg sm:text-xl text-[#F5F5F0] font-sans leading-relaxed">
                Have an ambitious idea or a business challenge? Let&apos;s turn it into something meaningful.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#A5ADA2] font-sans leading-relaxed">
                Whether you need technology consulting, enterprise software engineering, or an AI transformation roadmap, our founding team is ready to collaborate.
              </p>
            </div>

            {/* Direct Channel Highlight Box */}
            <div className="mt-10 p-6 sm:p-8 bg-[#111411] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A78BFA] font-semibold block mb-2">
                DIRECT FOUNDER CHANNEL
              </span>
              <h3 className="text-xl font-bold font-heading text-[#F5F5F0] mb-2">
                WhatsApp Executive Dispatch
              </h3>
              <p className="text-xs text-[#A5ADA2] font-sans leading-relaxed mb-6">
                Fastest channel for project discovery, exploratory chats, and technical consultations with a co-founder.
              </p>

              <WhatsAppButton
                phoneNumber="919633162989"
                label="START A CONVERSATION"
                variant="lime"
                size="md"
                className="w-full justify-center"
              />

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A5ADA2]">
                <span>Hotline:</span>
                <span className="text-[#F5F5F0] font-semibold">+91 96331 62989</span>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A5ADA2]">
                <span>Direct Email:</span>
                <a
                  href="mailto:ppk2600@gmail.com?subject=AVAPSTER%20Project%20Enquiry"
                  className="text-[#A78BFA] hover:text-[#C4B5FD] font-semibold transition-colors"
                >
                  ppk2600@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Integrity Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#111411] p-8 sm:p-12 border border-white/10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A78BFA] block mb-2 font-semibold">
              PROJECT INQUIRY
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F5F0] mb-8">
              Send a brief project message.
            </h3>

            {/* Status alerts */}
            {status === "success" && (
              <div
                role="status"
                className="p-5 mb-6 bg-[#080A09] border border-[#A78BFA] text-[#F5F5F0] text-xs flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A78BFA] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-[#F5F5F0]">{feedbackMessage}</p>
                    <p className="text-[11px] text-[#A5ADA2]">
                      Your form details have been formatted with the AVAPSTER template and dispatched to <strong className="text-[#A78BFA]">ppk2600@gmail.com</strong>.
                    </p>
                  </div>
                </div>

                {submittedMailto && (
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <a
                      href={submittedMailto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#A78BFA] text-[#080A09] font-bold text-xs hover:bg-[#C4B5FD] transition-colors"
                    >
                      <span>Also Open in Gmail / Mail App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[10px] text-[#A5ADA2]">
                      (Pre-filled with your full inquiry details)
                    </span>
                  </div>
                )}
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="p-4 mb-6 bg-[#080A09] border border-red-500 text-red-200 text-xs flex items-start gap-3"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Spam Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADA2] mb-2">
                    Name <span className="text-[#A78BFA]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 bg-[#080A09] border border-white/15 text-[#F5F5F0] placeholder-white/30 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADA2] mb-2">
                    Email Address <span className="text-[#A78BFA]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 bg-[#080A09] border border-white/15 text-[#F5F5F0] placeholder-white/30 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADA2] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 bg-[#080A09] border border-white/15 text-[#F5F5F0] placeholder-white/30 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADA2] mb-2">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#080A09] border border-white/15 text-[#F5F5F0] text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:border-transparent transition-colors cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#080A09] text-[#F5F5F0]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#A5ADA2] mb-2">
                  Project Message <span className="text-[#A78BFA]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your goals, timeline, or current technical bottlenecks..."
                  className="w-full px-4 py-3 bg-[#080A09] border border-white/15 text-[#F5F5F0] placeholder-white/30 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:border-transparent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-[#A78BFA] text-[#080A09] hover:bg-[#C4B5FD] text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:shadow-[0_0_24px_rgba(167,139,250,0.35)] focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09] outline-none"
              >
                {status === "loading" ? (
                  <span>TRANSMITTING INQUIRY...</span>
                ) : (
                  <>
                    <span>TRANSMIT INQUIRY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
