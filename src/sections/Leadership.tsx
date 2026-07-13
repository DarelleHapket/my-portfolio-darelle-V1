"use client";
import { useEffect, useState } from "react";
import { leadershipData } from "@/data";
import { en } from "@/dictionaries/en";

const icons: Record<string, string> = {
  "club-gi": "👥",
  "hackverse-2025": "🏆",
  "hackverse-ia": "📊",
};

const Leadership = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section id="leadership" className="py-20 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text section-title-underline">
            {dictionary.sectionTitles.leadership}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {leadershipData.map((item) => {
            const text = dictionary.leadership[item.id as keyof typeof dictionary.leadership];
            return (
              <div key={item.id} className="bg-white dark:bg-dark-background rounded-2xl p-6 shadow-md card-hover border border-light-border dark:border-dark-border">
                <div className="text-3xl mb-3">{icons[item.id] || "🎯"}</div>
                <p className="text-xs font-mono text-accent mb-1">{item.startDate}{item.endDate !== item.startDate ? ` — ${item.endDate === "current" ? "En cours" : item.endDate}` : ""}</p>
                <h3 className="font-bold text-light-text dark:text-dark-text mb-1">{text.role}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{text.organization}</p>
                {text.descriptionPoints.map((point, i) => (
                  <p key={i} className="text-sm text-gray-500 dark:text-gray-400">{point}</p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
