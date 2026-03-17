import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

function getAdmin(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  return token ? verifyToken(token) : null
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!getAdmin(req)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const { id } = await params
  const data = await req.json()
  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: {
      nome: data.nome,
      descricao: data.descricao || null,
      preco: Number(data.preco),
      imagem: data.imagem || null,
      categoria: data.categoria || null,
      estoque: Number(data.estoque) || 0,
      ativo: data.ativo !== false,
    },
  })
  return NextResponse.json(product)
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!getAdmin(req)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const { id } = await params
  await prisma.product.delete({ where: { id: Number(id) } })
  return NextResponse.json({ ok: true })
}
