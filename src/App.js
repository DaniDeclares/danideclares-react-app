import React from 'react';
import {
  FaBroom,
  FaCamera,
  FaCheckCircle,
  FaClipboardCheck,
  FaHome,
  FaRegClock,
  FaShieldAlt,
  FaSprayCan,
} from 'react-icons/fa';
import './index.css';

const packages = [
  {
    name: 'Refresh / Light Turn',
    price: '$125-$500',
    description: 'For a mostly clean space that needs a readiness pass before showings, move-in, guests, or inspection.',
    includes: ['Light kitchen and bath wipe down', 'Floors swept and mopped', 'Light dusting', 'Basic final photos'],
  },
  {
    name: 'Standard Turn',
    price: '$200-$900',
    description: 'For normal move-in or move-out cleaning where the property needs a full turnover pass.',
    includes: ['Kitchen and bathroom cleaning', 'Floors and main surfaces', 'Exterior appliances and cabinets', 'Readiness photos'],
  },
  {
    name: 'Deep Detail Clean',
    price: '$350-$1,400',
    description: 'For higher-touch detail work, buildup, edges, fixtures, baseboards, and proof-ready presentation.',
    includes: ['Bathroom and shower detail', 'Kitchen grease and fixture detail', 'Edges, baseboards, and crevices', 'Surface-safe detail tools'],
  },
  {
    name: 'Heavy Reset',
    price: '$650+',
    description: 'For neglected spaces, cluttered rooms, abandoned-condition units, or multi-pass reset work.',
    includes: ['Room-by-room reset plan', 'Bagging and light debris organization', 'Multi-pass cleaning', 'Before and after documentation'],
  },
];

const pricingRows = [
  ['Studio / 1 Bath', '$125-$175', '$200-$300', '$350-$500', '$650+'],
  ['1 Bed / 1 Bath', '$150-$225', '$250-$350', '$400-$600', '$750+'],
  ['2 Bed / 1-2 Bath', '$200-$300', '$350-$500', '$550-$800', '$900+'],
  ['3 Bed / 2 Bath', '$275-$400', '$500-$700', '$750-$1,100', '$1,200+'],
  ['4 Bed / 2+ Bath', '$350-$500', '$650-$900', '$950-$1,400', '$1,500+'],
  ['5+ Bed / Large Property', 'Custom', 'Custom', 'Custom', '$1,200-$2,500+'],
];

const addOns = [
  ['Interior oven detail', '$45-$95'],
  ['Interior refrigerator detail', '$45-$85'],
  ['Interior cabinet detail', '$35-$125'],
  ['Shower glass or mineral buildup', '$45-$150'],
  ['Grout and crevice detail', '$35-$150'],
  ['Steam detail where surface-safe', '$35-$125'],
  ['Carpet spot or refresh support', '$50-$175'],
  ['Pet hair or odor support', '$50-$200'],
  ['High-reach cobweb, fan, or fixture detail', '$35-$125'],
  ['Wall scuff touch cleaning', '$35-$150'],
  ['Extra photo documentation or report', '$25-$75'],
  ['Rush, weekend, or after-hours service', '$50-$200'],
];

const quoteFactors = [
  'Bed and bath count',
  'Condition and buildup level',
  'Square footage',
  'Appliances requested',
  'Trash or light debris',
  'Pets, odor, or hair',
  'Stairs, elevator, or access limits',
  'Rush timing or weekend work',
];

const exclusions = [
  'Mold remediation',
  'Plumbing, drain clearing, HVAC, electrical, or appliance repair',
  'Pest treatment or biohazard cleanup',
  'Large haul-away or dump runs unless quoted separately',
  'Professional carpet restoration',
  'Painting, repairs, or licensed maintenance work',
  'Heavy lifting beyond safe service scope',
];

