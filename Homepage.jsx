import { Link } from 'react-router-dom';

const lanes = [
  { title: 'Resident Concierge', text: 'White-glove support for everyday life, home, organization, errands, and personal needs.' },
  { title: 'Property Management & Apartments', text: 'Turnovers, make-ready support, field operations, resident experience, and property logistics.' },
  { title: 'Real Estate Offices & Brokerages', text: 'Listing, transaction, office, open-house, administrative, and field support.' },
  { title: 'Businesses', text: 'Administrative operations, workplace support, products, systems, creative execution, and recurring help.' },
  { title: 'Government & Institutions', text: 'Procurement-ready administrative, facilities, janitorial, and operational support.' },
];

export default function Homepage() {
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">WHITE-GLOVE EXECUTION · GEORGIA</div>
        <h1>Life, property, events & business — handled.</h1>
        <p className="hero-copy">DANI DECLARES is a multi-division concierge and operations company built to turn complicated requests into coordinated execution.</p>
        <div className="actions">
          <Link to="/contact" className="button primary">Start a Request</Link>
          <Link to="/services" className="button secondary">Explore Services</Link>
        </div>
      </section>

      <section className="section intro">
        <div>
          <div className="eyebrow">ONE COMPANY. MULTIPLE WAYS TO ENGAGE.</div>
          <h2>From the first request to final completion.</h2>
        </div>
        <p>We coordinate the right people, capabilities, materials, logistics, documentation, and quality controls for the work — rather than leaving you to manage the pieces yourself.</p>
      </section>

      <section className="section grid five">
        {lanes.map((lane) => <article className="card" key={lane.title}><h3>{lane.title}</h3><p>{lane.text}</p></article>)}
      </section>

      <section className="section dark-panel">
        <div className="eyebrow">HOW WE WORK</div>
        <h2>Request → Scope → Coordinate → Execute → Verify</h2>
        <p>Some services are straightforward and can be requested directly. Variable, specialized, regulated, or scope-dependent work is reviewed before a final price or commitment is issued.</p>
        <Link to="/contact" className="button light">Tell Us What You Need</Link>
      </section>

      <section className="section split">
        <div><div className="eyebrow">PROVIDER NETWORK</div><h2>We are building a qualified network behind every service.</h2></div>
        <div><p>Providers and workers are not automatically authorized just because they apply. DANI DECLARES collects capabilities, service area, experience, availability, equipment, credentials, and other qualification information before operational access is granted.</p><Link to="/provider-network" className="text-link">Join the Provider Network →</Link></div>
      </section>
    </main>
  );
}
