import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_INFO } from "@/data/constants";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata = {
  title: `${SITE_INFO.name} - ${SITE_INFO.title}`,
  description: SITE_INFO.description,
  metadataBase: new URL(SITE_INFO.url),
  icons: {
    icon: [
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "144x144", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: `${SITE_INFO.name} - ${SITE_INFO.title}`,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og/connor-flynn-og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_INFO.name} - ${SITE_INFO.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.name} - ${SITE_INFO.title}`,
    description: SITE_INFO.description,
    images: ["/og/connor-flynn-og.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${ibmPlexMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
