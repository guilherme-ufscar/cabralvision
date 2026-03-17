'use client'
import { useEffect, useState } from 'react'
import { Users, ShoppingBag, DollarSign, CreditCard } from 'lucide-react'

interface Stats {
  totalClientes: number
  totalPedidos: number
  receita: number
  assinaturasAtivas: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    fetch('/api/admin/dashboard').then((r) => r.json()).then(setStats)
  }, [])

  const cards = stats
    ? [
        { label: 'Clientes', value: stats.totalClientes, icon: Users, color: 'text-blue-500' },
        { label: 'Pedidos', value: stats.totalPedidos, icon: ShoppingBag, color: 'text-green-500' },
        { label: 'Receita', value: `R$ ${stats.receita.toFixed(2)}`, icon: DollarSign, color: 'text-yellow-500' },
        { label: 'Assinaturas Ativas', value: stats.assinaturasAtivas, icon: CreditCard, color: 'text-purple-500' },
      ]
    : []

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats === null
          ? [...Array(4)].map((_, i) => <div key={i} className="bg-white rounded-xl h-32 animate-pulse" />)
          : cards.map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">{label}</span>
                  <Icon size={20} className={color} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
              </div>
            ))}
      </div>
    </div>
  )
}
