"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
}

interface TimelineItem {
  year: string;
  title: string;
  events: TimelineEvent[];
  highlight?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    year: "2026",
    title: "새로운 도약",
    events: [
      { date: "2/14-3/5", title: "5기 모집", description: "새로운 멤버 모집 시작" },
      { date: "3월", title: "AI Agent 커리큘럼 강화", description: "프로덕션 레벨 Agent 구축 과정" },
      { date: "3/23-4/9", title: "산학협력 프로젝트", description: "기업 협력 프로젝트 수행" },
      { date: "5-6월", title: "연사 초청 세미나 x3", description: "AI 전문가, 창업자, VC" },
      { date: "7월", title: "Final Sprint", description: "집중 개발 기간" },
      { date: "8/1", title: "Demo Day 2026", badge: "highlight", badgeColor: "bg-primary" },
    ],
    highlight: true,
  },
  {
    year: "2025",
    title: "성장과 확장",
    events: [
      { date: "3월", title: "4기 활동 시작", description: "10명 합류" },
      { date: "5월", title: "7개 활성 스타트업 런칭", badge: "startup", badgeColor: "bg-sky-500", description: "RootEdu, AiNOS, Parentlyze 등" },
      { date: "8월", title: "첫 Demo Day 개최", description: "투자자, 파트너사 초청" },
      { date: "12월", title: "누적 33+ 멤버 달성", badge: "members", badgeColor: "bg-blue-500" },
    ],
  },
  {
    year: "2024",
    title: "창립과 시작",
    events: [
      { date: "3월", title: "CREAI+IT 창립", description: "1기 7명으로 시작" },
      { date: "6월", title: "2기 활동", description: "10명 합류" },
      { date: "9월", title: "3기 활동 시작", description: "6명 합류" },
      { date: "11월", title: "국내 모 보험사 산학협력 체결", badge: "partner", badgeColor: "bg-slate-500", description: "Creative Agent 개발" },
    ],
  },
];

// SVG icons for badges
const BadgeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "partner":
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.31l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.5a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.31L11.48 3.5z" />
        </svg>
      );
    case "startup":
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58" />
        </svg>
      );
    case "members":
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
        </svg>
      );
    case "highlight":
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="#030712" />
        </svg>
      );
    default:
      return null;
  }
};

const achievementBadges = [
  { icon: "partner", label: "산학협력 파트너", color: "from-primary to-cyan-500" },
  { icon: "startup", label: "7개 스타트업", color: "from-sky-400 to-blue-500" },
  { icon: "members", label: "33+ 누적 멤버", color: "from-blue-400 to-indigo-500" },
  { icon: "calendar", label: "2년차 운영", color: "from-slate-400 to-slate-500" },
];

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[1.2rem] font-semibold text-primary mb-6 tracking-wider">
          OUR JOURNEY
        </span>
        <h2 className="text-[3rem] md:text-[4rem] font-display font-bold text-white">
          연혁
        </h2>
      </div>

      {/* Achievement Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {achievementBadges.map((badge, i) => (
          <div
            key={badge.label}
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white font-semibold text-[1.2rem] shadow-lg transition-transform duration-300 hover:scale-105`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {badge.icon === "partner" && (
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.31l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.5a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.31L11.48 3.5z" />
                </svg>
              )}
              {badge.icon === "startup" && (
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58" />
                </svg>
              )}
              {badge.icon === "members" && (
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
                </svg>
              )}
              {badge.icon === "calendar" && (
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              )}
            </div>
            <span>{badge.label}</span>
          </div>
        ))}
      </div>

      {/* Timeline - Consistent Card Layout */}
      <div className="relative space-y-8">
        {timelineData.map((item, i) => (
          <div
            key={item.year}
            data-index={i}
            className={`relative ${
              visibleItems.has(i) ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Year Card - Full Width, Consistent */}
            <div
              className={`relative p-6 md:p-8 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border transition-all duration-500 hover:border-primary/30 ${
                item.highlight
                  ? "border-primary/30 shadow-glow-sm"
                  : "border-white/5"
              }`}
            >
              {/* Year Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  {/* Year indicator dot */}
                  <div
                    className={`w-4 h-4 rounded-full ${
                      item.highlight
                        ? "bg-primary shadow-glow-sm"
                        : "bg-slate-600"
                    }`}
                  />
                  <h3
                    className={`text-[2.4rem] md:text-[3rem] font-display font-bold ${
                      item.highlight ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.year}
                  </h3>
                  {item.highlight && (
                    <span className="inline-flex items-center px-3 py-1 text-[1rem] bg-primary/20 text-primary rounded-full animate-pulse font-semibold">
                      NOW
                    </span>
                  )}
                </div>
                <p className="text-[1.4rem] text-slate-500 font-body hidden sm:block">
                  {item.title}
                </p>
              </div>

              {/* Events Grid - Consistent 2 or 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.events.map((event, j) => (
                  <div
                    key={j}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      event.badge
                        ? "bg-white/5 border border-white/10"
                        : "bg-white/[0.02] hover:bg-white/5"
                    }`}
                  >
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-2">
                      {event.badge && (
                        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${event.badgeColor}`}>
                          <BadgeIcon type={event.badge} />
                        </span>
                      )}
                      <span className="text-[1.1rem] text-slate-500 font-medium">
                        {event.date}
                      </span>
                    </div>
                    {/* Title */}
                    <p className={`text-[1.4rem] leading-tight ${
                      event.badge ? "text-white font-semibold" : "text-slate-300"
                    }`}>
                      {event.title}
                    </p>
                    {/* Description */}
                    {event.description && (
                      <p className="text-[1.2rem] text-slate-500 mt-1">
                        {event.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
