"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { en } from "@/dictionaries/en";

function useCounter(target: number, triggered: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);
  return count;
}

const About = ({ dictionary }: { dictionary: typeof en }) => {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects   = useCounter(5, triggered);
  const hackathons = useCounter(2, triggered);
  const experience = useCounter(2, triggered);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-light-background dark:bg-dark-background transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text section-title-underline">
            {dictionary.sectionTitles.about}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">

          {/* Photo de Darelle */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border-4 border-accent/30 scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-secondary shadow-2xl">
                <Image
                  src="/images/darelle.jpeg"
                  alt="Darelle Hapket"
                  fill
                  sizes="256px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Badge bleu */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 hero-gradient rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-secondary">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-accent mb-4">{dictionary.about.heading}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{dictionary.about.paragraph1}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{dictionary.about.paragraph2}</p>
          </div>
        </div>

        {/* Stats animées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { count: projects,   label: dictionary.about.stats.projects },
            { count: hackathons, label: dictionary.about.stats.hackathons },
            { count: experience, label: dictionary.about.stats.experience },
          ].map(({ count, label }) => (
            <div key={label} className="text-center py-8 px-6 bg-white dark:bg-dark-secondary rounded-2xl shadow-md card-hover border border-light-border dark:border-dark-border">
              <span className="block text-5xl font-bold text-accent mb-2">{count}+</span>
              <span className="text-gray-500 dark:text-gray-400 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
