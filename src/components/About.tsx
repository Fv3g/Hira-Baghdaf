import { Award, Gem, Handshake, ShieldCheck } from 'lucide-react'

const GUARANTEES = [
  {
    icon: Gem,
    title: 'فضة 925 أصلية',
    text: 'كل قطعة مختومة ومضمونة الأصالة',
  },
  {
    icon: ShieldCheck,
    title: 'جودة موثوقة',
    text: 'فحص دقيق لكل قطعة قبل التسليم',
  },
  {
    icon: Handshake,
    title: 'خدمة عملاء',
    text: 'دعم فوري عبر واتساب على مدار الأسبوع',
  },
  {
    icon: Award,
    title: 'سنوات من الخبرة',
    text: 'حرفية عراقية أصيلة في صياغة الفضة',
  },
]

export function About() {
  return (
    <section id="about" className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h2 className="font-reem text-3xl font-bold text-slate-900">
            من نحن
          </h2>

          <p className="mt-4 leading-relaxed text-slate-600">
            هيرا (فضيات بغداد) علامة عراقية متخصصة في تصميم وصياغة المجوهرات
            الفضية الفاخرة. نؤمن بأن الفضة الأصيلة تستحق أن تكون في متناول كل
            امرأة عراقية، لذلك نحرص على تقديم قطع مصنوعة من فضة عيار 925
            بتصاميم تجمع بين الأصالة والحداثة، مع خدمة توصيل موثوقة لجميع
            المحافظات.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {GUARANTEES.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sky-700 shadow-sm">
                  <item.icon className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
            alt="مجوهرات فضية هيرا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur">
            <p className="text-sm font-bold text-slate-900">
              ضمان 925 على جميع المنتجات
            </p>

            <p className="text-xs text-slate-500">
              استبدال مجاني خلال 7 أيام من الاستلام
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
