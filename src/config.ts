export const siteConfig = {
  title: 'Onward Platforms',
  url: 'https://azure-periodic-table.onwardplatforms.com/',
  github: 'https://github.com/onwardplatforms/azure-periodic-table',
  twitter: 'https://twitter.com/reillyjodonnell',
  linkedin: 'https://www.linkedin.com/in/justin-o-connor-67376483/',
};

const twitterUsername = 'justinOConnor';
const encodedWebsite = encodeURIComponent(siteConfig.url);
const encodedUsername = encodeURIComponent('@' + twitterUsername);
const hashtag = '%23Azure';

export const socialConfig = {
  twitterUsername: 'reillyjodonnell',
  linkedinUsername: 'justin-o-connor-67376483',
  tweet: `Check%20out%20the%20Azure%20Resource%20Naming%20Convention%20Periodic%20Table!%20Created%20by%20${encodedUsername}%0A${encodedWebsite}%0A${hashtag}`,
  twitter: 'https://twitter.com/intent/tweet?text=',
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${siteConfig.url}`,
};

export const colorConfig = {
  gray: 'bg-gray-400',
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  yellow: 'bg-yellow-400',
  lime: 'bg-lime-500',
  green: 'bg-green-500',
  cyan: 'bg-cyan-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  violet: 'bg-violet-700',
  fuchsia: 'bg-fuchsia-600',
  pink: 'bg-pink-500',
  rose: 'bg-rose-500',
};
