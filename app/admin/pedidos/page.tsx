'use client'
import { useEffect, useState } from 'react'

interface Order {
  id: number
  total: number
  status: string
  nomeCliente: string | null
  emailCliente: string | null
  createdAt: string
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  paid: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-600',
  shipped: 'bg-blue-100 text-blue-700',
}

export default function AdminPedidos() {
  const [orders, setOrders] = useState<Order[]>([])

  function load() {
    fetch('/api/admin/orders').then((r) => r.json()).then(setOrders)
  }

  useEffect(() => { load() }, [])

  async function updateStatus(id: number, status: string) {
    await fetch('/api/admin/orders', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    load()
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Pedidos</h1>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['#', 'Cliente', 'Total', 'Status', 'Data', 'Ação'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-sm font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-500 text-sm">#{o.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{o.nomeCliente || '—'}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">R$ {o.total.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[o.status] || 'bg-gray-100 text-gray-500'}`}>
                    {o.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500 text-sm">{new Date(o.createdAt).toLocaleDateString('pt-BR')}</td>
                <td className="px-4 py-3">
                  <select
                    value={o.status}
                    onChange={(e) => updateStatus(o.id, e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="pending">Pendente</option>
                    <option value="paid">Pago</option>
                    <option value="shipped">Enviado</option>
                    <option value="cancelled">Cancelado</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && <div className="py-12 text-center text-gray-400">Nenhum pedido encontrado.</div>}
      </div>
    </div>
  )
}
