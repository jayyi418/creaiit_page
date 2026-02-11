"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  {
    name: "연세대학교 인공지능융합대학",
    short: "AI융합대학",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: "연세대학교 창업지원단",
    short: "창업지원단",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    name: "연세대학교 SW중심사업단",
    short: "SW중심사업단",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    name: "Disquiet",
    short: "Disquiet",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030712] py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 section-divider" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[1.2rem] font-semibold text-slate-400 mb-6 tracking-wider">
            OUR PARTNERS
          </span>
          <h2 className="text-[3rem] md:text-[4rem] font-display font-bold text-white">
            함께하는 파트너
          </h2>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className={`group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-[#0F172A]/40 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-primary/30 hover:bg-[#0F172A]/60 group-hover:shadow-glow-sm">
                {/* Icon */}
                <div className="text-slate-500 mb-4 transition-colors duration-300 group-hover:text-primary">
                  {partner.icon}
                </div>

                {/* Name */}
                <p className="text-[1.3rem] md:text-[1.4rem] font-semibold text-slate-300 text-center transition-colors duration-300 group-hover:text-white">
                  {partner.short}
                </p>

                {/* Full name on hover - Desktop only */}
                <div className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0F172A] border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-bottom-4 transition-all duration-300 whitespace-nowrap z-10">
                  <p className="text-[1.1rem] text-slate-400">{partner.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite scroll logo banner */}
        <div className="mt-16 overflow-hidden">
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10" />

            {/* Scrolling content */}
            <div className="logo-roller flex items-center gap-16 py-4">
              {[...partners, ...partners, ...partners, ...partners].map(
                (partner, i) => (
                  <span
                    key={i}
                    className="text-[1.4rem] font-semibold text-slate-600 whitespace-nowrap"
                  >
                    {partner.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
