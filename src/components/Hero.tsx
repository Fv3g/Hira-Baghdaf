import { ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-slate-400/10 blur-3xl animate-pulse-slow"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-sky-200">
          <ShieldCheck className="h-4 w-4" />
          فضة عيار 925 أصلية مضمونة
        </div>

        <h1 className="max-w-3xl font-reem text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          هيرا للمجوهرات الفضية
          <span className="mt-2 block bg-gradient-to-l from-sky-300 to-slate-100 bg-clip-text text-transparent">
            أناقة بغدادية أصيلة
          </span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          تشكيلة فاخرة من الخواتم والعقود والأساور المصنوعة يدوياً من الفضة الخالصة،
          توصيل سريع إلى جميع محافظات العراق.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            تسوقي الآن
            <ArrowLeft className="h-4 w-4" />
          </a>

          <a
            href="https://wa.me/9647866608293"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Sparkles className="h-4 w-4" />
            تواصلي معنا واتساب
          </a>
        </div>
      </div>
    </section>
  )
}
