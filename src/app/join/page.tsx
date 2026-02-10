"use client";

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563eb]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#3b82f6]/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#2563eb]/5 rounded-full blur-[100px]" />
      </div>

      {/* Stars / particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        <div className="h-[72px]" />

        <div className="text-center mt-auto mb-auto">
          {/* Title */}
          <p className="text-[1.4rem] text-white/40 tracking-widest mb-6">
            5기 지원 안내
          </p>

          <h1
            className="text-[4rem] md:text-[6rem] font-extrabold text-white mb-4"
            style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
          >
            JOIN
          </h1>

          <p className="text-[1.6rem] text-white/50 mb-4">
            CREAI+IT과 함께 AI 창업의 최전선에 서세요.
          </p>

          {/* Qualifications */}
          <div className="max-w-[500px] mx-auto mb-12">
            <p className="text-[1.3rem] text-white/30 font-semibold mb-4 tracking-wider">
              지원 자격
            </p>
            <div className="space-y-2">
              {[
                "연세대학교 재학생 (전공 무관)",
                "AI/창업에 관심 있는 누구나",
                "기술 경험보다 실행 의지가 중요합니다",
              ].map((item) => (
                <p key={item} className="text-[1.4rem] text-white/50">
                  · {item}
                </p>
              ))}
            </div>
          </div>

          {/* Application steps */}
          <div className="max-w-[500px] mx-auto space-y-3 mb-12">
            <p className="text-[1.3rem] text-white/30 font-semibold mb-4 tracking-wider">
              지원 방법
            </p>
            {[
              { step: "01", label: "지원서 다운로드" },
              { step: "02", label: "서류 작성 후 제출" },
              { step: "03", label: "1차 서류 발표" },
              { step: "04", label: "면접" },
              { step: "05", label: "최종 합격 발표" },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`flex items-center gap-4 px-6 py-4 rounded-lg border ${
                  i === 0
                    ? "border-[#2563eb]/50 bg-[#2563eb]/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <span
                  className={`text-[1.2rem] font-bold ${
                    i === 0 ? "text-[#2563eb]" : "text-white/30"
                  }`}
                >
                  {item.step}
                </span>
                <span
                  className={`text-[1.4rem] font-semibold ${
                    i === 0 ? "text-[#2563eb]" : "text-white/60"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
            <p className="text-[1.2rem] text-white/20 mt-2 text-center">
              * 구체적 일정은 추후 업데이트 예정
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563eb] text-white text-[1.5rem] font-bold rounded-full no-underline hover:bg-[#3b82f6] transition-all duration-300 shadow-lg shadow-[#2563eb]/20"
            >
              지원서 다운로드
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#2563eb]/50 text-[#2563eb] text-[1.5rem] font-bold rounded-full no-underline hover:bg-[#2563eb]/10 transition-all duration-300"
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

          {/* Closing message */}
          <p className="text-[1.6rem] text-white/40 font-medium">
            변화를 행동으로 옮길 준비가 된 당신을 기다립니다.
          </p>
        </div>

        {/* Bottom visual element */}
        <div className="mt-auto mb-8 flex flex-col items-center">
          <div className="w-[200px] h-[200px] rounded-full border border-[#2563eb]/20 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#2563eb]/10 to-transparent" />
            <div className="w-[140px] h-[140px] rounded-full border border-[#2563eb]/10 flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                <span
                  className="text-[2rem] font-extrabold text-[#2563eb]/60"
                  style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
                >
                  AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
