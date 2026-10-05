import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ContactPopup } from "@/components/contact/ContactPopup";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ExploreYatri | Journeys Made Worth Remembering",
    template: "%s | ExploreYatri",
  },

  description:
    "Explore domestic and international travel packages, destinations, travel guides and memorable journeys with ExploreYatri.",

  keywords: [
    "ExploreYatri",
    "travel agency",
    "holiday packages",
    "India travel packages",
    "international travel packages",
    "Kashmir packages",
    "Manali packages",
    "travel planner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-[var(--background)] text-[var(--text-primary)] antialiased`}
      >
        <ThemeProvider>
          {children}

          <ContactPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
