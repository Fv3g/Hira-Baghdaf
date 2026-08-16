import { Heart, ShoppingBag } from 'lucide-react'
import type { Product } from '@/types'
import { formatIQD } from '@/lib/whatsapp'

const BADGE_STYLES: Record<string, string> = {
  جديد: 'bg-sky-600 text-white',
  'الأكثر مبيعاً': 'bg-slate-900 text-white',
  'عرض خاص': 'bg-rose-500 text-white',
}

export function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}: {
  product: Product
  isWishlisted: boolean
  onToggleWishlist: (product: Product) => void
  onAddToCart: (product: Product) => void
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span
            className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold ${BADGE_STYLES[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        <button
          onClick={() => onToggleWishlist(product)}
          aria-label="إضافة إلى المفضلة"
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow transition hover:text-rose-500"
        >
          <Heart
            className={`h-4 w-4 ${
              isWishlisted ? 'fill-rose-500 text-rose-500' : ''
            }`}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm font-bold text-slate-800">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-xs leading-relaxed text-slate-500">
          {product.description}
        </p>

        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex flex-col">
            <span className="font-reem text-base font-bold text-slate-900">
              {formatIQD(product.price)}
            </span>

            {product.oldPrice && (
              <span className="text-xs text-slate-400 line-through">
                {formatIQD(product.oldPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-sky-600"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  )
}
