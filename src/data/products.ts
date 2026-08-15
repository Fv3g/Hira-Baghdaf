import type { Product } from '@/types'

const products: Array<Product> = [
  {
    id: 'r-001',
    name: 'خاتم لؤلؤ الفضة',
    category: 'rings',
    price: 45000,
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
    description: 'خاتم فضة عيار 925 مرصع بحبة لؤلؤ طبيعية، تصميم أنيق يناسب الإطلالات اليومية والمناسبات.',
    badge: 'جديد',
  },
  {
    id: 'r-002',
    name: 'خاتم تاج ملكي',
    category: 'rings',
    price: 38000,
    image:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop',
    description: 'خاتم فضة بتصميم تاج مطعّم بأحجار زركون لامعة، صناعة عراقية دقيقة.',
  },
  {
    id: 'r-003',
    name: 'خاتم الزهرة الفضي',
    category: 'rings',
    price: 32000,
    oldPrice: 40000,
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop',
    description: 'خاتم بتصميم زهرة أنيقة، مناسب للاستخدام اليومي وكهدية مميزة.',
    badge: 'عرض خاص',
  },
  {
    id: 'n-001',
    name: 'عقد قلب بغداد',
    category: 'necklaces',
    price: 65000,
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
    description: 'عقد فضة بتصميم قلب أنيق مع سلسلة رفيعة، رمز للأناقة العراقية الأصيلة.',
    badge: 'الأكثر مبيعاً',
  },
  {
    id: 'n-002',
    name: 'عقد الهلال الفضي',
    category: 'necklaces',
    price: 58000,
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
    description: 'قلادة على شكل هلال مصنوعة من الفضة الخالصة عيار 925، تصميم بسيط وفخم.',
  },
  {
    id: 'n-003',
    name: 'عقد الحجر الأزرق',
    category: 'necklaces',
    price: 72000,
    image:
      'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?q=80&w=800&auto=format&fit=crop',
    description: 'عقد فضي مرصع بحجر أزرق سماوي، إطلالة راقية لكل المناسبات.',
    badge: 'جديد',
  },
  {
    id: 'e-001',
    name: 'أقراط اللؤلؤ الكلاسيكية',
    category: 'earrings',
    price: 28000,
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    description: 'أقراط فضة كلاسيكية بحبات لؤلؤ صناعية عالية الجودة، خفيفة ومريحة.',
    badge: 'الأكثر مبيعاً',
  },
  {
    id: 'e-002',
    name: 'أقراط النجمة اللامعة',
    category: 'earrings',
    price: 24000,
    image:
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800&auto=format&fit=crop',
    description: 'أقراط بتصميم نجمة متلألئة مطعّمة بأحجار الزركون، مناسبة للسهرات.',
  },
  {
    id: 'e-003',
    name: 'أقراط الدائرة الفضية',
    category: 'earrings',
    price: 21000,
    oldPrice: 27000,
    image:
      'https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=800&auto=format&fit=crop',
    description: 'أقراط بتصميم دائري بسيط وعصري، مثالية للاستخدام اليومي.',
    badge: 'عرض خاص',
  },
  {
    id: 'b-001',
    name: 'أسورة السلسلة الملكية',
    category: 'bracelets',
    price: 52000,
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
    description: 'أسورة فضة بتصميم سلسلة متينة وأنيقة، عيار 925 أصلي.',
  },
  {
    id: 'b-002',
    name: 'أسورة القلب المزدوج',
    category: 'bracelets',
    price: 47000,
    image:
      'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?q=80&w=800&auto=format&fit=crop',
    description: 'أسورة رقيقة بتصميم قلبين متشابكين، رمز للحب والعطاء.',
    badge: 'جديد',
  },
  {
    id: 'b-003',
    name: 'أسورة التنيس الفضية',
    category: 'bracelets',
    price: 68000,
    image:
      'https://images.unsplash.com/photo-1602752275438-53a1a76b91d2?q=80&w=800&auto=format&fit=crop',
    description: 'أسورة فضية مرصعة بأحجار زركون على طول السوار، فخامة تدوم.',
    badge: 'الأكثر مبيعاً',
  },
]

export default products
