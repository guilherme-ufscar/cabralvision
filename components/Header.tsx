'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { ShoppingCart, Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const count = useCartStore((s) => s.count())

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-black tracking-tight">
          <span className="text-gray-900">CABRAL</span>
          <span className="text-blue-500"> VISION</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[['Planos', '#planos'], ['Como Funciona', '#como-funciona'], ['Depoimentos', '#depoimentos'], ['FAQ', '#faq']].map(([label, href]) => (
            <a key={href} href={href} className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/carrinho" className="relative p-2 text-gray-500 hover:text-gray-800">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
          <Link href="/assinatura" className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">
            ASSINE AGORA
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700 p-1">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[['Planos', '#planos'], ['Como Funciona', '#como-funciona'], ['Depoimentos', '#depoimentos'], ['FAQ', '#faq']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-gray-700 text-sm font-medium">
              {label}
            </a>
          ))}
          <Link href="/assinatura" onClick={() => setOpen(false)} className="bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold text-center">
            ASSINE AGORA
          </Link>
        </div>
      )}
    </header>
  )
}
