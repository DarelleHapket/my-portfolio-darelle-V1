"use client";

import { en } from "@/dictionaries/en";

const Hero = ({ dictionary }: { dictionary: typeof en }) => {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center justify-center text-center text-white px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          {dictionary.hero.title}
        </h1>

        <h2 className="text-xl md:text-2xl mb-6 opacity-90 font-medium">
          {dictionary.hero.subtitle}
        </h2>

        <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {dictionary.hero.tagline}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="btn-shimmer px-8 py-3 bg-white text-accent font-bold rounded-full shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-blue-300 transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {dictionary.hero.cta_projects}
          </a>
          <a
            href="/cv-darelle-hapket.pdf"
            className="btn-shimmer px-8 py-3 bg-transparent text-white font-bold rounded-full border-2 border-white hover:-translate-y-1 hover:scale-105 hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Télécharger le CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
