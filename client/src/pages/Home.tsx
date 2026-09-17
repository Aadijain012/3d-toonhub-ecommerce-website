import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CirclePlay, MoveRight } from 'lucide-react';
import { Link } from 'wouter';
import { IMAGES, JOURNAL_POSTS, PRODUCTS, marqueeWords, preloadImages, unsplash } from '@/lib/data';
import { ProductRail } from '@/components/ProductCard';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';

function roleFor(activeIndex: number, index: number) {
  const roles = ['center', 'right', 'back', 'left'];
  const relative = (index - activeIndex + 4) % 4;
  return roles[relative];
}

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    preloadImages();
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((current) => direction === 'next' ? (current + 1) % 4 : (current + 3) % 4);
    window.setTimeout(() => setIsAnimating(false), 650);
  };

  const current = IMAGES[activeIndex];
  const currentProduct = PRODUCTS[activeIndex];
  const ghost = useMemo(() => currentProduct.name.replace('The ', '').toUpperCase(), [currentProduct.name]);

  return <section className="hero-carousel" style={{ backgroundColor: current.bg }}>
    <div className="hero-noise" />
    <div className="hero-ghost">{ghost}</div>
    <div className="hero-kicker"><span>COLLECTION 01</span><span>FIGURE {currentProduct.number} / 04</span></div>
    <div className="hero-swipe-hint"><MoveRight size={14} /> Drag through the lineup</div>
    <div className="hero-carousel__stage">
      {IMAGES.map((image, index) => {
        const role = roleFor(activeIndex, index);
        return <div key={image.src} className={`hero-figure hero-figure--${role}`} style={{ '--panel': image.panel } as React.CSSProperties}>
          <img src={image.src} alt={PRODUCTS[index].name} draggable="false" />
        </div>;
      })}
    </div>
    <div className="hero-caption"><p className="eyebrow">TOONHUB BY AADI FIGURINES</p><h1>{currentProduct.name}</h1><p className="hero-caption__copy">The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless.</p><Link href={`/shop/${currentProduct.slug}`} className="hero-discover">Discover it <ArrowUpRight size={19} /></Link></div>
    <div className="hero-controls"><button onClick={() => navigate('prev')} aria-label="Previous figure" disabled={isAnimating}><ArrowLeft /></button><div className="hero-dots">{IMAGES.map((_, index) => <button key={index} aria-label={`Go to figure ${index + 1}`} className={index === activeIndex ? 'active' : ''} onClick={() => { if (!isAnimating && index !== activeIndex) { setIsAnimating(true); setActiveIndex(index); window.setTimeout(() => setIsAnimating(false), 650); } }} />)}</div><button onClick={() => navigate('next')} aria-label="Next figure" disabled={isAnimating}><ArrowRight /></button></div>
    <div className="hero-scroll"><ArrowDown size={15} /> Scroll to explore</div>
  </section>;
}

function ThreeDPlayground() {
  return <section className="three-d-playground">
    <div className="three-d-playground__noise" />
    <div className="container three-d-playground__header">
      <div><p className="eyebrow">03 / The weird bit</p><h2>More than<br /><em>a figure.</em></h2></div>
      <p>Spin the little universe. TOONHUB by Aadi objects are designed to feel alive from every angle.</p>
    </div>
    <div className="three-d-scene" aria-label="Animated 3D TOONHUB by Aadi playground">
      <div className="scene-stars"><i /><i /><i /><i /><i /><i /></div>
      <div className="scene-ring scene-ring--one" /><div className="scene-ring scene-ring--two" />
      <div className="scene-orbit orbit--one"><span className="orbit-dot" /></div>
      <div className="scene-orbit orbit--two"><span className="orbit-dot" /></div>
      <div className="scene-cube"><span className="cube-face cube-face--front">3D</span><span className="cube-face cube-face--back">✳</span><span className="cube-face cube-face--right">TOON</span><span className="cube-face cube-face--left">HUB</span><span className="cube-face cube-face--top">✦</span><span className="cube-face cube-face--bottom">00</span></div>
      <div className="scene-figure scene-figure--orange"><img src={IMAGES[0].src} alt="The Dreamer floating in 3D space" /></div>
      <div className="scene-figure scene-figure--pink"><img src={IMAGES[2].src} alt="The Spark floating in 3D space" /></div>
      <div className="scene-label scene-label--left">FIGURE / 01<br /><strong>STAY CURIOUS</strong></div>
      <div className="scene-label scene-label--right">MATERIAL STUDY<br /><strong>SOFT VINYL / HARD ENERGY</strong></div>
    </div>
  </section>;
}

export default function Home() {
  return <div className="site-shell"><SiteHeader /><main>
    <HeroCarousel />
    <ThreeDPlayground />
    <section className="manifesto-section"><div className="container manifesto-grid"><p className="eyebrow">01 / The idea</p><div><h2>Characters for<br /><em>your shelf.</em></h2><p className="manifesto-copy">TOONHUB by Aadi makes collectible figures with a little more personality. Each one starts as a sketch, finds its way through a studio full of color, and ends up somewhere it can make you smile.</p><Link href="/studio" className="button button--dark">Meet the studio <ArrowUpRight size={17} /></Link></div><div className="manifesto-note"><span>EST. 2026</span><span>THE SMALL<br />GOOD STUFF</span></div></div></section>
    <section className="marquee-band"><div className="marquee-track">{[...marqueeWords, ...marqueeWords].map((word, index) => <span key={`${word}-${index}`}>{word} <i>✳</i></span>)}</div></section>
    <ProductRail products={PRODUCTS.slice(0, 4)} title="Meet the current cast" />
    <section className="home-editorial"><div className="home-editorial__visual"><img src={unsplash.studio} alt="A bright TOONHUB style studio desk" /><span className="image-caption">The studio, somewhere in the city<br />09:42 AM / natural light</span></div><div className="home-editorial__copy"><p className="eyebrow">02 / The process</p><h2>Made by hand.<br /><em>Made to last.</em></h2><p>Our figures are hand-finished in small batches, so each one keeps a little of the human touch. Tiny variations are part of the charm — proof that your character is yours.</p><Link href="/studio" className="text-link">See how it's made <ArrowUpRight size={16} /></Link><div className="process-list"><div><span>01</span><strong>Sketch</strong><small>Every character starts on paper.</small></div><div><span>02</span><strong>Shape</strong><small>Form, color, and a little weirdness.</small></div><div><span>03</span><strong>Ship</strong><small>Wrapped with care, ready for a home.</small></div></div></div></section>
    <section className="journal-preview"><div className="container"><div className="section-heading"><div><p className="eyebrow">From the journal</p><h2>Notes from our little world</h2></div><Link href="/journal" className="text-link">Read all notes <ArrowUpRight size={16} /></Link></div><div className="journal-grid">{JOURNAL_POSTS.map((post) => <Link key={post.id} href="/journal" className="journal-card"><div className="journal-card__image"><img src={post.image} alt="" /><span>{post.id}</span></div><p className="eyebrow">{post.category} / {post.date}</p><h3>{post.title}</h3><p>{post.excerpt}</p><span className="journal-card__read"><CirclePlay size={15} /> 4 min read</span></Link>)}</div></div></section>
  </main><SiteFooter /></div>;
}
