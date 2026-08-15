import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useMemo, useState } from 'react'
import productsData from '@/data/products'
import type { CartItem, Product, ToastKind, ToastMessage } from '@/types'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { ProductGrid } from '@/components/ProductGrid'
import { CartDrawer } from '@/components/CartDrawer'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ToastStack } from '@/components/Toast'

export const Route = createFileRoute('/')({
  component: HiraStore,
})

let toastCounter = 0

function HiraStore() {
  const [cart, setCart] = useState<Array<CartItem>>([])
  const [wishlist, setWishlist] = useState<Set<string>>(new Set())
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toasts, setToasts] = useState<Array<ToastMessage>>([])

  const pushToast = useCallback((kind: ToastKind, text: string) => {
    toastCounter += 1
    const id = toastCounter
    setToasts((prev) => [...prev, { id, kind, text }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3000)
  }, [])

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const handleAddToCart = useCallback(
    (product: Product) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.product.id === product.id)
        if (existing) {
          return prev.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        }
        return [...prev, { product, quantity: 1 }]
      })
      pushToast('cart', `تمت إضافة "${product.name}" إلى السلة`)
    },
    [pushToast],
  )

  const handleToggleWishlist = useCallback(
    (product: Product) => {
      setWishlist((prev) => {
        const next = new Set(prev)
        if (next.has(product.id)) {
          next.delete(product.id)
          pushToast('wishlist-remove', `تمت إزالة "${product.name}" من المفضلة`)
        } else {
          next.add(product.id)
          pushToast('wishlist', `تمت إضافة "${product.name}" إلى المفضلة`)
        }
        return next
      })
    },
    [pushToast],
  )

  const handleIncrement = useCallback((productId: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }, [])

  const handleDecrement = useCallback((productId: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const handleRemove = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }, [])

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  )

  return (
    <div className="min-h-screen bg-white font-cairo text-slate-900" dir="rtl">
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />
      <TrustStrip />
      <ProductGrid
        products={productsData}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />
      <About />
      <Contact />
      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        items={cart}
        onClose={() => setIsCartOpen(false)}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
      />

      <ToastStack toasts={toasts} onDismiss={dismissToast} />
    </div>
  )
}
