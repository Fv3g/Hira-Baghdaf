import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import type { CartItem } from '@/types'
import { buildWhatsAppOrderUrl, formatIQD } from '@/lib/whatsapp'

export function CartDrawer({
  isOpen,
  items,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}: {
  isOpen: boolean
  items: Array<CartItem>
  onClose: () => void
  onIncrement: (productId: string) => void
  onDecrement: (productId: string) => void
  onRemove: (productId: string) => void
}) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  const handleCheckout = () => {
    if (items.length === 0) return

    window.open(
      buildWhatsAppOrderUrl(items),
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity ${
          isOpen
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-label="سلة المشتريات"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="flex items-center gap-2 font-reem text-lg font-bold text-slate-900">
            <ShoppingBag className="h-5 w-5" />
            سلة المشتريات
          </h2>

          <button
            onClick={onClose}
            aria-label="إغلاق السلة"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-slate-400">
              <ShoppingBag className="h-10 w-10" />
              <p className="text-sm">سلتك فارغة حالياً</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-3 border-b border-slate-100 pb-4"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-slate-800">
                        {item.product.name}
                      </h3>

                      <button
                        onClick={() =>
                          onRemove(item.product.id)
                        }
                        aria-label="حذف من السلة"
                        className="text-slate-400 transition hover:text-rose-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <span className="text-sm font-semibold text-sky-700">
                      {formatIQD(item.product.price)}
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          onDecrement(item.product.id)
                        }
                        aria-label="إنقاص الكمية"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>

                      <span className="w-4 text-center text-sm font-bold text-slate-800">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          onIncrement(item.product.id)
                        }
                        aria-label="زيادة الكمية"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-slate-200 px-5 py-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">
              المجموع الكلي
            </span>

            <span className="font-reem text-xl font-bold text-slate-900">
              {formatIQD(total)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 py-3.5 text-sm font-bold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            إتمام الطلب عبر واتساب
          </button>
        </div>
      </aside>
    </>
  )
}
