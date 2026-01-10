export const plans = [
  {
    name: 'Standard',
    price: '$0',
    period: 'forever',
    description: 'For occasional PDF tasks and lightweight workflows',
    features: [
      '3 uses per tool each month',
      'Curated reliable PDF tools',
      'Basic processing features',
      'No credit card required',
    ],
    cta: 'Get Started',
    ctaLink: '/tools',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$9',
    period: 'per month',
    description: 'Unlimited access to premium-ready PDF tools',
    features: [
      'Unlimited tool uses',
      'All PDF tools access',
      'Priority processing',
      'Advanced features',
      'Email support',
      'No ads',
    ],
    cta: 'Upgrade Now',
    ctaLink: '/signup',
    popular: true,
  },
];
