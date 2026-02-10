interface TimelineItem {
  year: string;
  events: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2026",
    events: [
      "5기 모집 개시 (2026.02)",
      "커리큘럼 개편: AI Agent 심화 과정 도입",
    ],
  },
  {
    year: "2025",
    events: [
      "7개 창업팀 전개 중 (RootEdu, AiNOS, Parentlyze, Resio, Potentivo Lab, Luminary, Undrew)",
      "4기 활동 완료 (총 10명)",
    ],
  },
  {
    year: "2024",
    events: [
      "KB손해보험 산학협력 진행 (Creative Agent 개발)",
      "3기 활동 (6명) — Demo Day 개최",
      "2기 활동 (10명)",
      "CREAI+IT 창립 (2024.03)",
      "1기 7명으로 시작",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="max-w-[800px] mx-auto">
      {timelineData.map((item, i) => (
        <div key={item.year} className="relative flex gap-8 pb-12 last:pb-0">
          {/* Line */}
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-[#2563eb] border-4 border-[#2563eb]/20 flex-shrink-0" />
            {i < timelineData.length - 1 && (
              <div className="w-[2px] flex-1 bg-[#2563eb]/20" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 -mt-1">
            <h3 className="text-[2rem] font-extrabold text-[#2563eb] mb-3">
              {item.year}
            </h3>
            <ul className="space-y-2">
              {item.events.map((event, j) => (
                <li
                  key={j}
                  className="text-[1.4rem] text-white/60 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-[#2563eb] mt-1.5 flex-shrink-0">
                    &bull;
                  </span>
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
