import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foton',
  description: 'Welcome to Foton in Kosovo.',
  keywords:
    'drone technology, multispectral imagery, Kosovo, agricultural data',
  authors: [{ name: 'Foton LLC', url: 'https://foton-ks.com' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Foton',
    description: 'Welcome to Foton in Kosovo.',
    url: 'https://foton-ks.com',
    siteName: 'Foton',
    images: [
      {
        url: 'https://foton-ks.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Foton LLC - Insights from above, and beyond.',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
