import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'أحمد محمود',
    role: 'مدير مشروع - شركة تقنية',
    comment: 'عمل ممتاز واحترافية عالية في التسليم، سرعة في التنفيذ والاهتمام بأدق التفاصيل.',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: 2,
    name: 'سارة خالد',
    role: 'مؤسسة مشروع ناشئ',
    comment: 'تجربة العمل كانت رائعة، الواجهات جيدة جداً وتعمل بسلاسة على كافة الهواتف.',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">آراء العملاء والشركاء</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">ماذا يقول عني الذين عملت معهم</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow border border-gray-100 dark:border-gray-600 text-right"
            >
              <p className="text-gray-700 dark:text-gray-200 italic mb-6">"{item.comment}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-indigo-500"
                />
                <div>
                  <h4 className="font-semibold text-base">{item.name}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}