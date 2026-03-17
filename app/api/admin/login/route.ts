import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { email, senha } = await req.json()
  const admin = await prisma.admin.findUnique({ where: { email } })
  if (!admin) return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 })

  const valid = await bcrypt.compare(senha, admin.senha)
  if (!valid) return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 })

  const token = signToken({ id: admin.id, email: admin.email, role: 'admin' })
  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_token', token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 })
  return res
}
