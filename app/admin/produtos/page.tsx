'use client'
import { useEffect, useState } from 'react'
import { Plus, Pencil, Trash2, X } from 'lucide-react'

interface Product {
  id: number
  nome: string
  descricao: string | null
  preco: number
  imagem: string | null
  categoria: string | null
  estoque: number
  ativo: boolean
}

const emptyForm = { nome: '', descricao: '', preco: '', imagem: '', categoria: '', estoque: '0', ativo: true }

export default function AdminProdutos() {
  const [products, setProducts] = useState<Product[]>([])
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState<typeof emptyForm>(emptyForm)
  const [editing, setEditing] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  function load() {
    fetch('/api/admin/products').then((r) => r.json()).then(setProducts)
  }

  useEffect(() => { load() }, [])

  function openNew() { setForm(emptyForm); setEditing(null); setModal(true) }
  function openEdit(p: Product) {
    setForm({ nome: p.nome, descricao: p.descricao || '', preco: String(p.preco), imagem: p.imagem || '', categoria: p.categoria || '', estoque: String(p.estoque), ativo: p.ativo })
    setEditing(p.id)
    setModal(true)
  }

  async function handleSave() {
    setLoading(true)
    const url = editing ? `/api/admin/products/${editing}` : '/api/admin/products'
    const method = editing ? 'PUT' : 'POST'
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setModal(false)
    setLoading(false)
    load()
  }

  async function handleDelete(id: number) {
    if (!confirm('Excluir produto?')) return
    await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
        <button onClick={openNew} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus size={18} /> Novo Produto
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              {['Nome', 'Categoria', 'Preço', 'Estoque', 'Status', 'Ações'].map((h) => (
                <th key={h} className="px-4 py-3 text-sm font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{p.nome}</td>
                <td className="px-4 py-3 text-gray-500 text-sm">{p.categoria || '—'}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">R$ {p.preco.toFixed(2)}</td>
                <td className="px-4 py-3 text-gray-700">{p.estoque}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${p.ativo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                    {p.ativo ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(p)} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded"><Pencil size={16} /></button>
                    <button onClick={() => handleDelete(p.id)} className="p-1.5 text-red-400 hover:bg-red-50 rounded"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <div className="py-12 text-center text-gray-400">Nenhum produto cadastrado.</div>
        )}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-gray-900 text-xl">{editing ? 'Editar Produto' : 'Novo Produto'}</h2>
              <button onClick={() => setModal(false)}><X size={20} className="text-gray-400" /></button>
            </div>
            <div className="space-y-4">
              {[['nome', 'Nome'], ['descricao', 'Descrição'], ['preco', 'Preço'], ['imagem', 'URL da Imagem'], ['categoria', 'Categoria'], ['estoque', 'Estoque']].map(([field, label]) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    value={(form as any)[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="ativo"
                  checked={form.ativo}
                  onChange={(e) => setForm({ ...form, ativo: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="ativo" className="text-sm font-medium text-gray-700">Produto ativo</label>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(false)} className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-lg font-medium hover:bg-gray-50">
                Cancelar
              </button>
              <button onClick={handleSave} disabled={loading} className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white py-2.5 rounded-lg font-medium">
                {loading ? 'Salvando...' : 'Salvar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
