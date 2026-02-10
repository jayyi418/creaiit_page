"use client";

const startups = [
  {
    name: "RootEdu",
    tag: "EdTech",
    desc: "SKY 학생들이 만드는 학습-진로 인사이트 플랫폼",
    color: "from-blue-600/80 to-blue-900/80",
  },
  {
    name: "AiNOS",
    tag: "AI Infra",
    desc: "AI Agent 솔루션",
    color: "from-indigo-600/80 to-indigo-900/80",
  },
  {
    name: "Parentlyze",
    tag: "AI · Parenting",
    desc: "AI 기반 맞춤형 육아 솔루션",
    color: "from-purple-600/80 to-purple-900/80",
  },
  {
    name: "Resio",
    tag: "Green Tech",
    desc: "친환경 바이오매스 소재 칫솔",
    color: "from-emerald-600/80 to-emerald-900/80",
  },
  {
    name: "Potentivo Lab",
    tag: "AI · Analytics",
    desc: "AI 기반 대화 분석 솔루션",
    color: "from-sky-600/80 to-sky-900/80",
  },
  {
    name: "Luminary",
    tag: "AI · Creator Economy",
    desc: "인플루언서 사업 매칭 자동화",
    color: "from-amber-600/80 to-amber-900/80",
  },
  {
    name: "Undrew",
    tag: "AI · Community",
    desc: "AI 기반 창업 커뮤니티",
    color: "from-rose-600/80 to-rose-900/80",
  },
];

export default function StartupsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="h-[72px]" /> {/* Navbar spacer */}

      <div className="max-w-[1200px] mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-[3.6rem] md:text-[4.5rem] font-extrabold text-white mb-4"
            style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
          >
            Startups
          </h1>
          <p className="text-[1.8rem] text-[#2563eb] font-semibold mb-4">
            CREAI+IT에서 시작된 팀들
          </p>
          <p className="text-[1.5rem] text-white/50 max-w-[500px] mx-auto leading-relaxed">
            아이디어에서 실제 서비스까지.
            <br />
            CREAI+IT 멤버들이 만들어가고 있는 창업팀입니다.
          </p>
        </div>

        {/* Startup cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <div
              key={startup.name}
              className="group relative rounded-xl overflow-hidden border border-white/8 bg-[#111118] hover:border-[#2563eb]/30 transition-all duration-300"
            >
              {/* Gradient header */}
              <div
                className={`h-[120px] bg-gradient-to-br ${startup.color} flex items-center justify-center relative`}
              >
                <span
                  className="text-[2.4rem] font-extrabold text-white/90"
                  style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
                >
                  {startup.name}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-full text-[1.1rem] font-semibold text-[#2563eb] mb-3">
                  {startup.tag}
                </span>
                <p className="text-[1.4rem] text-white/60 leading-relaxed">
                  {startup.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
