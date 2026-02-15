"use client";

import Image from "next/image";
import TabNav from "@/components/TabNav";

// Tech session items - approachable AI utilization focus
const techSessions = [
  { title: "바이브 코딩 기초", subtitle: "Cursor, Claude Code로 코딩 없이 앱 만들기" },
  { title: "AI 크리에이티브", subtitle: "Midjourney, Suno로 이미지/음악 생성" },
  { title: "나만의 자동화", subtitle: "반복 업무를 AI로 자동화하는 워크플로우" },
  { title: "AI Agent 입문", subtitle: "나를 대신하는 AI 비서 만들기" },
  { title: "프로덕트 빌딩", subtitle: "아이디어를 실제 서비스로 구현하기" },
];

// Startup session items (left column)
const startupSessions = [
  { title: "아이디어 검증", subtitle: "가설 수립과 빠른 검증" },
  { title: "린스타트업 방법론", subtitle: "MVP → 검증 → 피봇 사이클" },
  { title: "피칭 실습", subtitle: "투자자 앞에서 발표 연습" },
  { title: "팀 빌딩", subtitle: "관심 분야별 팀 구성" },
];

// Center milestones flowing down
const milestones = [
  { title: "산학협력", subtitle: "국내 모 보험사", type: "collab" },
  { title: "연사 초청", subtitle: "AI 전문가", type: "speaker" },
  { title: "연사 초청", subtitle: "창업자", type: "speaker" },
  { title: "연사 초청", subtitle: "VC 투자자", type: "speaker" },
  { title: "Final Sprint", subtitle: "7월", type: "sprint" },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <div className="h-[80px]" />

      <TabNav tabs={["Curriculum", "Session", "Project", "Demoday"]}>
        {/* ===== Curriculum Tab - Unified Blue Theme ===== */}
        <div className="relative overflow-hidden">
          {/* Background effects - all blue tones */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/activities-curriculum-bg.png"
              alt=""
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
            <div className="absolute top-[50%] left-[10%] w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[150px]" />
            <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[180px]" />
          </div>

          <div className="relative max-w-[1100px] mx-auto px-4 md:px-8 py-12 md:py-16">
            {/* Header */}
            <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="font-display text-[2.4rem] md:text-[3rem] font-bold text-white">
                  CRE<span className="text-gradient">AI</span>+IT
                </span>
                <span className="px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-[1.3rem] font-bold text-primary">
                  2026-1 Curriculum
                </span>
              </div>
              <p className="text-[1.5rem] md:text-[1.8rem] text-slate-400 font-body">
                <span className="text-primary">AI Native 인재</span>를 위한 체계적인 커리큘럼
              </p>
            </div>

            {/* Session Format Info - Compact Row */}
            <div className="mb-10 animate-fade-in-up delay-100">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                  { label: "매주 월요일", sub: "19:00-22:00" },
                  { label: "매주 목요일", sub: "20:00-22:00" },
                  { label: "20-30% 이론", sub: "70-80% 실습" },
                  { label: "50+ 빌드", sub: "학기당 목표" },
                ].map((item, i) => (
                  <div key={item.label} className="px-4 py-2.5 rounded-xl bg-[#0F172A]/60 border border-white/5 text-center">
                    <p className="text-[1.2rem] font-semibold text-white">{item.label}</p>
                    <p className="text-[1rem] text-slate-500">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Two-Track Layout with Central Timeline */}
            <div className="relative">
              {/* Central vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-sky-400 to-blue-500 -translate-x-1/2 hidden lg:block" />

              {/* Sessions Grid */}
              <div className="space-y-6">
                {/* Row 1: Tech & Startup Headers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                  {/* Tech Session Header */}
                  <div className="animate-fade-in-up delay-150">
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-[#0F172A]/80 border border-primary/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[1.8rem] md:text-[2rem] font-display font-bold text-white">
                            기술 세션
                          </h3>
                          <p className="text-[1.2rem] text-slate-500">AI Native 개발 역량</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {techSessions.map((item, i) => (
                          <div
                            key={item.title}
                            className="group p-3 rounded-lg bg-white/[0.02] hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300"
                          >
                            <p className="text-[1.3rem] font-semibold text-white group-hover:text-primary transition-colors">
                              {item.title}
                            </p>
                            <p className="text-[1.1rem] text-slate-500">{item.subtitle}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Startup Session Header */}
                  <div className="animate-fade-in-up delay-200">
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-[#0F172A]/80 border border-sky-500/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[1.8rem] md:text-[2rem] font-display font-bold text-white">
                            창업 세션
                          </h3>
                          <p className="text-[1.2rem] text-slate-500">아이디어에서 실행까지</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {startupSessions.map((item, i) => (
                          <div
                            key={item.title}
                            className="group p-3 rounded-lg bg-white/[0.02] hover:bg-sky-500/10 border border-transparent hover:border-sky-500/20 transition-all duration-300"
                          >
                            <p className="text-[1.3rem] font-semibold text-white group-hover:text-sky-400 transition-colors">
                              {item.title}
                            </p>
                            <p className="text-[1.1rem] text-slate-500">{item.subtitle}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestones Section */}
                <div className="animate-fade-in-up delay-300">
                  <div className="relative p-6 md:p-8 rounded-2xl bg-[#0F172A]/60 border border-white/5">
                    <h4 className="text-center text-[1.4rem] font-semibold text-slate-400 mb-6 tracking-wider">
                      SEMESTER MILESTONES
                    </h4>

                    {/* Milestone Flow */}
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                      {milestones.map((milestone, i) => (
                        <div key={`${milestone.title}-${i}`} className="flex items-center gap-3 md:gap-4">
                          <div
                            className={`px-4 py-2.5 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                              milestone.type === "collab"
                                ? "bg-primary/10 border-primary/30 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)]"
                                : milestone.type === "speaker"
                                ? "bg-sky-500/10 border-sky-500/30 hover:border-sky-500/50 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.4)]"
                                : "bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]"
                            }`}
                          >
                            <p className={`text-[1.2rem] md:text-[1.3rem] font-bold text-center ${
                              milestone.type === "collab"
                                ? "text-primary"
                                : milestone.type === "speaker"
                                ? "text-sky-400"
                                : "text-blue-400"
                            }`}>
                              {milestone.title}
                            </p>
                            <p className="text-[1rem] text-slate-500 text-center">
                              {milestone.subtitle}
                            </p>
                          </div>
                          {i < milestones.length - 1 && (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600 hidden md:block flex-shrink-0">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Demo Day - Final Destination */}
                <div className="animate-fade-in-up delay-400">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />

                    <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-r from-primary via-cyan-500 to-blue-500 border border-white/20 shadow-2xl">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                          <p className="text-[1.2rem] text-white/70 font-medium mb-1">최종 목표</p>
                          <h3 className="text-[2.4rem] md:text-[3rem] font-display font-bold text-white">
                            Demo Day 2026
                          </h3>
                          <p className="text-[1.4rem] text-white/80 mt-2">
                            한 학기의 결과물을 투자자와 파트너사 앞에서 발표
                          </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-2">
                          <p className="text-[3rem] md:text-[3.6rem] font-display font-bold text-white leading-none">
                            08.01
                          </p>
                          <p className="text-[1.2rem] text-white/70">2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="mt-12 text-center animate-fade-in-up delay-500">
              <p className="text-[1.4rem] text-slate-500 font-body">
                모든 세션은 <span className="text-white font-medium">실습 중심</span>으로 진행됩니다
              </p>
            </div>
          </div>
        </div>

        {/* ===== Session Tab ===== */}
        <div className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/activities-session-bg.png"
              alt=""
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px]" />
            <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[150px]" />
          </div>

          <div className="relative max-w-[1100px] mx-auto px-4 md:px-8 py-12 md:py-16">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[1.2rem] font-semibold text-slate-400 mb-6 tracking-wider">
                SESSION TYPES
              </span>
              <h2 className="text-[3rem] md:text-[3.6rem] font-display font-bold text-white mb-4">
                세션 구성
              </h2>
              <p className="text-[1.5rem] text-slate-400 font-body">
                <span className="text-primary">3가지 트랙</span>으로 구성된 체계적인 세션
              </p>
            </div>

            {/* Schedule Overview */}
            <div className="mb-12 animate-fade-in-up delay-100">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[1.3rem] font-bold text-white">매주 월요일</p>
                    <p className="text-[1.1rem] text-primary">19:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[1.3rem] font-bold text-white">매주 목요일</p>
                    <p className="text-[1.1rem] text-sky-400">20:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Cards - Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 기술 세션 - Large Card */}
              <div className="lg:row-span-2 animate-fade-in-up delay-150">
                <div className="h-full relative group rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-[#0F172A]/80 to-[#0F172A]/90 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]">
                  {/* Decorative corner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />

                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center shadow-lg shadow-primary/20">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[2rem] font-display font-bold text-white">기술 세션</h3>
                        <p className="text-[1.2rem] text-primary">AI Native 개발 역량</p>
                      </div>
                    </div>

                    {/* Topics Grid */}
                    <div className="space-y-3">
                      {[
                        { title: "바이브 코딩 기초", desc: "Cursor, Claude Code로 코딩 없이 앱 만들기", icon: "🎯" },
                        { title: "AI 크리에이티브", desc: "Midjourney, Suno로 이미지/음악 생성", icon: "🎨" },
                        { title: "나만의 자동화", desc: "반복 업무를 AI로 자동화하는 워크플로우", icon: "⚡" },
                        { title: "AI Agent 입문", desc: "나를 대신하는 AI 비서 만들기", icon: "🤖" },
                        { title: "프로덕트 빌딩", desc: "아이디어를 실제 서비스로 구현하기", icon: "🚀" },
                      ].map((item, i) => (
                        <div key={item.title} className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300">
                          <span className="text-[1.6rem] mt-0.5">{item.icon}</span>
                          <div>
                            <p className="text-[1.4rem] font-semibold text-white group-hover/item:text-primary transition-colors">{item.title}</p>
                            <p className="text-[1.2rem] text-slate-500">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-6">
                      <div>
                        <p className="text-[2rem] font-bold text-primary">70-80%</p>
                        <p className="text-[1.1rem] text-slate-500">실습 비중</p>
                      </div>
                      <div className="w-px h-10 bg-white/10" />
                      <div>
                        <p className="text-[2rem] font-bold text-cyan-400">50+</p>
                        <p className="text-[1.1rem] text-slate-500">빌드 목표</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 창업 세션 */}
              <div className="animate-fade-in-up delay-200">
                <div className="relative group rounded-2xl overflow-hidden border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-[#0F172A]/80 to-[#0F172A]/90 transition-all duration-500 hover:border-sky-500/40 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-500/20 to-transparent rounded-bl-full" />

                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[1.8rem] font-display font-bold text-white">창업 세션</h3>
                        <p className="text-[1.1rem] text-sky-400">아이디어에서 실행까지</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { title: "아이디어 검증", icon: "💡" },
                        { title: "린스타트업", icon: "🔄" },
                        { title: "피칭 실습", icon: "🎤" },
                        { title: "팀 빌딩", icon: "👥" },
                      ].map((item) => (
                        <div key={item.title} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-sky-500/10 border border-transparent hover:border-sky-500/20 transition-all duration-300">
                          <span className="text-[1.3rem]">{item.icon}</span>
                          <span className="text-[1.3rem] font-medium text-slate-300">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 연사 초청 */}
              <div className="animate-fade-in-up delay-250">
                <div className="relative group rounded-2xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-[#0F172A]/80 to-[#0F172A]/90 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full" />

                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[1.8rem] font-display font-bold text-white">연사 초청</h3>
                          <p className="text-[1.1rem] text-blue-400">업계 전문가 초청 강연</p>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full">
                        <span className="text-[1.2rem] font-bold text-blue-400">학기당 6회+</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "AI 전문가", color: "primary" },
                        { label: "스타트업 창업자", color: "sky" },
                        { label: "VC 투자자", color: "blue" },
                      ].map((item) => (
                        <span
                          key={item.label}
                          className={`px-4 py-2 rounded-lg text-[1.3rem] font-medium transition-all duration-300 ${
                            item.color === "primary"
                              ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                              : item.color === "sky"
                              ? "bg-sky-500/10 text-sky-400 border border-sky-500/20 hover:bg-sky-500/20"
                              : "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20"
                          }`}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center animate-fade-in-up delay-300">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0F172A]/60 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[1.4rem] text-slate-400 font-body">
                  모든 세션은 <span className="text-white font-medium">실습 중심</span>으로 진행됩니다
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Project Tab ===== */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/activities-project-bg.png"
              alt=""
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
          </div>

          <div className="relative max-w-[900px] mx-auto px-6 md:px-10 py-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[1.2rem] font-semibold text-slate-400 mb-6 tracking-wider">
                PROJECT PIPELINE
              </span>
              <h2 className="text-[3rem] md:text-[3.6rem] font-display font-bold text-white mb-4">
                Team Project
              </h2>
              <p className="text-[1.6rem] text-slate-400 max-w-[600px] mx-auto font-body">
                학기 중반부터 팀을 꾸려 실제 AI 프로덕트를 개발합니다.
                <br />
                7월 Final Sprint를 거쳐 8월 1일 Demo Day에서 발표합니다.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { phase: "팀 빌딩", desc: "관심 분야가 맞는 멤버끼리 팀 구성", icon: "01" },
                { phase: "프로토타입", desc: "실제 작동하는 MVP 개발", icon: "02" },
                { phase: "Final Sprint", desc: "2026년 7월 — 집중 개발 기간", icon: "03" },
                { phase: "Demo Day", desc: "2026년 8월 1일 — 최종 발표 및 시연", icon: "04" },
              ].map((item, i) => (
                <div
                  key={item.phase}
                  className={`animate-fade-in-up`}
                  style={{ animationDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="group flex gap-6 p-6 rounded-2xl bg-[#0F172A]/40 border border-white/5 transition-all duration-500 hover:border-primary/30 hover:bg-[#0F172A]/60">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary font-bold text-[1.4rem]">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-[1.8rem] font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {item.phase}
                      </h3>
                      <p className="text-[1.4rem] text-slate-400 font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Demoday Tab ===== */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/activities-demoday-bg.png"
              alt=""
              fill
              className="object-cover opacity-15"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-cyan-500/5 to-transparent rounded-full" />
          </div>

          <div className="relative max-w-[900px] mx-auto px-6 md:px-10 py-16">
            <div className="text-center animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[1.2rem] font-semibold text-primary mb-6 tracking-wider">
                DEMO DAY
              </span>
              <h2 className="text-[4rem] md:text-[5rem] font-display font-bold text-white mb-4">
                Demo Day
              </h2>
              <p className="stat-number text-[2.4rem] md:text-[3rem] font-bold text-primary mb-8">
                2026.08.01
              </p>
              <p className="text-[1.6rem] text-slate-400 max-w-[500px] mx-auto mb-12 font-body">
                한 학기의 결과물을 실제 유저, 파트너사, 투자자 앞에서 발표합니다.
              </p>

              <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up delay-200">
                {["서비스 시연", "유저 피드백", "파트너사 평가", "투자 연결", "네트워킹"].map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2.5 bg-[#0F172A]/60 border border-primary/20 rounded-full text-[1.4rem] font-semibold text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TabNav>
    </div>
  );
}
