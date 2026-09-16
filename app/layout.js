import { PT_Serif, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, SITE_KEYWORDS } from "@/lib/seo";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const DESCRIPTION =
  "St. John's English Medium School in Dantherapalli, Giddalur — free, quality education for underprivileged children, run by The Joshua Foundation. Exists to Empower.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "St. John's School, Dantherapalli | A Ministry of The Joshua Foundation",
    template: "%s | St. John's School",
  },
  description: DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "The Joshua Foundation" }],
  creator: "The Joshua Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "St. John's School, Dantherapalli | A Ministry of The Joshua Foundation",
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 900, alt: "St. John's School students and staff, Dantherapalli" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. John's School, Dantherapalli | A Ministry of The Joshua Foundation",
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  themeColor: "#FBF5E9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <PageTransition />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
