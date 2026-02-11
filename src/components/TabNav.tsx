"use client";

import { useState } from "react";

interface TabNavProps {
  tabs: string[];
  children: React.ReactNode[];
}

export default function TabNav({ tabs, children }: TabNavProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab bar */}
      <div className="sticky top-[80px] z-40 bg-[#030712]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`relative px-6 py-3 text-[1.4rem] font-semibold whitespace-nowrap transition-all duration-300 rounded-full ${
                  activeTab === i
                    ? "text-white bg-primary/20"
                    : "text-slate-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
                {activeTab === i && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content with animation */}
      <div
        key={activeTab}
        className="animate-fade-in-up"
        style={{ animationDuration: "0.4s" }}
      >
        {children[activeTab]}
      </div>
    </div>
  );
}
