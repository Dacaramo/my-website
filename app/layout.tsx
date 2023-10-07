import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

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
  /* eslint-disable-next-line */
  variable: '--font-rubik',
});

/* eslint-disable-next-line */
export const metadata: Metadata = {
  title: 'Daniel Ramírez Software',
  description: 'The Daniel Ramírez personal website',
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={`${rubik.variable} font-sans bg-pale-prune text-white`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
