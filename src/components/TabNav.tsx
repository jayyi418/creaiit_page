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
      {/* Tab bar - dark theme */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-8 flex gap-0 overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`relative px-8 py-4 text-[1.5rem] font-semibold whitespace-nowrap transition-colors duration-200 ${
                activeTab === i
                  ? "text-[#2563eb]"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab}
              {activeTab === i && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[3px] bg-[#2563eb] rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content with mount animation */}
      <div key={activeTab} className="mount">
        {children[activeTab]}
      </div>
    </div>
  );
}
