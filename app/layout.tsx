import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const rubik = localFont({
  src: [
    {
      path: '../public/fonts/Rubik-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Rubik-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Rubik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Rubik-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Rubik-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Rubik-LightItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Daniel Ramírez Software',
  description: 'The Daniel Ramírez personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${rubik.variable} font-sans`}>{children}</body>
    </html>
  );
}
