import { existsSync } from "fs";
import path from "path";

function brandFile(filename: string) {
  return path.join(process.cwd(), "public/brand", filename);
}

function resolveAsset(preferred: string, fallback: string) {
  const preferredExists = existsSync(brandFile(preferred));
  const file = preferredExists ? preferred : fallback;
  return {
    src: `/brand/${file}`,
    file,
    isPreferred: preferredExists,
  };
}

function resolveRequired(...candidates: string[]) {
  const file = candidates.find((name) => existsSync(brandFile(name)));
  return {
    src: file ? `/brand/${file}` : `/brand/${candidates[0]}`,
    exists: Boolean(file),
  };
}

/** Resolves real brand files when present; falls back to included SVG marks. */
export function getBrandAssets() {
  return {
    headshot: resolveRequired("calvin-headshot.jpg", "calvin-headshot.png"),
    epic: resolveAsset("epic-real-estate.png", "epic-real-estate.svg"),
    vip: resolveRequired("vip-realty.png", "vip-realty-mark.png"),
    homesForHeroes: resolveAsset("homes-for-heroes.png", "homes-for-heroes.svg"),
    realtor: {
      src: "/brand/realtor.svg",
      exists: existsSync(brandFile("realtor.svg")),
    },
    equalHousing: {
      src: existsSync(brandFile("equal-housing.png"))
        ? "/brand/equal-housing.png"
        : "/brand/equal-housing.svg",
    },
  } as const;
}
