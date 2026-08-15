import type { CartItem } from '@/types'

export const WHATSAPP_NUMBER = '9647866608293'

export function formatIQD(amount: number): string {
  return `${amount.toLocaleString('en-US')} د.ع`
}

export function buildContactMessage(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function buildOrderMessage(items: Array<CartItem>): string {
  const lines = [
    'مرحباً هيرا (فضيات بغداد) 👋',
    'أرغب بطلب المنتجات التالية:',
    '',
    ...items.map(
      (item, index) =>
        `${index + 1}. ${item.product.name} × ${item.quantity} — ${formatIQD(
          item.product.price * item.quantity,
        )}`,
    ),
    '',
    `المجموع الكلي: ${formatIQD(
      items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    )}`,
    '',
    'الرجاء تأكيد الطلب وتزويدي بمعلومات التوصيل. شكراً لكم 🙏',
  ]
  return lines.join('\n')
}

export function buildWhatsAppOrderUrl(items: Array<CartItem>): string {
  return buildContactMessage(buildOrderMessage(items))
}
