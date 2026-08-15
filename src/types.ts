export type ProductCategory = 'rings' | 'necklaces' | 'earrings' | 'bracelets'

export type ProductBadge = 'جديد' | 'الأكثر مبيعاً' | 'عرض خاص'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  price: number
  oldPrice?: number
  image: string
  description: string
  badge?: ProductBadge
}

export interface CartItem {
  product: Product
  quantity: number
}

export type ToastKind = 'cart' | 'wishlist' | 'wishlist-remove'

export interface ToastMessage {
  id: number
  kind: ToastKind
  text: string
}
