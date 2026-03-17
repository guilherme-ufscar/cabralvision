import Link from 'next/link'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-[#060e1a] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold mb-3">
            <span className="text-white">CABRAL</span>
            <span className="text-blue-400"> VISION</span>
          </div>
          <p className="text-sm">Proteção digital para sua visão, todos os dias.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
            <li><Link href="/assinatura" className="hover:text-white transition-colors">Assinar</Link></li>
            <li><a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contato</h4>
          <p className="text-sm">Dúvidas? Fale conosco pelo WhatsApp.</p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center text-sm">
        © {new Date().getFullYear()} Cabral Vision. Todos os direitos reservados.
      </div>
    </footer>
  )
}
