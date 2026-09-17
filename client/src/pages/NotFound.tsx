import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
export default function NotFound() { return <main className="not-found"><span className="not-found__code">404</span><p className="eyebrow">Oops / wrong corner of the universe</p><h1>Nothing to<br /><em>see here.</em></h1><Link href="/" className="button button--dark">Back to TOONHUB by Aadi <ArrowUpRight size={17} /></Link></main>; }
