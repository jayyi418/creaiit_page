"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
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
      opacity: number;
      color: string;
    }> = [];

    const colors = [
      "rgba(14, 165, 233, 0.6)",
      "rgba(56, 189, 248, 0.4)",
      "rgba(244, 114, 182, 0.3)",
      "rgba(251, 146, 60, 0.2)",
    ];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
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

      // Draw connections
      ctx.strokeStyle = "rgba(14, 165, 233, 0.05)";
      ctx.lineWidth = 0.5;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
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
    <section className="relative w-full min-h-screen bg-[#030712] overflow-hidden flex items-center justify-center">
      {/* AI-generated cityscape background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cityscape.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712]" />
      </div>

      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 z-[2]">
        {/* Primary glow - top center */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[180px] animate-pulse-glow" />

        {/* Accent glow - bottom left */}
        <div
          className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px]"
          style={{ animationDelay: "1s" }}
        />

        {/* Secondary glow - right */}
        <div className="absolute top-1/3 right-[5%] w-[400px] h-[400px] bg-primary-dark/15 rounded-full blur-[120px]" />

        {/* Warm accent - bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        {/* Floating ring - top right */}
        <div className="absolute top-[15%] right-[15%] w-[200px] h-[200px] rounded-full border border-primary/10 animate-float" />
        <div
          className="absolute top-[15%] right-[15%] w-[200px] h-[200px] rounded-full border border-accent/5 animate-float"
          style={{ animationDelay: "0.5s", transform: "scale(1.3)" }}
        />

        {/* Floating ring - bottom left */}
        <div
          className="absolute bottom-[20%] left-[10%] w-[150px] h-[150px] rounded-full border border-primary/10 animate-float"
          style={{ animationDelay: "1s" }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1000px] mx-auto">
        {/* Overline */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[1.3rem] font-medium text-slate-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            연세대학교 AI 창업 학회
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-in-up delay-100">
          <span className="block text-[4.5rem] md:text-[7rem] lg:text-[9rem] font-display font-bold text-white leading-[0.95] tracking-tight">
            We Build
          </span>
          <span className="block text-[4.5rem] md:text-[7rem] lg:text-[9rem] font-display font-bold leading-[0.95] tracking-tight">
            <span className="text-gradient">What&apos;s Next</span>
            <span className="text-white">.</span>
          </span>
        </h1>

        {/* Korean sub-headline */}
        <div className="animate-fade-in-up delay-150 mt-8">
          <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] font-medium tracking-tight">
            <span className="bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent">
              AI를 활용해 일하는 방법을 배우고,
            </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent">
              {" "}폭발적 생산성으로 실행한다
            </span>
          </p>
        </div>

        {/* Body text */}
        <p className="text-[1.6rem] md:text-[2rem] text-slate-400 mt-6 mb-10 max-w-[600px] mx-auto leading-relaxed font-body animate-fade-in-up delay-200">
          AI 기술의 최전선에서
          <br className="md:hidden" />
          <span className="text-slate-300 font-medium">
            {" "}
            직접 만들고, 실행하고, 증명
          </span>
          합니다.
        </p>

        {/* Badge */}
        <div className="animate-fade-in-up delay-300 mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/30 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-[1.4rem] font-semibold text-white">
              5기 모집 중
            </span>
            <span className="text-[1.2rem] text-slate-400">2026.02 ~</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a href="/join" className="btn-primary group no-underline">
            <span>지원하기</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/about"
            className="btn-secondary no-underline group"
          >
            <span>더 알아보기</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-y-1"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-700">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-[1.1rem] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
