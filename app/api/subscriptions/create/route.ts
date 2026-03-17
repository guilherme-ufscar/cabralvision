import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { MercadoPagoConfig, PreApproval } from 'mercadopago'

const mp = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, telefone, cpf } = body

    const sub = await prisma.subscription.create({
      data: {
        status: 'pending',
        plano: 'mensal',
        valor: 49.90,
        nomeCliente: nome,
        emailCliente: email,
      },
    })

    const preApproval = new PreApproval(mp)
    const result = await preApproval.create({
      body: {
        reason: 'Plano Cabral Vision — Proteção Digital Mensal',
        auto_recurring: {
          frequency: 1,
          frequency_type: 'months',
          transaction_amount: 49.90,
          currency_id: 'BRL',
        },
        payer_email: email,
        back_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/assinatura/sucesso`,
        external_reference: String(sub.id),
        // notification_url configured in MP dashboard
      },
    })

    await prisma.subscription.update({
      where: { id: sub.id },
      data: { mpSubId: result.id },
    })

    return NextResponse.json({ init_point: result.init_point, subId: sub.id })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message || 'Erro interno' }, { status: 500 })
  }
}
