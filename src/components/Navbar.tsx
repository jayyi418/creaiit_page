"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "ACTIVITIES", href: "/activities" },
  { label: "STARTUPS", href: "/startups" },
  { label: "PEOPLE", href: "/people" },
  { label: "JOIN", href: "/join" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center group">
          <span className="font-display text-[2.4rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary-light">
            CRE
          </span>
          <span className="font-display text-[2.4rem] font-bold tracking-tight text-primary transition-all duration-300 group-hover:text-primary-light group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">
            AI
          </span>
          <span className="font-display text-[2.4rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary-light">
            +IT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-3 text-[1.3rem] font-semibold tracking-wider no-underline transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/join"
            className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 border border-primary/30 text-primary text-[1.3rem] font-semibold rounded-full no-underline overflow-hidden group hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            <span className="relative z-10">Join 5th Gen</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="메뉴"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#030712]/98 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          {navItems.map((item, i) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-4 text-[1.5rem] font-semibold no-underline rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-white/5">
            <Link
              href="/join"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-4 bg-primary text-white text-[1.5rem] font-bold rounded-xl no-underline"
            >
              Join 5th Generation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
