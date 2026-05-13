import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'PrEP Saúde | Dr. Ricardo Razera - Prevenção de ISTs',
  description: 'Aplicativo de prevenção de infecções sexualmente transmissíveis com Dr. Ricardo Razera, médico infectologista. PrEP, vacinas e acompanhamento personalizado.',
  keywords: 'PrEP, IST, HIV, prevenção, infectologista, vacinas, HPV, hepatite, sífilis, Dr. Ricardo Razera',
  authors: [{ name: 'Dr. Ricardo José Razera', url: 'https://prepsaude.com.br' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
