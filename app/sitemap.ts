import { MetadataRoute } from 'next';

import { getPostsMeta } from './axios/axiosRequestSenders';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = 'https://www.ramzeis.com';
  const localeResources = ['', '/es', '/fr'];
  const rootResources = {
    '': {
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    '/services': {
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    '/portfolio': {
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    '/blog': {
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    '/about': {
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  };
  type RootResource = keyof typeof rootResources;
  const [enPostsMeta, esPostsMeta, frPostsMeta] = await Promise.all([
    getPostsMeta('en'),
    getPostsMeta('es'),
    getPostsMeta('fr'),
  ]);

  return [
    ...(localeResources.flatMap((localeResource) => {
      return Object.keys(rootResources).map((rootResource) => {
        return {
          url: baseUrl + localeResource + rootResource,
          ...rootResources[rootResource as RootResource],
        };
      });
    }) as MetadataRoute.Sitemap),
    ...(enPostsMeta.map((postMeta) => {
      return {
        url: `${baseUrl}/blog/${postMeta.id}`,
        lastModified: postMeta.lastModified,
        changeFrequency: 'monthly',
        priority: 0.5,
      };
    }) as MetadataRoute.Sitemap),
    ...(esPostsMeta.map((postMeta) => {
      return {
        url: `${baseUrl}/es/blog/${postMeta.id}`,
        lastModified: postMeta.lastModified,
        changeFrequency: 'monthly',
        priority: 0.5,
      };
    }) as MetadataRoute.Sitemap),
    ...(frPostsMeta.map((postMeta) => {
      return {
        url: `${baseUrl}/fr/blog/${postMeta.id}`,
        lastModified: postMeta.lastModified,
        changeFrequency: 'monthly',
        priority: 0.5,
      };
    }) as MetadataRoute.Sitemap),
  ];
};

export default sitemap;
