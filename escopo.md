# ESCOPO COMPLETO DO PROJETO — CABRAL VISION

## 1. VISÃO GERAL DO PROJETO

Este projeto consiste no desenvolvimento de uma aplicação web completa, composta por uma landing page de alta conversão (frontend) e um sistema administrativo (backend), com foco em venda de assinaturas recorrentes de óculos com proteção digital.

O sistema deverá permitir:
- Apresentação institucional (landing page)
- Conversão via botões estratégicos
- Venda de produtos (óculos)
- Venda de assinaturas (plano recorrente)
- Gestão administrativa completa (produtos, clientes, pedidos e assinaturas)
- Integração com gateway de pagamento (Mercado Pago)
- Possibilidade de expansão futura

A arquitetura deve ser pensada como uma aplicação moderna, escalável e editável pelo cliente sem necessidade de conhecimento técnico.

---

## 2. TECNOLOGIAS OBRIGATÓRIAS

### Frontend
- React.js (preferencialmente com Next.js)
- CSS modular ou TailwindCSS
- Responsividade total (mobile-first)
- Componentização reutilizável

### Backend
- Node.js com Express OU API Routes do Next.js
- Banco de dados relacional (MySQL ou PostgreSQL)

### Painel Administrativo
- Interface web protegida por login
- CRUD completo

### Integrações
- Mercado Pago (assinaturas e pagamentos únicos)
- WhatsApp (link direto)

---

## 3. ESTRUTURA DA LANDING PAGE (SEGUIR FIELMENTE A IMAGEM)

### 3.1 HEADER (TOPO)
Elementos obrigatórios:
- Logo: "Cabral Vision"
- Menu:
  - Planos
  - Como Funciona
  - Depoimentos
  - FAQ
- Botão CTA: "ASSINE AGORA"

Comportamento:
- Menu fixo (sticky)
- Scroll suave para seções

---

### 3.2 HERO SECTION (PRIMEIRA DOBRA)

Conteúdo:
- Headline principal:
  "Sua visão trabalha o dia inteiro. Ela merece proteção o ano inteiro."
- Subheadline explicativa
- Botão CTA: "Quero proteger minha visão"

Imagem:
- Homem utilizando notebook com óculos (seguir referência visual)

Ações do botão:
- Direcionar para página de assinatura

---

### 3.3 SEÇÃO DE DORES DO CLIENTE

Título:
"Cansado de fadiga visual?"

Itens:
- Horas no computador?
- Óculos quebrados?
- Vista cansada?

---

### 3.4 BENEFÍCIOS DO PLANO

Cards com ícones:
- Óculos com lente blue light
- Troca por quebra
- Garantia de 30 dias
- Manutenção contínua

---

### 3.5 COMO FUNCIONA

Fluxo em 4 etapas:
1. Assine o plano
2. Envie sua receita
3. Escolha sua armação
4. Receba em casa

---

### 3.6 COMPARATIVO

Duas colunas:

#### Ótica Tradicional:
- Pagamento à vista
- Sem proteção digital
- Quebrou? Novo óculos

#### Cabral Vision:
- Mensalidade acessível
- Proteção Luz Azul
- 1 troca anual
- Suporte completo

Botão CTA:
"Assine e economize"

---

### 3.7 DEPOIMENTOS

Cards com:
- Foto do cliente
- Nome
- Depoimento

---

### 3.8 CTA FINAL

Texto:
"Pronto para proteger sua visão?"

Botão:
"ASSINAR AGORA"

---

## 4. FUNCIONALIDADES PRINCIPAIS

### 4.1 BOTÕES E REDIRECIONAMENTOS (CONFORME ÁUDIO)

Devem existir 3 fluxos principais:

1. WhatsApp
   - Botão abre conversa direta

2. Página de Produtos
   - Listagem de óculos

3. Página de Assinatura
   - Venda do plano recorrente

---

## 5. PÁGINA DE PRODUTOS

Funcionalidades:
- Listagem de produtos cadastrados
- Filtro por categoria
- Visualização de detalhes
- Botão "Adicionar ao carrinho"

Campos do produto:
- Nome
- Descrição
- Preço
- Imagem
- Categoria
- Estoque

---

## 6. CARRINHO DE COMPRAS

Funcionalidades:
- Adicionar/remover produtos
- Alterar quantidade
- Cálculo automático de total
- Botão "Finalizar compra"

---

## 7. CHECKOUT

Campos obrigatórios:
- Nome completo
- CPF
- Email
- Telefone
- Endereço completo

Integração:
- Mercado Pago (pagamento único e recorrente)

---

## 8. SISTEMA DE ASSINATURA

Funcionalidades:
- Plano recorrente mensal
- Cobrança automática
- Controle de status:
  - Ativo
  - Cancelado
  - Pendente

---

## 9. CADASTRO DE CLIENTES

Dados armazenados:
- Nome
- CPF
- Email
- Telefone
- Histórico de compras
- Status da assinatura

---

## 10. PAINEL ADMINISTRATIVO

Acesso:
- Login com autenticação

### 10.1 DASHBOARD
- Total de clientes
- Total de pedidos
- Receita
- Assinaturas ativas

---

### 10.2 GESTÃO DE PRODUTOS
CRUD completo:
- Criar produto
- Editar produto
- Excluir produto
- Upload de imagem

---

### 10.3 GESTÃO DE CLIENTES
- Listagem
- Visualização detalhada
- Histórico

---

### 10.4 GESTÃO DE PEDIDOS
- Listagem de pedidos
- Status:
  - Pago
  - Pendente
  - Enviado

---

### 10.5 GESTÃO DE ASSINATURAS
- Listagem de assinaturas
- Status
- Cancelamento manual

---

## 11. BANCO DE DADOS (MODELAGEM BÁSICA)

### Tabela: users
- id
- nome
- email
- senha
- telefone

### Tabela: products
- id
- nome
- descricao
- preco
- imagem
- estoque

### Tabela: orders
- id
- user_id
- total
- status

### Tabela: subscriptions
- id
- user_id
- status
- data_inicio

---

## 12. INTEGRAÇÃO COM MERCADO PAGO

Funcionalidades:
- Criar pagamento
- Criar assinatura
- Webhook para atualização automática
- Confirmação de pagamento

---

## 13. CONFIGURAÇÃO DE SERVIDOR

Requisitos:
- Hospedagem VPS ou Cloud
- Node.js instalado
- Banco de dados configurado
- SSL (HTTPS)
- Variáveis de ambiente:
  - API Mercado Pago
  - Banco de dados

---

## 14. REQUISITOS IMPORTANTES

- Sistema editável pelo cliente
- Interface simples no painel
- Código organizado e escalável
- SEO básico aplicado
- Performance otimizada

---

## 15. OBSERVAÇÕES FINAIS

Este projeto NÃO é apenas uma landing page, mas sim um sistema completo com:
- Venda de produtos
- Venda recorrente
- Gestão administrativa

A estrutura deve permitir crescimento futuro, incluindo:
- Novos planos
- Novos produtos
- Integrações adicionais

Todo o desenvolvimento deve seguir fielmente o layout apresentado na imagem de referência, garantindo alta conversão e experiência profissional.    