import axios from 'axios';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

import CustomImage from '../components/CustomImage/CustomImage';
import YoutubeVideo from '../components/YoutubeVideo/YoutubeVideo';
import {
  getGitHubLocaleRawContentLink,
  GITHUB_API_URL,
  GITHUB_RAW_CONTENT_BASE_URL,
} from '../constants/links';
import { Post, PostMeta } from '../model/Post';

import { axiosInstance } from './axiosConfig';

interface GitHubFileTree {
  tree: Array<{ path: string; url: string }>;
}

export const getPostByName = async (
  name: string,
  locale: string
): Promise<Post> => {
  const axiosResponse = await axios.get(
    `${getGitHubLocaleRawContentLink(locale)}/${name}`
  );
  const rawMDX = axiosResponse.data as string;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    description: string;
    date: string;
    author: string;
    attributionLink: string;
    coverImageSrc: string;
    tags: Array<string>;
  }>({
    source: rawMDX,
    components: {
      CustomImage,
      YoutubeVideo,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          // @ts-ignore
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
            },
          ],
        ],
      },
    },
  });

  const id = name.replace(/\.mdx$/, '');

  const post: Post = {
    meta: {
      id,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      author: frontmatter.author,
      attributionLink: frontmatter.attributionLink,
      coverImageSrc: frontmatter.coverImageSrc,
      tags: frontmatter.tags,
    },
    content,
  };

  return post;
};

export const getPostsMeta = async (
  locale: string
): Promise<Array<PostMeta>> => {
  const rootSha = (
    await axiosInstance.get<{ commit: { sha: string } }>(
      `${GITHUB_API_URL}/branches/master`
    )
  ).data.commit.sha;

  const rootFileTree = (
    await axiosInstance.get<GitHubFileTree>(
      `${GITHUB_API_URL}/git/trees/${rootSha}`
    )
  ).data.tree;

  let targetFileTree = rootFileTree;

  if (locale === 'en') {
    targetFileTree = rootFileTree;
  } else if (locale === 'es') {
    const esFileTreeUrl = rootFileTree.find((node) => {
      return node.path === 'es';
    })!.url;
    const esFileTree = (await axiosInstance.get<GitHubFileTree>(esFileTreeUrl))
      .data.tree;
    targetFileTree = esFileTree;
  } else if (locale === 'fr') {
    const frFileTreeUrl = rootFileTree.find((node) => {
      return node.path === 'fr';
    })!.url;
    const frFileTree = (await axiosInstance.get<GitHubFileTree>(frFileTreeUrl))
      .data.tree;
    targetFileTree = frFileTree;
  }

  const fileNames = targetFileTree
    .map((obj) => {
      return obj.path;
    })
    .filter((path) => path.endsWith('.mdx'));

  const pendingPosts: Array<Promise<Post>> = [];

  for (const fileName of fileNames) {
    const post = getPostByName(fileName, locale);
    pendingPosts.push(post);
  }

  const posts = await Promise.all(pendingPosts);
  const postsMeta = posts.map(({ meta }) => meta);

  return postsMeta.sort((postA, postB) => (postA.date < postB.date ? 1 : -1));
};

export const getAvailableTags = async (): Promise<
  Record<string, Array<string>>
> => {
  const axiosResponse = await axios.get(
    `${GITHUB_RAW_CONTENT_BASE_URL}/availableTags.json`
  );
  return axiosResponse.data as Record<string, Array<string>>;
};

export const getTranslatedTagSections = async (): Promise<
  Record<string, Record<string, string>>
> => {
  const axiosResponse = await axios.get(
    `${GITHUB_RAW_CONTENT_BASE_URL}/translatedTagSections.json`
  );
  return axiosResponse.data as Promise<Record<string, Record<string, string>>>;
};