function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Dani Declares Property Support</p>
          <h1>Turn-ready cleaning, reset, and documentation support.</h1>
          <p className="hero__copy">
            Detail-focused property services for move-ins, move-outs, apartment turns,
            listing prep, guest-ready resets, and vendor-ready property support.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#quote">Build a Quote</a>
            <a className="button button--secondary" href="#packages">View Packages</a>
          </div>
        </div>
        <div className="hero__panel" aria-label="Property service highlights">
          <div>
            <FaHome />
            <span>Move-in / move-out</span>
          </div>
          <div>
            <FaBroom />
            <span>Deep detail cleaning</span>
          </div>
          <div>
            <FaCamera />
            <span>Before and after photos</span>
          </div>
        </div>
      </section>

      <section className="section section--intro">
        <div className="section__header">
          <p className="eyebrow">What This Covers</p>
          <h2>Property support that goes beyond a basic clean.</h2>
        </div>
        <div className="feature-grid">
          <article>
            <FaClipboardCheck />
            <h3>Turnover Readiness</h3>
            <p>Cleaning and reset support for apartments, rentals, homes, and small commercial spaces preparing for the next use.</p>
          </article>
          <article>
            <FaSprayCan />
            <h3>Detail Work</h3>
            <p>Bathrooms, kitchens, fixtures, edges, buildup, scuffs, appliances, cabinets, and surface-safe detail tools.</p>
          </article>
          <article>
            <FaShieldAlt />
            <h3>Scope Control</h3>
            <p>Clear quote levels, add-ons, exclusions, deposits, and approval before extra work is added onsite.</p>
          </article>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="section__header">
          <p className="eyebrow">Packages</p>
          <h2>Choose the service level by property condition.</h2>
          <p>Bed and bath count sets the starting point. Condition, detail level, add-ons, and access needs determine the final quote.</p>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.name}>
              <div className="package-card__top">
                <h3>{item.name}</h3>
                <strong>{item.price}</strong>
              </div>
              <p>{item.description}</p>
              <ul>
                {item.includes.map((include) => (
                  <li key={include}><FaCheckCircle /> {include}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--table">
        <div className="section__header">
          <p className="eyebrow">Starting Prices</p>
          <h2>Base pricing by bed and bath count.</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Property Size</th>
                <th>Refresh</th>
                <th>Standard Turn</th>
                <th>Deep Detail</th>
                <th>Heavy Reset</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => <td key={`${row[0]}-${cell}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section--split">
        <div>
          <p className="eyebrow">Add-Ons</p>
          <h2>Detail services can be added as needed.</h2>
          <div className="addon-list">
            {addOns.map(([name, price]) => (
              <div className="addon-row" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>
        <aside className="quote-box" id="quote">
          <FaRegClock />
          <h3>Quote Formula</h3>
          <p>Bed/Bath Base + Condition Level + Add-Ons + Travel, Rush, or Weekend needs.</p>
          <ul>
            {quoteFactors.map((factor) => <li key={factor}>{factor}</li>)}
          </ul>
        </aside>
      </section>

      <section className="section section--terms">
        <div className="section__header">
          <p className="eyebrow">Booking Terms</p>
          <h2>Clear expectations before the work starts.</h2>
        </div>
        <div className="terms-grid">
          <article>
            <h3>Deposits</h3>
            <p>Jobs under $175 are paid upfront. Standard and deep detail jobs require a 50% deposit to reserve the service window.</p>
          </article>
          <article>
            <h3>Heavy Resets</h3>
            <p>Heavy resets require photos or a walkthrough before the final quote is confirmed. Balance is due before final photos are released.</p>
          </article>
          <article>
            <h3>Scope Changes</h3>
            <p>Additional work discovered onsite must be approved before continuing, especially appliances, buildup, pets, trash, or high-detail areas.</p>
          </article>
        </div>
      </section>

      <section className="section section--split section--final">
        <div>
          <p className="eyebrow">Boundaries</p>
          <h2>Services stay inside safe property support scope.</h2>
          <ul className="boundary-list">
            {exclusions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="request-card">
          <h3>To request a quote, send:</h3>
          <ol>
            <li>Property size and bed/bath count</li>
            <li>Move-in, move-out, reset, or recurring support need</li>
            <li>Photos or video of each room</li>
            <li>Appliances, pets, trash, stairs, and timing details</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default App;
