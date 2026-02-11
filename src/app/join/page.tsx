"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function JoinPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const colors = [
      "rgba(14, 165, 233, 0.4)",
      "rgba(56, 189, 248, 0.3)",
      "rgba(244, 114, 182, 0.2)",
    ];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden">
      {/* Animated canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />

      {/* Background effects */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-6 md:px-10">
        <div className="h-[80px]" />

        <div className="flex-1 flex flex-col items-center justify-center py-12 max-w-[600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[1.2rem] font-semibold text-primary mb-6 tracking-wider">
              5기 모집
            </span>
            <h1 className="text-[4rem] md:text-[6rem] font-display font-bold text-white mb-4">
              JOIN
            </h1>
            <p className="text-[1.6rem] text-slate-400 font-body">
              CREAI+IT과 함께{" "}
              <span className="text-white font-medium">AI 창업의 최전선</span>에 서세요.
            </p>
          </div>

          {/* Important Message for Non-Developers */}
          <div className="w-full mb-8 animate-fade-in-up delay-100">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-sky-500/5 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[1.5rem] text-white font-semibold mb-2">
                    &ldquo;나는 개발자가 아니니까 AI 활용은 안 배워도 되겠지?&rdquo;
                  </p>
                  <p className="text-[1.35rem] text-slate-400 leading-relaxed">
                    <span className="text-primary font-semibold">가장 위험한 생각입니다.</span>{" "}
                    AI 시대에 <span className="text-white">모든 직군</span>이 AI를 활용합니다.
                    마케터도, 디자이너도, 기획자도, 경영학과도.{" "}
                    <span className="text-white">AI를 탁월하게 쓰는 사람</span>이 앞서 나갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="w-full mb-10 animate-fade-in-up delay-150">
            <div className="p-6 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-white/5">
              <h3 className="text-[1.3rem] text-slate-500 font-semibold tracking-wider mb-4">
                지원 자격
              </h3>
              <div className="space-y-3">
                {[
                  "연세대학교 재학생 (전공 무관)",
                  "AI/창업에 관심 있는 누구나",
                  "개발 경험 불필요 — 실행 의지가 전부입니다",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <p className="text-[1.5rem] text-slate-300 font-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application steps */}
          <div className="w-full mb-10 animate-fade-in-up delay-200">
            <h3 className="text-[1.3rem] text-slate-500 font-semibold tracking-wider mb-4 text-center">
              지원 방법
            </h3>
            <div className="space-y-3">
              {[
                { step: "01", label: "지원서 다운로드", highlight: true },
                { step: "02", label: "서류 작성 후 제출", highlight: false },
                { step: "03", label: "1차 서류 발표", highlight: false },
                { step: "04", label: "면접", highlight: false },
                { step: "05", label: "최종 합격 발표", highlight: false },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl border transition-all duration-300 ${
                    item.highlight
                      ? "border-primary/40 bg-primary/10 shadow-glow-sm"
                      : "border-white/5 bg-[#0F172A]/40 hover:border-white/10"
                  }`}
                >
                  <span
                    className={`text-[1.2rem] font-bold ${
                      item.highlight ? "text-primary" : "text-slate-600"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span
                    className={`text-[1.4rem] font-medium ${
                      item.highlight ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.highlight && (
                    <span className="ml-auto flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span className="text-[1.1rem] text-emerald-400 font-semibold">
                        NOW
                      </span>
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-[1.2rem] text-slate-600 mt-4 text-center font-body">
              * 구체적 일정은 추후 업데이트 예정
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300">
            <a
              href="#"
              className="btn-primary no-underline w-full sm:w-auto justify-center"
            >
              <span>지원서 다운로드</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="relative z-10"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <a
              href="#"
              className="btn-secondary no-underline w-full sm:w-auto justify-center"
            >
              <span>지원하기</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Closing message */}
          <p className="text-[1.6rem] text-slate-500 text-center font-body animate-fade-in-up delay-400">
            변화를 행동으로 옮길 준비가 된{" "}
            <span className="text-white font-medium">당신을 기다립니다.</span>
          </p>
        </div>

        {/* Bottom decorative element */}
        <div className="pb-12 animate-fade-in delay-500">
          <div className="relative">
            {/* AI-generated team collaboration image */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] h-[200px] opacity-15 pointer-events-none">
              <Image
                src="/images/join-team-collab.png"
                alt=""
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent rounded-2xl" />
            </div>

            {/* Outer ring */}
            <div className="w-[180px] h-[180px] rounded-full border border-primary/20 flex items-center justify-center">
              {/* Middle ring */}
              <div className="w-[130px] h-[130px] rounded-full border border-primary/10 flex items-center justify-center animate-float">
                {/* Inner circle */}
                <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="font-display text-[2rem] font-bold text-gradient">
                    AI
                  </span>
                </div>
              </div>
            </div>

            {/* Orbiting dots */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary animate-ping" style={{ transform: "translate(-50%, -50%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
