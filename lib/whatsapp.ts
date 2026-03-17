export function getWhatsAppUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
  const text = message || process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de saber mais sobre o Plano Cabral Vision.'
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}
