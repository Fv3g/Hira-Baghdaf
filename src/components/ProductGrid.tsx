import { useMemo, useState } from 'react'
import type { Product, ProductCategory } from '@/types'
import { ProductCard } from '@/components/ProductCard'

const CATEGORIES: Array<{ key: ProductCategory | 'all'; label: string }> = [
  { key: 'all', label: 'الكل' },
  { key: 'rings', label: 'خواتم' },
  { key: 'necklaces', label: 'عقود' },
  { key: 'earrings', label: 'أقراط' },
  { key: 'bracelets', label: 'أساور' },
]

export function ProductGrid({
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
}: {
  products: Array<Product>
  wishlist: Set<string>
  onToggleWishlist: (product: Product) => void
  onAddToCart: (product: Product) => void
}) {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory | 'all'>('all')

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products

    return products.filter(
      (product) => product.category === activeCategory,
    )
  }, [products, activeCategory])

  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-10 text-center">
        <h2 className="font-reem text-3xl font-bold text-slate-900">
          تشكيلتنا المميزة
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          اختاري القطعة التي تناسب أناقتك من مجموعتنا الفضية
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              activeCategory === category.key
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlist.has(product.id)}
            onToggleWishlist={onToggleWishlist}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-slate-500">
          لا توجد منتجات في هذا التصنيف حالياً.
        </p>
      )}
    </section>
  )
}
