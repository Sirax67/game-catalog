import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
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
      <body className="relative flex min-h-svh flex-col overflow-x-hidden bg-[radial-gradient(ellipse_90%_70%_at_86%_64%,var(--horizon)_0%,var(--deep)_50%,var(--base)_100%)]">
        <div className="mx-auto flex w-full max-w-[1184px] flex-1 flex-col px-4 sm:px-6">
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
