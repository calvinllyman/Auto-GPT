export type ValuationAreaId =
  | "yukon"
  | "mustang"
  | "oklahoma-city"
  | "edmond"
  | "norman"
  | "moore"
  | "piedmont"
  | "bethany"
  | "midwest-city"
  | "el-reno"
  | "nichols-hills"
  | "the-village"
  | "other";

export type HomeCondition = "needs-work" | "average" | "updated" | "renovated";

export type ValuationInputs = {
  area: ValuationAreaId;
  address: string;
  sqft: number;
  beds: number;
  baths: number;
  yearBand: "pre-1980" | "1980-1999" | "2000-2014" | "2015-plus";
  condition: HomeCondition;
  kitchenUpdated: boolean;
  bathsUpdated: boolean;
  systemsUpdated: boolean;
  garage: boolean;
  pool: boolean;
  timeline: "asap" | "1-3-months" | "3-6-months" | "exploring";
};

/**
 * Educational planning bands (price per finished sqft) for a rough OKC-metro
 * walkthrough. These are not live MLS comps or an appraisal.
 */
const AREA_PPSF: Record<
  ValuationAreaId,
  { label: string; mid: number; note: string }
> = {
  yukon: { label: "Yukon", mid: 165, note: "West-metro suburban demand" },
  mustang: { label: "Mustang", mid: 160, note: "West/southwest metro comparison set" },
  "oklahoma-city": { label: "Oklahoma City", mid: 155, note: "Wide variance by pocket" },
  edmond: { label: "Edmond", mid: 185, note: "North-metro pricing often firmer" },
  norman: { label: "Norman", mid: 170, note: "South-metro / university-area mix" },
  moore: { label: "Moore", mid: 150, note: "South-metro value comparisons" },
  piedmont: { label: "Piedmont", mid: 175, note: "Northwest growth-corridor mix" },
  bethany: { label: "Bethany", mid: 145, note: "Closer-in west metro" },
  "midwest-city": { label: "Midwest City", mid: 140, note: "East-metro practical pricing" },
  "el-reno": { label: "El Reno", mid: 130, note: "Farther west; more space tradeoffs" },
  "nichols-hills": { label: "Nichols Hills", mid: 260, note: "In-town / distinctive stock" },
  "the-village": { label: "The Village", mid: 220, note: "Close-in established streets" },
  other: { label: "Other OKC metro", mid: 155, note: "General metro planning band" },
};

const CONDITION_MULT: Record<HomeCondition, number> = {
  "needs-work": 0.88,
  average: 1,
  updated: 1.08,
  renovated: 1.16,
};

const YEAR_MULT: Record<ValuationInputs["yearBand"], number> = {
  "pre-1980": 0.96,
  "1980-1999": 1,
  "2000-2014": 1.03,
  "2015-plus": 1.06,
};

export const valuationAreas = Object.entries(AREA_PPSF).map(([id, meta]) => ({
  id: id as ValuationAreaId,
  label: meta.label,
  note: meta.note,
}));

export type ValuationResult = {
  mid: number;
  low: number;
  high: number;
  ppsf: number;
  areaLabel: string;
  drivers: string[];
  summary: string;
};

function roundToNearest(value: number, nearest = 1000) {
  return Math.round(value / nearest) * nearest;
}

export function calculateHomeValue(input: ValuationInputs): ValuationResult {
  const area = AREA_PPSF[input.area];
  let mult = CONDITION_MULT[input.condition] * YEAR_MULT[input.yearBand];
  const drivers: string[] = [`Area planning band: ${area.label}`];

  drivers.push(
    input.condition === "needs-work"
      ? "Condition suggests buyer repair risk"
      : input.condition === "average"
        ? "Average condition vs. local competition"
        : input.condition === "updated"
          ? "Updates support a stronger presentation"
          : "Renovation level can command a premium — if comps agree",
  );

  let featureAdj = 0;
  if (input.kitchenUpdated) {
    featureAdj += 0.03;
    drivers.push("Kitchen updates often help photos and first impressions");
  }
  if (input.bathsUpdated) {
    featureAdj += 0.02;
    drivers.push("Bath updates reduce buyer objection points");
  }
  if (input.systemsUpdated) {
    featureAdj += 0.025;
    drivers.push("Newer major systems can support confidence at inspection");
  }
  if (input.garage) {
    featureAdj += 0.015;
    drivers.push("Garage parking is a frequent buyer must-have");
  }
  if (input.pool) {
    featureAdj += 0.01;
    drivers.push("Pool appeal varies — some buyers pay more, some discount for upkeep");
  }

  // Soft bed/bath sanity check vs size (doesn’t dominate sqft)
  const expectedBeds = input.sqft / 550;
  if (input.beds >= expectedBeds + 1) {
    featureAdj += 0.01;
    drivers.push("Bedroom count looks generous for the square footage");
  } else if (input.beds + 0.5 < expectedBeds - 1) {
    featureAdj -= 0.015;
    drivers.push("Fewer bedrooms than size peers can narrow the buyer pool");
  }

  mult *= 1 + featureAdj;

  const ppsf = area.mid * mult;
  const mid = roundToNearest(input.sqft * ppsf);
  // Wider range when condition is uneven or area is “other”
  const spread =
    input.area === "other" || input.condition === "needs-work" || input.condition === "renovated"
      ? 0.12
      : 0.09;
  const low = roundToNearest(mid * (1 - spread));
  const high = roundToNearest(mid * (1 + spread));

  const summary = [
    `Home value walkthrough for ${input.address || area.label}`,
    `Area: ${area.label}`,
    `Size: ${input.sqft.toLocaleString()} sq ft, ${input.beds} bed / ${input.baths} bath`,
    `Year band: ${input.yearBand}, condition: ${input.condition}`,
    `Updates: kitchen ${input.kitchenUpdated ? "yes" : "no"}, baths ${input.bathsUpdated ? "yes" : "no"}, systems ${input.systemsUpdated ? "yes" : "no"}`,
    `Features: garage ${input.garage ? "yes" : "no"}, pool ${input.pool ? "yes" : "no"}`,
    `Timeline: ${input.timeline}`,
    `Estimator range: $${low.toLocaleString()} – $${high.toLocaleString()} (mid ~$${mid.toLocaleString()})`,
    "Requested a personal valuation conversation to refine with local comps.",
  ].join("\n");

  return {
    mid,
    low,
    high,
    ppsf: Math.round(ppsf),
    areaLabel: area.label,
    drivers: drivers.slice(0, 6),
    summary,
  };
}

export function formatUsd(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
