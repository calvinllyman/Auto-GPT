export const site = {
  name: "Calvin Lyman Real Estate",
  shortName: "Calvin Lyman",
  domain: "CalvinLymanRealEstate.com",
  tagline: "Clear guidance for your next move in the OKC metro.",
  description:
    "Work with Calvin Lyman to buy, sell, or invest across Yukon, Mustang, and Oklahoma City — with licensed service in Oklahoma and Texas.",
  email: "calvinlyman@gmail.com",
  phone: "405-421-4220",
  phoneHref: "tel:+14054214220",
  emailHref: "mailto:calvinlyman@gmail.com",
  address: {
    street: "508 W Vandament Avenue",
    city: "Yukon",
    state: "Oklahoma",
    zip: "73099",
    full: "508 W Vandament Avenue, Yukon, Oklahoma 73099",
  },
  markets: ["Yukon", "Mustang", "Oklahoma City", "OKC Metro"],
  brokerages: {
    oklahoma: {
      name: "Epic Real Estate",
      state: "Oklahoma",
    },
    texas: {
      name: "VIP Realty",
      state: "Texas",
    },
  },
  affiliations: [
    {
      name: "Homes for Heroes",
      href: "https://www.homesforheroes.com/",
      description: "Special savings and support for community heroes.",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/calvin.lyman",
    instagram: "",
    youtube: "",
    linkedin: "https://www.linkedin.com/in/calvin-lyman/",
    tiktok: "",
    googleBusiness: "",
  },
  calendly: "https://calendly.com/calvinlyman/new-meeting",
} as const;

export const nav = [
  {
    label: "Buy",
    href: "/buy",
    children: [
      { label: "Home Search", href: "/buy" },
      { label: "First-Time Buyers", href: "/buy/first-time-buyers" },
      { label: "Homes for Heroes", href: "/buy/homes-for-heroes" },
      { label: "VA Buyers", href: "/buy/va-buyers" },
      { label: "Investors", href: "/buy/investors" },
    ],
  },
  {
    label: "Sell",
    href: "/sell",
    children: [
      { label: "Home Valuation", href: "/sell/home-valuation" },
      { label: "Selling Process", href: "/sell/selling-process" },
      { label: "Marketing Strategy", href: "/sell/marketing" },
      { label: "Recent Sales", href: "/sell/recent-sales" },
    ],
  },
  {
    label: "Rentals",
    href: "/rentals",
    children: [
      { label: "Rentals Overview", href: "/rentals" },
      { label: "Tenant Resources", href: "/rentals/tenants" },
      { label: "Landlord Resources", href: "/rentals/landlords" },
      { label: "How to Rent (Guide)", href: "/resources/guides/how-to-rent-okc-metro" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "All Resources", href: "/resources" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Checklists", href: "/resources/checklists" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Market Reports", href: "/resources/market-reports" },
      { label: "Videos", href: "/resources/videos" },
    ],
  },
  {
    label: "Community",
    href: "/community",
    children: [
      { label: "Neighborhoods", href: "/community" },
      { label: "Events", href: "/community/events" },
    ],
  },
  { label: "About", href: "/about" },
] as const;

export type LeadType =
  | "consultation"
  | "home-valuation"
  | "buyer-guide"
  | "newsletter"
  | "general";
