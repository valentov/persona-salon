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
    <main>
      {/* Header */}
      <header>
        <div className="container header-content">
          <div className="logo">ПЕРСОНА <span style={{color: '#94a3b8', fontSize: '14px', fontWeight: 'normal'}}>| Салон красоты</span></div>
          <div className="address-phone">
            <span>📍 г. Энгельс, ул. 148-й Черниговской Дивизии, 8</span>
            <a href="tel:+79272281021" className="phone">+7 (927) 228-10-21</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container hero">
        <h1>Салон красоты «Персона»</h1>
        <p>Профессиональные парикмахерские услуги, сложное окрашивание и уход за вашими волосами в Энгельсе.</p>
        <button onClick={() => handleOpenModal()} className="btn-primary">
          Записаться онлайн
        </button>
      </section>

      {/* Services */}
      <section className="container">
        <h2 className="section-title">Наши услуги и цены</h2>
        <div className="grid">
          {services.map((item, index) => (
            <div key={index} className="card">
              <div>
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
              </div>
              <button onClick={() => handleOpenModal(item.name)} className="card-btn">
                Выбрать
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Салон красоты «Персона». Все права защищены.</p>
        <p style={{marginTop: '5px'}}>г. Энгельс, ул. 148-й Черниговской Дивизии, 8 | Тел: +7 (927) 228-10-21</p>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={() => setModalOpen(false)} className="close-btn">✕</button>
            <h3 style={{marginTop: 0, color: '#2dd4bf', marginBottom: '20px'}}>Онлайн-запись</h3>
            {submitted ? (
              <div className="success-msg">
                <div className="success-title">Заявка успешно отправлена!</div>
                <p style={{color: '#94a3b8', fontSize: '14px', marginBottom: '20px'}}>Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={() => setModalOpen(false)} className="btn-primary" style={{width: '100%'}}>
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {selectedService && (
                  <div className="selected-badge">
                    Услуга: <strong style={{color: '#2dd4bf'}}>{selectedService}</strong>
                  </div>
                )}
                <div className="form-group">
                  <label>Ваше имя</label>
                  <input required type="text" placeholder="Введите имя" />
                </div>
                <div className="form-group">
                  <label>Номер телефона</label>
                  <input required type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '10px'}}>
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
