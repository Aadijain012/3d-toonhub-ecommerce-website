import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Menu, ShoppingBag, X } from 'lucide-react';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { navItems, siteCopy } from '@/lib/data';

type CartContextValue = {
  count: number;
  add: (quantity?: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const value = useMemo(() => ({
    count,
    add: (quantity = 1) => setCount((current) => current + quantity),
    clear: () => setCount(0),
  }), [count]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}

export function SiteHeader() {
  const [location] = useLocation();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location]);

  const isHome = location === '/';
  const darkHeader = isHome;
  return (
    <>
      <header className={`site-header ${darkHeader ? 'site-header--hero' : ''}`}>
        <Link href="/" className="wordmark" aria-label="TOONHUB by Aadi">TOONHUB<span>BY AADI</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={location.startsWith(item.href) ? 'active' : ''}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/cart" className="cart-link" aria-label={`Cart with ${count} items`}>
            <ShoppingBag size={17} strokeWidth={1.8} />
            <span>Bag</span>
            <b>{count.toString().padStart(2, '0')}</b>
          </Link>
          <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((current) => !current)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          <p className="eyebrow">A small universe by ToonHub by Aadi</p>
          {navItems.map((item, index) => <Link key={item.href} href={item.href} className="mobile-menu__link"><span>0{index + 1}</span>{item.label}<ArrowUpRight size={20} /></Link>)}
          <Link href="/cart" className="mobile-menu__link"><span>05</span>Your bag<ArrowUpRight size={20} /></Link>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-hero-word">TOONHUB</div>
        <div className="footer-intro">
          <p className="eyebrow">Stay in the loop</p>
          <h2>Good things<br /><em>are coming.</em></h2>
          <form className="signup-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="Your email address" />
            <button type="submit" aria-label="Subscribe"><ArrowUpRight size={19} /></button>
          </form>
          <span className="form-note">No noise. Only new drops, good reads, and tiny surprises.</span>
        </div>
      </div>
      <div className="footer-grid">
        <div><p className="eyebrow">The short version</p><p className="footer-copy">{siteCopy.footer}</p></div>
        <div><p className="eyebrow">Explore</p><div className="footer-links">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/contact">Contact</Link></div></div>
        <div><p className="eyebrow">Elsewhere</p><div className="footer-links"><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href="https://www.pinterest.com" target="_blank" rel="noreferrer">Pinterest <ArrowUpRight size={13} /></a><a href="mailto:hello@toonhub.example">Email us <ArrowUpRight size={13} /></a></div></div>
      </div>
      <div className="footer-bottom"><span>© 2026 ToonHub by Aadi. All rights reserved.</span><span>Crafted by Aadi for curious collectors</span><span>Privacy / Shipping</span></div>
    </footer>
  );
}

export function PageIntro({ kicker, title, body, color = 'cream', image, badge }: { kicker: string; title: ReactNode; body?: ReactNode; color?: string; image?: string; badge?: string }) {
  return (
    <section className={`page-intro page-intro--${color}`}>
      <div className="container page-intro__container">
        <div className="page-intro__content">
          <div className="page-intro__kicker-wrap">
            <span className="page-intro__kicker-pill">{kicker}</span>
          </div>
          <h1 className="page-intro__title">{title}</h1>
          {body && <div className="page-intro__body">{body}</div>}
        </div>
        {image && (
          <div className="page-intro__visual-wrap">
            <div className="page-intro__visual-card">
              <img src={image} alt="Featured 3D figurine" className="page-intro__figure-img" />
              {badge && <span className="page-intro__badge">{badge}</span>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <div className="site-shell"><SiteHeader />{children}<SiteFooter /></div>;
}
