import { MercadoPagoConfig, Payment, PreApproval } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
})

export const mpPayment = new Payment(client)
export const mpSubscription = new PreApproval(client)
export { client as mpClient }
