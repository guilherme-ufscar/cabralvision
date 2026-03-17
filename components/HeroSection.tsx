import Link from 'next/link'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0c1a2e] flex items-center overflow-hidden pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a2e] via-[#0f2240] to-[#1a3a6e] opacity-90" />

      {/* Subtle blue glow top right */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-600/20 via-blue-800/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center w-full py-16">
        {/* Left: text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Sua visão trabalha o dia inteiro.{' '}
            <span className="block mt-1">
              Ela merece{' '}
              <span className="text-blue-400">proteção</span>{' '}
              o ano inteiro.
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-md leading-relaxed">
            Conheça o plano anual <strong className="text-white">Cabral Vision</strong> e tenha óculos com proteção digital pagando mensalmente.
          </p>
          <Link
            href="/assinatura"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-base transition-all hover:scale-105 shadow-lg"
          >
            Quero proteger minha visão
          </Link>
        </div>

        {/* Right: man with glasses image placeholder styled realistically */}
        <div className="hidden md:flex justify-end items-end h-[520px] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Stylized person silhouette with blue glow */}
            <div className="relative w-full h-full flex items-end justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e] via-transparent to-transparent z-10" />
              <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-[#0c1a2e]/80 rounded-2xl flex items-center justify-center">
                <div className="text-center opacity-30">
                  <svg viewBox="0 0 200 200" className="w-64 h-64 text-blue-400 fill-current">
                    <circle cx="100" cy="70" r="35" />
                    <ellipse cx="100" cy="160" rx="60" ry="50" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Blue light glow decoration */}
          <div className="absolute top-10 right-10 w-32 h-4 bg-blue-400/60 blur-xl rounded-full" />
          <div className="absolute top-20 right-20 w-2 h-2 bg-blue-300 rounded-full" />
        </div>
      </div>
    </section>
  )
}
