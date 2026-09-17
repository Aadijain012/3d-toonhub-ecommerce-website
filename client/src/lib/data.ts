export type Product = {
  slug: string;
  name: string;
  collection: string;
  price: number;
  color: string;
  bg: string;
  panel: string;
  image: string;
  number: string;
  blurb: string;
  details: string[];
  tag?: string;
};

export const IMAGES = [
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    bg: '#F4845F',
    panel: '#F79B7F',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    bg: '#6BBF7A',
    panel: '#85CC92',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
    bg: '#E882B4',
    panel: '#ED9DC4',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: 'the-dreamer',
    name: 'The Dreamer',
    collection: 'Everyday Icons',
    price: 84,
    color: 'Coral orange',
    bg: IMAGES[0].bg,
    panel: IMAGES[0].panel,
    image: IMAGES[0].src,
    number: '01',
    tag: 'Best seller',
    blurb: 'A soft-spoken optimist with big ideas and an even bigger silhouette.',
    details: ['Hand-finished vinyl', '11 cm tall', 'Numbered edition of 500'],
  },
  {
    slug: 'the-maker',
    name: 'The Maker',
    collection: 'Everyday Icons',
    price: 92,
    color: 'Garden green',
    bg: IMAGES[1].bg,
    panel: IMAGES[1].panel,
    image: IMAGES[1].src,
    number: '02',
    blurb: 'Always making something. Usually with three tools, two snacks, and one plan.',
    details: ['Hand-finished vinyl', '12 cm tall', 'Numbered edition of 500'],
  },
  {
    slug: 'the-spark',
    name: 'The Spark',
    collection: 'After Hours',
    price: 96,
    color: 'Bubblegum pink',
    bg: IMAGES[2].bg,
    panel: IMAGES[2].panel,
    image: IMAGES[2].src,
    number: '03',
    tag: 'New drop',
    blurb: 'A little electric, a little chaotic, and exactly the right amount of pink.',
    details: ['Hand-finished vinyl', '10.5 cm tall', 'Numbered edition of 300'],
  },
  {
    slug: 'the-orbit',
    name: 'The Orbit',
    collection: 'After Hours',
    price: 88,
    color: 'Pool blue',
    bg: IMAGES[3].bg,
    panel: IMAGES[3].panel,
    image: IMAGES[3].src,
    number: '04',
    blurb: 'For the ones who are always a little bit elsewhere — in the best way.',
    details: ['Hand-finished vinyl', '12.5 cm tall', 'Numbered edition of 400'],
  },
  {
    slug: 'the-night-shift',
    name: 'The Night Shift',
    collection: 'Night Shift',
    price: 110,
    color: 'Ink navy',
    bg: '#1E2E51',
    panel: '#31446B',
    image: IMAGES[3].src,
    number: '05',
    tag: 'Limited',
    blurb: 'A midnight edition for late thinkers, soft lights, and one more episode.',
    details: ['Hand-finished vinyl', '13 cm tall', 'Numbered edition of 150'],
  },
  {
    slug: 'the-sunday',
    name: 'The Sunday',
    collection: 'Slow Club',
    price: 76,
    color: 'Butter yellow',
    bg: '#F4C95D',
    panel: '#F7D889',
    image: IMAGES[0].src,
    number: '06',
    blurb: 'No plans, no rush. Just a warm cup and a good place to land.',
    details: ['Hand-finished vinyl', '10 cm tall', 'Numbered edition of 500'],
  },
];

export const JOURNAL_POSTS = [
  {
    id: '01',
    category: 'Behind the scenes',
    title: 'How a character finds their shape',
    excerpt: 'From scribble to shelf: the six tiny decisions behind a TOONHUB by Aadi figurine.',
    date: '08.14.26',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=85',
    color: '#F6E6D1',
  },
  {
    id: '02',
    category: 'Field notes',
    title: 'A guide to collecting joy',
    excerpt: 'Small objects, big energy. A visual diary of the things that keep us curious.',
    date: '07.29.26',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85',
    color: '#CFE4D6',
  },
  {
    id: '03',
    category: 'Studio visit',
    title: 'Inside the pink room',
    excerpt: 'Meet the color wall, the clay shelf, and the playlist powering After Hours.',
    date: '06.02.26',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    color: '#F4CEDD',
  },
];

export const getProduct = (slug?: string) => PRODUCTS.find((product) => product.slug === slug) ?? PRODUCTS[0];

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;

export const shadeFor = (color: string) => {
  const shades: Record<string, string> = {
    '#F4845F': '#DF6847',
    '#6BBF7A': '#4F9F61',
    '#E882B4': '#C76696',
    '#6EB5FF': '#4D93DB',
    '#1E2E51': '#121E39',
    '#F4C95D': '#D6A93C',
  };
  return shades[color] ?? '#28231f';
};

export const unsplash = {
  studio: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85',
  packaging: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1400&q=85',
  paper: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',
};

export const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'Journal', href: '/journal' },
  { label: 'Studio', href: '/studio' },
];

export const collectionItems = ['All figures', 'Everyday Icons', 'After Hours', 'Slow Club', 'Limited editions'];

export const marqueeWords = ['Tiny stories', 'Big energy', 'Made to keep', 'Good weird'];

export const allImages = [...IMAGES.map((item) => item.src), ...JOURNAL_POSTS.map((post) => post.image), unsplash.studio, unsplash.packaging, unsplash.paper];

export const preloadImages = () => {
  allImages.forEach((src) => {
    const image = new Image();
    image.src = src;
  });
};

export const siteCopy = {
  footer: 'TOONHUB by Aadi is a small universe of collectible characters, curious objects, and beautifully unnecessary things.',
};

export const categoryLabel = (collection: string) => collection.toUpperCase().replace(' ', ' / ');

export const productAccent = (product: Product) => ({
  background: `linear-gradient(145deg, ${product.panel} 0%, ${product.bg} 100%)`,
  '--accent': product.bg,
  '--accent-dark': shadeFor(product.bg),
} as React.CSSProperties);

export const featuredProducts = PRODUCTS.slice(0, 4);

export const getCollectionCount = (collection: string) => PRODUCTS.filter((product) => product.collection === collection).length;

export const getInitials = (name: string) => name.split(' ').map((part) => part[0]).join('');
