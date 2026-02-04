import type { Metadata, Viewport } from 'next'
import './globals.css'

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
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
