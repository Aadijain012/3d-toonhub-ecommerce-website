import { useMemo, useState } from 'react';
import { ArrowDownUp, ArrowUpRight, Filter } from 'lucide-react';
import { Link } from 'wouter';
import { collectionItems, IMAGES, PRODUCTS } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { PageFrame, PageIntro } from '@/components/SiteChrome';

export default function Shop() {
  const [activeCollection, setActiveCollection] = useState('All figures');
  const [sort, setSort] = useState<'featured' | 'low' | 'high'>('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const filteredProducts = useMemo(() => {
    const base = activeCollection === 'All figures' ? [...PRODUCTS] : PRODUCTS.filter((product) => product.collection === activeCollection);
    if (sort === 'low') return base.sort((a, b) => a.price - b.price);
    if (sort === 'high') return base.sort((a, b) => b.price - a.price);
    return base;
  }, [activeCollection, sort]);

  return <PageFrame><PageIntro kicker="The shop / 01" title={<>Pick a <em>character.</em></>} body={<p>Collect a little bit of good energy. Every TOONHUB by Aadi figure is made in a small edition, hand-finished, and ready to make your shelf more interesting.</p>} color="pink" image={IMAGES[0].src} badge="6 Figures in Stock" />
    <section className="shop-section"><div className="container"><div className="shop-toolbar"><div className="collection-tabs">{collectionItems.map((collection) => <button key={collection} className={activeCollection === collection ? 'active' : ''} onClick={() => setActiveCollection(collection)}>{collection}<sup>{collection === 'All figures' ? PRODUCTS.length : PRODUCTS.filter((product) => product.collection === collection).length}</sup></button>)}</div><div className="shop-toolbar__actions"><button className="filter-trigger" onClick={() => setFilterOpen((current) => !current)}><Filter size={16} /> Filter</button><label className="sort-select"><ArrowDownUp size={15} /><select value={sort} onChange={(event) => setSort(event.target.value as typeof sort)} aria-label="Sort products"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div></div>{filterOpen && <div className="filter-drawer"><span>Availability</span><button className="filter-pill active">In stock</button><button className="filter-pill">Pre-order</button><span>Finish</span><button className="filter-pill">Vinyl</button><button className="filter-pill">Limited edition</button></div>}<div className="shop-results"><p className="eyebrow">Showing {filteredProducts.length.toString().padStart(2, '0')} figures</p><Link href="/studio" className="text-link">How we make them <ArrowUpRight size={15} /></Link></div><div className="shop-grid">{filteredProducts.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div></div></section>
  </PageFrame>;
}
