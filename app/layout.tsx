import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";
import { siteConfig } from "./lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
  preload: true,
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
  weight: ["400", "500", "600"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Educator, Researcher, Mentor`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pillareddy Vamsheedhar Reddy",
    "cloud computing researcher",
    "workflow scheduling",
    "Keshav Memorial Engineering College",
    "VIT-AP",
    "machine learning professor Hyderabad",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.shortName,
    title: `${siteConfig.name} | Educator & Researcher`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e2d4a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: siteConfig.institution,
  },
  email: siteConfig.email,
  telephone: siteConfig.phone,
  url: siteConfig.siteUrl,
  sameAs: [
    "https://in.linkedin.com/in/vamsheedharredddy-pillaredddy-272a0aa9",
    "https://orcid.org/0000-0003-3525-6703",
    "https://scholar.google.com/citations?user=1DD-5EAAAAAJ&hl=en",
    "https://www.researchgate.net/profile/Pillareddy_Reddy2",
    "https://www.scopus.com/authid/detail.uri?authorId=56214294000",
    "https://www.webofscience.com/wos/author/record/HKO-4314-2023",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:font-semibold focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
