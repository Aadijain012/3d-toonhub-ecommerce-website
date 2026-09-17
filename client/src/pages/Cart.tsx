import { ArrowLeft, ArrowUpRight, Minus, Plus, ShieldCheck, Trash2 } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import { formatPrice, PRODUCTS } from '@/lib/data';
import { PageFrame, useCart } from '@/components/SiteChrome';

export default function Cart() {
  const { count, clear } = useCart();
  const product = PRODUCTS[0];
  const [quantity, setQuantity] = useState(Math.max(1, count));
  const subtotal = product.price * quantity;
  return <PageFrame><main className="cart-page"><div className="container"><div className="cart-heading"><div><p className="eyebrow">Your bag / {count.toString().padStart(2, '0')} items</p><h1>Good choices.</h1></div><Link href="/shop" className="back-link"><ArrowLeft size={16} /> Keep shopping</Link></div>{count === 0 ? <div className="cart-empty"><span className="cart-empty__mark">✳</span><h2>Your bag is<br /><em>waiting.</em></h2><p>Find a character to keep you company.</p><Link href="/shop" className="button button--dark">Browse the figures <ArrowUpRight size={17} /></Link></div> : <div className="cart-grid"><div className="cart-items"><div className="cart-item"><div className="cart-item__image" style={{ background: product.bg }}><img src={product.image} alt={product.name} /></div><div className="cart-item__info"><p className="eyebrow">{product.collection}</p><h2>{product.name}</h2><span>{formatPrice(product.price)}</span><div className="cart-item__controls"><div className="quantity"><button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus size={15} /></button><span>{quantity.toString().padStart(2, '0')}</span><button onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><Plus size={15} /></button></div><button className="remove-button" onClick={clear}><Trash2 size={14} /> Remove</button></div></div></div><div className="cart-note"><ShieldCheck size={18} /><span>Each figure is packed by hand and ships in 2–4 business days.</span></div></div><aside className="cart-summary"><p className="eyebrow">Order summary</p><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><div><span>Shipping</span><span>Calculated at checkout</span></div><div className="cart-summary__total"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div><button className="button button--dark cart-checkout">Checkout <ArrowUpRight size={17} /></button><p className="cart-summary__fine">This is a visual prototype. Checkout is ready to connect.</p></aside></div>}</div></main></PageFrame>;
}
