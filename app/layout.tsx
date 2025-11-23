import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sirielle Pontue Nguefa - Portfolio',
  description: 'Portfolio de Sirielle Pontue Nguefa - Développeuse Full Stack Java/Angular & React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {children}
      </body>
    </html>
  )
}

