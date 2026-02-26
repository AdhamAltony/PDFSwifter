import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/shared/ui/Navbar";

const adsenseClient =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-6225595378099419";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TKCTSGL7";
export const metadata = {
  title: {
    default: "pdfSwifter | Free Online PDF Tools, Converter & Compressor",
    template: "%s | pdfSwifter",
  },
  description:
    "Free online PDF toolkit — compress PDF, convert PDF to Word, Excel, JPG, rotate PDF pages, and download TikTok & Instagram videos. Fast, free, no installation required.",
  keywords:
    "compress pdf online free, pdf to word converter, pdf to excel, pdf to jpg, rotate pdf, merge pdf, download tiktok video, download instagram video, free pdf tools, online pdf compressor",
  icons: {
    icon: "/favicone.png",
    shortcut: "/favicone.png",
    apple: "/favicone.png",
  },
  verification: {
    google: "FlijeVlJE9IkcCV8_oGSUttoWNekDXjo9kakLDR6Gas",
  },
  openGraph: {
    type: "website",
    siteName: "pdfSwifter",
    title: "pdfSwifter | Free Online PDF Tools, Converter & Compressor",
    description:
      "Free online PDF toolkit — compress PDF, convert PDF to Word, Excel, JPG, rotate PDF pages, and download TikTok & Instagram videos.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {gtmId && (
          <Script
            id="google-tag-manager"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        {adsenseClient && (
          <Script
            id="google-adsense"
            async
            strategy="beforeInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
