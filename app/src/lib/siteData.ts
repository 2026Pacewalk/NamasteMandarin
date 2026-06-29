export const SITE_URL = 'https://namastemandarin.com';
export const DEFAULT_OG_IMAGE = '/assets/banner1.jpg';

export interface PageMeta {
  path: string;
  label: string;
  title: string;
  description: string;
}

export const pages: PageMeta[] = [
  {
    path: '/',
    label: 'Home',
    title: 'Namaste Mandarin — Chinese (Mandarin) Language Training Institute',
    description:
      'ISO 9001:2015 certified Chinese (Mandarin) language training institute for students, working professionals & corporates. Classroom and online classes.',
  },
  {
    path: '/about-us',
    label: 'About Us',
    title: 'About Us — Namaste Mandarin',
    description:
      'Namaste Mandarin is a Chinese language training institute promoting Mandarin among students and working professionals. Read our mission and vision.',
  },
  {
    path: '/our-team',
    label: 'Our Team',
    title: 'Our Team — Namaste Mandarin',
    description:
      'Meet the Namaste Mandarin team — instructor Sonia Ghosh (HSK certified, trained in China) and course content advisor Ms. Feng Yue.',
  },
  {
    path: '/certificates',
    label: 'Certificates',
    title: 'Certificates — Namaste Mandarin',
    description:
      'Namaste Mandarin is ISO 9001:2015 certified. View our certificates and the Certificate of Completion awarded to students on each level.',
  },
  {
    path: '/about-mandarin',
    label: 'About Mandarin',
    title: 'About Mandarin — Namaste Mandarin',
    description:
      'About Mandarin Chinese — the world’s most spoken language. Understand its tones, Chinese characters (Hànzì) and Pinyin.',
  },
  {
    path: '/introduction',
    label: 'Introduction',
    title: 'Introduction to Mandarin — Namaste Mandarin',
    description:
      'An introduction to Mandarin Chinese — tones, characters and Pinyin. The most widely spoken language in the world.',
  },
  {
    path: '/why-you-should-learn-mandarin',
    label: 'Why You Should Learn Mandarin',
    title: 'Why You Should Learn Mandarin — Namaste Mandarin',
    description:
      'Why you should learn Mandarin — the career, business and cultural advantages of the world’s most important emerging language.',
  },
  {
    path: '/who-should-learn-mandarin',
    label: 'Who Should Learn Mandarin',
    title: 'Who Should Learn Mandarin — Namaste Mandarin',
    description:
      'Who should learn Mandarin — students, working professionals, business persons, travel enthusiasts and hobbyists.',
  },
  {
    path: '/courses',
    label: 'Courses',
    title: 'Mandarin Courses — Namaste Mandarin',
    description:
      'Mandarin courses for young learners, working professionals, corporate teams and online learners at Namaste Mandarin.',
  },
  {
    path: '/young-learners-students',
    label: 'Young Learners/Students',
    title: 'Mandarin for Young Learners & Students — Namaste Mandarin',
    description:
      'Fun, activity-based Mandarin classes (YCT levels) for children & students. Give your child the gift of learning Chinese.',
  },
  {
    path: '/working-professionals',
    label: 'Working Professionals',
    title: 'Mandarin for Working Professionals — Namaste Mandarin',
    description:
      'Practical, conversational Mandarin for working professionals — gain an advantage in the global business world.',
  },
  {
    path: '/corporate-training',
    label: 'Corporate Training',
    title: 'Corporate Mandarin Training — Namaste Mandarin',
    description:
      'Customised Mandarin Chinese language training for corporates — tailored to your industry, finance, manufacturing, R&D and more.',
  },
  {
    path: '/online-classes',
    label: 'Online Classes',
    title: 'Online Mandarin Classes — Namaste Mandarin',
    description:
      'Live one-on-one & group online Mandarin classes via Skype/Google Hangouts with shared study material — learn from anywhere.',
  },
  {
    path: '/gallery',
    label: 'Gallery',
    title: 'Gallery — Namaste Mandarin',
    description: 'Photos from Namaste Mandarin classes, students and certifications.',
  },
  {
    path: '/testimonials',
    label: 'Testimonials',
    title: 'Testimonials — Namaste Mandarin',
    description:
      'What our students and parents say about learning Mandarin Chinese with Namaste Mandarin.',
  },
  {
    path: '/news-and-articles',
    label: 'News and Articles',
    title: 'News & Articles — Namaste Mandarin',
    description: 'Mandarin and Chinese language education in the news — articles and updates.',
  },
  {
    path: '/contact',
    label: 'Contact Us',
    title: 'Contact Us — Namaste Mandarin',
    description:
      'Contact Namaste Mandarin — call +91 98806 87766 or email namastemandarin@gmail.com to start learning Mandarin.',
  },
  {
    path: '/sitemap',
    label: 'Sitemap',
    title: 'Sitemap — Namaste Mandarin',
    description: 'Browse all pages on the Namaste Mandarin website.',
  },
];

export interface SiteGroup {
  title: string;
  items: PageMeta[];
}

const byPath = (p: string) => pages.find((x) => x.path === p)!;

export const siteGroups: SiteGroup[] = [
  { title: 'Main', items: [byPath('/'), byPath('/gallery'), byPath('/testimonials'), byPath('/contact')] },
  {
    title: 'About Us',
    items: [byPath('/about-us'), byPath('/our-team'), byPath('/certificates')],
  },
  {
    title: 'About Mandarin',
    items: [
      byPath('/about-mandarin'),
      byPath('/introduction'),
      byPath('/why-you-should-learn-mandarin'),
      byPath('/who-should-learn-mandarin'),
    ],
  },
  {
    title: 'Courses',
    items: [
      byPath('/courses'),
      byPath('/young-learners-students'),
      byPath('/working-professionals'),
      byPath('/corporate-training'),
      byPath('/online-classes'),
    ],
  },
  { title: 'More', items: [byPath('/news-and-articles'), byPath('/sitemap')] },
];
