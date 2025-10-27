// src/app/layout.tsx
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext'; // 1. Importer le ThemeProvider
// @ts-expect-error: side-effect CSS import without type declarations
import "@/styles/global.css";
import type { Metadata } from 'next';

import Header from '@/components/Header'; // Importer le Header
import Footer from '@/components/Footer'; // Importer le Footer

// Mettre à jour les métadonnées
export const metadata: Metadata = {
  title: "Gabriel Nomo - Développeur Full-Stack",
  description: "Portfolio de Gabriel Nomo, développeur spécialisé en Laravel et Next.js.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png', // Pour les appareils Apple
    // Vous pouvez ajouter d'autres tailles ici si besoin
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"suppressHydrationWarning> {/* 2. Ajouter suppressHydrationWarning */}
      <body>
        {/* 3. Envelopper l'application avec le ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <main className="pt-20"> {/* pt-20 = padding-top pour ne pas que le contenu soit caché sous le header fixe */}
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}