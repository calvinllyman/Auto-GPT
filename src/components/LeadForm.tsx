"use client";

import { useState, useTransition } from "react";
import { submitLead } from "@/lib/leads";
import type { LeadType } from "@/lib/site";

type LeadFormProps = {
  type: LeadType;
  title?: string;
  subtitle?: string;
  showAddress?: boolean;
  submitLabel?: string;
  defaultAddress?: string;
  defaultMessage?: string;
};

export function LeadForm({
  type,
  title = "Let's talk",
  subtitle = "Share your details and Calvin will follow up personally.",
  showAddress = false,
  submitLabel = "Send message",
  defaultAddress = "",
  defaultMessage = "",
}: LeadFormProps) {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function onSubmit(formData: FormData) {
    setStatus("idle");
    setError("");

    const payload = {
      type,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      address: String(formData.get("address") || ""),
      marketingOptIn: formData.get("marketingOptIn") === "on",
    };

    startTransition(async () => {
      const result = await submitLead(payload);
      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setError(result.error || "Unable to submit right now.");
      }
    });
  }

  return (
    <div className="border border-[var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(28,45,60,0.08)] sm:p-8">
      <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{subtitle}</p>

      {status === "success" ? (
        <div className="mt-6 border border-navy/15 bg-mist p-4 text-sm text-navy">
          Thanks — your message is in. Calvin will reach out soon
          {type !== "newsletter" ? ", and you'll be added to ongoing updates if you opted in." : "."}
        </div>
      ) : (
        <form action={onSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
              Full name
            </span>
            <input
              required
              name="name"
              className="w-full border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
              placeholder="Your name"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="w-full border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
                placeholder="you@email.com"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                className="w-full border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
                placeholder="405-555-0100"
              />
            </label>
          </div>

          {showAddress ? (
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
                Property address
              </span>
              <input
                name="address"
                defaultValue={defaultAddress}
                className="w-full border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
                placeholder="Street, city, ZIP"
              />
            </label>
          ) : null}

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
              How can Calvin help?
            </span>
            <textarea
              name="message"
              rows={defaultMessage ? 7 : 4}
              defaultValue={defaultMessage}
              className="w-full resize-y border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
              placeholder="Tell me a bit about your goals..."
            />
          </label>

          <label className="flex items-start gap-3 text-sm text-muted">
            <input
              type="checkbox"
              name="marketingOptIn"
              defaultChecked
              className="mt-1 h-4 w-4 accent-crimson"
            />
            <span>
              Keep me on the list for market updates, guides, and local opportunities from Calvin
              Lyman Real Estate. You can unsubscribe anytime.
            </span>
          </label>

          {status === "error" ? (
            <p className="text-sm text-crimson">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-deep disabled:opacity-60"
          >
            {pending ? "Sending..." : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}
