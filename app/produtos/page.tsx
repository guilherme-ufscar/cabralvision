'use client'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCartStore } from '@/store/cartStore'
import { ShoppingCart, Filter } from 'lucide-react'

interface Product {
  id: number
  nome: string
  descricao: string | null
  preco: number
  imagem: string | null
  categoria: string | null
  estoque: number
}

export default function ProdutosPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categoria, setCategoria] = useState('')
  const [categorias, setCategorias] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const addItem = useCartStore((s) => s.addItem)
  const [added, setAdded] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => {
        setProducts(data)
        const cats = [...new Set(data.map((p: Product) => p.categoria).filter(Boolean))] as string[]
        setCategorias(cats)
        setLoading(false)
      })
  }, [])

  const filtered = categoria ? products.filter((p) => p.categoria === categoria) : products

  function handleAdd(p: Product) {
    addItem({ id: p.id, nome: p.nome, preco: p.preco, imagem: p.imagem })
    setAdded(p.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nossos Óculos</h1>
          <p className="text-gray-500 mb-8">Escolha o modelo ideal para você</p>

          {categorias.length > 0 && (
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <Filter size={16} className="text-gray-500" />
              <button
                onClick={() => setCategoria('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !categoria ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-400'
                }`}
              >
                Todos
              </button>
              {categorias.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategoria(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categoria === c ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-400'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl h-64 animate-pulse" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-6xl mb-4">👓</div>
              <p>Nenhum produto encontrado.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <div key={p.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    {p.imagem ? (
                      <img src={p.imagem} alt={p.nome} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-6xl">👓</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{p.nome}</h3>
                    {p.descricao && <p className="text-gray-500 text-sm mb-2 line-clamp-2">{p.descricao}</p>}
                    {p.categoria && <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">{p.categoria}</span>}
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold text-gray-900">R$ {p.preco.toFixed(2)}</span>
                      <button
                        onClick={() => handleAdd(p)}
                        disabled={p.estoque === 0}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          added === p.id
                            ? 'bg-green-500 text-white'
                            : p.estoque === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                      >
                        <ShoppingCart size={14} />
                        {added === p.id ? 'Adicionado!' : p.estoque === 0 ? 'Esgotado' : 'Adicionar'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
