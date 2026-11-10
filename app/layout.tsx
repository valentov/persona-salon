import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Салон красоты «Персона»',
  description: 'Профессиональные парикмахерские услуги в Энгельсе',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
