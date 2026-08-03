/**
 * Upload local reels to Cloudflare R2 after R2 is enabled on the account.
 *
 * Prerequisites:
 *   - Cloudflare R2 enabled in the dashboard
 *   - Wrangler auth: npx wrangler login
 *   - Bucket created (default: calvin-lyman-reels)
 *
 * Usage:
 *   node scripts/upload-reels-r2.mjs
 *   node scripts/upload-reels-r2.mjs --bucket=my-bucket --prefix=reels
 *
 * Then set NEXT_PUBLIC_VIDEO_CDN_BASE to the public URL + prefix.
 */

import { execFileSync } from "node:child_process";
import { readdirSync, existsSync } from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? "true"];
  }),
);

const bucket = args.bucket || "calvin-lyman-reels";
const prefix = (args.prefix || "reels").replace(/\/$/, "");
const dir = path.join(process.cwd(), "public", "videos", "reels");

if (!existsSync(dir)) {
  console.error(`Missing ${dir}`);
  process.exit(1);
}

const files = readdirSync(dir).filter((f) => f.endsWith(".mp4")).sort();
if (!files.length) {
  console.error("No .mp4 files found in public/videos/reels");
  process.exit(1);
}

console.log(`Uploading ${files.length} files to r2://${bucket}/${prefix}/`);

for (const file of files) {
  const key = `${prefix}/${file}`;
  const filePath = path.join(dir, file);
  console.log(`→ ${key}`);
  execFileSync(
    "npx",
    [
      "wrangler",
      "r2",
      "object",
      "put",
      `${bucket}/${key}`,
      `--file=${filePath}`,
      "--content-type=video/mp4",
    ],
    { stdio: "inherit", shell: true },
  );
}

console.log("\nDone. Set NEXT_PUBLIC_VIDEO_CDN_BASE to your public base + prefix, e.g.");
console.log("  NEXT_PUBLIC_VIDEO_CDN_BASE=https://<public-host>/reels");
