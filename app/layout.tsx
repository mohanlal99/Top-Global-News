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
        {/* PopAds Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var e=window,p="f064980abff894a9a368fc0db61de4ad",
                q=[["siteId",53-108-20+5137310],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],
                v=["d3d3LmludGVsbGlwb3B1cC5jb20vY21vdGlvbi5taW4uY3Nz","ZDNtcjd5MTU0ZDJxZzUuY2xvdWRmcm9udC5uZXQvdHZOU1JaL21qc29uTWFzay5taW4uanM="],
                l=-1,j,y,h=function(){
                  clearTimeout(y);l++;if(v[l]&&!(1753202307000<(new Date).getTime()&&1<l)){
                    j=e.document.createElement("script");j.type="text/javascript";j.async=!0;
                    var k=e.document.getElementsByTagName("script")[0];
                    j.src="https://"+atob(v[l]);
                    j.crossOrigin="anonymous";j.onerror=h;j.onload=function(){
                      clearTimeout(y);e[p.slice(0,16)+p.slice(0,16)]||h()
                    };y=setTimeout(h,5E3);k.parentNode.insertBefore(j,k)
                  }
                };
                if(!e[p]){
                  try{Object.freeze(e[p]=q)}catch(e){}h()
                }
              })();
            `,
          }}
          data-cfasync="false"
          type="text/javascript"
        />
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
