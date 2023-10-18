import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

import '../globals.css';

const rubik = localFont({
  src: [
    {
      path: '../../public/fonts/Rubik-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rubik-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Rubik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rubik-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Rubik-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rubik-LightItalic.ttf',
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

/* eslint-disable-next-line */
export const generateStaticParams = () => {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'fr' }];
};

interface Props {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout: FC<Props> = async ({ children, params: { locale } }) => {
  let messages: AbstractIntlMessages = {};
  try {
    messages = (
      (await import(`../../messages/${locale}.json`)) as Record<string, unknown>
    ).default as AbstractIntlMessages;
  } catch (error) {
    notFound();
  }

  return (
    <html
      className='h-[100%]'
      lang={locale}
    >
      <body
        className={`h-[100%] ${rubik.variable} font-sans font-light bg-pale-prune text-white`}
      >
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
