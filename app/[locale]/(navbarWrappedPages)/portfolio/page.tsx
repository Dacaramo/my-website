'use client';

import { FC, useState } from 'react';
import { faGithub, faReadme } from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faBookOpen,
  faEye,
  faGamepad,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Card, { CardProps } from '@/app/components/Card/Card';
import CardGrid from '@/app/components/CardGrid/CardGrid';
import Select, { Option } from '@/app/components/Select/Select';
import TranslucidLink from '@/app/components/TranslucidLink/TranslucidLink';
import { ACID_GREEN, PALE_PRUNE, PRUNE } from '@/app/constants/colors';
import {
  getProjectRepoLink,
  getProjectRunningLink,
} from '@/app/constants/links';
import { PortfolioProjectId } from '@/app/model/PortfolioProject';

interface Props {}

const PortfolioPage: FC<Props> = () => {
  const [selectedProjectId, setSelectedProjectId] =
    useState<PortfolioProjectId>('shape-creator');

  const t = useTranslations('portfolio-page');

  const bgImagePath: Record<PortfolioProjectId, string> = {
    'shape-creator': '/shapeCreatorBase.png',
    'poke-bowl-store': '/pokeBowlStoreBase.png',
    'rick-mortium': '/rickMortiumBase.png',
    'other-projects': '/otherProjectsBase.jpg',
  };
  const liClasses =
    'min-h-[7.5vh] px-5 flex justify-center items-center text-subtitle text-center font-medium text-pale-acid-green hover:text-acid-green cursor-pointer transition-all';
  const pClasses = 'text-paragraph sm:text-subtitle text-light';
  const featureDivClasses = 'flex flex-row items-center gap-[50px]';
  const imageClasses = 'rounded-xl';
  const otherProjectsLogoImageClasses =
    'relative w-[100px] h-[100px] sm:w-[250px] sm:h-[250px]';
  const imageWidth = 830;
  const imageHeight = 1;
  const imageQuality = 100;
  const innerSectionClasses = 'px-[20px] sm:px-[65px] flex flex-col gap-[50px]';
  const otherProjectsLogoCaptionClasses =
    'text-paragraph font-medium text-acid-green text-center';
  const usedLibrariesKeys: Record<PortfolioProjectId, Array<string>> = {
    'shape-creator': ['react', 'zustand', 'react-tooltip'],
    'poke-bowl-store': [
      'react',
      'tanstack-query',
      'zustand',
      'react-router',
      'axios',
      'react-paginate',
      'react-spinners',
    ],
    'rick-mortium': [
      'react',
      'tanstack-query',
      'zustand',
      'react-router',
      'axios',
      'react-spinners',
    ],
    'other-projects': [],
  };
  const usedLibrariesCards: Array<CardProps> = usedLibrariesKeys[
    selectedProjectId
  ].map((libraryKey) => {
    return {
      headingText: t(
        `${selectedProjectId}.used-libraries.${libraryKey}.heading`
      ),
      paragraphText: t(
        `${selectedProjectId}.used-libraries.${libraryKey}.paragraph`
      ),
    };
  });

  const handleChangeOnSelect = (selectedOpt: Option | null) => {
    if (!selectedOpt) {
      return;
    }

    setSelectedProjectId(selectedOpt.key as PortfolioProjectId);
  };

  const handleClickOnLi = (id: PortfolioProjectId) => {
    setSelectedProjectId(id);
    const link = document.createElement('a');
    link.href = '#';
    link.click();
  };

  return (
    <>
      <div
        className='absolute top-0 left-0 -z-20 w-full h-[100vh] bg-no-repeat bg-center'
        style={{
          backgroundImage: `url(${bgImagePath[selectedProjectId]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='w-full h-full bg-translucid-black' />
      </div>
      <section
        id='first-part'
        className='px-[20px] sm:px-[65px] h-[92.5vh] sm:h-[85vh] flex flex-col gap-4'
      >
        <div className='absolute top-0 right-0 flex justify-center items-center sm:hidden w-fit h-[7.5vh] mr-[20px]'>
          <Select
            id='project-select'
            label='Select a project'
            placeholder='select a project'
            availableOptions={[
              {
                key: 'shape-creator',
                value: 'Shape Creator',
              },
              {
                key: 'poke-bowl-store',
                value: 'Poke Bowl Store',
              },
              {
                key: 'rick-mortium',
                value: 'Rick Mortium',
              },
              {
                key: 'other-projects',
                value: t(`other-projects.first-part.heading`),
              },
            ]}
            value={t('mobile-select')}
            onChange={handleChangeOnSelect}
          />
        </div>
        <h1 className='text-subtitle sm:text-title font-bold text-acid-green'>
          {t(`${selectedProjectId}.first-part.heading`)}
        </h1>
        <p className='text-paragraph sm:text-subtitle'>
          {t(`${selectedProjectId}.first-part.paragraph`)}
        </p>
        {selectedProjectId !== 'other-projects' ? (
          <>
            <div className='flex flex-row items-center gap-4 opacity-75 hover:opacity-100 sm:hidden transition-all'>
              <FontAwesomeIcon
                icon={faLaptop}
                style={{ fontSize: 50 }}
              />
              <span className='text-paragraph'>
                {t(`${selectedProjectId}.first-part.device-description`)}
              </span>
            </div>
            <div className='mt-auto mb-[25px] flex flex-row justify-between items-center'>
              <div className='hidden sm:flex flex-row items-center gap-4 opacity-75  hover:opacity-100 transition-all'>
                <FontAwesomeIcon
                  icon={faLaptop}
                  style={{ fontSize: 50 }}
                />
                <span className='text-paragraph'>
                  {t(`${selectedProjectId}.first-part.device-description`)}
                </span>
              </div>
              <div className='sm:mr-[75px] w-full sm:w-auto flex flex-row flex-wrap items-center gap-4'>
                <TranslucidLink
                  href={getProjectRunningLink(selectedProjectId)}
                  target='_blank'
                  text={t(`${selectedProjectId}.first-part.see-online-button`)}
                  icon={faGamepad}
                />
                <TranslucidLink
                  href='#project-details'
                  text={t(
                    `${selectedProjectId}.first-part.read-details-button`
                  )}
                  isAnchorElement
                  icon={faBookOpen}
                />
                <TranslucidLink
                  href={getProjectRepoLink(selectedProjectId)}
                  target='_blank'
                  text={t(`${selectedProjectId}.first-part.browse-repo-button`)}
                  icon={faGithub}
                />
              </div>
            </div>
          </>
        ) : (
          <ul className='py-[50px] flex flex-row gap-[20px] sm:gap-[50px] overflow-x-auto'>
            <li>
              <Link
                className='flex flex-col items-center gap-2'
                href='https://github.com/VisionCivil/Tesis-2022-10'
                target='_blank'
              >
                <div className={`${otherProjectsLogoImageClasses}`}>
                  <Image
                    className='object-contain grayscale hover:grayscale-0 transition-all'
                    src='/visionCivilLogo.png'
                    fill
                    alt='Visión Civil'
                  />
                </div>
                <span className={`${otherProjectsLogoCaptionClasses}`}>
                  Visión Civil
                </span>
              </Link>
            </li>
            <li>
              <Link
                className='flex flex-col items-center gap-2'
                href='https://github.com/Dacaramo/bloom-react-app'
                target='_blank'
              >
                <div className={`${otherProjectsLogoImageClasses}`}>
                  <Image
                    className='object-contain grayscale hover:grayscale-0 transition-all'
                    src='/companyWebsiteLogo.png'
                    fill
                    alt='Company website'
                  />
                </div>
                <span className={`${otherProjectsLogoCaptionClasses}`}>
                  Company website
                </span>
              </Link>
            </li>
          </ul>
        )}
      </section>
      <ul
        id='project-list'
        className='w-fit min-h-[7.5vh] hidden sm:flex flex-row justify-start items-center rounded-tr-3xl bg-pale-prune'
      >
        <li
          className={`${liClasses}`}
          style={{
            backgroundColor:
              selectedProjectId === 'shape-creator' ? PRUNE : PALE_PRUNE,
            color: selectedProjectId === 'shape-creator' ? ACID_GREEN : '',
          }}
          onClick={() => handleClickOnLi('shape-creator')}
        >
          {t(`shape-creator.first-part.heading`)}
        </li>
        <li
          className={`${liClasses}`}
          style={{
            backgroundColor:
              selectedProjectId === 'poke-bowl-store' ? PRUNE : PALE_PRUNE,
            color: selectedProjectId === 'poke-bowl-store' ? ACID_GREEN : '',
          }}
          onClick={() => handleClickOnLi('poke-bowl-store')}
        >
          {t(`poke-bowl-store.first-part.heading`)}
        </li>
        <li
          className={`${liClasses}`}
          style={{
            backgroundColor:
              selectedProjectId === 'rick-mortium' ? PRUNE : PALE_PRUNE,
            color: selectedProjectId === 'rick-mortium' ? ACID_GREEN : '',
          }}
          onClick={() => handleClickOnLi('rick-mortium')}
        >
          {t(`rick-mortium.first-part.heading`)}
        </li>
        <li
          className={`${liClasses} rounded-tr-3xl`}
          style={{
            backgroundColor:
              selectedProjectId === 'other-projects' ? PRUNE : PALE_PRUNE,
            color: selectedProjectId === 'other-projects' ? ACID_GREEN : '',
          }}
          onClick={() => handleClickOnLi('other-projects')}
        >
          {'...'}
        </li>
      </ul>
      {selectedProjectId !== 'other-projects' && (
        <div
          id='project-details'
          className='flex flex-col gap-[50px] pt-[50px] bg-prune'
        >
          {selectedProjectId === 'shape-creator' && (
            <>
              <section
                id='features'
                className={`${innerSectionClasses}`}
              >
                <div className={`${featureDivClasses} flex-wrap-reverse`}>
                  <div className='relative mt-[41px] mr-[20px] sm:mt-[78.5px] sm:mr-[48px]'>
                    <Image
                      className={`${imageClasses} shadow-classic-hovered sm:shadow-classic`}
                      src='/shapeCreatorFeatureOneMain.png'
                      alt="Polygon with all of it's nodes unselected"
                      quality={imageQuality}
                      width={imageWidth}
                      height={imageHeight}
                    />
                    <Image
                      className={`absolute top-[-41px] right-[-20px] sm:top-[-78.5px] sm:right-[-48px] ${imageClasses} shadow-classic-hovered sm:shadow-classic w-[40px] sm:w-[96px]`}
                      src='/shapeCreatorFeatureOneSide.png'
                      alt='Toolbar with action buttons'
                      quality={imageQuality}
                      width={96}
                      height={imageHeight}
                    />
                  </div>
                  <p className={`${pClasses} text-center sm:text-start flex-1`}>
                    {t('shape-creator.features.feature-one')}
                  </p>
                </div>
                <div className={`${featureDivClasses} flex-wrap`}>
                  <p className={`${pClasses} text-center sm:text-end flex-1`}>
                    {t('shape-creator.features.feature-two')}
                  </p>
                  <div className='relative mb-[41px] ml-[20px] sm:mb-[78.5px] sm:ml-[48px]'>
                    <Image
                      className={`${imageClasses} shadow-classic-hovered sm:shadow-classic`}
                      src='/shapeCreatorFeatureTwoMain.png'
                      alt="Polygon with all of it's nodes unselected"
                      quality={imageQuality}
                      width={imageWidth}
                      height={imageHeight}
                    />
                    <Image
                      className={`absolute bottom-[-41px] left-[-20px] sm:bottom-[-78.5px] sm:left-[-48px] ${imageClasses} shadow-classic-hovered sm:shadow-classic w-[40px] sm:w-[96px]`}
                      src='/shapeCreatorFeatureTwoSide.png'
                      alt='Toolbar with action buttons'
                      quality={imageQuality}
                      width={96}
                      height={imageHeight}
                    />
                  </div>
                </div>
                <div className={`${featureDivClasses} flex-wrap-reverse`}>
                  <Image
                    className={`${imageClasses} shadow-classic-hovered`}
                    src='/shapeCreatorFeatureThree.png'
                    alt="Polygon with all of it's nodes unselected"
                    quality={imageQuality}
                    width={imageWidth}
                    height={imageHeight}
                  />
                  <p className={`${pClasses} text-center sm:text-start flex-1`}>
                    {t('shape-creator.features.feature-three')}
                  </p>
                </div>
                <div className={`${featureDivClasses} flex-wrap`}>
                  <p className={`${pClasses} text-center sm:text-end flex-1`}>
                    {t('shape-creator.features.feature-four')}
                  </p>
                  <Image
                    className={`${imageClasses} shadow-classic-hovered`}
                    src='/shapeCreatorFeatureFour.png'
                    alt="Polygon with all of it's nodes unselected"
                    quality={imageQuality}
                    width={imageWidth}
                    height={imageHeight}
                  />
                </div>
              </section>
              <p
                className={`bg-black px-[20px] sm:px-[65px] py-[50px] ${pClasses} text-center`}
              >
                {t('shape-creator.features.feature-five')}
              </p>
            </>
          )}
          {selectedProjectId === 'poke-bowl-store' && (
            <>
              <section
                id='features'
                className={`${innerSectionClasses}`}
              >
                <div className={`${featureDivClasses} flex-wrap-reverse`}>
                  <div className='relative mb-[28px] mr-[28px] sm:mb-[50px] sm:mr-[48px]'>
                    <Image
                      className={`${imageClasses} shadow-inverted-classic-hovered sm:shadow-inverted-classic`}
                      src='/pokeBowlStoreFeatureOneMain.png'
                      alt="Polygon with all of it's nodes unselected"
                      quality={imageQuality}
                      width={imageWidth}
                      height={imageHeight}
                    />
                    <Image
                      className={`absolute bottom-[-28px] right-[-20px] sm:bottom-[-50px] sm:right-[-48px] ${imageClasses} shadow-inverted-classic-hovered sm:shadow-inverted-classic`}
                      src='/pokeBowlStoreFeatureOneSide.png'
                      alt='Toolbar with action buttons'
                      quality={imageQuality}
                      width={600}
                      height={imageHeight}
                    />
                  </div>
                  <p className={`${pClasses} text-center sm:text-start flex-1`}>
                    {t('poke-bowl-store.features.feature-one')}
                  </p>
                </div>
                <div className={`${featureDivClasses} flex-wrap`}>
                  <p className={`${pClasses} text-center sm:text-end flex-1`}>
                    {t('poke-bowl-store.features.feature-two')}
                  </p>
                  <div className='relative mb-[45px] ml-[20px] mt-[30px] mr-[36px] sm:mb-[71.25px] sm:ml-[48px] sm:mt-[36.25px] sm:mr-[48px]'>
                    <Image
                      className={`${imageClasses} shadow-inverted-classic-hovered sm:shadow-inverted-classic`}
                      src='/pokeBowlStoreFeatureTwoOne.png'
                      alt="Polygon with all of it's nodes unselected"
                      quality={imageQuality}
                      width={imageWidth}
                      height={imageHeight}
                    />
                    <Image
                      className={`absolute bottom-[-45px] left-[-20px] sm:bottom-[-71.25px] sm:left-[-48px] ${imageClasses} shadow-inverted-classic-hovered sm:shadow-inverted-classic`}
                      src='/pokeBowlStoreFeatureTwoTwo.png'
                      alt='Toolbar with action buttons'
                      quality={imageQuality}
                      width={400}
                      height={imageHeight}
                    />
                    <Image
                      className={`absolute top-[-30px] right-[-36px] sm:top-[-36.25px] sm:right-[-48px] ${imageClasses} shadow-classic-hovered sm:shadow-inverted-classic`}
                      src='/pokeBowlStoreFeatureTwoThree.png'
                      alt='Toolbar with action buttons'
                      quality={imageQuality}
                      width={400}
                      height={imageHeight}
                    />
                  </div>
                </div>
                <div className={`${featureDivClasses} flex-wrap-reverse`}>
                  <div className='relative mb-[27.5px] mr-[20px] sm:mb-[54px] sm:mr-[48px]'>
                    <Image
                      className={`${imageClasses} shadow-inverted-classic`}
                      src='/pokeBowlStoreFeatureFourMain.png'
                      alt="Polygon with all of it's nodes unselected"
                      quality={imageQuality}
                      width={826}
                      height={imageHeight}
                    />
                    <Image
                      className={`absolute bottom-[-27.5px] right-[-20px] sm:bottom-[-54px] sm:right-[-48px] ${imageClasses} shadow-inverted-classic-hovered sm:shadow-inverted-classic`}
                      src='/pokeBowlStoreFeatureFourSide.png'
                      alt='Toolbar with action buttons'
                      quality={imageQuality}
                      width={456}
                      height={imageHeight}
                    />
                  </div>
                  <p className={`${pClasses} text-center sm:text-start flex-1`}>
                    {t('poke-bowl-store.features.feature-three')}
                  </p>
                </div>
              </section>
              <div
                className={
                  'px-[20px] py-[20px] sm:px-[65px] sm:py-[50-px] relative w-full sm:h-[250px] flex flex-col gap-[20px] sm:gap-[50px] sm:flex-row items-center bg-black sm:mt-[125px]'
                }
              >
                <p className={`flex-1 ${pClasses} text-center `}>
                  {t(`poke-bowl-store.features.feature-five`)}
                </p>
                <div className='relative w-[250px] h-full'>
                  <Image
                    className='static sm:absolute top-[-125px]'
                    src='/pokeBowlStoreFeatureFive.png'
                    alt='Poke Bowl Store on a mobile device'
                    quality={imageQuality}
                    width={250}
                    height={imageHeight}
                  />
                </div>
              </div>
            </>
          )}
          {selectedProjectId === 'rick-mortium' && (
            <>
              <section
                id='features'
                className={`${innerSectionClasses}`}
              >
                <div className={`${featureDivClasses} flex-wrap-reverse`}>
                  <Image
                    className={`${imageClasses} shadow-inverted-classic-hovered sm:shadow-inverted-classic`}
                    src='/rickMortiumFeatureOne.png'
                    alt="Polygon with all of it's nodes unselected"
                    quality={imageQuality}
                    width={imageWidth}
                    height={imageHeight}
                  />
                  <p className={`${pClasses} text-center sm:text-start flex-1`}>
                    {t('rick-mortium.features.feature-one')}
                  </p>
                </div>
                <div className={`${featureDivClasses} flex-wrap`}>
                  <p className={`${pClasses} text-center sm:text-end flex-1`}>
                    {t('rick-mortium.features.feature-two')}
                  </p>
                  <Image
                    className={`${imageClasses} shadow-inverted-classic-hovered sm:shadow-inverted-classic`}
                    src='/rickMortiumFeatureTwo.png'
                    alt="Polygon with all of it's nodes unselected"
                    quality={imageQuality}
                    width={imageWidth}
                    height={imageHeight}
                  />
                </div>
                <div className={`${featureDivClasses} flex-wrap-reverse`}>
                  <div className='relative mb-[75px] ml-[20px] sm:mb-[220px] sm:ml-[20px]'>
                    <Image
                      className={`${imageClasses} shadow-inverted-classic rotate-[-5deg]`}
                      src='/rickMortiumFeatureThreeOne.png'
                      alt="Polygon with all of it's nodes unselected"
                      quality={imageQuality}
                      width={714}
                      height={imageHeight}
                    />
                    <Image
                      className={`absolute bottom-[-75px] left-[-20px] sm:bottom-[-220px] sm:left-[-20px] ${imageClasses} shadow-inverted-classic-hovered sm:shadow-inverted-classic rotate-[5deg]`}
                      src='/rickMortiumFeatureThreeTwo.png'
                      alt='Toolbar with action buttons'
                      quality={imageQuality}
                      width={830}
                      height={imageHeight}
                    />
                  </div>
                  <p className={`${pClasses} text-center sm:text-start flex-1`}>
                    {t('rick-mortium.features.feature-three')}
                  </p>
                </div>
              </section>
              <div
                className={
                  'px-[20px] py-[20px] sm:px-[65px] sm:py-[50-px] relative w-full sm:h-[250px] flex flex-col gap-[20px] sm:gap-[50px] sm:flex-row items-center bg-black sm:mt-[125px]'
                }
              >
                <p className={`flex-1 ${pClasses} text-center `}>
                  {t(`rick-mortium.features.feature-four`)}
                </p>
                <div className='relative w-[250px] h-full'>
                  <Image
                    className='static sm:absolute top-[-125px]'
                    src='/rickMortiumFeatureFour.png'
                    alt='Poke Bowl Store on a mobile device'
                    quality={imageQuality}
                    width={250}
                    height={imageHeight}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {selectedProjectId !== 'other-projects' && (
        <section
          id='used-libraries'
          className={`${innerSectionClasses} py-[50px] bg-pale-prune`}
        >
          <h2 className='text-subtitle sm:text-title font-bold text-center'>
            {t(`used-libraries-heading`)}
          </h2>
          <ul className='flex flex-row flex-wrap gap-5'>
            {usedLibrariesCards.map((card) => {
              return (
                <Card
                  key={card.headingText}
                  style={{ justifyContent: 'center' }}
                  {...card}
                />
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default PortfolioPage;
