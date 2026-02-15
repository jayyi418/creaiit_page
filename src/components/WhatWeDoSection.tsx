"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "AI 프로덕트 개발",
    desc: "한 학기 안에 실제 작동하는 프로토타입을 완성합니다. 아이디어에서 MVP까지, 직접 빌드합니다.",
    accent: "from-primary to-cyan-500",
    glow: "group-hover:shadow-glow",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "창업 스터디 & 피칭",
    desc: "린스타트업 방법론 기반 가설→MVP→검증→피봇 사이클. 투자자 앞에서 직접 피칭합니다.",
    accent: "from-sky-400 to-blue-500",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "연사 초청 세미나",
    desc: "AI 전문가, 스타트업 창업자, VC 투자자와의 직접 대화. 학기당 3회 진행.",
    accent: "from-blue-400 to-indigo-500",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.4)]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" />
      </svg>
    ),
    title: "산학협력 프로젝트",
    desc: "국내 모 보험사, Upstage 등과 실제 Agent 프로젝트 수행. 실전 문제를 풉니다.",
    accent: "from-slate-400 to-slate-500",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(148,163,184,0.4)]",
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030712] py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 section-divider" />

        {/* Subtle mesh gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div
          className={`text-center mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[1.2rem] font-semibold text-primary mb-6 tracking-wider">
            WHAT WE DO
          </span>
          <h2 className="text-[3rem] md:text-[4rem] font-display font-bold text-white mb-6">
            네 가지 핵심 활동
          </h2>
          <p className="text-[1.6rem] text-slate-400 max-w-[500px] mx-auto font-body">
            배움에서 그치지 않고, 실제로 만들고 증명합니다.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group relative ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-white/5 transition-all duration-500 ${card.glow} hover:border-white/10 hover:-translate-y-2`}
              >
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${card.accent} mb-6 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {card.icon}
                </div>

                {/* Content */}
                <h3 className="text-[1.8rem] font-bold text-white mb-3 font-display">
                  {card.title}
                </h3>
                <p className="text-[1.4rem] text-slate-400 leading-relaxed font-body">
                  {card.desc}
                </p>

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
