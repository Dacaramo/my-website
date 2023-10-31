'use client';
import { FC } from 'react';
import {
  faBookOpen,
  faCode,
  faEllipsis,
  faFileArrowDown,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import AboutPageLink from '@/app/components/AboutPageLink/AboutPageLink';
import TranslucidLink from '@/app/components/TranslucidLink/TranslucidLink';

interface Props {
  params: {
    locale: string;
  };
}

const AboutPage: FC<Props> = ({ params: { locale } }) => {
  const t = useTranslations('about-page');

  const imgWidth = 650;
  const imgHeight = 650;
  const imgQuality = 100;
  const pClasses = 'text-paragraph sm:text-subtitle';

  return (
    <>
      <div className='fixed top-0 -z-10 w-full h-full bg-pale-black' />
      <div className='absolute top-0 -z-10 w-full h-[100vh] bg-[url("/aboutPageCover.png")] bg-cover bg-center' />
      <section
        id='first-section'
        className='w-full min-h-[92.5vh] flex flex-col'
      >
        <h1 className='text-subtitle sm:text-title font-bold text-acid-green px-[20px] sm:px-[65px]'>
          {t('first-part.heading')}
        </h1>
        <section className='mt-auto px-[20px] py-[20px] sm:px-[65px] sm:py-[65px] w-full min-h-[30vh] flex flex-col justify-start sm:justify-start gap-4 items-center sm:flex-row bg-translucid-black-200'>
          <p className={`sm:w-[45%] ${pClasses} text-start`}>
            {t('first-part.paragraph')}
          </p>
          <TranslucidLink
            href={'/DanielRamírezCV.pdf'}
            download={'DanielRamírezCV.pdf'}
            style={{ marginLeft: 'auto' }}
            target='_blank'
            text={t('first-part.download-my-cv-button')}
            icon={faFileArrowDown}
          />
          <TranslucidLink
            href={'#details-section'}
            isAnchorElement
            download={'DanielRamírezCV.pdf'}
            target='_blank'
            text={t('first-part.learn-more-button')}
            icon={faEllipsis}
          />
        </section>
      </section>
      <section
        id='details-section'
        className='py-[50px] flex flex-col gap-[50px]'
      >
        <div className='px-[20px] sm:px-[65px] flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[50px]'>
          <Image
            className='w-[830px] rounded-xl shadow-classic-hovered sm:shadow-classic'
            src='/collegeCampus.png'
            alt='Pontifical Xavierian University campus image'
            width={imgWidth}
            height={imgHeight}
            quality={imgQuality}
          />
          <div className='flex flex-col gap-[20px]'>
            <p className={`${pClasses} text-center sm:text-start`}>
              {t('college.description')}
            </p>
            <nav className='flex flex-row justify-center items-center gap-[20px]'>
              <AboutPageLink
                href='https://wallet.xertify.co/certificates/58763E30A001'
                target='_blank'
                text={t('college.check-badge-button')}
                icon={faTrophy}
              />
            </nav>
          </div>
        </div>
        <div className='px-[20px] sm:px-[65px] flex flex-col gap-[20px]'>
          <p className={`${pClasses} text-center`}>
            {t('grade-project.description')}
          </p>
          <nav className='flex flex-col sm:flex-row justify-center items-center gap-[20px]'>
            <AboutPageLink
              href='https://github.com/VisionCivil/Tesis-2022-10'
              target='_blank'
              text={t('grade-project.browse-repo-button')}
              icon={faCode}
            />
            <AboutPageLink
              href='https://repository.javeriana.edu.co/bitstream/handle/10554/61822/483-attachment-correction1656462759Memorias.pdf?sequence=1&isAllowed=y'
              target='_blank'
              text={t('grade-project.read-thesis-button')}
              icon={faBookOpen}
            />
            <AboutPageLink
              href='https://wallet.xertify.co/certificates/58763E30A002'
              target='_blank'
              text={t('grade-project.check-badge-button')}
              icon={faTrophy}
            />
          </nav>
        </div>
        <div className='px-[20px] sm:px-[65px] py-[50px] flex flex-col gap-[20px] bg-black'>
          <p className={`${pClasses} text-center`}>{t('jobs-description')}</p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-[50px]'>
            <Image
              className='w-[300px] opacity-75 hover:opacity-100 transition-all'
              src='/pujLogo.png'
              alt='Pontifical Xavierian University campus image'
              width={imgWidth}
              height={imgHeight}
            />
            <Image
              className='w-[100px] opacity-75 hover:opacity-100 transition-all'
              src='/mccLogo.png'
              alt='Pontifical Xavierian University campus image'
              width={imgWidth}
              height={imgHeight}
            />
            <Image
              className='w-[300px] opacity-75 hover:opacity-100 transition-all'
              src='/manglarLogo.png'
              alt='Pontifical Xavierian University campus image'
              width={imgWidth}
              height={imgHeight}
            />
          </div>
        </div>
        <div className='px-[20px] sm:px-[65px] flex flex-row flex-wrap-reverse items-center gap-[50px]'>
          <div className='relative mb-[45px] sm:mb-0 ml-[15px] mt-[125px] mr-[36px] sm:ml-[125px] sm:mt-[100px] sm:mr-[50px]'>
            <Image
              className={`rounded-xl shadow-inverted-classic-hovered sm:shadow-inverted-classic grayscale hover:grayscale-0 transition-all w-[300px]`}
              src='/courseraLogo.png'
              alt="Polygon with all of it's nodes unselected"
              quality={imgQuality}
              width={imgWidth}
              height={imgHeight}
            />
            <Image
              className={`absolute bottom-[-45px] left-[-15px] sm:top-[-50px] sm:left-[-125px] rounded-xl shadow-classic-hovered sm:shadow-classic grayscale hover:grayscale-0 transition-all w-[450px]`}
              src='/udemyLogo.png'
              alt='Toolbar with action buttons'
              quality={imgQuality}
              width={imgWidth}
              height={imgHeight}
            />
            <Image
              className={`absolute top-[-125px] right-[-36px] sm:top-[-100px] sm:right-[-50px] rounded-xl shadow-classic-hovered sm:shadow-inverted-classic grayscale hover:grayscale-0 transition-all w-[200px]`}
              src='/platziLogo.png'
              alt='Toolbar with action buttons'
              quality={imgQuality}
              width={imgWidth}
              height={imgHeight}
            />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <p className={`${pClasses} text-center sm:text-start`}>
              {t('certifications-description')}
            </p>
          </div>
        </div>
        <div className='px-[20px] sm:px-[65px] flex flex-row flex-wrap items-center gap-[50px]'>
          <div className='flex flex-col gap-[20px]'>
            <p className={`${pClasses} text-center sm:text-end`}>
              {t('content-creation.description')}
            </p>
          </div>
          <div className='relative mt-[115px] mb-[135px] mr-[25px] sm:mb-[150px] sm:mr-[200px] sm:mt-0'>
            <Image
              className={`absolute bottom-[-135px] right-[-25px] sm:bottom-[-25px] sm:right-[-200px] rounded-xl shadow-inverted-classic-hovered sm:shadow-inverted-classic grayscale hover:grayscale-0 transition-all w-[150px] sm:w-[225px]`}
              src='/instagramLogo.png'
              alt='Toolbar with action buttons'
              quality={imgQuality}
              width={imgWidth}
              height={imgHeight}
            />
            <Image
              className={`absolute right-[-10px] top-[-115px] sm:top-auto sm:bottom-[-150px] sm:right-[-20px] rounded-xl shadow-classic-hovered sm:shadow-inverted-classic grayscale hover:grayscale-0 transition-all w-[125px] sm:w-[175px]`}
              src='/tiktokLogo.png'
              alt='Toolbar with action buttons'
              quality={imgQuality}
              width={imgWidth}
              height={imgHeight}
            />
            <Image
              className={`rounded-xl shadow-inverted-classic-hovered sm:shadow-inverted-classic grayscale hover:grayscale-0 transition-all w-[300px]`}
              src='/youtubeLogo.png'
              alt="Polygon with all of it's nodes unselected"
              quality={imgQuality}
              width={imgWidth}
              height={imgHeight}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
