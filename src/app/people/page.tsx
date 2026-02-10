"use client";

import TabNav from "@/components/TabNav";

const generations: Record<string, string[]> = {
  "5기": [], // Coming Soon
  "4기": [
    "김우열", "박정현", "손찬영", "이강우", "이승준",
    "이지원", "이지현", "전미강", "한경민", "황성윤",
  ],
  "3기": [
    "이재현", "조가을", "박상욱", "서수연", "염서경", "윤태두",
  ],
  "2기": [
    "박규연", "김영운", "김호수", "천예진", "김한울",
    "하재현", "박근립", "강동훈", "한예지", "고영권",
  ],
  "1기": [
    "강지민", "고정훈", "최사랑", "한진규",
    "윤지성", "안상현", "황보명철",
  ],
};

export default function PeoplePage() {
  const tabs = Object.keys(generations);

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="h-[72px]" />

      <TabNav tabs={tabs}>
        {tabs.map((gen) => {
          const members = generations[gen];

          if (members.length === 0) {
            // Coming Soon tab
            return (
              <div key={gen} className="max-w-[1000px] mx-auto px-8 py-20">
                <div className="text-center py-20">
                  <p
                    className="text-[3rem] font-extrabold text-[#2563eb] mb-4"
                    style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
                  >
                    {gen}
                  </p>
                  <p className="text-[2rem] text-white/30 font-bold">
                    Coming Soon
                  </p>
                  <p className="text-[1.4rem] text-white/20 mt-3">
                    모집이 완료되면 업데이트됩니다.
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div key={gen} className="max-w-[1000px] mx-auto px-8 py-16">
              <div className="text-center mb-12">
                <p
                  className="text-[2.4rem] font-extrabold text-[#2563eb]"
                  style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
                >
                  {gen}
                </p>
                <p className="text-[1.4rem] text-white/40 mt-1">
                  {members.length}명
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {members.map((name) => (
                  <div key={name} className="text-center">
                    <div className="w-[80px] h-[80px] mx-auto mb-3 bg-[#1A1A24] rounded-full flex items-center justify-center border border-white/8">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-white/20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-[1.4rem] font-bold text-white/80">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </TabNav>
    </div>
  );
}
