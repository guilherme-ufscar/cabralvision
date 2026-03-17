import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { MercadoPagoConfig, Preference } from 'mercadopago'

const mp = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, cpf, email, telefone, rua, numero, bairro, cidade, estado, cep, items } = body

    const endereco = `${rua}, ${numero}, ${bairro}, ${cidade}/${estado} - ${cep}`
    const total = items.reduce((acc: number, i: any) => acc + i.preco * i.quantidade, 0)

    const order = await prisma.order.create({
      data: {
        total,
        status: 'pending',
        nomeCliente: nome,
        emailCliente: email,
        telefoneCliente: telefone,
        cpfCliente: cpf,
        endereco,
        items: {
          create: items.map((i: any) => ({
            productId: i.id,
            quantidade: i.quantidade,
            preco: i.preco,
          })),
        },
      },
    })

    const preference = new Preference(mp)
    const pref = await preference.create({
      body: {
        items: items.map((i: any) => ({
          id: String(i.id),
          title: i.nome,
          quantity: i.quantidade,
          unit_price: i.preco,
          currency_id: 'BRL',
        })),
        payer: { name: nome, email },
        external_reference: String(order.id),
        back_urls: {
          success: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/pedido/sucesso`,
          failure: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/pedido/erro`,
          pending: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/pedido/pendente`,
        },
        auto_return: 'approved',
        notification_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/webhooks/mercadopago`,
      },
    })

    await prisma.order.update({
      where: { id: order.id },
      data: { mpPaymentId: pref.id },
    })

    return NextResponse.json({ init_point: pref.init_point, orderId: order.id })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message || 'Erro interno' }, { status: 500 })
  }
}
