import axios from 'axios';

export const username = 'dacaramo';
export const repo = 'my-blog-posts';
export const branch = 'master';
export const baseURL = `https://api.github.com/repos/${username}/${repo}`;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_BLOG_POSTS_GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
