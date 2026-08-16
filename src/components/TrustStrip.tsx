import { Gem, RefreshCw, ShieldCheck, Truck } from 'lucide-react'

const FEATURES = [
  {
    icon: Truck,
    title: 'توصيل لكل المحافظات',
    text: 'شحن سريع وآمن إلى جميع أنحاء العراق',
  },
  {
    icon: Gem,
    title: 'فضة عيار 925 نقية',
    text: 'ضمان أصالة كل قطعة من مجوهراتنا',
  },
  {
    icon: RefreshCw,
    title: 'استبدال خلال 7 أيام',
    text: 'سياسة استبدال مرنة تضمن رضاكِ التام',
  },
  {
    icon: ShieldCheck,
    title: 'دفع عند الاستلام',
    text: 'اطمئني وادفعي بعد فحص القطعة',
  },
]

export function TrustStrip() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-700">
              <feature.icon className="h-5 w-5" />
            </span>

            <h3 className="text-sm font-bold text-slate-800">
              {feature.title}
            </h3>

            <p className="text-xs leading-relaxed text-slate-500">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
