import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { MercadoPagoConfig, Payment, PreApproval } from 'mercadopago'

const mp = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, data } = body

    if (type === 'payment') {
      const payment = new Payment(mp)
      const p = await payment.get({ id: data.id })
      const orderId = Number(p.external_reference)
      if (!isNaN(orderId)) {
        const status = p.status === 'approved' ? 'paid' : p.status === 'rejected' ? 'cancelled' : 'pending'
        await prisma.order.update({ where: { id: orderId }, data: { status } })
      }
    }

    if (type === 'subscription_preapproval') {
      const preApproval = new PreApproval(mp)
      const s = await preApproval.get({ id: data.id })
      const subId = Number(s.external_reference)
      if (!isNaN(subId)) {
        const status = s.status === 'authorized' ? 'active' : s.status === 'cancelled' ? 'cancelled' : 'pending'
        await prisma.subscription.update({ where: { id: subId }, data: { status } })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
