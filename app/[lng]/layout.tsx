import { Analytics } from '@vercel/analytics/react'
import { dir } from 'i18next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/components/poc/Redux/provider'
import { performRequest } from '@/datocms/performRequest'
import { SEO_QUERY } from '@/datocms/queries'
import { SEOData } from '@/models/seoData'
import { SiteData } from '@/models/siteData'

import { languages } from '../i18n/settings'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string }
}): Promise<Metadata> {
  const {
    data: { _site: siteData, page: pageData },
  } = await performRequest<{ data: { _site: SiteData; page: SEOData } }>({
    query: SEO_QUERY(lng),
  })

  return {
    title: siteData.globalSeo.fallbackSeo.title,
    description: siteData.globalSeo.fallbackSeo.description,
    keywords: pageData.seoKeywords,
  }
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
