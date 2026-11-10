import React from 'react';

export const metadata = {
  title: 'Салон красоты «Персона» в Энгельсе',
  description: 'Официальный сайт салона красоты Персона',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
