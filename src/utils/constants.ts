export const SITE_CONFIG = {
  title: 'The Stack Lab',
  description: 'Discover trusted product reviews and recommendations from real experience.',
  author: {
    name: 'Sarah Mitchell',
    photo: '/images/author-photo.svg',
  },
  lastUpdated: 'December 2025',
};

// Affiliate URLs - centralized for easy updates
export const AFFILIATE_LINKS = {
  mainProduct: import.meta.env.SYSTEME_IO_LINK || 'https://systeme.io/funnel',
};

// Analytics (optional Plausible)
export const TRACKING = {
  plausibleDomain: 'the-stack-lab.com',
};
