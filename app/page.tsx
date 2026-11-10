'use client';

import { useState } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { name: 'Женская короткая стрижка', price: '800 ₽' },
    { name: 'Мужская модельная стрижка', price: '600 ₽' },
    { name: 'Окрашивание в 1 тон', price: '2000 ₽' },
    { name: 'Сложное окрашивание', price: '3500 ₽' },
    { name: 'Наращивание волос', price: 'от 6000 ₽' },
    { name: 'Маникюр и гель-лак', price: '1500 ₽' },
    { name: 'Шитье седины', price: '4000 ₽' },
    { name: 'Наращивание и загущение сочных зон', price: '3000 ₽' },
  ];

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider text-teal-400">ПЕРСОНА</span>
            <span className="text-sm text-slate-400">| Салон красоты</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-slate-300">📍 г. Энгельс, ул. 148-й Черниговской Дивизии, 8</span>
            <a href="tel:+79272281021" className="text-teal-400 font-semibold hover:underline">
              +7 (927) 228-10-21
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Салон красоты «Персона»
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Профессиональные парикмахерские услуги, сложное окрашивание и уход за вашими волосами в Энгельсе.
        </p>
        <button
          onClick={() => handleOpenModal()}
          className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
        >
          Записаться онлайн
        </button>
      </section>

      {/* Prices Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Наши услуги и цены</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/50 transition"
            >
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-200">{item.name}</h3>
                <p className="text-teal-400 font-bold text-xl mb-4">{item.price}</p>
              </div>
              <button
                onClick={() => handleOpenModal(item.name)}
                className="w-full bg-slate-700 hover:bg-teal-600 hover:text-white text-slate-200 font-medium py-2 px-4 rounded-lg transition cursor-pointer text-sm"
              >
                Выбрать
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500 mt-20">
        <p>© 2026 Салон красоты «Персона». Все права защищены.</p>
        <p className="mt-1">г. Энгельс, ул. 148-й Черниговской Дивизии, 8 | Тел: +7 (927) 228-10-21</p>
      </footer>

      {/* Booking Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Онлайн-запись</h3>
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-lg font-semibold text-green-400 mb-2">Заявка успешно отправлена!</p>
                <p className="text-sm text-slate-300 mb-6">Мы свяжемся с вами в ближайшее время по указанному номеру.</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-teal-500 text-slate-950 font-bold px-6 py-2 rounded-lg cursor-pointer"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {selectedService && (
                  <div className="text-sm bg-slate-800 p-3 rounded-lg text-slate-300 border border-slate-700">
                    Выбранная услуга: <strong className="text-teal-300">{selectedService}</strong>
                  </div>
                )}
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Ваше имя</label>
                  <input
                    required
                    type="text"
                    placeholder="Введите имя"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Номер телефона</label>
                  <input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 rounded-lg transition cursor-pointer mt-2"
                >
                  Подтвердить запись
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
