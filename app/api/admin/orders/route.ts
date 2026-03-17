import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token || !verifyToken(token)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const orders = await prisma.order.findMany({
    include: { items: { include: { product: true } }, user: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(orders)
}

export async function PUT(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token || !verifyToken(token)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const { id, status } = await req.json()
  const order = await prisma.order.update({ where: { id: Number(id) }, data: { status } })
  return NextResponse.json(order)
}
