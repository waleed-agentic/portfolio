"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
  name: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusType("error");
      setStatusMessage("Email service is not configured yet.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");
    setStatusType("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "waleed.ml.ds@gmail.com"
        },
        {
          publicKey
        }
      );

      setFormData(initialState);
      setStatusType("success");
      setStatusMessage("Message sent! I'll get back to you soon.");
    } catch {
      setStatusType("error");
      setStatusMessage("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border bg-surface/70 p-6 shadow-2xl shadow-black/20 md:p-8">
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-text">
          Name
          <input
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            className="h-12 rounded-2xl border border-border bg-[#0a1018] px-4 text-text outline-none placeholder:text-muted/70 focus:border-accent"
            placeholder="Your name"
            type="text"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-text">
          Email
          <input
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            className="h-12 rounded-2xl border border-border bg-[#0a1018] px-4 text-text outline-none placeholder:text-muted/70 focus:border-accent"
            placeholder="you@example.com"
            type="email"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-text">
          Message
          <textarea
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            className="min-h-36 rounded-2xl border border-border bg-[#0a1018] px-4 py-3 text-text outline-none placeholder:text-muted/70 focus:border-accent"
            placeholder="Tell me about your project"
            required
          />
        </label>

        <button
          type="submit"
          disabled={isSending}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-accent-strong"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {statusMessage ? (
          <p className={`text-sm font-medium ${statusType === "success" ? "text-emerald-400" : "text-red-400"}`}>
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}