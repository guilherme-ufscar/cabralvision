import Link from 'next/link'
import { X, Check } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <div className="grid grid-cols-2">
            <div className="bg-[#1e3a5f] p-6">
              <h3 className="text-white font-bold text-xl text-center mb-6">Ótica Tradicional</h3>
              {['Pagamento à vista', 'Sem proteção digital', 'Quebrou? Novo óculos'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300 mb-4">
                  <X size={18} className="text-red-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#1a4a8a] p-6">
              <h3 className="text-white font-bold text-xl text-center mb-6">Cabral Vision</h3>
              {['Mensalidade acessível', 'Proteção Luz Azul', '1 Troca anual', 'Suporte completo'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white mb-4">
                  <Check size={18} className="text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 text-center">
            <Link href="/assinatura" className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold text-lg transition-colors inline-block">
              Assine e economize
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
