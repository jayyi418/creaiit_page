const partners = [
  "연세대학교 인공지능융합대학",
  "연세대학교 창업지원단",
  "연세대학교 SW중심사업단",
  "Disquiet",
];

export default function PartnersSection() {
  return (
    <section className="bg-[#0A0A0F] py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section title */}
        <h2
          className="text-[2.4rem] md:text-[3rem] font-extrabold text-white mb-12 text-center"
          style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
        >
          Partners
        </h2>

        {/* Partner grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center px-6 py-6 border border-[#2563eb]/20 rounded-xl bg-[#111118] hover:border-[#2563eb]/50 transition-colors duration-300"
            >
              <span className="text-[1.4rem] font-bold text-white/60 text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
