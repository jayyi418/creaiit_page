"use client";

import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center">
          <span
            className="text-[2.6rem] font-extrabold tracking-tight text-white"
            style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
          >
            CRE
          </span>
          <span
            className="text-[2.6rem] font-extrabold tracking-tight text-[#2563eb]"
            style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
          >
            AI
          </span>
          <span
            className="text-[2.6rem] font-extrabold tracking-tight text-white"
            style={{ fontFamily: "GmarketSansMedium, sans-serif" }}
          >
            +IT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-6 py-6 text-[1.4rem] font-bold tracking-wider no-underline transition-colors duration-200 ${
                  isActive
                    ? "text-[#2563eb]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-[3px] bg-[#2563eb] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white"
          aria-label="메뉴"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111118] border-t border-white/5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-8 py-4 text-[1.4rem] font-bold no-underline border-b border-white/5 ${
                  isActive
                    ? "text-[#2563eb] bg-[#2563eb]/10"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
