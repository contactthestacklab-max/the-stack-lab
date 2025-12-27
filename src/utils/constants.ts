export const SITE_CONFIG = {
  title: 'The Stack Lab',
  description: 'Independent Tech & Marketing Editorial Team. We audit and review digital infrastructure tools to help US entrepreneurs scale without technical debt.',
  author: {
    name: 'Matt, Editorial Lead',
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
