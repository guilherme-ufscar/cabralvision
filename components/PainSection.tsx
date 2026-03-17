import { Monitor, Glasses, Eye } from 'lucide-react'

const pains = [
  { icon: Monitor, label: 'Horas no computador?' },
  { icon: Glasses, label: 'Óculos quebrados?' },
  { icon: Eye, label: 'Vista cansada?' },
]

const benefits = [
  { emoji: '👓', label: 'ÓCULOS COM LENTE BLUE LIGHT' },
  { emoji: '🔄', label: 'TROCA POR QUEBRA' },
  { emoji: '🛡️', label: 'GARANTIA 30 DIAS' },
  { emoji: '🔧', label: 'MANUTENÇÃO CONTÍNUA' },
]

export default function PainSection() {
  return (
    <section id="planos" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Cansado de fadiga visual?
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {pains.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-gray-700 text-lg">
              <Icon size={28} className="text-blue-500" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-lg mb-10">
          Com o Plano <strong className="text-gray-900">Cabral Vision</strong> você recebe todo ano
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map(({ emoji, label }) => (
            <div key={label} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{emoji}</div>
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
