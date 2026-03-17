import { Monitor, Glasses, Eye } from 'lucide-react'

const pains = [
  { icon: Monitor, label: 'Horas no computador?' },
  { icon: Glasses, label: 'Óculos quebrados?' },
  { icon: Eye, label: 'Vista cansada?' },
]

const benefits = [
  {
    label: 'ÓCULOS COM LENTE BLUE LIGHT',
    icon: (
      <svg viewBox="0 0 48 24" className="w-10 h-5" fill="none">
        <rect x="0" y="4" width="18" height="16" rx="8" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>
        <rect x="30" y="4" width="18" height="16" rx="8" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>
        <line x1="18" y1="12" x2="30" y2="12" stroke="#3b82f6" strokeWidth="2.5"/>
        <line x1="0" y1="12" x2="-6" y2="10" stroke="#3b82f6" strokeWidth="2.5"/>
        <line x1="48" y1="12" x2="54" y2="10" stroke="#3b82f6" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    label: 'TROCA POR QUEBRA',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M24 6L28 14H44L32 22L36 34L24 26L12 34L16 22L4 14H20L24 6Z" fill="#3b82f6" opacity="0.2"/>
        <path d="M24 6L28 14H44L32 22L36 34L24 26L12 34L16 22L4 14H20L24 6Z" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <path d="M18 24 Q24 18 30 24" stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="28" r="3" fill="#3b82f6"/>
      </svg>
    ),
  },
  {
    label: 'GARANTIA 30 DIAS',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M24 4L40 10V24C40 33 32 40 24 44C16 40 8 33 8 24V10L24 4Z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.5"/>
        <polyline points="17,24 22,29 31,19" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'MANUTENÇÃO CONTÍNUA',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>
        <path d="M24 10 A14 14 0 0 1 38 24" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M24 38 A14 14 0 0 1 10 24" stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <polyline points="36,20 38,24 42,22" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        <polyline points="12,28 10,24 6,26" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function PainSection() {
  return (
    <section id="planos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Pain points */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Cansado de fadiga visual?
        </h2>
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {pains.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-gray-700">
              <Icon size={26} className="text-gray-500" strokeWidth={1.5} />
              <span className="text-base font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <p className="text-center text-gray-600 text-base mb-10">
          Com o Plano <strong className="text-gray-900">Cabral Vision</strong> você recebe todo ano
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map(({ icon, label }) => (
            <div key={label} className="border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center gap-4 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center justify-center h-12">{icon}</div>
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wide leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
