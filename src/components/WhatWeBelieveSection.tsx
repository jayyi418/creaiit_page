"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function WhatWeBelieveSection() {
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
        <div className="absolute top-0 left-0 right-0 section-divider" />

        {/* AI-generated neural network background */}
        <Image
          src="/images/neural-network-bg.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />

        {/* Central dramatic glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-[100px]" />

        {/* Accent glow */}
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      {/* Decorative quote marks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-[15%] left-[5%] text-[20rem] font-display font-bold text-white/[0.02] leading-none select-none transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          "
        </div>
        <div
          className={`absolute bottom-[10%] right-[5%] text-[20rem] font-display font-bold text-white/[0.02] leading-none select-none rotate-180 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          "
        </div>
      </div>

      <div className="relative max-w-[1000px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[1.2rem] font-semibold text-slate-400 tracking-wider">
            WHAT WE BELIEVE
          </span>
        </div>

        {/* Main quote */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          <h2 className="text-[2.4rem] md:text-[3.4rem] lg:text-[4rem] font-display font-bold leading-[1.2] tracking-tight">
            <span className="text-white">&ldquo;</span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
              AI 시대, 진짜 경쟁력은
            </span>
            <br />
            <span className="text-gradient">AI Native</span>
            <span className="text-white">가 되는 것&rdquo;</span>
          </h2>
          <p className="mt-6 text-[1.5rem] text-slate-400 font-body max-w-[800px] mx-auto">
            AI를 활용하는 개발자는 <span className="text-primary font-semibold">26% 더 많은 업무</span>를 완수하고,
            <br className="hidden md:block" />
            AI 역량을 갖춘 인재는 <span className="text-primary font-semibold">더 높은 연봉 프리미엄</span>을 받습니다
          </p>
        </div>

        {/* Philosophy cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          {/* Card 1 - The Gap */}
          <div className="group relative p-6 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-primary/30 hover:shadow-glow-sm">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <span className="text-[1.1rem] text-primary font-semibold tracking-wider">THE GAP</span>
            </div>
            <p className="text-[1.5rem] text-slate-300 leading-relaxed font-body">
              <span className="text-primary font-semibold">94%</span>의 기업이{" "}
              <br className="hidden md:block" />
              AI 인재 부족을 겪고 있다
            </p>
            <p className="text-[1.2rem] text-slate-500 mt-2 font-body">
              수요 대비 공급 비율 3.2:1
            </p>
          </div>

          {/* Card 2 - The Advantage */}
          <div className="group relative p-6 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-sky-400/30 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <span className="text-[1.1rem] text-sky-400 font-semibold tracking-wider">THE EDGE</span>
            </div>
            <p className="text-[1.5rem] text-slate-300 leading-relaxed font-body">
              AI Native 인재는{" "}
              <br className="hidden md:block" />
              <span className="text-sky-400 font-semibold">생산성 4배</span>, <span className="text-white font-semibold">연봉 2배</span>
            </p>
            <p className="text-[1.2rem] text-slate-500 mt-2 font-body">
              &lsquo;적당히&rsquo;와 &lsquo;탁월하게&rsquo;의 차이
            </p>
          </div>

          {/* Card 3 - The Path */}
          <div className="group relative p-6 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-blue-400/30 hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.3)]">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58" />
                </svg>
              </div>
              <span className="text-[1.1rem] text-blue-400 font-semibold tracking-wider">THE PATH</span>
            </div>
            <p className="text-[1.5rem] text-slate-300 leading-relaxed font-body">
              <span className="text-blue-400 font-semibold">반복 훈련</span>으로 AI Native가 되고{" "}
              <br className="hidden md:block" />
              <span className="text-white font-semibold">창업</span>으로 역량을 극대화
            </p>
            <p className="text-[1.2rem] text-slate-500 mt-2 font-body">
              CREAI+IT의 방식
            </p>
          </div>
        </div>

        {/* Bottom emphasis line */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-[1.4rem] text-slate-500 font-body">
              남들보다 <span className="text-slate-400">앞서 나가고 싶다면</span>, 지금 시작하세요
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="text-[1.1rem] text-slate-600 mt-3 font-body">
            Source: PwC AI Jobs Barometer, IDC, McKinsey
          </p>
        </div>
      </div>
    </section>
  );
}
