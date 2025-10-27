// src/sections/Contact.tsx
"use client"; // On peut le garder en client component pour plus de flexibilité

import SectionTitle from "@/components/ui/SectionTitle";
import { en } from '@/dictionaries/en';

const Contact = ({ dictionary }: { dictionary: typeof en }) => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="container mx-auto px-6">
        <SectionTitle>{dictionary.sectionTitles.contact}</SectionTitle>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {dictionary.contact.invitation}
        </p>
        <a 
          href={`mailto:${dictionary.contact.email}`}
          className="inline-block px-10 py-4 bg-accent-light dark:bg-accent text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-transform duration-300 hover:scale-105"
        >
          {dictionary.contact.button}
        </a>
      </div>
    </section>
  );
};

export default Contact;