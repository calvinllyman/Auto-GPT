import Image from "next/image";
import Link from "next/link";
import { getBrandAssets } from "@/lib/brand-assets";
import { site } from "@/lib/site";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Buy", href: "/buy" },
      { label: "Sell", href: "/sell" },
      { label: "Rentals", href: "/rentals" },
      { label: "Resources", href: "/resources" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Work With Calvin",
    links: [
      { label: "About", href: "/about" },
      { label: "Schedule Consultation", href: "/schedule" },
      { label: "Home Valuation", href: "/sell/home-valuation" },
      { label: "Homes for Heroes", href: "/buy/homes-for-heroes" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: site.social.facebook },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Instagram", href: site.social.instagram },
  { label: "YouTube", href: site.social.youtube },
].filter((link) => Boolean(link.href));

export function Footer() {
  const brand = getBrandAssets();

  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-navy-deep text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-[0.04em]">CALVIN LYMAN</p>
          <p className="mt-1 text-xs font-semibold tracking-[0.28em] text-crimson">REAL ESTATE</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            Clear guidance for buying, selling, and investing across the OKC metro — with licensed
            service in Oklahoma and Texas.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <a className="block text-white/80 hover:text-white" href={site.phoneHref}>
              {site.phone}
            </a>
            <a className="block text-white/80 hover:text-white" href={site.emailHref}>
              {site.email}
            </a>
            <p>{site.address.full}</p>
          </div>
          {socialLinks.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <p className="font-display text-sm font-semibold tracking-wide text-white">
              {group.title}
            </p>
            <ul className="mt-4 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-8 py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex h-16 items-center rounded-md bg-white px-3 py-2">
                <Image
                  src={brand.epic.src}
                  alt="Epic Real Estate"
                  width={120}
                  height={120}
                  className="h-12 w-auto object-contain"
                />
              </div>
              {brand.vip.exists ? (
                <div className="flex h-16 items-center rounded-md bg-black px-3 py-2">
                  <Image
                    src={brand.vip.src}
                    alt="VIP Realty"
                    width={220}
                    height={84}
                    className="h-10 w-auto max-w-[220px] object-contain"
                  />
                </div>
              ) : null}
              <div className="max-w-xs text-xs leading-relaxed text-white/70">
                <p>
                  Oklahoma: Affiliated with{" "}
                  <strong className="text-white">{site.brokerages.oklahoma.name}</strong>
                </p>
                <p>
                  Texas: Affiliated with{" "}
                  <strong className="text-white">{site.brokerages.texas.name}</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Image
                src={brand.realtor.src}
                alt="REALTOR"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <Image
                src={brand.equalHousing.src}
                alt="Equal Housing Opportunity"
                width={52}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <Link
                href="/buy/homes-for-heroes"
                className="inline-flex h-16 items-center rounded-md bg-black px-4 py-2"
              >
                <Image
                  src={brand.homesForHeroes.src}
                  alt="Homes for Heroes Affiliate"
                  width={320}
                  height={36}
                  className="h-auto w-[240px] max-w-[70vw] object-contain sm:w-[280px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Equal Housing Opportunity. REALTOR® is a registered collective membership mark.
          </p>
        </div>
      </div>
    </footer>
  );
}
