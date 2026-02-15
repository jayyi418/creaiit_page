"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// SVG Icon components for each startup category
const Icons = {
  education: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  parenting: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  green: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  creator: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
    </svg>
  ),
  crypto: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  stock: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
};

const startups = [
  {
    name: "RootEdu",
    tag: "EdTech",
    desc: "SKY 학생들이 만드는 학습-진로 인사이트 플랫폼",
    url: "https://rootedu-platform.vercel.app",
    gradient: "from-sky-500 to-blue-600",
    borderColor: "border-sky-500/30",
    hoverBorder: "hover:border-sky-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)]",
    iconBg: "from-sky-500 to-blue-600",
    textColor: "text-sky-400",
    icon: Icons.education,
  },
  {
    name: "AiNOS",
    tag: "AI Transformation",
    desc: "보험, 데이터센터, 국방, 엔터테인먼트, 스마트시티 AX 솔루션",
    url: "https://ainos.io",
    gradient: "from-indigo-500 to-violet-600",
    borderColor: "border-indigo-500/30",
    hoverBorder: "hover:border-indigo-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(129,140,248,0.4)]",
    iconBg: "from-indigo-500 to-violet-600",
    textColor: "text-indigo-400",
    icon: Icons.ai,
  },
  {
    name: "Parentlyze",
    tag: "AI · Parenting",
    desc: "AI 기반 맞춤형 육아 솔루션",
    url: "https://parentlyze.com",
    gradient: "from-fuchsia-500 to-pink-600",
    borderColor: "border-fuchsia-500/30",
    hoverBorder: "hover:border-fuchsia-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(232,121,249,0.4)]",
    iconBg: "from-fuchsia-500 to-pink-600",
    textColor: "text-fuchsia-400",
    icon: Icons.parenting,
  },
  {
    name: "Resio",
    tag: "Green Tech",
    desc: "친환경 바이오매스 소재 칫솔",
    url: "https://www.reseio.com",
    gradient: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.4)]",
    iconBg: "from-emerald-500 to-teal-600",
    textColor: "text-emerald-400",
    icon: Icons.green,
  },
  {
    name: "Luminary",
    tag: "AI · Creator Economy",
    desc: "인플루언서 사업 매칭 자동화",
    gradient: "from-amber-500 to-orange-600",
    borderColor: "border-amber-500/30",
    hoverBorder: "hover:border-amber-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.4)]",
    iconBg: "from-amber-500 to-orange-600",
    textColor: "text-amber-400",
    icon: Icons.creator,
  },
  {
    name: "Undrew",
    tag: "AI · Community",
    desc: "AI 기반 창업 커뮤니티",
    url: "https://undrewai.com",
    gradient: "from-rose-500 to-red-600",
    borderColor: "border-rose-500/30",
    hoverBorder: "hover:border-rose-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(251,113,133,0.4)]",
    iconBg: "from-rose-500 to-red-600",
    textColor: "text-rose-400",
    icon: Icons.community,
  },
  {
    name: "Kinetic Design",
    tag: "AI · Creative SaaS",
    desc: "AI 크리에이티브 디렉션 SaaS 플랫폼",
    url: "https://kinetic-design.com",
    gradient: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    hoverBorder: "hover:border-purple-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]",
    iconBg: "from-purple-500 to-pink-500",
    textColor: "text-purple-400",
    icon: Icons.design,
  },
  {
    name: "TripNote",
    tag: "AI · Travel",
    desc: "여행을 영원한 추억으로 변환하는 AI 앱",
    url: "https://trip-note-frontend.vercel.app",
    gradient: "from-teal-500 to-cyan-500",
    borderColor: "border-teal-500/30",
    hoverBorder: "hover:border-teal-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.4)]",
    iconBg: "from-teal-500 to-cyan-500",
    textColor: "text-teal-400",
    icon: Icons.travel,
  },
  {
    name: "CoinBuddy",
    tag: "AI · Crypto Education",
    desc: "크립토를 위한 듀오링고, AI 기반 암호화폐 교육 앱",
    url: "https://coinbuddy.vercel.app",
    gradient: "from-yellow-500 to-amber-500",
    borderColor: "border-yellow-500/30",
    hoverBorder: "hover:border-yellow-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.4)]",
    iconBg: "from-yellow-500 to-amber-500",
    textColor: "text-yellow-400",
    icon: Icons.crypto,
  },
  {
    name: "Brief",
    tag: "AI · Finance",
    desc: "AI 기반 주식 시장 브리핑 앱",
    gradient: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    hoverBorder: "hover:border-green-400/60",
    shadowColor: "hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)]",
    iconBg: "from-green-500 to-emerald-500",
    textColor: "text-green-400",
    icon: Icons.stock,
  },
];

