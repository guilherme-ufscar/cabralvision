'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { ShoppingCart, Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const count = useCartStore((s) => s.count())

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">CABRAL</span>
          <span className="text-blue-400"> VISION</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[['Planos', '#planos'], ['Como Funciona', '#como-funciona'], ['Depoimentos', '#depoimentos'], ['FAQ', '#faq']].map(([label, href]) => (
            <a key={href} href={href} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/carrinho" className="relative p-2 text-gray-300 hover:text-white">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <Link href="/assinatura" className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
            ASSINE AGORA
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a1628] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {[['Planos', '#planos'], ['Como Funciona', '#como-funciona'], ['Depoimentos', '#depoimentos'], ['FAQ', '#faq']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">
              {label}
            </a>
          ))}
          <Link href="/assinatura" className="bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold text-center">
            ASSINE AGORA
          </Link>
        </div>
      )}
    </header>
  )
}
