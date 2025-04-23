import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import { inter } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.image}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TopGlobalNews", // Optional: your Twitter handle
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.image}`],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
    },
  },
  // Structured data for search engines (JSON-LD schema)
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsMediaOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      sameAs: [
        "https://www.facebook.com/",
        "https://twitter.com/",
        "https://www.linkedin.com/",
      ],
      description: siteConfig.description,
      genre: "General",
      keywords: siteConfig.keywords.split(",").map((word) => word.trim()),
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/search?query={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    }),
    "google-adsense-account": "ca-pub-7921236606850510",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
      </head>

      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl flex-grow">
              <AnalyticsWrapper> {children} </AnalyticsWrapper>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
