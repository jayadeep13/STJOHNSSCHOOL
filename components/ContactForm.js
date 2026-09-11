"use client";

import { useState } from "react";
import { User, Mail, Phone, FileText, PenLine, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY || "");
    formData.append("subject", `New enquiry from ${formData.get("name")} — St. John's School website`);
    formData.append("from_name", "St. John's School Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name *"
            className="w-full rounded-xl border border-ink/15 bg-paper/40 py-3.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-brick focus:outline-none focus:ring-1 focus:ring-brick"
          />
        </div>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email *"
            className="w-full rounded-xl border border-ink/15 bg-paper/40 py-3.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-brick focus:outline-none focus:ring-1 focus:ring-brick"
          />
        </div>
      </div>

      <div className="relative">
        <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number *"
          className="w-full rounded-xl border border-ink/15 bg-paper/40 py-3.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-brick focus:outline-none focus:ring-1 focus:ring-brick"
        />
      </div>

      <div className="relative">
        <FileText className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
        <input
          type="text"
          name="subject"
          required
          placeholder="Subject *"
          className="w-full rounded-xl border border-ink/15 bg-paper/40 py-3.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-brick focus:outline-none focus:ring-1 focus:ring-brick"
        />
      </div>

      <div className="relative">
        <PenLine className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-ink/35" />
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Your Message *"
          className="w-full resize-none rounded-xl border border-ink/15 bg-paper/40 py-3.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-brick focus:outline-none focus:ring-1 focus:ring-brick"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brick px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-brick-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && <ArrowRight className="h-4 w-4" />}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
          <CheckCircle2 className="h-4 w-4" />
          Thank you! Your message has been sent — we&rsquo;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm font-medium text-brick">
          <AlertCircle className="h-4 w-4" />
          Something went wrong. Please try again or contact us by phone/WhatsApp.
        </p>
      )}
    </form>
  );
}
