'use client';

import { FC } from 'react';
import { faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons/faAws';
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons/faSearchengin';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faBoxesStacked,
  faBrain,
  faChessRook,
  faCircleUser,
  faCogs,
  faCreditCard,
  faDatabase,
  faFile,
  faFileZipper,
  faFlaskVial,
  faKey,
  faLanguage,
  faLaptopCode,
  faLayerGroup,
  faMapLocationDot,
  faMobileButton,
  faMobileScreen,
  faPalette,
  faPersonCircleCheck,
  faPuzzlePiece,
  faRectangleAd,
  faServer,
  faShop,
  faSpinner,
  faSquareRootAlt,
  faTowerCell,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { CardProps } from '@/app/components/Card/Card';
import CardGrid from '@/app/components/CardGrid/CardGrid';
import AmplifyIcon from '@/app/components/icons/AmplifyIcon';
import FirebaseIcon from '@/app/components/icons/FirebaseIcon';
import MongoDBIcon from '@/app/components/icons/MongoDBIcon';
import OAuthIcon from '@/app/components/icons/OAuthIcon';
import PercentageInformer, {
  PercentageInformerProps,
} from '@/app/components/PercentageInformer/PercentageInformer';
import { PALE_ACID_GREEN } from '@/app/constants/colors';
import { getMailToLink, getWhatsAppMessageMeLink } from '@/app/constants/links';

import HomePageLink from '../../components/HomePageLink/HomePageLink';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

interface Props {}

const HomePage: FC<Props> = () => {
  const t = useTranslations('home-page');
  const locale = useLocale();

  const cardIconSize = 85;
  const softwareSkillsetCards: Array<CardProps> = [
    {
      headingText: t('my-software-skillset.strategic-approach.heading'),
      paragraphText: t('my-software-skillset.strategic-approach.paragraph'),
      icon: faChessRook,
    },
    {
      headingText: t('my-software-skillset.internationalization.heading'),
      paragraphText: t('my-software-skillset.internationalization.paragraph'),
      icon: faLanguage,
    },
    {
      headingText: t('my-software-skillset.multiple-themes.heading'),
      paragraphText: t('my-software-skillset.multiple-themes.paragraph'),
      icon: faPalette,
    },
    {
      headingText: t('my-software-skillset.state-management.heading'),
      paragraphText: t('my-software-skillset.state-management.paragraph'),
      icon: faShop,
    },
    {
      headingText: t('my-software-skillset.data-caching.heading'),
      paragraphText: t('my-software-skillset.data-caching.paragraph'),
      icon: faDatabase,
    },
    {
      headingText: t('my-software-skillset.error-behaviors.heading'),
      paragraphText: t('my-software-skillset.error-behaviors.paragraph'),
      icon: faTriangleExclamation,
    },
    {
      headingText: t('my-software-skillset.optimization.heading'),
      paragraphText: t('my-software-skillset.optimization.paragraph'),
      icon: faCogs,
    },
    {
      headingText: t('my-software-skillset.applied-mathematics.heading'),
      paragraphText: t('my-software-skillset.applied-mathematics.paragraph'),
      icon: faSquareRootAlt,
    },
    {
      headingText: t('my-software-skillset.loading-behaviors.heading'),
      paragraphText: t('my-software-skillset.loading-behaviors.paragraph'),
      icon: faSpinner,
    },
    {
      headingText: t('my-software-skillset.accessibility.heading'),
      paragraphText: t('my-software-skillset.accessibility.paragraph'),
      icon: faPersonCircleCheck,
    },
    {
      headingText: t('my-software-skillset.complex-components.heading'),
      paragraphText: t('my-software-skillset.complex-components.paragraph'),
      icon: faPuzzlePiece,
    },
    {
      headingText: t('my-software-skillset.bundle-size-reduction.heading'),
      paragraphText: t('my-software-skillset.bundle-size-reduction.paragraph'),
      icon: faFileZipper,
    },
    {
      headingText: t('my-software-skillset.css-animations.heading'),
      paragraphText: t('my-software-skillset.css-animations.paragraph'),
      icon: faCss3,
    },
    {
      headingText: t('my-software-skillset.responsiveness.heading'),
      paragraphText: t('my-software-skillset.responsiveness.paragraph'),
      icon: faMobileScreen,
    },
    {
      headingText: t('my-software-skillset.deep-modules.heading'),
      paragraphText: t('my-software-skillset.deep-modules.paragraph'),
      icon: faLayerGroup,
    },
    {
      headingText: t('my-software-skillset.seo.heading'),
      paragraphText: t('my-software-skillset.seo.paragraph'),
      icon: faSearchengin,
    },
    {
      headingText: t('my-software-skillset.testing.heading'),
      paragraphText: t('my-software-skillset.testing.paragraph'),
      icon: faFlaskVial,
    },
    {
      headingText: t('my-software-skillset.authentication.heading'),
      paragraphText: t('my-software-skillset.authentication.paragraph'),
      icon: faCircleUser,
    },
    {
      headingText: t('my-software-skillset.authorization.heading'),
      paragraphText: t('my-software-skillset.authorization.paragraph'),
      icon: faKey,
    },
    {
      headingText: t('my-software-skillset.api-consumption.heading'),
      paragraphText: t('my-software-skillset.api-consumption.paragraph'),
      icon: faServer,
    },
    {
      headingText: t('my-software-skillset.payments-integration.heading'),
      paragraphText: t('my-software-skillset.payments-integration.paragraph'),
      icon: faCreditCard,
    },
    {
      headingText: t('my-software-skillset.file-handling.heading'),
      paragraphText: t('my-software-skillset.file-handling.paragraph'),
      icon: faFile,
    },
    {
      headingText: t('my-software-skillset.maps.heading'),
      paragraphText: t('my-software-skillset.maps.paragraph'),
      icon: faMapLocationDot,
    },
    {
      headingText: t('my-software-skillset.e-commerce.heading'),
      paragraphText: t('my-software-skillset.e-commerce.paragraph'),
      icon: faBoxesStacked,
    },
    {
      headingText: t('my-software-skillset.ads-integration.heading'),
      paragraphText: t('my-software-skillset.ads-integration.paragraph'),
      icon: faRectangleAd,
    },
    {
      headingText: t('my-software-skillset.media-streaming.heading'),
      paragraphText: t('my-software-skillset.media-streaming.paragraph'),
      icon: faTowerCell,
    },
    {
      headingText: t('my-software-skillset.web-service-integration.heading'),
      paragraphText: t(
        'my-software-skillset.web-service-integration.paragraph'
      ),
      icon: faAws,
    },
    {
      headingText: t('my-software-skillset.oauth.heading'),
      paragraphText: t('my-software-skillset.oauth.paragraph'),
      icon: (
        <OAuthIcon
          width={cardIconSize}
          height={cardIconSize}
        />
      ),
    },
  ];
  const masteryTechStackCards: Array<CardProps> = [
    {
      headingText: t('my-mastery-tech-stack.react-js.heading'),
      paragraphText: t('my-mastery-tech-stack.react-js.paragraph'),
      icon: faReact,
    },
    {
      headingText: t('my-mastery-tech-stack.react-native.heading'),
      paragraphText: t('my-mastery-tech-stack.react-native.paragraph'),
      icon: faMobileButton,
    },
    {
      headingText: t('my-mastery-tech-stack.next-js.heading'),
      paragraphText: t('my-mastery-tech-stack.next-js.paragraph'),
      icon: faLaptopCode,
    },
    {
      headingText: t('my-mastery-tech-stack.node-js.heading'),
      paragraphText: t('my-mastery-tech-stack.node-js.paragraph'),
      icon: faNodeJs,
    },
    {
      headingText: t('my-mastery-tech-stack.dynamo-db.heading'),
      paragraphText: t('my-mastery-tech-stack.dynamo-db.paragraph'),
      icon: faDatabase,
    },
    {
      headingText: t('my-mastery-tech-stack.aws.heading'),
      paragraphText: t('my-mastery-tech-stack.aws.paragraph'),
      icon: faAws,
    },
  ];
  const percentageInformers: Array<PercentageInformerProps> = [
    {
      legend: t('other-tech-i-know.figma'),
      percentage: 95,
      icon: faFigma,
    },
    {
      legend: t('other-tech-i-know.java'),
      percentage: 75,
      icon: faJava,
    },
    {
      legend: t('other-tech-i-know.amplify'),
      percentage: 75,
      icon: (
        <AmplifyIcon
          width={cardIconSize}
          height={cardIconSize}
          fill={PALE_ACID_GREEN}
        />
      ),
    },
    {
      legend: t('other-tech-i-know.python'),
      percentage: 70,
      icon: faPython,
    },
    {
      legend: t('other-tech-i-know.mongo-db'),
      percentage: 70,
      icon: (
        <MongoDBIcon
          width={cardIconSize}
          height={cardIconSize}
          fill={PALE_ACID_GREEN}
        />
      ),
    },
    {
      legend: t('other-tech-i-know.firebase'),
      percentage: 70,
      icon: (
        <FirebaseIcon
          width={cardIconSize}
          height={cardIconSize}
          fill={PALE_ACID_GREEN}
        />
      ),
    },
  ];
  const homePageButtonIconSize = 20;
  const flexRowClasses = 'flex flex-row flex-wrap';
  const flexColClasses = 'flex flex-col';
  const pClasses = 'text-paragraph text-center';
  const whiteHeadingClasses =
    'text-subtitle sm:text-title font-bold text-center';

  return (
    <>
      <div className='absolute top-0 w-full min-h-[100vh] -z-10 sm:hidden bg-translucid-black-200' />
      <section
        id='first-part'
        className={`w-full ${flexColClasses}`}
      >
        <section
          className={`w-[100%] sm:w-[60%] min-h-[62.5vh] px-[20px] sm:px-[65px] ${flexColClasses} justify-start items-start gap-4 sm:gap-10`}
        >
          <h1 className='text-subtitle sm:text-title font-light text-acid-green'>
            {t.rich('first-part.heading', {
              meaningful: (name) => (
                <strong className='font-bold'>
                  <br />
                  {name}
                </strong>
              ),
            })}
          </h1>
          <p className={`text-paragraph sm:text-subtitle text-start`}>
            {t('first-part.paragraph')}
          </p>
          <nav className={`mb-5 ${flexRowClasses} gap-4`}>
            <HomePageLink
              href={getWhatsAppMessageMeLink(locale)}
              text={t('first-part.message-me-link')}
              target='_blank'
              icon={
                <WhatsAppIcon
                  width={homePageButtonIconSize}
                  height={homePageButtonIconSize}
                />
              }
            />
            <HomePageLink
              href={getMailToLink(locale)}
              text={t('first-part.send-me-an-email-link')}
              target='_blank'
              icon={faEnvelope}
            />
            {/* <HomePageLink
              href={'/DanielRamírezCV.pdf'}
              download={'DanielRamírezCV.pdf'}
              target='_blank'
              text={t('first-part.download-my-cv-button')}
              icon={faFileArrowDown}
            /> */}
            <HomePageLink
              href={'#my-software-skillset'}
              isAnchorElement
              text={t('first-part.discover-my-skills-button')}
              icon={faBrain}
            />
          </nav>
        </section>
        <section className={`w-full min-h-[30vh] ${flexRowClasses}`}>
          <section
            id='software-development'
            className={`relative p-2 ${flexColClasses} justify-center items-center gap-2 flex-1 sm:flex-2 bg-black`}
          >
            <h1 className='text-subtitle text-center font-bold text-acid-green'>
              {t('first-part.software-development.heading')}
            </h1>
            <p className={`w-[75%] ${pClasses}`}>
              {t('first-part.software-development.paragraph')}
            </p>
            <div className='absolute top-[-597px] left-[-115px] w-[712px] h-[597px] -z-20 sm:hidden'>
              <Image
                src='/selfPicture.png'
                alt='Picture of Daniel Ramírez'
                quality={100}
                width={712}
                height={597}
              />
            </div>
          </section>
          <section
            id='product-development'
            className={`relative p-2 ${flexColClasses} justify-center items-center gap-2 flex-1 sm:flex-3 bg-pale-black`}
          >
            <h1 className='text-subtitle text-center font-bold text-acid-green'>
              {t('first-part.product-development.heading')}
            </h1>
            <p className={`w-[75%] ${pClasses}`}>
              {t('first-part.product-development.paragraph')}
            </p>
            <div className='absolute top-[-597px] w-[712px] h-[597px] -z-10 hidden sm:block'>
              <Image
                src='/selfPicture.png'
                alt='Picture of Daniel Ramírez'
                quality={100}
                width={712}
                height={597}
              />
            </div>
          </section>
        </section>
        <section
          className={`px-[20px] sm:px-[65px] py-[50px] ${flexColClasses} gap-[50px]`}
        >
          <section
            id='my-software-skillset'
            className={`${flexColClasses} gap-[50px]`}
          >
            <h2 className={`${whiteHeadingClasses}`}>
              {t('my-software-skillset.heading')}
            </h2>
            <CardGrid cards={softwareSkillsetCards} />
          </section>
          <section
            id='my-mastery-tech-stack'
            className={`${flexColClasses} gap-[50px]`}
          >
            <h2 className={`${whiteHeadingClasses}`}>
              {t('my-mastery-tech-stack.heading')}
            </h2>
            <CardGrid
              cards={masteryTechStackCards}
              desiredCardSize='lg'
            />
          </section>
          <section
            id='other-tech-i-know'
            className={`${flexColClasses} gap-[50px]`}
          >
            <h2 className={`${whiteHeadingClasses}`}>
              {t('other-tech-i-know.heading')}
            </h2>
            <ul className='flex flex-row flex-wrap gap-[25px] sm:gap-4'>
              {percentageInformers.map((informer) => {
                return (
                  <PercentageInformer
                    key={informer.legend}
                    {...informer}
                  />
                );
              })}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default HomePage;
