import { JSXElementConstructor, ReactElement } from 'react';

export interface PostMeta {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  attributionLink: string;
  coverImageSrc: string;
  tags: Array<string>;
  lastModified: string;
  readingDuration: number;
}

export interface Post {
  meta: PostMeta;
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}
