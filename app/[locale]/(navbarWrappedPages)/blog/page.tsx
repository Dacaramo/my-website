'use client';

import {
  ChangeEvent as ReactChangeEvent,
  FC,
  useEffect,
  useState,
} from 'react';
import { HashLoader } from 'react-spinners';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import {
  getAvailableTags,
  getPostsMeta,
  getTranslatedTagSections,
} from '@/app/axios/axiosRequestSenders';
import SearchInput from '@/app/components/SearchInput/SearchInput';
import CheckboxGroup from '@/app/components/SelectGroup/CheckboxGroup';
import { ACID_GREEN } from '@/app/constants/colors';
import { PostMeta } from '@/app/model/Post';
import getFormattedDate from '@/app/utils/strings';

interface Props {
  params: {
    locale: string;
  };
}

const BlogPage: FC<Props> = ({ params: { locale } }) => {
  const [blogKeywords, setBlogKeywords] = useState<string>('');
  const [availableTags, setAvailableTags] = useState<Record<
    string,
    Array<string>
  > | null>(null);
  const [postMetaList, setPostMetaList] = useState<Array<PostMeta> | null>(
    null
  );
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);

  const t = useTranslations('blog-page');

  const handleChangeOnSearchInput = (e: ReactChangeEvent<HTMLInputElement>) => {
    setBlogKeywords(e.target.value);
  };

  const handleChangeOnCheckboxGroup = (value: string) => {
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== value));
    } else {
      setSelectedTags([...selectedTags, value]);
    }
  };

  const handleClickOnClearFilters = () => {
    setSelectedTags([]);
  };

  const filteredPostMetaList =
    postMetaList === null
      ? null
      : postMetaList
          .filter((postMeta) => {
            const targetWords = blogKeywords;
            const targetPattern = new RegExp(`\\b${targetWords}\\b`);
            return (
              targetPattern.test(postMeta.title) ||
              targetPattern.test(postMeta.description)
            );
          })
          .filter((postMeta) => {
            return selectedTags.every((tag) => postMeta.tags.includes(tag));
          });

  useEffect(() => {
    const fetchPosts = async () => {
      setPostMetaList(await getPostsMeta(locale));
    };
    const fetchAvailableTags = async () => {
      const translatedTagSections = await getTranslatedTagSections();
      const untranslatedAvailableTags = await getAvailableTags();
      const translatedAvailableTags = Object.keys(
        untranslatedAvailableTags
      ).reduce((acc, curr) => {
        return {
          ...acc,
          [translatedTagSections[curr][locale]]:
            untranslatedAvailableTags[curr],
        };
      }, {});
      setAvailableTags(translatedAvailableTags);
    };
    fetchPosts();
    fetchAvailableTags();
  }, [locale]);

  return (
    <>
      <div className='fixed top-0 -z-10 w-full h-screen bg-pale-black' />
      <section
        id='first-part'
        className='px-[20px] sm:px-[65px] min-h-[92.5vh] flex flex-col gap-4'
      >
        <h1 className='text-subtitle sm:text-title font-bold text-acid-green'>
          {t('heading')}
        </h1>
        <p className='text-paragraph sm:text-subtitle'>{t('paragraph')}</p>
        <section
          id='filter-section'
          className='w-full flex flex-col sm:flex-row justify-end items-stretch gap-2'
        >
          <SearchInput
            id='blog-name-input'
            label={t('input.label')}
            placeholder={t('input.placeholder')}
            value={blogKeywords}
            onChange={handleChangeOnSearchInput}
          />
          <button
            type='button'
            className='px-[8px] py-[4px]  w-full sm:w-max text-paragraph font-medium text-acid-green rounded-lg border border-acid-green hover:bg-acid-green hover:text-black transition-all'
            onClick={handleClickOnClearFilters}
            disabled={availableTags === null}
          >
            {t('clear-button-text')}
          </button>
          <CheckboxGroup
            groups={availableTags ?? {}}
            value={selectedTags}
            disabled={availableTags === null}
            onChange={handleChangeOnCheckboxGroup}
          />
        </section>
        {filteredPostMetaList !== null && filteredPostMetaList.length > 0 ? (
          <ul className='mb-[50px] flex flex-col gap-4'>
            {filteredPostMetaList.map((post) => {
              return (
                <li key={post.id}>
                  <Link
                    href={`blog/${post.id}`}
                    className='min-h-[200px] flex flex-row border-b border-acid-green cursor-pointer'
                  >
                    <div className='relative min-w-[17.5%] hidden sm:block'>
                      <Image
                        className='object-cover'
                        src={post.coverImageSrc}
                        alt='blog entry image'
                        quality={100}
                        priority
                        fill
                        sizes='(max-width: 640px) 0vw, 20vw'
                      />
                    </div>
                    <div className='sm:py-2 sm:px-4 flex flex-col gap-2 flex-4'>
                      <h2 className='text-subtitle text-acid-green font-medium'>
                        {post.title}
                      </h2>
                      <p className='text-paragraph'>{post.description}</p>
                      <span className='mt-auto self-end text-paragraph text-pale-acid-green'>
                        {getFormattedDate(post.date, locale)}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className='mb-[50px] flex-1 flex justify-center items-center'>
            {filteredPostMetaList === null && (
              <div className='flex flex-col justify-center items-center gap-4'>
                <HashLoader
                  color={ACID_GREEN}
                  size={75}
                />
                <span className='text-paragraph'>
                  {t('loading-entries-message')}
                </span>
              </div>
            )}
            {filteredPostMetaList?.length === 0 && (
              <p className='text-paragraph text-pale-acid-green'>
                {t('not-found-entries-message')}
              </p>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default BlogPage;
