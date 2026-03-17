import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cabral Vision — Proteção Digital para sua Visão',
  description: 'Óculos com proteção blue light em assinatura mensal. Troca por quebra, garantia e manutenção incluídos.',
  keywords: 'óculos, blue light, proteção digital, assinatura, cabral vision',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
