"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 10,
    suffix: "",
    label: "Active Startups",
    description: "현재 활동 중인 스타트업",
    color: "text-primary",
  },
  {
    number: 50,
    suffix: "+",
    label: "빌드 경험",
    description: "학기당 목표 빌드 횟수",
    color: "text-cyan-400",
  },
  {
    number: 3,
    suffix: "+",
    label: "산업 파트너",
    description: "KB손해보험, Upstage 등",
    color: "text-sky-400",
  },
  {
    number: 33,
    suffix: "+",
    label: "누적 멤버",
    description: "4기까지 함께한 멤버",
    color: "text-blue-400",
  },
];

function AnimatedNumber({
  value,
  suffix,
  duration = 2000,
  isVisible,
}: {
  value: number;
  suffix: string;
  duration?: number;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isVisible]);

  return (
    <span className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function VisionSection() {
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
      className="relative bg-[#030712] py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 section-divider" />

        {/* Atmospheric gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div
          className={`text-center mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[1.2rem] font-semibold text-slate-400 mb-6 tracking-wider">
            BY THE NUMBERS
          </span>
          <h2 className="text-[3rem] md:text-[4rem] font-display font-bold text-white">
            숫자로 보는{" "}
            <span className="font-display">
              CRE<span className="text-gradient">AI</span>+IT
            </span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="relative text-center p-8 md:p-10 rounded-2xl bg-[#0F172A]/40 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-white/10 hover:bg-[#0F172A]/60">
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 ${
                    stat.color === "text-primary"
                      ? "bg-primary/10"
                      : stat.color === "text-accent"
                      ? "bg-accent/10"
                      : stat.color === "text-emerald-400"
                      ? "bg-emerald-400/10"
                      : "bg-amber-400/10"
                  }`}
                />

                {/* Number */}
                <p
                  className={`stat-number text-[5rem] md:text-[7rem] font-extrabold leading-none mb-2 ${stat.color}`}
                >
                  <AnimatedNumber
                    value={stat.number}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </p>

                {/* Label */}
                <p className="text-[1.6rem] md:text-[1.8rem] font-bold text-white mb-1">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-[1.2rem] text-slate-500 font-body">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "animate-fade-in-up delay-600" : "opacity-0"
          }`}
        >
          <p className="text-[1.6rem] text-slate-400 mb-6 font-body">
            다음 기록을 함께 만들어갈 분을 찾습니다.
          </p>
          <a
            href="/join"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-[1.5rem] font-semibold group"
          >
            5기 지원하기
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
