export type SiteConfig = typeof siteConfig;
export const siteConfig = {
  name: "Top Global News",
  title:
    "Breaking News & Global Updates: India, World Politics, Sports, Technology, Business & More",
  description:
    "Get the latest on Top Global News – featuring today's top headlines, breaking news from India, global updates, sports coverage, political analysis, health reports, and more. Stay updated with comprehensive news and in-depth articles on everything that matters.",
  keywords: `
    today news, top news, live news, global news, hindi news, india news, breaking news, world news, international news, latest news, sports news, political news, health news, technology news, entertainment news, business news, economy news, education news, environmental news, cultural news, science news, world breaking news, breaking world news today, latest world breaking news, international news headlines, world news update, world news online, latest international news, trending news, current events, daily news, news articles, news reports, top headlines, global updates, world affairs, world politics, global economy
  `,
  url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  image: "/tgnews.png",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "World",
      href: "#world",
    },
    {
      label: "Cricket",
      href: "#cricket",
    },
    {
      label: "Shorts",
      href: "#shorts",
    },
  ],
  navMenuItems: [
    {
      label: "India",
      href: "/news/india",
    },
    {
      label: "Sports",
      href: "/news/sports",
    },
    {
      label: "National",
      href: "/news/national",
    },

    {
      label: "Political",
      href: "/news/political",
    },
    {
      label: "Cricket",
      href: "/news/cricket",
    },
    {
      label: "World",
      href: "/news/world",
    },
    {
      label: "Business",
      href: "/news/business",
    },
    {
      label: "Trending",
      href: "/news/trending",
    },
    {
      label: "Education",
      href: "/news/education",
    },
    {
      label: "Environment",
      href: "/news/environment",
    },
  ],
  footerItem: [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      label: "Disclaimer",
      href: "/disclaimer",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "About Us",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/mohanlal99",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
};
