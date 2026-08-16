import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'
import { buildContactMessage } from '@/lib/whatsapp'

export function Contact() {
  const contactUrl = buildContactMessage(
    'مرحباً هيرا (فضيات بغداد)، لدي استفسار حول منتجاتكم.',
  )

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl bg-slate-900 px-6 py-14 text-center sm:px-12">
        <h2 className="font-reem text-3xl font-bold text-white">
          تواصلي معنا
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300">
          لديك استفسار عن منتج أو طلب خاص؟ فريقنا جاهز لمساعدتك عبر واتساب أو
          انستغرام.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={contactUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-sky-400"
          >
            <MessageCircle className="h-4 w-4" />
            واتساب: 9647866608293+
          </a>

          <a
            href="https://instagram.com/hira.baghdad"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Instagram className="h-4 w-4" />
            @hira.baghdad
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-xs text-slate-400 sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            بغداد، العراق — توصيل لجميع المحافظات
          </span>

          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            info@hira-baghdad.iq
          </span>
        </div>
      </div>
    </section>
  )
}
