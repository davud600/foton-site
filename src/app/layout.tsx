import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

        <main className="flex flex-col items-center justify-between bg-neutral-800 overflow-y-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
