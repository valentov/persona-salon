import React from 'react';

export default function PersonaHomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F2F5F6', color: '#101B2A', fontFamily: 'sans-serif' }}>
      {/* Шапка */}
      <header style={{ backgroundColor: '#101B2A', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#38B8B0', letterSpacing: '1px' }}>ПЕРСОНА</span>
          <span style={{ fontSize: '12px', color: '#d1d5db', marginLeft: '12px', paddingLeft: '12px', borderLeft: '1px solid #4b5563' }}>Салон красоты • Энгельс</span>
        </div>
        <div style={{ backgroundColor: '#38B8B0', color: '#101B2A', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px' }}>
          г. Энгельс, ул. 148-й Черниговской Дивизии, 8
        </div>
      </header>

      {/* Первый экран */}
      <section style={{ backgroundColor: '#123D46', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>Салон красоты «Персона»</h1>
          <p style={{ fontSize: '18px', color: '#e5e7eb', marginBottom: '32px' }}>Профессиональные парикмахерские услуги, сложное окрашивание и уход за волосами.</p>
          <div style={{ display: 'inline-block', backgroundColor: '#38B8B0', color: '#101B2A', padding: '12px 24px', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold' }}>
            Телефон: +7 (927) 228-10-21
          </div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section style={{ padding: '64px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#101B2A', marginBottom: '8px' }}>Наши услуги и цены</h2>
          <p style={{ color: '#4b5563' }}>Подтвержденный прайс-лист салона</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { title: 'Женская короткая стрижка', price: '800 ₽', time: '45 мин' },
            { title: 'Мужская модельная стрижка', price: '600 ₽', time: '30 мин' },
            { title: 'Окрашивание в 1 тон', price: '2 000 ₽', time: '120 мин' },
            { title: 'Сложное окрашивание', price: '3 500 ₽', time: '180 мин' },
            { title: 'Наращивание волос (работа) до 100гр', price: 'от 6 000 ₽', time: '180 мин' },
            { title: 'Маникюр и гель-лак', price: '1 500 ₽', time: '90 мин' },
            { title: 'Шитье седины', price: '4 000 ₽', time: '120 мин' },
            { title: 'Наращивание и загущение сочных зон', price: '3 000 ₽', time: '90 мин' },
          ].map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#101B2A', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>Длительность: ~ {item.time}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#123D46' }}>{item.price}</span>
                <span style={{ fontSize: '12px', backgroundColor: '#f3f4f6', color: '#374151', padding: '6px 12px', borderRadius: '8px', fontWeight: '500' }}>Запись по тел.</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Контакты */}
      <footer style={{ backgroundColor: '#101B2A', color: 'white', padding: '48px 24px', textAlign: 'center' }}>
        <p style={{ marginBottom: '8px', fontSize: '16px' }}>📍 Адрес: Саратовская область, г. Энгельс, ул. 148-й Черниговской Дивизии, 8</p>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>📞 Телефон: +7 (927) 228-10-21</p>
        <p style={{ fontSize: '14px', color: '#9ca3af' }}>© 2026 Салон красоты «Персона». Все права защищены.</p>
      </footer>
    </div>
  );
}
