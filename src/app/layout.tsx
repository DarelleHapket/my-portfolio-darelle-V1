// src/app/layout.tsx
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
// @ts-expect-error
import "@/styles/global.css";
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 1. Importer les polices depuis next/font
import { Sora, Source_Code_Pro } from 'next/font/google';

// 2. Configurer les polices pour créer des variables CSS
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora', // Sera utilisé comme 'font-sans' dans Tailwind
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro', // Sera utilisé comme 'font-mono' dans Tailwind
  display: 'swap',
});

// Les métadonnées restent les mêmes (elles seront surchargées par le layout de langue)
export const metadata: Metadata = {
  title: "Gabriel Nomo - Développeur Full-Stack",
  description: "Portfolio de Gabriel Nomo, développeur spécialisé en Laravel et Next.js.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Appliquer les classes des variables de police à la balise <html>
    <html lang="en" className={`${sora.variable} ${sourceCodePro.variable}`} suppressHydrationWarning>
      {/* 4. Appliquer les couleurs de fond et de texte de base */}
      <body className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            {/* On ajoute un conteneur principal pour centrer le contenu */}
            <main className="pt-20 px-6 sm:px-8 lg:px-12 container mx-auto max-w-6xl">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}