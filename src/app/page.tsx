"use client";

import { fr } from "@/dictionaries/fr";
import { en } from "@/dictionaries/en";
import { useLanguage } from "@/hooks/useLanguage";

import Hero          from "@/sections/Hero";
import About         from "@/sections/About";
import Skills        from "@/sections/Skills";
import Experience    from "@/sections/Experience";
import Projects      from "@/sections/Projects/index";
import Certifications from "@/sections/Certifications";
import Leadership    from "@/sections/Leadership";
import Education     from "@/sections/Education";
import Contact       from "@/sections/Contact";

export default function Home() {
  const { locale } = useLanguage();
  const dictionary = locale === "fr" ? fr : en;

  return (
    <>
      <Hero          dictionary={dictionary} />
      <About         dictionary={dictionary} />
      <Skills        dictionary={dictionary} />
      <Experience    dictionary={dictionary} />
      <Projects      dictionary={dictionary} />
      <Certifications dictionary={dictionary} />
      <Leadership    dictionary={dictionary} />
      <Education     dictionary={dictionary} />
      <Contact       dictionary={dictionary} />
    </>
  );
}
