"use client";

import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Startups", href: "/startups" },
  { label: "People", href: "/people" },
  { label: "Join", href: "/join" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/creaiit",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:creaiit.contact@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030712] border-t border-white/5">
      {/* Top section */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center no-underline mb-6">
              <span className="font-display text-[2.4rem] font-bold tracking-tight text-white">
                CRE
              </span>
              <span className="font-display text-[2.4rem] font-bold tracking-tight text-primary">
                AI
              </span>
              <span className="font-display text-[2.4rem] font-bold tracking-tight text-white">
                +IT
              </span>
            </Link>

            <p className="text-[1.5rem] text-slate-400 mb-4 leading-relaxed font-body max-w-[400px]">
              연세대학교 AI 창업 학회.
              <br />
              AI 기술의 최전선에서 직접 만들고, 실행하고, 증명합니다.
            </p>

            <p className="text-[1.8rem] font-display font-bold text-slate-600 tracking-tight">
              We Build What&apos;s Next.
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3">
            <h4 className="text-[1.3rem] font-semibold text-slate-400 uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[1.4rem] text-slate-500 hover:text-white transition-colors no-underline font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4">
            <h4 className="text-[1.3rem] font-semibold text-slate-400 uppercase tracking-wider mb-6">
              Contact
            </h4>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:creaiit.contact@gmail.com"
                className="block text-[1.4rem] text-slate-400 hover:text-primary transition-colors no-underline font-body"
              >
                creaiit.contact@gmail.com
              </a>
              <p className="text-[1.4rem] text-slate-500 font-body">
                서울특별시 서대문구 연세로 50
                <br />
                연세대학교
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-slate-400 hover:bg-primary/10 hover:text-primary transition-all duration-300 no-underline"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[1.2rem] text-slate-600 font-body">
            &copy; 2024-2026 CREAI+IT. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[1.2rem] text-slate-600 font-body">
              Made with passion at Yonsei University
            </span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[1.2rem] text-emerald-400 font-semibold">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
