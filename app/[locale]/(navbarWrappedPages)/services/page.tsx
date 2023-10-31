'use client';

import { FC } from 'react';
import {
  faCode,
  faComments,
  faDatabase,
  faEraser,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

import Card, { CardProps } from '@/app/components/Card/Card';
import CardGrid from '@/app/components/CardGrid/CardGrid';

interface Props {}

const ServicesPage: FC<Props> = () => {
  const t = useTranslations('services-page');

  const serviceSectionClasses = 'w-[100vw] h-[100vh] bg-cover bg-center';
  const semiTransparentLayer =
    'w-full h-full px-[20px] sm:px-[65px] py-5 bg-translucid-black-700 flex flex-col justify-center items-center gap-10';
  const h2Classes = 'text-subtitle sm:text-title font-bold text-center';
  const pClasses = 'text-paragraph sm:text-subtitle text-center';
  const strongClasses = 'font-bold';
  const cards: Array<CardProps> = [
    {
      headingText: t('software-development.heading'),
      paragraphText: t('software-development.card-paragraph'),
      icon: faCode,
      onClick: () => {
        const link = document.createElement('a');
        link.href = '#software-development-section';
        link.click();
      },
    },
    {
      headingText: t('software-maintenance.heading'),
      paragraphText: t('software-maintenance.card-paragraph'),
      icon: faWrench,
      onClick: () => {
        const link = document.createElement('a');
        link.href = '#software-maintenance-section';
        link.click();
      },
    },
    {
      headingText: t('database-design.heading'),
      paragraphText: t('database-design.card-paragraph'),
      icon: faDatabase,
      onClick: () => {
        const link = document.createElement('a');
        link.href = '#database-design-section';
        link.click();
      },
    },
    {
      headingText: t('consulting.heading'),
      paragraphText: t('consulting.card-paragraph'),
      icon: faComments,
      onClick: () => {
        const link = document.createElement('a');
        link.href = '#consulting-section';
        link.click();
      },
    },
    {
      headingText: t('prototyping.heading'),
      paragraphText: t('prototyping.card-paragraph'),
      icon: faEraser,
      onClick: () => {
        const link = document.createElement('a');
        link.href = '#prototyping-section';
        link.click();
      },
    },
  ];

  return (
    <>
      <section className='px-[20px] sm:px-[65px] flex flex-col gap-4'>
        <h1 className='text-subtitle sm:text-title font-light text-acid-green'>
          {t.rich('heading', {
            meaningful: (text) => (
              <strong className={`${strongClasses}`}>{text}</strong>
            ),
          })}
        </h1>
        <ul className='mb-[50px] flex flex-row gap-5 items-stretch flex-wrap'>
          {cards.map((card) => {
            return (
              <Card
                key={card.headingText}
                style={{ flexBasis: 300 }}
                {...card}
              />
            );
          })}
        </ul>
      </section>
      <section
        id='software-development-section'
        className={`${serviceSectionClasses} bg-[url("/softwareDevelopment.png")]`}
      >
        <div className={`${semiTransparentLayer}`}>
          <h2 className={`${h2Classes}`}>
            {t('software-development.heading')}
          </h2>
          <p className={`${pClasses}`}>
            {t.rich('software-development.paragraph-one', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
          <p className={`${pClasses}`}>
            {t.rich('software-development.paragraph-two', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
        </div>
      </section>
      <section
        id='software-maintenance-section'
        className={`${serviceSectionClasses} bg-[url("/softwareMaintenance.png")]`}
      >
        <div className={`${semiTransparentLayer}`}>
          <h2 className={`${h2Classes}`}>
            {t('software-maintenance.heading')}
          </h2>
          <p className={`${pClasses}`}>
            {t.rich('software-maintenance.paragraph-one', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
          <p className={`${pClasses}`}>
            {t.rich('software-maintenance.paragraph-two', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
        </div>
      </section>
      <section
        id='database-design-section'
        className={`${serviceSectionClasses} bg-[url("/databaseDesign.png")]`}
      >
        <div className={`${semiTransparentLayer}`}>
          <h2 className={`${h2Classes}`}>{t('database-design.heading')}</h2>
          <p className={`${pClasses}`}>
            {t.rich('database-design.paragraph-one', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
          <p className={`${pClasses}`}>
            {t.rich('database-design.paragraph-two', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
        </div>
      </section>
      <section
        id='consulting-section'
        className={`${serviceSectionClasses} bg-[url("/consulting.png")]`}
      >
        <div className={`${semiTransparentLayer}`}>
          <h2 className={`${h2Classes}`}>{t('consulting.heading')}</h2>
          <p className={`${pClasses}`}>
            {t.rich('consulting.paragraph-one', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
          <p className={`${pClasses}`}>
            {t.rich('consulting.paragraph-two', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
        </div>
      </section>
      <section
        id='prototyping-section'
        className={`${serviceSectionClasses} bg-[url("/prototyping.png")]`}
      >
        <div className={`${semiTransparentLayer}`}>
          <h2 className={`${h2Classes}`}>{t('prototyping.heading')}</h2>
          <p className={`${pClasses}`}>
            {t.rich('prototyping.paragraph-one', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
          <p className={`${pClasses}`}>
            {t.rich('prototyping.paragraph-two', {
              meaningful: (text) => (
                <strong className={`${strongClasses}`}>{text}</strong>
              ),
            })}
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
