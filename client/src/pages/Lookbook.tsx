import { ArrowUpRight, MoveDown } from 'lucide-react';
import { Link } from 'wouter';
import { PageFrame, PageIntro } from '@/components/SiteChrome';
import { IMAGES, PRODUCTS, unsplash } from '@/lib/data';

const looks = [
  { label: '01 / The coral hour', image: PRODUCTS[0].image, color: '#F4845F', title: 'Good mood, no agenda.' },
  { label: '02 / Green room', image: PRODUCTS[1].image, color: '#6BBF7A', title: 'Make space for ideas.' },
  { label: '03 / After hours', image: PRODUCTS[2].image, color: '#E882B4', title: 'Pink is a point of view.' },
];

export default function Lookbook() {
  return <PageFrame><PageIntro kicker="The lookbook / 02" title={<>Objects with<br /><em>good energy.</em></>} body={<p>A visual index of TOONHUB by Aadi figures in their natural habitats: sunlit shelves, late-night desks, and anywhere a small story can live.</p>} color="green" image={IMAGES[2].src} badge="Lookbook Edition / S/S 2026" /><main className="lookbook-page"><div className="lookbook-intro container"><p className="eyebrow">Spring / Summer 2026</p><span>Scroll for a little inspiration <MoveDown size={15} /></span></div>{looks.map((look, index) => <section key={look.label} className={`lookbook-look lookbook-look--${index}`} style={{ background: look.color }}><div className="lookbook-look__copy"><p className="eyebrow">{look.label}</p><h2>{look.title}</h2><Link href={`/shop/${PRODUCTS[index].slug}`} className="text-link text-link--light">Meet the figure <ArrowUpRight size={16} /></Link></div><div className="lookbook-look__figure"><img src={look.image} alt={PRODUCTS[index].name} /></div><span className="lookbook-look__num">0{index + 1}</span></section>)}<section className="lookbook-collage"><img src={unsplash.packaging} alt="TOONHUB by Aadi packaging details" /><div><p className="eyebrow">The finishing touch</p><h2>Good things<br /><em>arrive well.</em></h2><p>Every order comes wrapped in a little bit of ceremony. Because opening a package should feel like finding something.</p><Link href="/shop" className="button button--dark">Shop the collection <ArrowUpRight size={17} /></Link></div></section></main></PageFrame>;
}
