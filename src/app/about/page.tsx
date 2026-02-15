"use client";

import TabNav from "@/components/TabNav";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <div className="h-[80px]" /> {/* Navbar spacer */}

      <TabNav tabs={["Greeting", "Philosophy", "History"]}>
        {/* ===== Greeting Tab ===== */}
        <div className="relative min-h-[80vh]">
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* AI-generated Seoul skyline background */}
            <Image
              src="/images/about-seoul-skyline.png"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/30 via-[#030712]/50 to-[#030712]" />
            <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
            <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px]" />
          </div>

          {/* Large decorative quote mark */}
          <div className="absolute top-16 right-[10%] text-[28rem] font-display font-bold text-white/[0.015] leading-none select-none pointer-events-none hidden lg:block animate-fade-in">
            &ldquo;
          </div>

          <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-24">
            {/* Top label */}
            <div className="animate-fade-in-up mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[1.1rem] font-medium text-slate-500 tracking-[0.2em] uppercase">
                Welcome
              </span>
            </div>

            {/* Main content - asymmetric grid */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
              {/* Left column - headline */}
              <div className="animate-fade-in-up delay-100">
                <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-display font-bold text-white leading-[1.1] tracking-tight mb-8">
                  안녕하세요,
                  <br />
                  <span className="font-display">
                    CRE<span className="text-gradient">AI</span>+IT
                  </span>
                  <br />
                  입니다.
                </h2>

                {/* Visual accent line */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-primary/0" />
                  <span className="text-[1.2rem] text-slate-600 font-medium tracking-wider">연세대학교 AI 창업 학회</span>
                </div>
              </div>

              {/* Right column - message */}
              <div className="space-y-8">
                {/* Context - AI Era with Stats */}
                <div className="animate-fade-in-up delay-200">
                  <p className="text-[1.6rem] md:text-[1.8rem] text-slate-400 leading-[1.8] font-body">
                    AI를 잘 활용하는 산업은{" "}
                    <span className="text-primary font-semibold">생산성이 4배 빠르게</span> 성장하고,
                    <br />
                    AI 역량을 갖춘 인재는{" "}
                    <span className="text-primary font-semibold">2배 빠른 임금 상승</span>을 경험합니다.
                  </p>
                </div>

                {/* Core message card */}
                <div className="animate-fade-in-up delay-250">
                  <div className="relative p-8 rounded-2xl bg-[#0F172A]/40 backdrop-blur-sm border border-white/5">
                    {/* Subtle corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                      <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                      <div className="absolute top-0 right-0 w-12 h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
                    </div>

                    <div className="space-y-5">
                      <p className="text-[1.6rem] md:text-[1.8rem] text-slate-300 leading-[1.8] font-body">
                        그러나 <span className="text-white font-semibold">94%의 기업</span>이 AI 인재 부족을 겪고 있고,
                        <br />
                        2026년까지 <span className="text-primary font-semibold">$5.5조</span>의 경제적 손실이 예측됩니다.
                      </p>
                      <p className="text-[1.5rem] text-slate-500 leading-[1.8] font-body">
                        AI를 &lsquo;적당히&rsquo; 쓰는 사람은 많지만,{" "}
                        <span className="text-white">&lsquo;탁월하게&rsquo; 활용하는 인재</span>는 극히 드뭅니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Our mission */}
                <div className="animate-fade-in-up delay-300">
                  <p className="text-[1.5rem] text-slate-400 leading-[1.8] font-body">
                    CREAI+IT는 이 <span className="text-sky-400 font-medium">AI Native 인재 격차</span>를 메우고,
                    <br />
                    그 역량을 <span className="text-white font-medium">창업</span>으로 증명하며 <span className="text-white font-medium">잠재력을 극대화</span>하는 곳입니다.
                  </p>
                </div>

                {/* Value prop */}
                <div className="animate-fade-in-up delay-350">
                  <p className="text-[1.8rem] md:text-[2rem] text-white font-medium leading-[1.6]">
                    남들보다 <span className="text-gradient">앞서 나갈</span> 준비가 된
                    <br />
                    당신을 기다립니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom signature section */}
            <div className="mt-24 pt-12 border-t border-white/5 animate-fade-in-up delay-400">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                {/* Tagline */}
                <div>
                  <p className="text-[2.4rem] md:text-[3rem] font-display font-bold tracking-tight mb-2">
                    <span className="text-white">WE BUILD </span>
                    <span className="text-gradient">WHAT&apos;S NEXT.</span>
                  </p>
                </div>

                {/* Signature */}
                <div className="text-right">
                  <p className="text-[1.3rem] text-slate-500 font-body mb-1">
                    2026년 2월
                  </p>
                  <p className="text-[1.5rem] font-semibold text-slate-400">
                    CREAI+IT 5기 임원진 드림
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Philosophy Tab ===== */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/about-philosophy-bg.png"
              alt=""
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
          </div>

          <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 py-20">
            {/* Core Philosophy Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[1.2rem] font-semibold text-primary mb-6 tracking-wider">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-[2.4rem] md:text-[3.4rem] lg:text-[4rem] font-display font-bold leading-[1.2] mb-6">
                <span className="text-white">&ldquo;</span>
                <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                  AI Native는 타고나는 게 아니라
                </span>
                <br />
                <span className="text-gradient">훈련의 결과물</span>
                <span className="text-white">이다&rdquo;</span>
              </h2>
              <p className="text-[1.6rem] text-slate-400 max-w-[700px] mx-auto font-body leading-relaxed">
                AI가 있다는 건 안다. 그런데 뭘 어떻게 해야 하는지 모른다.
                <br />
                <span className="text-white font-medium">CREAI+IT는 이 간극을 메운다.</span>
              </p>
            </div>

            {/* Our Method Section */}
            <div className="mb-16 animate-fade-in-up delay-100">
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#0F172A]/80 to-[#0F172A]/40 backdrop-blur-sm border border-primary/20 shadow-glow-sm">
                <h3 className="text-[1.8rem] md:text-[2rem] font-display font-bold text-white mb-8 text-center">
                  우리의 방식
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    </div>
                    <p className="text-[2rem] md:text-[2.4rem] font-bold text-primary mb-1">20-30%</p>
                    <p className="text-[1.3rem] text-slate-400 font-body">인풋</p>
                    <p className="text-[2rem] md:text-[2.4rem] font-bold text-cyan-400 mt-2 mb-1">70-80%</p>
                    <p className="text-[1.3rem] text-slate-400 font-body">실습</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/20 border border-sky-400/30 flex items-center justify-center mx-auto mb-3">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <p className="text-[2rem] md:text-[2.4rem] font-bold text-sky-400 mb-1">50+</p>
                    <p className="text-[1.3rem] text-slate-400 font-body">빌드 경험</p>
                    <p className="text-[1.2rem] text-slate-500 mt-2">학기당 목표</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 border border-blue-400/30 flex items-center justify-center mx-auto mb-3">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <p className="text-[1.6rem] font-bold text-white mb-1">반복 훈련</p>
                    <p className="text-[1.3rem] text-slate-400 font-body">AI Native로</p>
                    <p className="text-[1.3rem] text-slate-400 font-body">성장하는 방법</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-400/20 to-slate-500/20 border border-slate-400/30 flex items-center justify-center mx-auto mb-3">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <p className="text-[1.6rem] font-bold text-white mb-1">매주 월/목</p>
                    <p className="text-[1.3rem] text-slate-400 font-body">정기 세션</p>
                    <p className="text-[1.2rem] text-slate-500 mt-2">19:00-22:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Flow Header */}
            <div className="text-center mb-12 animate-fade-in-up delay-150">
              <h3 className="text-[2.4rem] md:text-[3rem] font-display font-bold text-white">
                <span className="text-primary">Edge</span>
                <span className="text-slate-500 mx-4">→</span>
                <span className="text-sky-400">Execute</span>
                <span className="text-slate-500 mx-4">→</span>
                <span className="text-blue-400">Impact</span>
              </h3>
            </div>

            <div className="space-y-8">
              {/* 01 EDGE */}
              <div className="group animate-fade-in-up delay-200">
                <div className="p-8 md:p-10 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-primary/30 hover:shadow-glow-sm">
                  <div className="flex items-start gap-6">
                    <span className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-[1.4rem]">
                      01
                    </span>
                    <div>
                      <h3 className="text-[2rem] md:text-[2.4rem] font-display font-bold text-white mb-4">
                        EDGE <span className="text-slate-500 font-normal">— 최전선에 선다</span>
                      </h3>
                      <p className="text-[1.5rem] text-slate-400 leading-[1.9] font-body mb-4">
                        가장 최신의 기술, 가장 빠른 트렌드, 가장 날카로운 시각.
                        <br />
                        <span className="text-primary font-semibold">릴리즈 당일 세미나를 연다.</span> 새로운 모델이 공개된 그 주에 직접 써봅니다.
                        <br />
                        <span className="text-white">
                          남들이 뉴스를 읽을 때, 우리는 이미 빌드하고 있습니다.
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[1.2rem] text-primary">가장 트렌디한 AI 학회</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[1.2rem] text-slate-400">이론과 실전 모두</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 02 EXECUTE */}
              <div className="group animate-fade-in-up delay-300">
                <div className="p-8 md:p-10 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-sky-400/30 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]">
                  <div className="flex items-start gap-6">
                    <span className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white font-bold text-[1.4rem]">
                      02
                    </span>
                    <div>
                      <h3 className="text-[2rem] md:text-[2.4rem] font-display font-bold text-white mb-4">
                        EXECUTE <span className="text-slate-500 font-normal">— 실행으로 증명한다</span>
                      </h3>
                      <p className="text-[1.5rem] text-slate-400 leading-[1.9] font-body mb-4">
                        아이디어를 슬라이드에 가두지 않습니다.
                        <br />
                        <span className="text-sky-400 font-semibold">한 학기 내 프로토타입을 만든다.</span> 팀을 꾸리고, MVP를 개발하고,
                        <br />
                        <span className="text-white">
                          실제 유저에게 테스트합니다.
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-sky-400/10 border border-sky-400/20 rounded-full text-[1.2rem] text-sky-400">아이디어 → 실행 → 검증</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[1.2rem] text-slate-400">실제 유저 테스트</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 03 IMPACT */}
              <div className="group animate-fade-in-up delay-400">
                <div className="p-8 md:p-10 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-blue-400/30 hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.3)]">
                  <div className="flex items-start gap-6">
                    <span className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-[1.4rem]">
                      03
                    </span>
                    <div>
                      <h3 className="text-[2rem] md:text-[2.4rem] font-display font-bold text-white mb-4">
                        IMPACT <span className="text-slate-500 font-normal">— 실질적 결과를 만든다</span>
                      </h3>
                      <p className="text-[1.5rem] text-slate-400 leading-[1.9] font-body mb-4">
                        학회 활동이 아니라 실전의 결과를 추구합니다.
                        <br />
                        <span className="text-blue-400 font-semibold">10개 스타트업 활동 중. 국내 모 보험사 산학협력.</span>
                        <br />
                        <span className="text-white">
                          Demo Day 발표 및 투자 연결. 만들고, 부딪히고, 증명한 기록들.
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-full text-[1.2rem] text-blue-400">10개 스타트업</span>
                        <span className="px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-full text-[1.2rem] text-blue-400">산학협력</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[1.2rem] text-slate-400">Demo Day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== History Tab ===== */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/about-history-bg.png"
              alt=""
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 py-20">
            <Timeline />
          </div>
        </div>
      </TabNav>
    </div>
  );
}
