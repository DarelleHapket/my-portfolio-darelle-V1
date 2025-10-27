// src/sections/Leadership.tsx
import { en } from '@/dictionaries/en';
import { leadershipData } from '@/data';

interface SectionProps { dictionary: typeof en; }

const Leadership = ({ dictionary }: SectionProps) => {
  const clubGi = leadershipData[0];
  const clubGiText = dictionary.leadership['club-gi'];
  
  return (
    <section id="leadership" className="py-20 bg-light-secondary dark:bg-dark-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-light-text dark:text-dark-text">{dictionary.sectionTitles.leadership}</h2>
        <h3 className="text-xl font-semibold text-accent-light dark:text-accent">{clubGiText.role}</h3>
        <p className="text-gray-500 mb-6">{clubGiText.organization} ({clubGi.startDate} - {clubGi.endDate})</p>
        <div className="max-w-2xl mx-auto text-left space-y-2">
          {clubGiText.descriptionPoints.map((point, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300">✓ {point}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;