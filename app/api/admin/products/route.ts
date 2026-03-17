import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

function getAdmin(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  return token ? verifyToken(token) : null
}

export async function GET(req: NextRequest) {
  if (!getAdmin(req)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(products)
}

export async function POST(req: NextRequest) {
  if (!getAdmin(req)) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const data = await req.json()
  const product = await prisma.product.create({
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
