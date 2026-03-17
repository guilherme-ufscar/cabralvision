import Link from 'next/link'

export default function CTAFinal() {
  return (
    <section className="bg-[#0d1f3c] py-20 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Pronto para proteger sua visão?
        </h2>
        <Link
          href="/assinatura"
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-all hover:scale-105 inline-block shadow-lg shadow-blue-500/30"
        >
          ASSINAR AGORA
        </Link>
      </div>
    </section>
  )
}
