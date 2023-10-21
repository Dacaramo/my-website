'use client';

import { FC, ReactNode, useRef, useState, useTransition } from 'react';
import {
  faServicestack,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faMediumM } from '@fortawesome/free-brands-svg-icons/faMediumM';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {
  faAnglesUp,
  faArrowLeft,
  faArrowUp,
  faBars,
  faBellConcierge,
  faBriefcase,
  faCircleLeft,
  faFilePen,
  faHome,
  faQuestion,
  faRocket,
  faUpLong,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

import WhatsAppIcon from '@/app/components/icons/WhatsAppIcon';
import QuickLink from '@/app/components/QuickLink/QuickLink';
import {
  ACID_GREEN,
  BLACK,
  PALE_ACID_GREEN,
  PALE_BLACK,
  PALE_PRUNE,
  PRUNE,
  WHITE,
} from '@/app/constants/colors';
import {
  DEV_PROFILE_LINK,
  getMailToLink,
  getWhatsAppMessageMeLink,
  GITHUB_PROFILE_LINK,
  INSTAGRAM_PROFILE_LINK,
  LOCATION_GOOGLE_MAPS_LINK,
  MEDIUM_PROFILE_LINK,
  STACK_OVERFLOW_PROFILE_LINK,
  TIKTOK_PROFILE_LINK,
  YOUTUBE_CHANNEL_LINK,
} from '@/app/constants/links';

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

  const backLinkRef = useRef<HTMLAnchorElement | null>(null);

  const iconSize = 20;
  const flexRowClasses = 'flex flex-row gap-4 items-center';
  const navbarLinkClasses =
    'text-paragraph font-medium text-pale-acid-green hover:text-acid-green transition-all';
  const hamburgerMenuLinkClasses =
    'flex flex-row justify-start items-center gap-4 text-paragraph font-medium text-pale-acid-green hover:text-acid-green transition-all';
  const footerHeadingClasses = 'text-subtitle font-bold text-center';
  const footerSubheadingClasses = 'text-paragraph font-medium text-center';
  const footerFlexColClasses = 'flex flex-col gap-2 justify-start items-center';
  const footerFlexRowClasses =
    'flex flex-row gap-2 justify-center items-center';
  const floatingButtonClasses =
    'fixed flex justify-center items-center rounded-full border-4 border-black bg-acid-green text-black transition-all';
  const localeLanguages: Record<string, string> = {
    en: 'English 🇺🇸',
    es: 'Español 🇪🇸',
    fr: 'Français 🇫🇷',
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

  const handleClickOnHamburgerMenuLink = () => {
    const backLink = backLinkRef.current;
    if (!backLink) {
      return;
    }

    backLink.click();
  };

  const handleClickOnGoUp = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.click();
  };

  return (
    <>
      <header
        className={`w-full min-h-[7.5vh] px-[20px] sm:px-[75px] ${flexRowClasses} justify-start sm:justify-end`}
      >
        <a
          href='#hamburger-menu'
          className='sm:hidden flex justify-center items-center text-pale-acid-green hover:text-acid-green rounded-md transition-all'
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: iconSize }}
            width={20}
          />
        </a>
        <nav
          id='hamburger-menu'
          className='absolute w-[100vw] h-[100vh] z-[100] px-[20px] top-0 left-[-100vw] flex flex-col justify-start items-start gap-4 target:left-0 bg-pale-black transition-all'
        >
          <div className='w-full min-h-[7.5vh] flex flex-row justify-between items-center'>
            <a
              ref={backLinkRef}
              href='#'
              className='text-pale-acid-green hover:text-acid-green'
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ fontSize: iconSize }}
                width={20}
              />
            </a>
            <Select
              id='language-select'
              label={t('header.select.label')}
              placeholder={t('header.select.placeholder')}
              availableOptions={[
                { key: 'en', value: t('header.select.opt-one') },
                { key: 'es', value: t('header.select.opt-two') },
                { key: 'fr', value: t('header.select.opt-three') },
              ]}
              backgroundColor={PALE_BLACK}
              value={displayLanguage}
              onChange={handleLocaleChange}
            />
          </div>
          <Link
            className={`${hamburgerMenuLinkClasses}`}
            style={pathname === '/' ? { color: ACID_GREEN } : {}}
            href={'/'}
            onClick={handleClickOnHamburgerMenuLink}
          >
            <FontAwesomeIcon
              icon={faHome}
              width={25}
            />
            {t('header.navbar.home-link')}
          </Link>
          {/* <div className='w-full h-[1px] sm:w-[1px] sm:h-[25px] bg-pale-acid-green' /> */}
          <Link
            className={`${hamburgerMenuLinkClasses}`}
            style={pathname === '/services' ? { color: ACID_GREEN } : {}}
            href={'/services'}
            onClick={handleClickOnHamburgerMenuLink}
          >
            <FontAwesomeIcon
              icon={faBellConcierge}
              width={25}
            />
            {t('header.navbar.services-link')}
          </Link>
          {/* <div className='w-full h-[1px] sm:w-[1px] sm:h-[25px] bg-pale-acid-green' /> */}
          <Link
            className={`${hamburgerMenuLinkClasses}`}
            style={pathname === '/portfolio' ? { color: ACID_GREEN } : {}}
            href={'/portfolio'}
            onClick={handleClickOnHamburgerMenuLink}
          >
            <FontAwesomeIcon
              icon={faBriefcase}
              width={25}
            />
            {t('header.navbar.portfolio-link')}
          </Link>
          {/* <div className='w-full h-[1px] sm:w-[1px] sm:h-[25px] bg-pale-acid-green' /> */}
          <Link
            className={`${hamburgerMenuLinkClasses}`}
            style={pathname === '/blog' ? { color: ACID_GREEN } : {}}
            href={'/blog'}
            onClick={handleClickOnHamburgerMenuLink}
          >
            <FontAwesomeIcon
              icon={faFilePen}
              width={25}
            />
            {t('header.navbar.blog-link')}
          </Link>
          {/* <div className='w-full h-[1px] sm:w-[1px] sm:h-[25px] bg-pale-acid-green' /> */}
          <Link
            className={`${hamburgerMenuLinkClasses}`}
            style={pathname === '/about' ? { color: ACID_GREEN } : {}}
            href={'/about'}
            onClick={handleClickOnHamburgerMenuLink}
          >
            <FontAwesomeIcon
              icon={faQuestion}
              width={25}
            />
            {t('header.navbar.about-link')}
          </Link>
          {/* <div className='w-full h-[1px] sm:w-[1px] sm:h-[25px] bg-pale-acid-green' /> */}
        </nav>
        <nav className={`${flexRowClasses} hidden sm:flex`}>
          <Link
            className={`${navbarLinkClasses}`}
            style={pathname === '/' ? { color: ACID_GREEN } : {}}
            href={'/'}
          >
            {t('header.navbar.home-link')}
          </Link>
          <Link
            className={`${navbarLinkClasses}`}
            style={pathname === '/services' ? { color: ACID_GREEN } : {}}
            href={'/services'}
          >
            {t('header.navbar.services-link')}
          </Link>
          <Link
            className={`${navbarLinkClasses}`}
            style={pathname === '/portfolio' ? { color: ACID_GREEN } : {}}
            href={'/portfolio'}
          >
            {t('header.navbar.portfolio-link')}
          </Link>
          <Link
            className={`${navbarLinkClasses}`}
            style={pathname === '/blog' ? { color: ACID_GREEN } : {}}
            href={'/blog'}
          >
            {t('header.navbar.blog-link')}
          </Link>
          <Link
            className={`${navbarLinkClasses}`}
            style={pathname === '/about' ? { color: ACID_GREEN } : {}}
            href={'/about'}
          >
            {t('header.navbar.about-link')}
          </Link>
          <div className='w-full h-[1px] sm:w-[1px] sm:h-[25px] bg-pale-acid-green' />
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
        </nav>
      </header>
      <main className='w-full flex flex-col'>{children}</main>
      <footer className='w-full flex flex-col'>
        <section
          id='footer-content'
          className='w-full px-[20px] sm:px-[65px] gap-5 py-5 flex flex-row flex-wrap justify-center sm:justify-between items-start bg-black'
        >
          <section
            id='footer-contact-info-section'
            className='flex flex-col gap-2 justify-start items-center'
          >
            <h3 className={`${footerHeadingClasses}`}>
              {t('footer.contact-info-section.heading')}
            </h3>
            <address className={`${footerFlexColClasses} not-italic`}>
              <Link
                className='flex flex-row gap-2 items-center text-paragraph'
                href={getWhatsAppMessageMeLink(locale)}
                target='_blank'
              >
                {t.rich('footer.contact-info-section.phone', {
                  notable: (beforeText) => (
                    <b className='font-medium'>{beforeText}</b>
                  ),
                })}
                <WhatsAppIcon width={iconSize} />
              </Link>
              <Link
                className='flex flex-row gap-2 items-center text-paragraph'
                href={getMailToLink(locale)}
                target='_blank'
              >
                {t.rich('footer.contact-info-section.email', {
                  notable: (beforeText) => (
                    <b className='font-medium'>{beforeText}</b>
                  ),
                })}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: iconSize }}
                />
              </Link>
              <Link
                className='flex flex-row gap-2 items-center text-paragraph'
                href={LOCATION_GOOGLE_MAPS_LINK}
                target='_blank'
              >
                {t.rich('footer.contact-info-section.location', {
                  notable: (beforeText) => (
                    <b className='font-medium'>{beforeText}</b>
                  ),
                })}
              </Link>
            </address>
          </section>
          <div className='w-full h-[1px] bg-white sm:hidden' />
          <section
            id='footer-quick-links-section'
            className={`${footerFlexColClasses}`}
          >
            <h3 className={`${footerHeadingClasses}`}>
              {t('footer.quick-links-section.heading')}
            </h3>
            <h4 className={`${footerSubheadingClasses}`}>
              {t('footer.quick-links-section.my-content-platforms-subheading')}
            </h4>
            <nav className={`${footerFlexRowClasses}`}>
              <QuickLink
                href={YOUTUBE_CHANNEL_LINK}
                icon={faYoutube}
              />
              <QuickLink
                href={INSTAGRAM_PROFILE_LINK}
                icon={faInstagram}
              />
              <QuickLink
                href={TIKTOK_PROFILE_LINK}
                icon={faTiktok}
              />
            </nav>
            <h4 className={`${footerSubheadingClasses}`}>
              {t(
                'footer.quick-links-section.other-relevant-platforms-subheading'
              )}
            </h4>
            <nav className={footerFlexRowClasses}>
              <QuickLink
                href={GITHUB_PROFILE_LINK}
                icon={faGithub}
              />
              <QuickLink
                href={STACK_OVERFLOW_PROFILE_LINK}
                icon={faStackOverflow}
              />
            </nav>
          </section>
          <div className='w-full h-[1px] bg-white sm:hidden' />
          <section
            id='footer-other-info-section'
            className={`${footerFlexColClasses}`}
          >
            <h3 className={`${footerHeadingClasses}`}>
              {t('footer.other-info-section.heading')}
            </h3>
            <h4 className={`${footerSubheadingClasses}`}>
              {t('footer.other-info-section.blog-sites-subsection.heading')}
            </h4>
            <nav className={`${footerFlexRowClasses}`}>
              <QuickLink
                href={DEV_PROFILE_LINK}
                icon={faDev}
              />
              <QuickLink
                href={MEDIUM_PROFILE_LINK}
                icon={faMediumM}
              />
            </nav>
            <h4 className={`${footerSubheadingClasses}`}>
              {t(
                'footer.other-info-section.content-attribution-subsection.heading'
              )}
            </h4>
            <Link
              className='text-paragraph text-center'
              href='https://www.behance.net/dannalpez'
              target='_blank'
            >
              {t(
                'footer.other-info-section.content-attribution-subsection.first-attribution'
              )}
            </Link>
          </section>
        </section>
        <p
          id='footer-copyright'
          className='w-full min-h-[7.5vh] px-[75px] py-5 flex justify-center items-center text-center bg-pale-black'
        >
          {t('footer.copyright')}
        </p>
      </footer>
      <Link
        href={getWhatsAppMessageMeLink(locale)}
        target='_blank'
        className={`${floatingButtonClasses} hidden sm:flex bottom-[60px] right-[5px] sm:bottom-[10px] sm:right-[45px] w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] sm:w-[65px] sm:h-[65px] sm:hover:w-[70px] sm:hover:h-[70px] text-[25px] hover:text-[30px] sm:text-[35px] sm:hover:text-[40px] opacity-100`}
        style={{
          color: ACID_GREEN,
          backgroundColor: BLACK,
          borderColor: ACID_GREEN,
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
      <button
        type='button'
        className={`${floatingButtonClasses} bottom-[5px] right-[5px] sm:bottom-[30px] sm:right-[10px] w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] text-[25px] hover:text-[30px] opacity-50 sm:opacity-100`}
        onClick={handleClickOnGoUp}
      >
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </>
  );
};

export default Layout;
