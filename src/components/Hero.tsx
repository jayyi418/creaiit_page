"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0A0A0F] overflow-hidden flex items-center justify-center">
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#2563eb]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#1d4ed8]/10 rounded-full blur-[120px]" />
      </div>

      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `pulse 3s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mount">
        {/* Sub text */}
        <p
          className="text-[1.6rem] md:text-[2rem] text-white/60 tracking-[0.3em] mb-8"
          style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
        >
          연세대학교 AI 창업 학회
        </p>

        {/* Main headline */}
        <h1 className="mb-6">
          <span
            className="block text-[4.5rem] md:text-[7rem] font-extrabold text-white leading-tight tracking-tight"
            style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
          >
            We Build What&apos;s Next.
          </span>
        </h1>

        {/* Body text */}
        <p className="text-[1.6rem] md:text-[1.8rem] text-white/50 mb-8 max-w-[600px] mx-auto leading-relaxed">
          AI 기술의 최전선에서 직접 만들고, 실행하고, 증명합니다.
        </p>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 border border-[#2563eb]/40 rounded-full">
          <span className="w-[6px] h-[6px] rounded-full bg-[#2563eb] animate-pulse" />
          <span className="text-[1.3rem] font-semibold text-[#2563eb]">
            5기 모집 중
          </span>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="/join"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563eb] text-white text-[1.5rem] font-bold rounded-full no-underline hover:bg-[#3b82f6] transition-all duration-300 shadow-lg shadow-[#2563eb]/20"
          >
            지원하기
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
