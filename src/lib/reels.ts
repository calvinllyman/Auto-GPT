export type Reel = {
  id: string;
  src: string;
  title: string;
  topic: string;
};

/**
 * Prefer CDN when NEXT_PUBLIC_VIDEO_CDN_BASE is set (R2 / Mux / YouTube CDN URL).
 * Falls back to local `/videos/reels/` for development.
 *
 * Example: NEXT_PUBLIC_VIDEO_CDN_BASE=https://videos.calvinlymanrealestate.com/reels
 * → reel-01 resolves to https://videos.calvinlymanrealestate.com/reels/reel-01.mp4
 */
const CDN_BASE = (process.env.NEXT_PUBLIC_VIDEO_CDN_BASE || "").replace(/\/$/, "");

function reelSrc(filename: string) {
  if (CDN_BASE) return `${CDN_BASE}/${filename}`;
  return `/videos/reels/${filename}`;
}

/**
 * Bite-sized educational reels.
 * Titles/topics are provisional placeholders — swap in your real captions anytime.
 */
export const reels: Reel[] = [
  {
    id: "reel-01",
    src: reelSrc("reel-01.mp4"),
    title: "Real estate tip",
    topic: "Buying & selling basics",
  },
  {
    id: "reel-02",
    src: reelSrc("reel-02.mp4"),
    title: "Real estate tip",
    topic: "Buying & selling basics",
  },
  {
    id: "reel-03",
    src: reelSrc("reel-03.mp4"),
    title: "Real estate tip",
    topic: "OKC metro insights",
  },
  {
    id: "reel-04",
    src: reelSrc("reel-04.mp4"),
    title: "Real estate tip",
    topic: "Buying & selling basics",
  },
  {
    id: "reel-05",
    src: reelSrc("reel-05.mp4"),
    title: "Real estate tip",
    topic: "OKC metro insights",
  },
  {
    id: "reel-06",
    src: reelSrc("reel-06.mp4"),
    title: "Real estate tip",
    topic: "Buying & selling basics",
  },
  {
    id: "reel-07",
    src: reelSrc("reel-07.mp4"),
    title: "Real estate tip",
    topic: "Market conversations",
  },
  {
    id: "reel-08",
    src: reelSrc("reel-08.mp4"),
    title: "Real estate tip",
    topic: "Buying & selling basics",
  },
  {
    id: "reel-09",
    src: reelSrc("reel-09.mp4"),
    title: "Real estate tip",
    topic: "Market conversations",
  },
  {
    id: "reel-10",
    src: reelSrc("reel-10.mp4"),
    title: "Real estate tip",
    topic: "Buying & selling basics",
  },
  {
    id: "reel-11",
    src: reelSrc("reel-11.mp4"),
    title: "Real estate tip",
    topic: "Buying & selling basics",
  },
];
