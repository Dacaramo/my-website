import { FC } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';

import { getPostByName } from '@/app/axios/axiosRequestSenders';
import getFormattedDate from '@/app/utils/strings';

import 'highlight.js/styles/tomorrow-night-bright.css';

interface GenerateMetadataProps {
  params: {
    locale: string;
    postId: string;
  };
  parent: ResolvingMetadata;
}

/* eslint-disable-next-line */
export const generateMetadata = async ({
  params,
}: GenerateMetadataProps): Promise<Metadata> => {
  const { locale, postId } = params;
  const post = await getPostByName(`${postId}.mdx`, locale);

  const metadata: Metadata = {
    title: post.meta.title,
    description: post.meta.description,
    generator: 'Next.js',
    applicationName: 'Ramzeis Software',
    creator: 'Daniel Ramírez',
    authors: {
      name: post.meta.author,
      url: post.meta.attributionLink,
    },
    keywords: post.meta.tags,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.coverImageSrc,
      url: `https://www.ramzeis.com/${
        locale !== 'en' ? `${locale}/` : ''
      }blog/${postId}`,
      type: 'website',
      siteName: 'Ramzeis Software',
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      images: post.meta.coverImageSrc,
    },
  };

  return metadata;
};

interface Props {
  params: {
    locale: string;
    postId: string;
  };
}

const page: FC<Props> = async ({ params: { locale, postId } }) => {
  const post = await getPostByName(`${postId}.mdx`, locale);

  return (
    <>
      <div className='fixed top-0 -z-10 w-full h-full bg-pale-black' />
      <div
        className='relative w-full min-h-[40vh] px-[20px] 2xl:px-[500px] py-2 flex items-center bg-center bg-cover'
        style={{
          backgroundImage: `url(${post.meta.coverImageSrc})`,
        }}
      >
        <div className='absolute top-0 left-0 w-full h-full bg-translucid-black-200' />
        <h1 className='z-[10] text-subtitle sm:text-title font-bold text-acid-green'>
          {post.meta.title}
        </h1>
      </div>
      <section className='px-[20px] 2xl:px-[500px] mb-[25px] flex flex-row flex-wrap gap-2 py-2 justify-between items-center border-t border-b border-pale-acid-green bg-translucid-black-200'>
        <span className='text-paragraph text-pale-acid-green font-medium'>
          <Link
            href={post.meta.attributionLink}
            target='_blank'
          >
            <strong>{post.meta.author}</strong>
          </Link>
        </span>
        <span className='text-paragraph text-pale-acid-green font-medium'>
          {getFormattedDate(post.meta.date, locale)}
        </span>
      </section>
      <article className='px-[20px] 2xl:px-[500px] mb-[25px] flex flex-col items-stretch gap-[25px] bg-transparent'>
        {post.content}
      </article>
      <section
        id='tags-section'
        className='mb-[25px] px-[20px] 2xl:px-[500px] py-2 flex flex-col gap-2 border-y border-pale-acid-green bg-translucid-black-200'
      >
        <ul className='flex flex-row flex-wrap gap-2'>
          {post.meta.tags.map((tag) => {
            return (
              <li
                key={tag}
                className='flex-1 font-bold italic rounded-[5px] h-[32px] px-[8px] py-[4px] text-center text-pale-acid-green bg-black w-fit'
              >
                {`#${tag}`}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default page;
