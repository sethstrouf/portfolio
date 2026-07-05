import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowPathIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

const STATUS = {
  idle: { label: "Get in touch", className: "text-slate-700" },
  sending: { label: "Sending your message...", className: "text-slate-500" },
  success: { label: "Thanks — your message is on its way", className: "text-emerald-600" },
  error: { label: "Something went wrong. Please try again.", className: "text-rose-600" },
};

const inputClassName =
  "block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    emailjs.init({ publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY });
  }, []);

  useEffect(() => {
    if (status !== "success" && status !== "error") return undefined;

    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm("gmail_service", "contact_template", event.target);
      event.target.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const statusConfig = STATUS[status];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/5 sm:p-8">
      <div className="flex items-center gap-2">
        {status === "sending" && (
          <ArrowPathIcon className="h-5 w-5 animate-spin text-slate-400" aria-hidden="true" />
        )}
        {status === "success" && (
          <CheckCircleIcon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
        )}
        {status === "error" && (
          <XCircleIcon className="h-5 w-5 text-rose-600" aria-hidden="true" />
        )}
        <p className={`text-lg font-medium ${statusConfig.className}`}>
          {statusConfig.label}
        </p>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        Have a question about a project, role, or collaboration? I&apos;d love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Full name"
            required
            disabled={status === "sending"}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Email address"
            required
            disabled={status === "sending"}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your message"
            required
            disabled={status === "sending"}
            className={inputClassName}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full items-center justify-center rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}
