// src/sections/Certifications.tsx
import { en } from '@/dictionaries/en';
import { certificationsData } from '@/data';
import Link from 'next/link';

interface SectionProps { dictionary: typeof en; }

const Certifications = ({ dictionary }: SectionProps) => {
  return (
    <section id="certifications" className="py-20 bg-light-secondary dark:bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text">{dictionary.sectionTitles.certifications}</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {certificationsData.map(cert => {
                const certText = dictionary.certifications[cert.id as keyof typeof dictionary.certifications];
                return (
                    <Link key={cert.id} href={cert.pdfUrl || '#'} target="_blank" className="block p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <h3 className="font-bold">{certText.title}</h3>
                        <p className="text-sm text-gray-500">{certText.institution}</p>
                    </Link>
                );
            })}
        </div>
      </div>
    </section>
  );
};
export default Certifications;