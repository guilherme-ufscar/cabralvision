import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hash = await bcrypt.hash('admin123', 10)
  await prisma.admin.upsert({
    where: { email: 'admin@cabralvision.com' },
    update: {},
    create: { email: 'admin@cabralvision.com', senha: hash, nome: 'Administrador' },
  })

  const produtos = [
    { nome: 'Óculos Blue Light Classic', descricao: 'Proteção contra luz azul com armação clássica', preco: 199.90, categoria: 'Clássico', estoque: 50 },
    { nome: 'Óculos Blue Light Sport', descricao: 'Design esportivo com máxima proteção digital', preco: 249.90, categoria: 'Esportivo', estoque: 30 },
    { nome: 'Óculos Blue Light Premium', descricao: 'Armação premium com lente de alta definição', preco: 349.90, categoria: 'Premium', estoque: 20 },
    { nome: 'Óculos Blue Light Feminino', descricao: 'Design elegante para o público feminino', preco: 219.90, categoria: 'Feminino', estoque: 40 },
  ]

  for (const p of produtos) {
    await prisma.product.upsert({
      where: { id: produtos.indexOf(p) + 1 },
      update: {},
      create: p,
    })
  }

  console.log('Seed concluído! Admin: admin@cabralvision.com / senha: admin123')
}

main().catch(console.error).finally(() => prisma.$disconnect())
