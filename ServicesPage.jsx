import { Link } from 'react-router-dom';

const services = [
  ['Home & Resident Concierge', 'Refreshes, resets, organization, laundry, household support, home watch, and everyday execution.'],
  ['Property & Field Operations', 'Unit turns, move-in readiness, make-ready support, post-construction cleanup, trash-outs, field verification, and property logistics.'],
  ['Real Estate Support', 'Listing support, open-house preparation, signage, administrative coordination, and field assistance.'],
  ['Administrative & Operations', 'Virtual and on-site administrative support, inbox and calendar management, research, project coordination, SOPs, process mapping, audits, CRM cleanup, and vendor administration.'],
  ['Events, Weddings & Hospitality', 'Planning, coordination, setup, guest-facing execution, creative details, and event logistics.'],
  ['Creative & Custom Products', 'Signage, print, apparel, NFC/digital business tools, branded products, gifting, kits, and creative production.'],
  ['Institutional & Government Support', 'Procurement-oriented administrative, facilities, janitorial, and operational support subject to scope and qualification requirements.'],
];

export default function ServicesPage() {
  return <main className="page"><section className="page-hero"><div className="eyebrow">SERVICE UNIVERSE</div><h1>Services built around the work — not a generic menu.</h1><p>Our catalog spans concierge, property, real estate, business operations, events, creative production, and institutional support. The exact service, scope, location, fulfillment model, and price are determined by the request.</p></section><section className="grid two">{services.map(([title, text]) => <article className="card" key={title}><h2>{title}</h2><p>{text}</p><Link to="/contact" className="text-link">Request this type of support →</Link></article>)}</section><section className="section callout"><h2>Need something that isn't listed?</h2><p>Tell us the outcome you need. We can determine whether it fits an existing service, requires a custom scope, or needs a qualified specialist.</p><Link to="/contact" className="button primary">Start a Request</Link></section></main>;
}
