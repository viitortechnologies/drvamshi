import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Pillareddy Vamsheedhar Reddy | Educator, Researcher, Mentor",
  description:
    "Associate Professor devoted to academic excellence, student development, and value-based learning. Shaping students. Building futures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:font-semibold focus:rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
