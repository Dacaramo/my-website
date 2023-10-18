'use client';

import { FC, ReactNode, useState, useTransition } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

import Select, { Option } from '../../components/Select/Select';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<string>('');

  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  const horizontalFlexBoxClasses = 'flex flex-row gap-4 items-center';
  const linkClasses =
    'font-medium text-pale-acid-green hover:text-acid-green transition-all';
  const localeLanguages: Record<string, string> = {
    en: 'English 🇺🇸',
    es: 'Spanish 🇪🇸',
    fr: 'French 🇫🇷',
  };
  const displayLanguage = language || localeLanguages[locale];

  const handleLocaleChange = (selectedOpt: Option | null) => {
    if (!selectedOpt) {
      return;
    }

    startTransition(() => {
      setLanguage(selectedOpt.value);
      router.replace(pathname, { locale: selectedOpt.key });
    });
  };

  return (
    <>
      <header
        className={`w-full h-[7.5vh] px-[75px] ${horizontalFlexBoxClasses} justify-end`}
      >
        <nav className={`${horizontalFlexBoxClasses}`}>
          <Link
            className={`${linkClasses}`}
            href={'/'}
          >
            {t('header.navbar.home-link')}
          </Link>
          <Link
            className={`${linkClasses}`}
            href={'/services'}
          >
            {t('header.navbar.services-link')}
          </Link>
          <Link
            className={`${linkClasses}`}
            href={'/portfolio'}
          >
            {t('header.navbar.portfolio-link')}
          </Link>
          <Link
            className={`${linkClasses}`}
            href={'/blog'}
          >
            {t('header.navbar.blog-link')}
          </Link>
          <Link
            className={`${linkClasses}`}
            href={'/about'}
          >
            {t('header.navbar.about-link')}
          </Link>
        </nav>
        <div className='w-[1px] h-[25px] bg-pale-acid-green' />
        <Select
          id='language-select'
          label={t('header.select.label')}
          placeholder={t('header.select.placeholder')}
          availableOptions={[
            { key: 'en', value: t('header.select.opt-one') },
            { key: 'es', value: t('header.select.opt-two') },
            { key: 'fr', value: t('header.select.opt-three') },
          ]}
          value={displayLanguage}
          onChange={handleLocaleChange}
        />
      </header>
      <main className='w-full flex flex-col'>{children}</main>
      {/* <footer>This is the footer</footer> */}
    </>
  );
};

export default Layout;
