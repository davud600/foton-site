import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ibm_plex_sans } from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'Software Solutions',
  description: 'Best Software Solutions in Kosovo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm_plex_sans.className}>
        <Header />

        <main className="flex flex-col items-center justify-between bg-neutral-800 overflow-y-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
