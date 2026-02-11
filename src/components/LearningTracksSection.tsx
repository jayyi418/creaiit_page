"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const tracks = [
  {
    id: "utilization",
    titleEn: "AI Utilization",
    titleKo: "AI 활용",
    description: "핵심 트랙 - AI 협업 능력",
    topics: ["Vibe Coding", "Vibe Design", "Workflow 자동화"],
    isCore: true,
    gradient: "from-primary via-cyan-400 to-primary-light",
    borderColor: "border-primary/40",
    hoverBorder: "hover:border-primary",
    glowColor: "group-hover:shadow-[0_0_60px_-10px_rgba(14,165,233,0.5)]",
    iconBg: "bg-gradient-to-br from-primary to-cyan-400",
    image: "/images/track-ai-utilization.png",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: "development",
    titleEn: "AI Development",
    titleKo: "AI 개발",
    description: "프로덕션 레벨 Agent 구축",
    topics: ["LLM API", "Function Calling", "Agent 아키텍처"],
    isCore: false,
    gradient: "from-sky-500 to-blue-600",
    borderColor: "border-white/5",
    hoverBorder: "hover:border-sky-500/50",
    glowColor: "group-hover:shadow-[0_0_50px_-10px_rgba(14,165,233,0.3)]",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
    image: "/images/track-ai-development.png",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: "business",
    titleEn: "AI Business",
    titleKo: "AI 비즈니스",
    description: "AI 비즈니스 기회 발굴",
    topics: ["Case Study", "기회 발굴", "포지셔닝"],
    isCore: false,
    gradient: "from-blue-400 to-indigo-500",
    borderColor: "border-white/5",
    hoverBorder: "hover:border-blue-400/50",
    glowColor: "group-hover:shadow-[0_0_50px_-10px_rgba(96,165,250,0.3)]",
    iconBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
    image: "/images/track-ai-business.png",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: "startup",
    titleEn: "Lean Startup",
    titleKo: "린스타트업",
    description: "체계적 창업 실행",
    topics: ["가설", "MVP", "검증", "피봇"],
    isCore: false,
    gradient: "from-slate-400 to-slate-500",
    borderColor: "border-white/5",
    hoverBorder: "hover:border-slate-400/50",
    glowColor: "group-hover:shadow-[0_0_50px_-10px_rgba(148,163,184,0.3)]",
    iconBg: "bg-gradient-to-br from-slate-400 to-slate-500",
    image: "/images/track-lean-startup.png",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function LearningTracksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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
        <div className="absolute top-0 left-0 right-0 section-divider" />

        {/* Multi-color ambient glow */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[150px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[1.2rem] font-semibold text-primary mb-6 tracking-wider">
            4 LEARNING TRACKS
          </span>
          <h2 className="text-[3rem] md:text-[4rem] font-display font-bold text-white mb-4">
            체계적인 <span className="text-gradient">4가지 트랙</span>
          </h2>
          <p className="text-[1.6rem] text-slate-400 max-w-[600px] mx-auto font-body">
            AI 활용부터 창업 실행까지, 단계별로 역량을 쌓아갑니다
          </p>
        </div>

        {/* Track cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, i) => (
            <div
              key={track.id}
              className={`group relative ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 150}ms` }}
            >
              {/* Core track highlight effect */}
              {track.isCore && (
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-2xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
              )}

              {/* Card */}
              <div
                className={`relative h-full p-6 rounded-2xl bg-[#0F172A]/80 backdrop-blur-sm border transition-all duration-500 ${track.borderColor} ${track.hoverBorder} ${track.glowColor} hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background accent image */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none">
                  <Image
                    src={track.image}
                    alt=""
                    fill
                    className="object-cover rounded-tr-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-[#0F172A]" />
                </div>

                {/* Core badge */}
                {track.isCore && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full">
                    <span className="text-[1rem] font-bold text-white tracking-wider">
                      CORE
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${track.iconBg} mb-5 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {track.icon}
                </div>

                {/* Titles */}
                <div className="mb-4">
                  <h3 className="text-[1.6rem] font-display font-bold text-white mb-1">
                    {track.titleKo}
                  </h3>
                  <p className="text-[1.2rem] text-slate-500 font-medium tracking-wide">
                    {track.titleEn}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[1.3rem] text-slate-400 mb-5 font-body">
                  {track.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {track.topics.map((topic, j) => (
                    <span
                      key={j}
                      className={`px-2.5 py-1 rounded-md text-[1.1rem] font-medium ${
                        track.isCore
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-white/5 text-slate-400 border border-white/10"
                      } transition-colors duration-300 group-hover:border-white/20`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={track.isCore ? "text-primary" : "text-slate-500"}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning path visualization */}
        <div
          className={`mt-16 ${
            isVisible ? "animate-fade-in-up delay-500" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-[1.4rem] text-primary font-semibold">AI 활용</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-[1.4rem] text-sky-400 font-semibold">AI 개발</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-[1.4rem] text-blue-400 font-semibold">AI 비즈니스</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-[1.4rem] text-slate-400 font-semibold">린스타트업</span>
          </div>
          <p className="text-center text-[1.3rem] text-slate-500 mt-4 font-body">
            이 순서로 역량을 쌓아 AI 기반 창업을 실현합니다
          </p>
        </div>
      </div>
    </section>
  );
}
