"use client";

import TabNav from "@/components/TabNav";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="h-[72px]" /> {/* Navbar spacer */}

      <TabNav tabs={["Greeting", "Philosophy", "History"]}>
        {/* ===== Greeting Tab ===== */}
        <div className="max-w-[1000px] mx-auto px-8 py-20">
          <div className="space-y-10">
            <div>
              <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold text-white mb-8">
                안녕하세요,{" "}
                <span style={{ fontFamily: "GmarketSansMedium, sans-serif" }}>
                  CRE<span className="text-[#2563eb]">AI</span>+IT
                </span>
                입니다.
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-[1.7rem] text-white/70 leading-[1.9]">
                GPT-4 이후 세상은 빠르게 바뀌고 있습니다.
              </p>
              <p className="text-[1.7rem] text-white/70 leading-[1.9]">
                많은 이들이 AI를 이야기하지만, 직접 만드는 사람은 많지 않습니다.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[1.7rem] text-white/70 leading-[1.9]">
                CREAI+IT은 그 간극에서 시작되었습니다.
              </p>
              <p className="text-[1.7rem] text-white/70 leading-[1.9]">
                기술을 &apos;아는 것&apos;에서 멈추지 않고, &apos;만드는 것&apos;으로 옮기기 위해.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[1.7rem] text-white/70 leading-[1.9]">
                AI와 IT로 새로운 가치를 창조하는 사람들이 모인 곳.
              </p>
              <p className="text-[1.7rem] text-white/70 leading-[1.9]">
                변화를 행동으로 옮길 준비가 된 당신을 기다립니다.
              </p>
            </div>

            <div className="pt-8">
              <p
                className="text-[2.4rem] font-extrabold text-white tracking-wider"
                style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
              >
                WE BUILD WHAT&apos;S NEXT.
              </p>
            </div>

            <div className="text-right pt-4">
              <p className="text-[1.6rem] font-bold text-white/80">
                CREAI+IT 5기 임원진 드림
              </p>
            </div>
          </div>
        </div>

        {/* ===== Philosophy Tab ===== */}
        <div className="max-w-[1000px] mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <p className="text-[1.4rem] text-[#2563eb] font-semibold tracking-wider mb-3">
              OUR PHILOSOPHY
            </p>
            <h2
              className="text-[2.4rem] md:text-[3rem] font-extrabold text-white"
              style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
            >
              Edge → Execute → Impact
            </h2>
          </div>

          <div className="space-y-12">
            {/* 01 EDGE */}
            <div className="p-8 rounded-xl border border-white/8 bg-[#111118]">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[1.2rem] text-[#2563eb] font-bold tracking-wider">
                  01
                </span>
                <h3 className="text-[2rem] font-extrabold text-white">
                  EDGE — 최전선에 선다
                </h3>
              </div>
              <p className="text-[1.5rem] text-white/60 leading-[1.9] ml-10">
                가장 최신의 기술, 가장 빠른 트렌드, 가장 날카로운 시각.
                <br />
                새로운 모델이 공개된 그 주에 세미나를 열고, 직접 써봅니다.
                <br />
                남들이 뉴스를 읽을 때, 우리는 이미 빌드하고 있습니다.
              </p>
            </div>

            {/* 02 EXECUTE */}
            <div className="p-8 rounded-xl border border-white/8 bg-[#111118]">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[1.2rem] text-[#2563eb] font-bold tracking-wider">
                  02
                </span>
                <h3 className="text-[2rem] font-extrabold text-white">
                  EXECUTE — 실행으로 증명한다
                </h3>
              </div>
              <p className="text-[1.5rem] text-white/60 leading-[1.9] ml-10">
                아이디어를 슬라이드에 가두지 않습니다.
                <br />
                한 학기 안에 팀을 꾸리고, 프로토타입을 만들고,
                <br />
                실제 유저에게 테스트합니다.
              </p>
            </div>

            {/* 03 IMPACT */}
            <div className="p-8 rounded-xl border border-white/8 bg-[#111118]">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[1.2rem] text-[#2563eb] font-bold tracking-wider">
                  03
                </span>
                <h3 className="text-[2rem] font-extrabold text-white">
                  IMPACT — 실질적 결과를 만든다
                </h3>
              </div>
              <p className="text-[1.5rem] text-white/60 leading-[1.9] ml-10">
                학회 활동이 아니라 실전의 결과를 추구합니다.
                <br />
                7개 팀 창업 진행. KB손해보험 산학협력. Demo Day.
                <br />
                만들고, 부딪히고, 증명한 기록들.
              </p>
            </div>
          </div>
        </div>

        {/* ===== History Tab ===== */}
        <div className="max-w-[1000px] mx-auto px-8 py-20">
          <Timeline />
        </div>
      </TabNav>
    </div>
  );
}
