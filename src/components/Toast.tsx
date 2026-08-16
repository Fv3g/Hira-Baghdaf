import { Check, Heart, X } from 'lucide-react'
import type { ToastMessage } from '@/types'

const ICONS = {
  cart: Check,
  wishlist: Heart,
  'wishlist-remove': X,
} as const

export function ToastStack({
  toasts,
  onDismiss,
}: {
  toasts: Array<ToastMessage>
  onDismiss: (id: number) => void
}) {
  return (
    <div className="fixed bottom-4 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.kind]

        return (
          <div
            key={toast.id}
            role="status"
            className="animate-toast-in flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg shadow-slate-900/10 backdrop-blur"
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                toast.kind === 'wishlist-remove'
                  ? 'bg-slate-100 text-slate-500'
                  : 'bg-sky-100 text-sky-700'
              }`}
            >
              <Icon className="h-4 w-4" />
            </span>

            <p className="flex-1 text-sm font-medium text-slate-700">
              {toast.text}
            </p>

            <button
              onClick={() => onDismiss(toast.id)}
              className="text-slate-400 transition hover:text-slate-600"
              aria-label="إغلاق"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
