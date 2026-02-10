"use client";

const stats = [
  { number: "7", label: "창업팀" },
  { number: "33", label: "누적 멤버" },
  { number: "4", label: "기수" },
  { number: "3", label: "연사 초청" },
];

export default function VisionSection() {
  return (
    <section className="bg-[#0A0A0F] py-28 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8">
        {/* Section title */}
        <h2
          className="text-[2.4rem] md:text-[3rem] font-extrabold text-white mb-16 text-center"
          style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
        >
          숫자로 보는 CRE<span className="text-[#2563eb]">AI</span>+IT
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-xl border border-white/8 bg-[#111118]"
            >
              <p
                className="text-[5rem] md:text-[6rem] font-extrabold text-[#2563eb] leading-none mb-3"
                style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
              >
                {stat.number}
              </p>
              <p className="text-[1.4rem] text-white/50 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
