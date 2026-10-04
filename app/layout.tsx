import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Каталог настольных игр",
  description: "Подборка настольных игр с описанием, числом игроков и временем партии",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} antialiased`}
    >
      <body className="relative overflow-x-hidden min-h-svh flex flex-col bg-[radial-gradient(ellipse_900px_700px_at_85%_60%,var(--horizon)_0%,var(--deep)_50%,var(--base)_100%)]">
        <main className="mx-auto flex w-full max-w-[1184px] flex-1 flex-col px-4 sm:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
