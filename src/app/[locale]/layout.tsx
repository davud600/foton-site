import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../globals.css'
import type { Metadata } from 'next'
import { ibm_plex_sans } from '@/utils/fonts'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/CustomCursor'

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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={ibm_plex_sans.className}>
          <Header />
          <CustomCursor />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
