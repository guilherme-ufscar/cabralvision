import Link from 'next/link'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#112244] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-20">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sua visão trabalha o dia inteiro.{' '}
            <span className="block">
              Ela merece{' '}
              <span className="text-blue-400">proteção</span>{' '}
              o ano inteiro.
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Conheça o plano anual <strong className="text-white">Cabral Vision</strong> e tenha óculos com proteção digital pagando mensalmente.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/assinatura"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Quero proteger minha visão
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative w-full max-w-lg h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-[#0a1628]/80 rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/40">
                <div className="text-8xl mb-4">👓</div>
                <p className="text-sm">Imagem do produto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
