"use client";
import { useEffect, useState } from "react";
import { en } from "@/dictionaries/en";

// Données certifs avec PDF de Darelle
const certifications = [
  {
    id: "intro-ai",
    pdfUrl: "/certifications/intro-ai.pdf",
    icon: "🤖",
  },
  {
    id: "django-rest",
    pdfUrl: "/certifications/django-rest.pdf",
    icon: "🐍",
  },
];

const Certifications = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-background transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text section-title-underline">
            {dictionary.sectionTitles.certifications}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certifications.map((cert) => {
            const certText = dictionary.certifications[cert.id as keyof typeof dictionary.certifications];
            return (
              <a
                key={cert.id}
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-light-background dark:bg-dark-secondary rounded-2xl p-6 shadow-md card-hover border border-light-border dark:border-dark-border flex items-start gap-4 cursor-pointer"
              >
                {/* Icône */}
                <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>

                {/* Texte */}
                <div className="flex-1">
                  <h3 className="font-bold text-light-text dark:text-dark-text mb-1 group-hover:text-accent transition-colors">
                    {certText.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{certText.institution}</p>
                  <span className="text-xs text-accent font-semibold flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Voir le certificat PDF
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
