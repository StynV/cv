import { dir } from 'i18next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { languages } from '../i18n/settings'
import { Providers } from '@/components/poc/Redux/provider'
import { Analytics } from "@vercel/analytics/react"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export const metadata: Metadata = {
  title: 'CV - Styn Vercauteren',
  description: 'CV from Styn Vercauteren',
  keywords: "Styn Vercauteren, CV Styn Vercauteren, CV, React, React Developer Vlaanderen, Frontend Developer Vlaanderen, Full-Stack Developer Vlaanderen, Open To Work"
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode
  params: any
}>) {
  return (
    <html lang="en" dir={dir(lng)}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
