import { ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'wouter';
import { formatPrice, type Product, productAccent } from '@/lib/data';

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className="product-card" style={productAccent(product)}>
      <Link href={`/shop/${product.slug}`} className="product-card__image-wrap">
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <span className="product-index">{product.number} / 06</span>
        <img src={product.image} alt={product.name} className="product-card__image" loading={index < 3 ? 'eager' : 'lazy'} draggable="false" />
        <span className="product-card__hover">View figure <ArrowUpRight size={17} /></span>
      </Link>
      <div className="product-card__meta">
        <div><p className="product-card__collection">{product.collection}</p><h3><Link href={`/shop/${product.slug}`}>{product.name}</Link></h3></div>
        <div className="product-card__aside"><button aria-label={`Save ${product.name}`} className="icon-button"><Heart size={17} strokeWidth={1.7} /></button><span>{formatPrice(product.price)}</span></div>
      </div>
    </article>
  );
}

export function ProductRail({ products, title = 'The current cast' }: { products: Product[]; title?: string }) {
  return <section className="product-rail"><div className="container"><div className="section-heading"><div><p className="eyebrow">The lineup</p><h2>{title}</h2></div><Link href="/shop" className="text-link">See all figures <ArrowUpRight size={16} /></Link></div><div className="product-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div></div></section>;
}
