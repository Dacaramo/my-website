import { PortfolioProjectId } from '../model/PortfolioProject';

export const YOUTUBE_CHANNEL_LINK =
  'https://www.youtube.com/channel/UCwurci10rEbYy8r2fzdgbaA';
export const INSTAGRAM_PROFILE_LINK = 'https://www.instagram.com/dacaramo/';
export const TIKTOK_PROFILE_LINK = 'https://www.tiktok.com/@ramzeis.software';
export const LINKED_IN_PROFILE_LINK =
  'https://www.linkedin.com/in/daniel-ramírez-molina-6465a1211';
export const LOCATION_GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Bogot%C3%A1/@4.6486206,-74.2726166,11z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9bfd2da6cb29:0x239d635520a33914!8m2!3d4.7109886!4d-74.072092!16zL20vMDFkenlj?entry=ttu';
export const GITHUB_PROFILE_LINK = 'https://github.com/Dacaramo';
export const STACK_OVERFLOW_PROFILE_LINK =
  'https://stackoverflow.com/users/13907814/dacaramo';
export const DEV_PROFILE_LINK = 'https://dev.to/dacaramo';
export const MEDIUM_PROFILE_LINK = 'https://medium.com/@Dankramirez';
export const SHAPE_CREATOR_PROJECT_RUNNING_LINK =
  'https://dacaramo.github.io/shape-creator/';
export const POKE_BOWL_STORE_PROJECT_RUNNING_LINK =
  'https://dacaramo.github.io/poke-bowl-store/';
export const RICK_MORTIUM_PROJECT_RUNNING_LINK =
  'https://dacaramo.github.io/rick-mortium/';
export const COMPANY_WEBSITE_PROJECT_RUNNING_LINK =
  'https://dacaramo.github.io/bloom-react-app/';
export const SHAPE_CREATOR_PROJECT_REPO_LINK =
  'https://github.com/Dacaramo/shape-creator';
export const POKE_BOWL_STORE_PROJECT_REPO_LINK =
  'https://github.com/Dacaramo/poke-bowl-store';
export const RICK_MORTIUM_PROJECT_REPO_LINK =
  'https://github.com/Dacaramo/rick-mortium';
export const COMPANY_WEBSITE_PROJECT_REPO_LINK =
  'https://github.com/Dacaramo/bloom-react-app';
export const GITHUB_API_URL =
  'https://api.github.com/repos/Dacaramo/my-blog-posts';
export const GITHUB_MASTER_BRANCH_LINK =
  'https://api.github.com/repos/Dacaramo/my-blog-posts/branches/master';
export const GITHUB_LOCALE_EN_TREE_LINK =
  'https://api.github.com/repos/Dacaramo/my-blog-posts/git/trees/1863ddc0536eac0a015edecde32cf5a427d8846e';
export const GITHUB_LOCALE_ES_TREE_LINK =
  'https://api.github.com/repos/Dacaramo/my-blog-posts/git/trees/0be203ed1319aab66f08d1cd2d89b808a5f3e4b1';
export const GITHUB_LOCALE_FR_TREE_LINK =
  'https://api.github.com/repos/Dacaramo/my-blog-posts/git/trees/63f51443f4e47df4722505b81b81c7ca7e5430a7';
export const GITHUB_RAW_CONTENT_BASE_URL =
  'https://raw.githubusercontent.com/dacaramo/my-blog-posts/master';

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

const localeNotFoundMessage =
  'Locale not found. The locale received by this function is incorrect or not yet supported';

export const getWhatsAppMessageMeLink = (locale: string): string => {
  let text: string | null = null;
  if (locale === 'en') {
    text =
      'Hi Daniel, I was browsing trough your website and I want to receive more info about your services.';
  } else if (locale === 'es') {
    text =
      'Hola Daniel, estuve navegando por tu sitio web y quiero recibir más información sobre tus servicios.';
  } else if (locale === 'fr') {
    text =
      "Bonjour Daniel, j'étais entrain de parcourir votre site et je souhaite recevoir plus d'informations sur vos services.";
  }

  if (!text) {
    throw new NotFoundError(localeNotFoundMessage);
  }

  return `https://wa.me/573106358522/?text=${encodeURIComponent(text)}`;
};

export const getMailToLink = (locale: string): string => {
  let subject: string | null = null;
  let body: string | null = null;
  if (locale === 'en') {
    subject = 'Wishing to get more info';
    body = 'Hi Daniel, I want to get more info about your services.';
  } else if (locale === 'es') {
    subject = 'Deseando obtener más información';
    body = 'Hola Daniel, deseo obtener más información sobre tus servicios.';
  } else if (locale === 'fr') {
    subject = "Dans l'attente de plus d'informations";
    body =
      "Salut Daniel, je veux obtenir plus d'informations sur vos services.";
  }

  if (!subject || !body) {
    throw new NotFoundError(localeNotFoundMessage);
  }

  return `mailto:dankramirez@outlook.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

const idNotFoundMessage =
  'Unknown id. The provided portfolio project id is incorrect or not yet supported';

export const getProjectRunningLink = (id: PortfolioProjectId): string => {
  switch (id) {
    case 'shape-creator':
      return SHAPE_CREATOR_PROJECT_RUNNING_LINK;
    case 'poke-bowl-store':
      return POKE_BOWL_STORE_PROJECT_RUNNING_LINK;
    case 'rick-mortium':
      return RICK_MORTIUM_PROJECT_RUNNING_LINK;
    default:
      throw new NotFoundError(idNotFoundMessage);
  }
};

export const getProjectRepoLink = (id: PortfolioProjectId): string => {
  switch (id) {
    case 'shape-creator':
      return SHAPE_CREATOR_PROJECT_REPO_LINK;
    case 'poke-bowl-store':
      return POKE_BOWL_STORE_PROJECT_REPO_LINK;
    case 'rick-mortium':
      return RICK_MORTIUM_PROJECT_REPO_LINK;
    default:
      throw new NotFoundError(idNotFoundMessage);
  }
};

export const getGitHubLocaleRawContentLink = (locale: string): string => {
  if (locale === 'en') {
    return GITHUB_RAW_CONTENT_BASE_URL;
  } else if (locale === 'es' || locale === 'fr') {
    return `${GITHUB_RAW_CONTENT_BASE_URL}/${locale}`;
  }

  throw new NotFoundError(localeNotFoundMessage);
};
