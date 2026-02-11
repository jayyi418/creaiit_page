"use client";

import Image from "next/image";
import TabNav from "@/components/TabNav";

const generations: Record<string, { members: string[]; year: string }> = {
  "5기": { members: [], year: "2026" },
  "4기": {
    members: [
      "김우열", "박정현", "손찬영", "이강우", "이승준",
      "이지원", "이지현", "전미강", "한경민", "황성윤",
    ],
    year: "2025",
  },
  "3기": {
    members: ["이재현", "조가을", "박상욱", "서수연", "염서경", "윤태두"],
    year: "2024",
  },
  "2기": {
    members: [
      "박규연", "김영운", "김호수", "천예진", "김한울",
      "하재현", "박근립", "강동훈", "한예지", "고영권",
    ],
    year: "2024",
  },
  "1기": {
    members: ["강지민", "고정훈", "최사랑", "한진규", "윤지성", "안상현", "황보명철"],
    year: "2024",
  },
};

const colors = [
  "from-primary to-primary-dark",
  "from-accent to-accent-dark",
  "from-emerald-400 to-emerald-600",
  "from-amber-400 to-amber-600",
  "from-violet-400 to-violet-600",
];

export default function PeoplePage() {
  const tabs = Object.keys(generations);

  return (
    <div className="min-h-screen bg-[#030712]">
      <div className="h-[80px]" />

      <TabNav tabs={tabs}>
        {tabs.map((gen, genIndex) => {
          const { members, year } = generations[gen];
          const gradientClass = colors[genIndex % colors.length];

          if (members.length === 0) {
            // Coming Soon tab
            return (
              <div key={gen} className="relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/people-community-bg.png"
                    alt=""
                    fill
                    className="object-cover opacity-10"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
                </div>

                <div className="relative max-w-[1000px] mx-auto px-6 md:px-10 py-20">
                  <div className="text-center py-20 animate-fade-in-up">
                    <span className={`inline-block px-6 py-2 bg-gradient-to-r ${gradientClass} rounded-full text-[1.4rem] font-bold text-white mb-8`}>
                      {gen}
                    </span>
                    <h2 className="text-[4rem] md:text-[5rem] font-display font-bold text-white mb-4">
                      Coming Soon
                    </h2>
                    <p className="text-[1.6rem] text-slate-500 font-body">
                      모집이 완료되면 업데이트됩니다.
                    </p>

                    {/* Decorative element */}
                    <div className="mt-16 flex justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[2.4rem] font-display font-bold text-primary">
                            {year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={gen} className="relative">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src="/images/people-community-bg.png"
                  alt=""
                  fill
                  className="object-cover opacity-10"
                />
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
              </div>

              <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 py-16">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                  <span className={`inline-block px-6 py-2 bg-gradient-to-r ${gradientClass} rounded-full text-[1.4rem] font-bold text-white mb-6`}>
                    {gen}
                  </span>
                  <p className="text-[1.4rem] text-slate-500 font-body">
                    {year} · {members.length}명
                  </p>
                </div>

                {/* Members grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {members.map((name, i) => (
                    <div
                      key={name}
                      className="animate-fade-in-up group"
                      style={{ animationDelay: `${i * 50 + 100}ms` }}
                    >
                      <div className="text-center p-6 rounded-2xl bg-[#0F172A]/40 border border-white/5 transition-all duration-500 hover:border-primary/30 hover:bg-[#0F172A]/60 group-hover:shadow-glow-sm">
                        {/* Avatar */}
                        <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradientClass} p-[2px]`}>
                          <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                            <svg
                              viewBox="0 0 24 24"
                              className="w-8 h-8 text-slate-600 group-hover:text-primary transition-colors"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                          </div>
                        </div>

                        {/* Name */}
                        <p className="text-[1.5rem] font-semibold text-slate-300 group-hover:text-white transition-colors">
                          {name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </TabNav>
    </div>
  );
}
