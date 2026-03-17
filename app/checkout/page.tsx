'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nome: '', cpf: '', email: '', telefone: '',
    cep: '', rua: '', numero: '', bairro: '', cidade: '', estado: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (items.length === 0) return
    setLoading(true)
    try {
      const res = await fetch('/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, items }),
      })
      const data = await res.json()
      if (data.init_point) {
        clearCart()
        window.location.href = data.init_point
      } else {
        alert(data.error || 'Erro ao processar pagamento.')
      }
    } catch {
      alert('Erro ao conectar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    router.replace('/carrinho')
    return null
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <form onSubmit={handleSubmit} className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-100 space-y-4">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Dados pessoais</h2>
              {[
                ['nome', 'Nome completo', 'text'],
                ['cpf', 'CPF', 'text'],
                ['email', 'Email', 'email'],
                ['telefone', 'Telefone', 'tel'],
                ['cep', 'CEP', 'text'],
                ['rua', 'Rua', 'text'],
                ['numero', 'Número', 'text'],
                ['bairro', 'Bairro', 'text'],
                ['cidade', 'Cidade', 'text'],
                ['estado', 'Estado (UF)', 'text'],
              ].map(([field, label, type]) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    type={type}
                    required
                    value={(form as any)[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white py-3 rounded-lg font-bold text-lg transition-colors"
              >
                {loading ? 'Processando...' : 'Pagar com Mercado Pago'}
              </button>
            </form>

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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
