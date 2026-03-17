'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Check, Shield, RefreshCw, Wrench, Glasses } from 'lucide-react'

export default function AssinaturaPage() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nome: '', email: '', telefone: '', cpf: '',
    cep: '', rua: '', numero: '', bairro: '', cidade: '', estado: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/subscriptions/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.init_point) {
        window.location.href = data.init_point
      } else if (data.error) {
        alert('Erro: ' + data.error)
      }
    } catch {
      alert('Erro ao processar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Assine o Plano Cabral Vision</h1>
          <p className="text-gray-500 text-center mb-12">Proteção completa para sua visão por apenas R$ 49,90/mês</p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#0d1f3c] rounded-2xl p-8 text-white">
              <div className="text-4xl font-bold mb-1">R$ 49,90<span className="text-lg font-normal text-blue-300">/mês</span></div>
              <p className="text-blue-200 mb-8">Plano Anual · Cobrado mensalmente</p>
              <ul className="space-y-4">
                {[
                  [Glasses, 'Óculos com lente blue light'],
                  [RefreshCw, 'Troca por quebra inclusa'],
                  [Shield, 'Garantia de 30 dias'],
                  [Wrench, 'Manutenção contínua'],
                  [Check, 'Suporte prioritário'],
                ].map(([Icon, label]) => (
                  <li key={String(label)} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      {/* @ts-ignore */}
                      <Icon size={14} />
                    </span>
                    <span>{String(label)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Seus dados</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  ['nome', 'Nome completo', 'text'],
                  ['email', 'Email', 'email'],
                  ['telefone', 'Telefone', 'tel'],
                  ['cpf', 'CPF', 'text'],
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
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white py-3 rounded-lg font-bold text-lg transition-colors mt-2"
                >
                  {loading ? 'Processando...' : 'Assinar por R$ 49,90/mês'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
