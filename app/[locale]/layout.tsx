import { FC, ReactNode } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
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
      path: '../../public/fonts/Rubik-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  /* eslint-disable-next-line */
  variable: '--font-rubik',
});

interface GenerateMetadataProps {
  params: {
    locale: string;
  };
  searchParams: Record<string, string | Array<string> | undefined>;
}

/* eslint-disable-next-line */
export const generateMetadata = ({
  params,
}: GenerateMetadataProps): Metadata => {
  const { locale } = params;

  const openGraph: OpenGraph = {
    images:
      'https://raw.githubusercontent.com/dacaramo/my-website/master/public/ramzeisOpenGraph.png',
    url: 'https://www.ramzeis.com/',
    type: 'website',
    siteName: 'Ramzeis Software',
    locale,
  };
  let metadata: Metadata = {
    generator: 'Next.js',
    applicationName: 'Ramzeis Software',
    creator: 'Daniel Ricardo Ramírez Molina',
    twitter: {
      card: 'summary_large_image',
      images:
        'https://raw.githubusercontent.com/dacaramo/my-website/master/public/ramzeisOpenGraph.png',
    },
  };
  if (locale === 'en') {
    metadata = {
      ...metadata,
      title: 'Ramzeis Software - Development Agency',
      description:
        'In Ramzeis we build software for small and medium size businesses no mather their activity. We also work for natural people.',
      keywords: [
        'software',
        'programming',
        'web development',
        'blog',
        'mobile apps',
        'web apps',
        'service',
        'fair price',
        'quality',
      ],
      openGraph: {
        ...openGraph,
        title: 'Ramzeis Software - Development Agency',
        description:
          'In Ramzeis we build software for small and medium size businesses no mather their activity. We also work for natural people.',
      },
    };
  } else if (locale === 'es') {
    metadata = {
      ...metadata,
      title: 'Ramzeis Software - Agencia de desarrollo',
      description:
        'En Ramzeis construimos software para negocios pequeños y medianos sin importar su actividad. También trabajamos para personas naturales.',
      keywords: [
        'software',
        'programación',
        'desarrollo web',
        'blog',
        'aplicaciones móviles',
        'aplicaciones web',
        'servicios',
        'precio justo',
        'calidad',
      ],
      openGraph: {
        ...openGraph,
        title: 'Ramzeis Software - Agencia de desarrollo',
        description:
          'En Ramzeis construimos software para negocios pequeños y medianos sin importar su actividad. También trabajamos para personas naturales.',
      },
    };
  } else if (locale === 'fr') {
    metadata = {
      ...metadata,
      title: 'Ramzeis Software - Agence de Développement',
      description:
        "Chez Ramzeis, nous concevons des logiciels pour les petites et moyennes entreprises, quel que soit leur secteur d'activité. Nous travaillons également avec des particuliers.",
      keywords: [
        'logiciel',
        'programmation',
        'développement web',
        'blog',
        'applications mobiles',
        'applications web',
        'services',
        'tarification équitable',
        'qualité',
      ],
      openGraph: {
        ...openGraph,
        title: 'Ramzeis Software - Agence de Développement',
        description:
          "Chez Ramzeis, nous concevons des logiciels pour les petites et moyennes entreprises, quel que soit leur secteur d'activité. Nous travaillons également avec des particuliers.",
      },
    };
  }

  return metadata;
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
