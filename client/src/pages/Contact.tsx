import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { PageFrame, PageIntro } from '@/components/SiteChrome';
import { IMAGES } from '@/lib/data';

export default function Contact() {
  return <PageFrame><PageIntro kicker="Say hello / 05" title={<>Let's make<br /><em>something good.</em></>} body={<p>Questions about a figure, a collaboration, or just want to tell us about your shelf? We would love to hear from you.</p>} color="peach" image={IMAGES[3].src} badge="Get in Touch / Studio Direct" /><main className="contact-page"><div className="container contact-grid"><div className="contact-aside"><p className="eyebrow">Find us here</p><a href="mailto:hello@toonhub.example"><Mail size={18} /> hello@toonhub.example <ArrowUpRight size={15} /></a><span><MapPin size={18} /> Somewhere in the city</span><div className="contact-aside__hours"><p className="eyebrow">Studio hours</p><p>Monday–Friday<br />10:00 — 18:00 CET</p></div></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>Name<input type="text" placeholder="Your name" /></label><label>Email<input type="email" placeholder="you@example.com" /></label><label>What’s on your mind?<textarea rows={5} placeholder="Tell us a little something..." /></label><button className="button button--dark" type="submit">Send it over <Send size={16} /></button></form></div></main></PageFrame>;
}
