import { Gem, Instagram, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-right lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
            <Gem className="h-4 w-4" />
          </span>

          <div className="flex flex-col leading-tight">
            <span className="font-reem text-lg font-bold text-slate-900">
              HIRA
            </span>
            <span className="text-[11px] text-slate-500">
              فضيات بغداد
            </span>
          </div>
        </div>

        <p className="max-w-sm text-xs leading-relaxed text-slate-500">
          مجوهرات فضية عيار 925 أصلية، صياغة عراقية فاخرة، توصيل لجميع المحافظات.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/9647866608293"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-300 hover:text-sky-700"
            aria-label="واتساب"
          >
            <MessageCircle className="h-4 w-4" />
          </a>

          <a
            href="https://instagram.com/hira.baghdad"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-300 hover:text-sky-700"
            aria-label="انستغرام"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-100 py-4 text-center text-[11px] text-slate-400">
        © {new Date().getFullYear()} HIRA — فضيات بغداد. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}
