import Link from 'next/link'

export default function Comparison() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          {/* Headers */}
          <div className="grid grid-cols-2">
            <div className="bg-[#1e3a5f] px-8 py-5">
              <h3 className="text-white font-bold text-xl text-center">Ótica Tradicional</h3>
            </div>
            <div className="bg-[#1a4a9a] px-8 py-5">
              <h3 className="text-white font-bold text-xl text-center">Cabral Vision</h3>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-2">
            {/* Left column */}
            <div className="px-8 py-8 border-r border-gray-100 space-y-4">
              {['Pagamento à vista', 'Sem proteção digital', 'Quebrou? Novo óculos'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="text-gray-400 text-lg font-bold leading-none">—</span>
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="px-8 py-8 space-y-4">
              {['Mensalidade acessível', 'Proteção Luz Azul', '1 Troca anual', 'Suporte completo'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-800">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <polyline points="4,10 8,14 16,6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="px-8 py-6 text-center border-t border-gray-100">
            <Link
              href="/assinatura"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-lg font-bold text-base transition-colors"
            >
              Assine e economize
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
