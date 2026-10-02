import React from 'react';

const servicesData = [
  {
    id: 1,
    title: 'تطوير واجهات المستخدم (Frontend)',
    description: 'بناء واجهات تفاعلية وسريعة باستخدام React و Tailwind CSS مع التركيز على الأداء واستجابة الشاشات.',
    icon: '💻',
  },
  {
    id: 2,
    title: 'تصميم تجربة المستخدم (UI/UX)',
    description: 'تحويل الأفكار إلى تصاميم سهلة الاستخدام وتجربة مستخدم ممتعة وسلسة لكل الأجهزة.',
    icon: '🎨',
  },
  {
    id: 3,
    title: 'تحسين الأداء و SEO',
    description: 'تحسين سرعة تحميل المواقع وتهيئتها لمحركات البحث لتسلق نتائج البحث الأولى.',
    icon: '🚀',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">الخدمات التي أقدمها</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">أساعدك في تحويل أفكارك إلى حلول رقمية احترافية</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}