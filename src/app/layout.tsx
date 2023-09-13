import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Solutions",
  description: "Best Software Solutions in Kosovo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col items-center justify-between p-24 top-0 bg-neutral-800 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
