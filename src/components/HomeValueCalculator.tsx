"use client";

import { useMemo, useState } from "react";
import { LeadForm } from "@/components/LeadForm";
import {
  calculateHomeValue,
  formatUsd,
  valuationAreas,
  type HomeCondition,
  type ValuationInputs,
} from "@/lib/valuation";

const STEPS = ["Location", "Size", "Condition", "Updates", "Estimate"] as const;

const defaultInputs: ValuationInputs = {
  area: "yukon",
  address: "",
  sqft: 1800,
  beds: 3,
  baths: 2,
  yearBand: "1980-1999",
  condition: "average",
  kitchenUpdated: false,
  bathsUpdated: false,
  systemsUpdated: false,
  garage: true,
  pool: false,
  timeline: "exploring",
};

function StepPills({ step }: { step: number }) {
  return (
    <ol className="flex flex-wrap gap-2">
      {STEPS.map((label, index) => {
        const active = index === step;
        const done = index < step;
        return (
          <li
            key={label}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold tracking-wide uppercase ${
              active
                ? "bg-crimson text-white"
                : done
                  ? "bg-navy text-white"
                  : "bg-mist text-muted"
            }`}
          >
            {index + 1}. {label}
          </li>
        );
      })}
    </ol>
  );
}

function ChoiceButton({
  selected,
  title,
  subtitle,
  onClick,
}: {
  selected: boolean;
  title: string;
  subtitle?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full border px-4 py-3 text-left transition ${
        selected
          ? "border-crimson bg-white shadow-[0_10px_30px_rgba(219,57,43,0.12)]"
          : "border-[var(--line)] bg-stone hover:border-crimson/40"
      }`}
    >
      <span className="block font-display text-sm font-semibold text-navy">{title}</span>
      {subtitle ? <span className="mt-1 block text-xs leading-relaxed text-muted">{subtitle}</span> : null}
    </button>
  );
}

export function HomeValueCalculator() {
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState<ValuationInputs>(defaultInputs);

  const result = useMemo(() => calculateHomeValue(inputs), [inputs]);
  const canNext =
    step === 0
      ? Boolean(inputs.area)
      : step === 1
        ? inputs.sqft >= 600 && inputs.beds >= 1 && inputs.baths >= 1
        : true;

  function patch<K extends keyof ValuationInputs>(key: K, value: ValuationInputs[K]) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="border border-[var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(28,45,60,0.08)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
            Interactive walkthrough
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-navy">Home value calculator</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            Answer a few questions for a planning-range estimate, then talk with Calvin to refine it
            with real local comps.
          </p>
        </div>
        <StepPills step={step} />
      </div>

      <div key={step} className="animate-rise mt-8">
        {step === 0 ? (
          <div className="space-y-5">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
                Property address (optional but helpful)
              </span>
              <input
                value={inputs.address}
                onChange={(e) => patch("address", e.target.value)}
                className="w-full border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
                placeholder="Street, city, ZIP"
              />
            </label>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-navy uppercase">
                Which area best fits the home?
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {valuationAreas.map((area) => (
                  <ChoiceButton
                    key={area.id}
                    selected={inputs.area === area.id}
                    title={area.label}
                    subtitle={area.note}
                    onClick={() => patch("area", area.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
                Finished sq ft
              </span>
              <input
                type="number"
                min={600}
                max={10000}
                value={inputs.sqft}
                onChange={(e) => patch("sqft", Number(e.target.value) || 0)}
                className="w-full border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
                Bedrooms
              </span>
              <input
                type="number"
                min={1}
                max={12}
                value={inputs.beds}
                onChange={(e) => patch("beds", Number(e.target.value) || 0)}
                className="w-full border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-navy uppercase">
                Bathrooms
              </span>
              <input
                type="number"
                min={1}
                max={10}
                step={0.5}
                value={inputs.baths}
                onChange={(e) => patch("baths", Number(e.target.value) || 0)}
                className="w-full border border-[var(--line)] bg-stone px-3 py-3 text-sm outline-none ring-crimson/30 transition focus:ring-2"
              />
            </label>
            <p className="sm:col-span-3 text-sm text-muted">
              Use finished living area if you know it. A close estimate is fine — Calvin will verify
              against comps and public records in your conversation.
            </p>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-navy uppercase">
                About when was it built?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    ["pre-1980", "Before 1980", "Often more character — and more inspection focus"],
                    ["1980-1999", "1980–1999", "Common established suburban stock"],
                    ["2000-2014", "2000–2014", "Newer layouts, systems may vary"],
                    ["2015-plus", "2015 or newer", "Newer construction / recent builds"],
                  ] as const
                ).map(([id, title, subtitle]) => (
                  <ChoiceButton
                    key={id}
                    selected={inputs.yearBand === id}
                    title={title}
                    subtitle={subtitle}
                    onClick={() => patch("yearBand", id)}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-navy uppercase">
                Overall condition today
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    ["needs-work", "Needs work", "Deferred maintenance or heavy updates ahead"],
                    ["average", "Average lived-in", "Functional, not freshly renovated"],
                    ["updated", "Updated", "Key rooms refreshed in recent years"],
                    ["renovated", "Fully renovated", "Major remodel quality throughout"],
                  ] as const
                ).map(([id, title, subtitle]) => (
                  <ChoiceButton
                    key={id}
                    selected={inputs.condition === id}
                    title={title}
                    subtitle={subtitle}
                    onClick={() => patch("condition", id as HomeCondition)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-navy uppercase">
                Notable updates (select all that apply)
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {(
                  [
                    ["kitchenUpdated", "Kitchen updated"],
                    ["bathsUpdated", "Baths updated"],
                    ["systemsUpdated", "Roof / HVAC recently replaced"],
                  ] as const
                ).map(([key, label]) => (
                  <ChoiceButton
                    key={key}
                    selected={inputs[key]}
                    title={label}
                    onClick={() => patch(key, !inputs[key])}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-navy uppercase">Features</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <ChoiceButton
                  selected={inputs.garage}
                  title="Garage"
                  subtitle="Attached or detached garage parking"
                  onClick={() => patch("garage", !inputs.garage)}
                />
                <ChoiceButton
                  selected={inputs.pool}
                  title="Pool"
                  subtitle="In-ground pool (appeal varies by buyer)"
                  onClick={() => patch("pool", !inputs.pool)}
                />
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-navy uppercase">
                When are you thinking of selling?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    ["asap", "As soon as practical"],
                    ["1-3-months", "In the next 1–3 months"],
                    ["3-6-months", "In 3–6 months"],
                    ["exploring", "Just exploring my options"],
                  ] as const
                ).map(([id, title]) => (
                  <ChoiceButton
                    key={id}
                    selected={inputs.timeline === id}
                    title={title}
                    onClick={() => patch("timeline", id)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-8">
            <div className="border border-navy/10 bg-gradient-to-br from-navy to-navy-deep p-6 text-white sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
                Planning range for {result.areaLabel}
              </p>
              <p className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {formatUsd(result.low)} – {formatUsd(result.high)}
              </p>
              <p className="mt-2 text-sm text-white/80">
                Midpoint around <span className="font-semibold text-white">{formatUsd(result.mid)}</span>
                {" "}(~{formatUsd(result.ppsf)} / sq ft in this model)
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
                This is an educational estimate to start the conversation — not an appraisal, CMA, or
                guaranteed sale price. Local comps, condition in person, and current buyer demand can
                move the number meaningfully.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-navy">What shaped this range</h3>
              <ul className="mt-4 space-y-2">
                {result.drivers.map((driver) => (
                  <li key={driver} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                    <span>{driver}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[var(--line)] bg-mist/60 p-5">
              <h3 className="font-display text-lg font-semibold text-navy">
                Next: refine this with Calvin
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A personal valuation conversation covers recent solds that match your home, prep that
                could improve showings, and a go-to-market plan for your timeline — not just a
                single online number.
              </p>
            </div>

            <LeadForm
              key={result.summary}
              type="home-valuation"
              title="Request your personal valuation"
              subtitle="Your walkthrough answers are included below. Calvin will follow up to refine the range with local comps."
              showAddress
              defaultAddress={inputs.address}
              defaultMessage={result.summary}
              submitLabel="Send my details to Calvin"
            />
          </div>
        ) : null}
      </div>

      {step < 4 ? (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="rounded-md border border-[var(--line)] px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-crimson/40 disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            className="rounded-md bg-crimson px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-crimson-deep disabled:opacity-40"
          >
            {step === 3 ? "See my estimate" : "Continue"}
          </button>
        </div>
      ) : (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setStep(0)}
            className="text-sm font-semibold text-crimson hover:text-crimson-deep"
          >
            ← Start over with different details
          </button>
        </div>
      )}
    </div>
  );
}
