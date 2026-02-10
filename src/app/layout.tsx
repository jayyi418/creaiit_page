import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CREAI+IT | 연세대학교 AI 창업 학회",
  description:
    "CREAI+IT - 연세대학교 AI 창업 학회. We Build What's Next. AI 기술의 최전선에서 직접 만들고, 실행하고, 증명합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
