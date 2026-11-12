import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { content } from "@/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const { title, description, icon, language } = content.Lapcore.metadata;

export const metadata: Metadata = {
  title,
  description,
  icons: { icon },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={language}
      className={`${geistSans.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="min-h-screen bg-white font-sans text-navy antialiased">{children}</body>
    </html>
  );
}
