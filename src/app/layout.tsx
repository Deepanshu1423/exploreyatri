import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "@/components/layout/navbar.css";

import { ContactPopup } from "@/components/contact/ContactPopup";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { pageMetadata, siteStructuredData } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  category: "travel",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  verification: siteConfig.verification,
  icons: { icon: [{ url: siteConfig.logo, type: "image/png" }], apple: [{ url: siteConfig.logo, type: "image/png" }] },
  robots: {
    index: siteConfig.isIndexable,
    follow: siteConfig.isIndexable,
    googleBot: { index: siteConfig.isIndexable, follow: siteConfig.isIndexable, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-[var(--background)] text-[var(--text-primary)] antialiased`}
      >
        <ThemeProvider>
          <JsonLd data={siteStructuredData} />
          <IntroLoader />
          <Navbar />
          {children}

          <ContactPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
