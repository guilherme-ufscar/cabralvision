'use client'
import { useEffect, useState } from 'react'

interface Customer {
  id: number
  nome: string
  email: string
  telefone: string | null
  cpf: string | null
  createdAt: string
  orders: { id: number }[]
  subscriptions: { id: number; status: string }[]
}

export default function AdminClientes() {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    fetch('/api/admin/customers').then((r) => r.json()).then(setCustomers)
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Clientes</h1>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Nome', 'Email', 'Telefone', 'CPF', 'Pedidos', 'Assinatura'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-sm font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{c.nome}</td>
                <td className="px-4 py-3 text-gray-600 text-sm">{c.email}</td>
                <td className="px-4 py-3 text-gray-500 text-sm">{c.telefone || '—'}</td>
                <td className="px-4 py-3 text-gray-500 text-sm">{c.cpf || '—'}</td>
                <td className="px-4 py-3 text-gray-700">{c.orders.length}</td>
                <td className="px-4 py-3">
                  {c.subscriptions.find((s) => s.status === 'active') ? (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Ativa</span>
                  ) : (
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">Inativa</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {customers.length === 0 && <div className="py-12 text-center text-gray-400">Nenhum cliente cadastrado.</div>}
      </div>
    </div>
  )
}
