'use client';

import { FC } from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

import HomePageButton from '../../components/HomePageButton/HomePageButton';
import HomePageLink from '../../components/HomePageLink/HomePageLink';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

interface Props {}

const HomePage: FC<Props> = () => {
  const t = useTranslations('home-page');

  const iconSize = 20;
  const flexRowClasses = 'flex flex-row';
  const flexColClasses = 'flex flex-col';
  const pClasses = 'text-paragraph text-center';

  return (
    <>
      <section
        id='first-part'
        className={`w-full ${flexColClasses}`}
      >
        <section
          className={`w-[50%] h-[62.5vh] px-[65px] ${flexColClasses} justify-start items-start gap-10`}
        >
          <h1 className='text-title font-bold text-acid-green'>
            {t('first-part.heading')}
          </h1>
          <p className={`text-subtitle text-start`}>
            {t('first-part.paragraph')}
          </p>
          <section className={`${flexRowClasses} gap-4`}>
            <nav className={`${flexRowClasses} gap-4`}>
              <HomePageLink
                href='https://web.whatsapp.com/'
                text={t('first-part.message-me-link')}
                icon={
                  <WhatsAppIcon
                    width={iconSize}
                    height={iconSize}
                  />
                }
              />
              <HomePageLink
                href='https://outlook.live.com/'
                text={t('first-part.send-me-an-email-link')}
                icon={faEnvelope}
              />
            </nav>
            <HomePageButton
              onClick={() => {
                /* TODO */
              }}
              text={t('first-part.download-my-cv-button')}
              icon={faFileArrowDown}
            />
          </section>
        </section>
        <section className={`w-full h-[30vh] ${flexRowClasses}`}>
          <section
            className={`${flexColClasses} justify-center items-center gap-2 flex-2 bg-black`}
          >
            <h1 className='text-subtitle text-center font-bold text-acid-green'>
              {t('first-part.software-development.heading')}
            </h1>
            <p className={`w-[75%] ${pClasses}`}>
              {t('first-part.software-development.paragraph')}
            </p>
          </section>
          <section
            className={`p-2 ${flexColClasses} justify-center items-center gap-2 flex-3 bg-pale-black`}
          >
            <h1 className='text-subtitle text-center font-bold text-acid-green'>
              {t('first-part.product-development.heading')}
            </h1>
            <p className={`w-[75%] ${pClasses}`}>
              {t('first-part.product-development.paragraph')}
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default HomePage;
