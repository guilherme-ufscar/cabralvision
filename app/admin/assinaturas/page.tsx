'use client'
import { useEffect, useState } from 'react'

interface Subscription {
  id: number
  status: string
  plano: string
  valor: number
  nomeCliente: string | null
  emailCliente: string | null
  dataInicio: string
}

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  cancelled: 'bg-red-100 text-red-600',
}

export default function AdminAssinaturas() {
  const [subs, setSubs] = useState<Subscription[]>([])

  function load() {
    fetch('/api/admin/subscriptions').then((r) => r.json()).then(setSubs)
  }

  useEffect(() => { load() }, [])

  async function cancel(id: number) {
    if (!confirm('Cancelar assinatura?')) return
    await fetch('/api/admin/subscriptions', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    load()
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Assinaturas</h1>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['#', 'Cliente', 'Email', 'Plano', 'Valor', 'Status', 'Início', 'Ação'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-sm font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {subs.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-500 text-sm">#{s.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{s.nomeCliente || '—'}</td>
                <td className="px-4 py-3 text-gray-500 text-sm">{s.emailCliente || '—'}</td>
                <td className="px-4 py-3 text-gray-700 capitalize">{s.plano}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">R$ {s.valor.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[s.status] || 'bg-gray-100 text-gray-500'}`}>
                    {s.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500 text-sm">{new Date(s.dataInicio).toLocaleDateString('pt-BR')}</td>
                <td className="px-4 py-3">
                  {s.status !== 'cancelled' && (
                    <button onClick={() => cancel(s.id)} className="text-xs text-red-500 hover:text-red-700 font-medium">
                      Cancelar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {subs.length === 0 && <div className="py-12 text-center text-gray-400">Nenhuma assinatura encontrada.</div>}
      </div>
    </div>
  )
}
