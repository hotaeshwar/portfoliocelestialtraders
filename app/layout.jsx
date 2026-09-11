import { Cormorant_Garamond, Manrope, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#061321",
};

export const metadata = {
  metadataBase: new URL("https://celestialtrader.com"),
  title: "Celestial Trading Alliance | Institutional Forex & CFD Trading",
  description: "Technology-led trading solutions built around advanced execution, competitive pricing, reliable market access and client support.",
  keywords: ["Forex Trading", "CFD Trading", "Celestial Trading Alliance", "Institutional Liquidity", "MetaTrader 5", "MAM Accounts", "Introducing Broker"],
  authors: [{ name: "Celestial Trading Alliance LTD" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Celestial Trading Alliance | Institutional Forex & CFD Trading",
    description: "Empowering Traders with Innovation and Expertise.",
    url: "https://celestialtrader.com",
    siteName: "Celestial Trading Alliance LTD",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Celestial Trading Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Celestial Trading Alliance | Institutional Forex & CFD Trading",
    description: "Empowering Traders with Innovation and Expertise.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${manrope.variable} ${notoKufiArabic.variable}`}>
      <body className="antialiased bg-[#061321] text-[#F7FAFC] selection:bg-[#5EC7E8] selection:text-[#061321]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
