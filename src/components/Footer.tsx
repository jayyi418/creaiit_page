export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/5 py-10">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <p
            className="text-[1.6rem] font-bold text-white/60 mb-3"
            style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
          >
            CRE<span className="text-[#2563eb]">AI</span>+IT
          </p>
          <p className="text-[1.2rem] text-white/30 leading-relaxed">
            연세대학교 AI 창업 학회
          </p>
          <p className="text-[1.2rem] text-white/30 mt-1">
            email : creaiit.contact@gmail.com
          </p>
        </div>
        <p className="text-[1.1rem] text-white/20">
          &copy; CREAI+IT 2024-2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
