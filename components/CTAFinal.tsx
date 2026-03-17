import Link from 'next/link'

export default function CTAFinal() {
  return (
    <section className="bg-[#0c1a2e] py-20 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Pronto para proteger sua visão?
        </h2>
        <Link
          href="/assinatura"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-14 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
        >
          ASSINAR AGORA
        </Link>
      </div>
    </section>
  )
}
