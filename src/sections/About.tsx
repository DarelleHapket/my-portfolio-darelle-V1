// src/sections/About.tsx
import { en } from '@/dictionaries/en';
import Image from 'next/image';

interface SectionProps {
  dictionary: typeof en;
}

const About = ({ dictionary }: SectionProps) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-light-text dark:text-dark-text">
            {dictionary.sectionTitles.about}
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              {dictionary.about.paragraph1}
            </p>
            <p>
              {dictionary.about.paragraph2}
            </p>
          </div>
        </div>
        <div className="relative w-64 h-64 mx-auto md:w-full md:h-auto md:max-w-sm">
          <Image
            src="/images/profile-photo.jpg" // Mettez votre photo de profil ici
            alt="Gabriel Nomo"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;