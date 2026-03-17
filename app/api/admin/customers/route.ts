import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token || !verifyToken(token)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const users = await prisma.user.findMany({
    include: { orders: true, subscriptions: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(users)
}
