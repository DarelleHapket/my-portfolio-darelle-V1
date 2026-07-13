import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider }    from "@/contexts/ThemeContext";
import "@/styles/global.css";
import type { Metadata }   from "next";
import Header  from "@/components/Header";
import Footer  from "@/components/Footer";
import TopBar  from "@/components/TopBar";
import { Sora, Source_Code_Pro } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darelle Hapket | Développeuse Full-Stack & Data Analytics",
  description:
    "Portfolio de Darelle Hapket, développeuse Full-Stack spécialisée en Python/Django, React Native, Spring Boot et Data Analytics. ENSPY Yaoundé.",
  keywords: [
    "Développeuse Full-Stack",
    "Darelle Hapket",
    "ENSPY",
    "Python Django",
    "React Native",
    "Spring Boot",
    "Data Analytics",
    "Cameroun",
  ],
  openGraph: {
    title: "Darelle Hapket | Développeuse Full-Stack & Data Analytics",
    description: "Développeuse Full-Stack & Data Analytics, construisant des solutions numériques durables.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${sourceCodePro.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <TopBar />
            <Header />
            <main className="pt-0">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
