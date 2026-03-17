import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { MercadoPagoConfig, PreApproval } from 'mercadopago'

const mp = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '' })

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token || !verifyToken(token)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const subs = await prisma.subscription.findMany({ include: { user: true }, orderBy: { createdAt: 'desc' } })
  return NextResponse.json(subs)
}

export async function DELETE(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token || !verifyToken(token)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const { id } = await req.json()
  const sub = await prisma.subscription.findUnique({ where: { id: Number(id) } })
  if (sub?.mpSubId) {
    try {
      const pa = new PreApproval(mp)
      await pa.update({ id: sub.mpSubId, body: { status: 'cancelled' } })
    } catch (e) { console.error(e) }
  }
  await prisma.subscription.update({ where: { id: Number(id) }, data: { status: 'cancelled' } })
  return NextResponse.json({ ok: true })
}