export default function StartupsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#030712]">
      <div className="h-[80px]" />

      <div ref={sectionRef} className="relative max-w-[1300px] mx-auto px-6 md:px-10 py-20">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/startups-header-bg.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        </div>

        {/* Header */}
        <div
          className={`relative text-center mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[1.2rem] font-semibold text-primary mb-6 tracking-wider">
            PORTFOLIO
          </span>
          <h1 className="text-[3.6rem] md:text-[5rem] font-display font-bold text-white mb-6">
            Startups
          </h1>
          <p className="text-[1.8rem] font-semibold text-primary mb-4">
            CREAI+IT에서 시작된 팀들
          </p>
          <p className="text-[1.5rem] text-slate-400 max-w-[500px] mx-auto leading-relaxed font-body">
            아이디어에서 실제 서비스까지.
            <br />
            CREAI+IT 멤버들이 만들어가고 있는 창업팀입니다.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className={`relative mb-16 ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-6 md:gap-10 px-8 py-5 rounded-2xl bg-[#0F172A]/60 border border-white/5 backdrop-blur-sm">
              <div className="text-center">
                <p className="stat-number text-[2.8rem] md:text-[3.4rem] font-extrabold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  10
                </p>
                <p className="text-[1.2rem] text-slate-500 font-medium">Active Teams</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="text-center">
                <p className="stat-number text-[2.8rem] md:text-[3.4rem] font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  7
                </p>
                <p className="text-[1.2rem] text-slate-500 font-medium">Industries</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="text-center">
                <p className="stat-number text-[2.8rem] md:text-[3.4rem] font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  2
                </p>
                <p className="text-[1.2rem] text-slate-500 font-medium">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Startup cards grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, i) => {
            const CardWrapper = startup.url ? "a" : "div";
            const cardProps = startup.url
              ? { href: startup.url, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <div
                key={startup.name}
                className={`group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80 + 200}ms` }}
              >
                <CardWrapper
                  {...cardProps}
                  className={`block relative h-full rounded-2xl overflow-hidden bg-[#0F172A]/80 backdrop-blur-sm border ${startup.borderColor} transition-all duration-500 ${startup.hoverBorder} hover:-translate-y-2 ${startup.shadowColor} ${startup.url ? "cursor-pointer" : ""}`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${startup.gradient}`} />

                  {/* Corner glow */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${startup.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-5">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${startup.iconBg} p-[1px] shadow-lg`}>
                        <div className="w-full h-full rounded-xl bg-[#0F172A]/90 flex items-center justify-center text-white group-hover:bg-transparent transition-all duration-500">
                          {startup.icon}
                        </div>
                      </div>

                      {/* Tag + Link indicator */}
                      <div className="flex items-center gap-2">
                        {startup.url && (
                          <svg viewBox="0 0 24 24" className={`w-5 h-5 ${startup.textColor} opacity-60 group-hover:opacity-100 transition-opacity`} fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        )}
                        <span className={`px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[1.1rem] font-medium ${startup.textColor}`}>
                          {startup.tag}
                        </span>
                      </div>
                    </div>

                    {/* Startup name */}
                    <h3 className="text-[2rem] font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                      {startup.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[1.4rem] text-slate-400 leading-relaxed font-body mb-4">
                      {startup.desc}
                    </p>

                    {/* Bottom decorative element */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${startup.gradient}`} />
                        <span className="text-[1.1rem] text-slate-600 font-medium">CREAI+IT Portfolio</span>
                      </div>
                      {startup.url && (
                        <span className={`text-[1.1rem] ${startup.textColor} opacity-0 group-hover:opacity-100 transition-opacity font-medium`}>
                          Visit →
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${startup.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
                </CardWrapper>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`relative text-center mt-20 ${
            isVisible ? "animate-fade-in-up delay-600" : "opacity-0"
          }`}
        >
          <p className="text-[1.6rem] text-slate-400 mb-6 font-body">
            다음 스타트업의 주인공이 되어보세요.
          </p>
          <a
            href="/join"
            className="btn-primary no-underline inline-flex"
          >
            <span>5기 지원하기</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="relative z-10"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
