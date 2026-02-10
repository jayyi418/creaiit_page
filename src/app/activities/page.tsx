"use client";

import TabNav from "@/components/TabNav";

const curriculumData = [
  { week: "Week 1", date: "2026.03.09", topic: "OT + 바이브코딩 기초 + Github 교육", type: "session" },
  { week: "Week 2", date: "2026.03.12", topic: "API + Tool Calling", type: "session" },
  { week: "Week 3", date: "2026.03.16", topic: "AI Agent 세션 1", type: "session" },
  { week: "Week 4", date: "2026.03.19", topic: "AI Agent 세션 2", type: "session" },
  { week: "산학협력", date: "2026.03.23 ~ 04.13", topic: "KB손해보험 × CREAI+IT — Creative Agent 빌드 프로젝트", type: "collab" },
  { week: "연사초청", date: "2026.05.04", topic: "AI 전문가 초청 강연", type: "speaker" },
  { week: "연사초청", date: "2026.05.18", topic: "스타트업 창업자 초청 강연", type: "speaker" },
  { week: "연사초청", date: "2026.06.01", topic: "VC 투자자 초청 강연", type: "speaker" },
  { week: "스프린트", date: "2026.07", topic: "Team Project Final Sprint", type: "sprint" },
  { week: "Demo Day", date: "2026.08.01", topic: "최종 발표 및 시연", type: "demo" },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="h-[72px]" />

      <TabNav tabs={["Curriculum", "Session", "Project", "Demoday"]}>
        {/* ===== Curriculum Tab ===== */}
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          {/* Headline */}
          <div className="text-center mb-12">
            <p className="text-[1.6rem] text-white/40 mb-2">
              AI를 배우는 것에서 멈추지 않습니다
            </p>
            <p className="text-[2.2rem] md:text-[2.6rem] font-extrabold text-white">
              한 학기 동안 아이디어를 실제 AI 프로덕트로 만들어냅니다.
            </p>
          </div>

          {/* Curriculum timeline */}
          <div className="bg-[#111118] rounded-2xl p-8 md:p-12 border border-white/8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="text-[2.2rem] font-extrabold text-white"
                style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
              >
                CRE<span className="text-[#2563eb]">AI</span>+IT
              </span>
              <span className="text-[1.4rem] text-white/60">
                2026-1 Curriculum
              </span>
            </div>

            {/* Timeline rows */}
            <div className="space-y-0">
              {curriculumData.map((item, i) => {
                const typeStyles: Record<string, string> = {
                  session: "border-l-[#2563eb]",
                  collab: "border-l-[#f59e0b]",
                  speaker: "border-l-[#10b981]",
                  sprint: "border-l-[#8b5cf6]",
                  demo: "border-l-[#ef4444]",
                };
                const typeBg: Record<string, string> = {
                  session: "",
                  collab: "bg-[#f59e0b]/5",
                  speaker: "bg-[#10b981]/5",
                  sprint: "bg-[#8b5cf6]/5",
                  demo: "bg-gradient-to-r from-[#2563eb]/10 to-transparent",
                };

                return (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 px-5 py-4 border-l-4 ${typeStyles[item.type]} ${typeBg[item.type]} ${
                      i < curriculumData.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <span className="text-[1.3rem] font-bold text-[#2563eb] w-[100px] flex-shrink-0">
                      {item.week}
                    </span>
                    <span className="text-[1.2rem] text-white/40 w-[180px] flex-shrink-0">
                      {item.date}
                    </span>
                    <span className="text-[1.4rem] text-white/80 font-medium">
                      {item.topic}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== Session Tab ===== */}
        <div className="max-w-[1000px] mx-auto px-8 py-16">
          <div className="space-y-8">
            {/* 기술 세션 */}
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <div className="bg-[#2563eb] text-white px-8 py-5">
                <h3 className="text-[1.8rem] font-bold">기술 세션</h3>
              </div>
              <div className="p-8 space-y-3 bg-[#111118]">
                {[
                  "바이브코딩 기초",
                  "Github 협업",
                  "API 연동",
                  "Tool Calling",
                  "AI Agent 구현",
                ].map((topic) => (
                  <div key={topic} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />
                    <span className="text-[1.5rem] text-white/70">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 창업 세션 */}
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <div className="bg-[#1d4ed8] text-white px-8 py-5">
                <h3 className="text-[1.8rem] font-bold">창업 세션</h3>
              </div>
              <div className="p-8 space-y-3 bg-[#111118]">
                {[
                  "아이디어 검증",
                  "린스타트업 방법론",
                  "피칭 실습",
                  "팀 빌딩",
                ].map((topic) => (
                  <div key={topic} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1d4ed8] flex-shrink-0" />
                    <span className="text-[1.5rem] text-white/70">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 연사 초청 */}
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <div className="bg-[#10b981] text-white px-8 py-5">
                <h3 className="text-[1.8rem] font-bold">연사 초청</h3>
              </div>
              <div className="p-8 space-y-3 bg-[#111118]">
                {[
                  "AI 전문가 초청 강연",
                  "스타트업 창업자 초청 강연",
                  "VC 투자자 초청 강연",
                ].map((topic) => (
                  <div key={topic} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0" />
                    <span className="text-[1.5rem] text-white/70">{topic}</span>
                  </div>
                ))}
                <p className="text-[1.3rem] text-white/40 mt-2 ml-5">
                  학기당 3회 진행
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Project Tab ===== */}
        <div className="max-w-[1000px] mx-auto px-8 py-16">
          <div className="space-y-6">
            <h2 className="text-[2.4rem] font-extrabold text-white mb-4">
              Team Project
            </h2>
            <p className="text-[1.6rem] text-white/50 leading-relaxed mb-8">
              학기 중반부터 팀을 꾸려 실제 AI 프로덕트를 개발합니다.
              <br />
              7월 Final Sprint를 거쳐 8월 1일 Demo Day에서 발표합니다.
            </p>

            <div className="space-y-4">
              {[
                {
                  phase: "팀 빌딩",
                  desc: "관심 분야가 맞는 멤버끼리 팀 구성",
                },
                {
                  phase: "프로토타입",
                  desc: "실제 작동하는 MVP 개발",
                },
                {
                  phase: "Final Sprint",
                  desc: "2026년 7월 — 집중 개발 기간",
                },
                {
                  phase: "Demo Day",
                  desc: "2026년 8월 1일 — 최종 발표 및 시연",
                },
              ].map((item, i) => (
                <div
                  key={item.phase}
                  className="flex gap-6 items-start border-b border-white/5 pb-6"
                >
                  <span className="text-[1.2rem] font-bold text-[#2563eb] tracking-wider w-[30px] flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[1.6rem] font-bold text-white">
                      {item.phase}
                    </p>
                    <p className="text-[1.4rem] text-white/50 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Demoday Tab ===== */}
        <div className="max-w-[1000px] mx-auto px-8 py-16">
          <h2 className="text-[2.4rem] font-extrabold text-white mb-3">
            Demo Day
          </h2>
          <p className="text-[1.8rem] text-[#2563eb] font-bold mb-6">
            2026.08.01
          </p>
          <p className="text-[1.6rem] text-white/60 leading-relaxed mb-8">
            한 학기의 결과물을 실제 유저, 파트너사, 투자자 앞에서 발표합니다.
          </p>
          <div className="flex flex-wrap gap-3">
            {["서비스 시연", "유저 피드백", "파트너사 평가", "투자 연결", "네트워킹"].map(
              (item) => (
                <span
                  key={item}
                  className="px-5 py-2 border border-[#2563eb]/30 rounded-full text-[1.3rem] font-semibold text-[#2563eb]"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </TabNav>
    </div>
  );
}
