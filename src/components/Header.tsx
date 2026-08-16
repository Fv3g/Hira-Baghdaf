import { Gem, Menu, MessageCircle, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'المنتجات', href: '#products' },
  { label: 'من نحن', href: '#about' },
  { label: 'تواصل معنا', href: '#contact' },
]

export function Header({
  cartCount,
  onOpenCart,
}: {
  cartCount: number
  onOpenCart: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
            <Gem className="h-5 w-5" />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="font-reem text-xl font-bold tracking-wide text-slate-900">
              HIRA
            </span>
            <span className="text-[11px] text-slate-500">
              فضيات بغداد
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">

          <a
            href="https://wa.me/9647866608293"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            واتساب
          </a>

          <button
            onClick={onOpenCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800"
            aria-label="سلة المشتريات"
          >
            <ShoppingBag className="h-5 w-5" />

            {cartCount > 0 && (
              <span className="absolute -top-1.5 -left-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-500 px-1 text-[11px] font-bold text-white ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 md:hidden"
            aria-label="القائمة"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
