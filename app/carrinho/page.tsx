'use client'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag size={64} className="text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Carrinho vazio</h2>
            <p className="text-gray-400 mb-6">Adicione produtos para continuar</p>
            <Link href="/produtos" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver produtos
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrinho de Compras</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 flex gap-4 items-center border border-gray-100">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.imagem ? (
                      <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <span className="text-2xl">👓</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.nome}</h3>
                    <p className="text-blue-600 font-bold">R$ {item.preco.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, item.quantidade - 1)} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantidade}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantidade + 1)} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              <button onClick={clearCart} className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                Limpar carrinho
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 h-fit">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Resumo</h2>
              {items.map((i) => (
                <div key={i.id} className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{i.nome} x{i.quantidade}</span>
                  <span>R$ {(i.preco * i.quantidade).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-gray-100 pt-3 mt-3 flex justify-between font-bold text-gray-900 text-lg">
                <span>Total</span>
                <span>R$ {total().toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="mt-6 block w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold text-center transition-colors">
                Finalizar Compra
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
