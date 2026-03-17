import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token || !verifyToken(token)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })

  const [totalClientes, totalPedidos, pedidos, assinaturasAtivas] = await Promise.all([
    prisma.user.count(),
    prisma.order.count(),
    prisma.order.findMany({ select: { total: true } }),
    prisma.subscription.count({ where: { status: 'active' } }),
  ])

  const receita = pedidos.reduce((acc, o) => acc + o.total, 0)

  return NextResponse.json({ totalClientes, totalPedidos, receita, assinaturasAtivas })
}
