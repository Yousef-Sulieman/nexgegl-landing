import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Montserrat, IBM_Plex_Sans_Arabic } from "next/font/google";
import { dictionaries } from "../dictionaries";
import ScrollToTop from "../components/ScrollToTop";

/* English */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-en",
  display: "swap",
});

/* Arabic */
const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ar",
  display: "swap",
});

export default async function SiteLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = dictionaries[lang as "en" | "ar"];

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body
        className={`
          ${montserrat.variable}
          ${arabicFont.variable}
          ${lang === "ar" ? "font-ar" : "font-en"}
        `}
      >
        <Navbar lang={lang as "en" | "ar"} dict={dict} />
        {children}
        <ScrollToTop />
        <Footer dict={dict} />
      </body>
    </html>
  );
}
