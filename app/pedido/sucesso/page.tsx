import Link from 'next/link'
import Header from '@/components/Header'

export default function PedidoSucesso() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pagamento aprovado!</h1>
          <p className="text-gray-500 mb-8">Seu pedido foi confirmado. Em breve entraremos em contato.</p>
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Voltar ao início
          </Link>
        </div>
      </main>
    </>
  )
}
