import React, { useMemo, useState } from 'react';

const BUSINESS_PHONE = '470-682-9348';
const BUSINESS_EMAIL = 'vendors@danideclares.com';
const WEBSITE = 'danideclares.com';

const playbooks = {
  business: {
    icon: '📈',
    eyebrow: 'Business Growth Playbook',
    title: 'Grow my business',
    subtitle: 'Attract customers, improve follow-up, and build systems that keep working after the event.',
    bullets: [
      'SmartTap business cards and review systems',
      'QR displays, booking links, and digital intake forms',
      'Customer touchpoints that make follow-up easier',
      'Operational support for growing businesses',
    ],
    nextStep: 'Request a Business Growth Consultation',
  },
  merch: {
    icon: '👕',
    eyebrow: 'Merchandise Playbook',
    title: 'Create custom merchandise',
    subtitle: 'Build occasion-based collections for reunions, watch parties, field days, businesses, and events.',
    bullets: [
      'FIFA watch party and field day collections',
      'Family reunion, cookout, corporate, and celebration collections',
      'Custom apparel, signage, packaging, favors, and keepsakes',
      'Collection planning based on your audience and occasion',
    ],
    nextStep: 'Start a Merchandise Request',
  },
  event: {
    icon: '🎉',
    eyebrow: 'Event Playbook',
    title: 'Plan an event',
    subtitle: 'Get help with the details, timeline, vendors, custom production, and day-of execution.',
    bullets: [
      'Planning, coordination, and communication support',
      'Custom signage, keepsakes, welcome items, and printed materials',
      'Day-of setup, vendor check-in, guest flow, and troubleshooting',
      'You celebrate. We handle the rest.',
    ],
    nextStep: 'Check Event Support Availability',
  },
  vendor: {
    icon: '🛍️',
    eyebrow: 'Vendor Playbook',
    title: 'Improve my vendor booth',
    subtitle: 'Turn one event into more customers, better leads, stronger branding, and repeat business.',
    bullets: [
      'Booth layout, signage, lead capture, and follow-up planning',
      'SmartTap displays, review systems, and QR customer paths',
      'Vendor starter kits, branded materials, and customer flow support',
      'Make the most of every market, pop-up, festival, and expo',
    ],
    nextStep: 'Request a Vendor Booth Audit',
  },
  smarttap: {
    icon: '📱',
    eyebrow: 'SmartTap™',
    title: 'I just want a SmartTap™',
    subtitle: 'Share your business in one tap. Live setup available for simple cards during the event.',
    bullets: [
      'Share contact info, website, social media, booking links, menus, or payment links',
      'Great for vendors, artists, realtors, creators, and service businesses',
      'Reusable and reprogrammable as your business changes',
      'Ask about custom branded cards, review stands, table taps, and smart signs',
    ],
    nextStep: 'Ask About SmartTap™ Setup',
  },
};

const options = Object.entries(playbooks);

function App() {
  const [selectedKey, setSelectedKey] = useState('business');
  const [status, setStatus] = useState('idle');
  const selected = playbooks[selectedKey];

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`Dani Declares ${selected.eyebrow} Lead`);
    const body = encodeURIComponent(
      `Hi Dani Declares,\n\nI tapped the SmartTap demo and I am interested in: ${selected.eyebrow}\n\nName:\nBusiness / Organization:\nPhone:\nEmail:\nNotes:\n`
    );
    return `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  }, [selected]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get('name')?.toString().trim(),
      phone: form.get('phone')?.toString().trim(),
      email: form.get('email')?.toString().trim(),
      business_name: form.get('business_name')?.toString().trim(),
      interest: selectedKey,
      interest_label: selected.eyebrow,
      source: 'SmartTap demo / AfroXFest',
      notes: form.get('notes')?.toString().trim(),
      created_at: new Date().toISOString(),
    };

    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      setStatus('email');
      return;
    }

    setStatus('saving');
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/smarttap_leads`, {
        method: 'POST',
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Lead save failed');
      event.currentTarget.reset();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('email');
    }
  }

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="brand-row">
          <span className="brand-mark">DD</span>
          <span>Dani Declares</span>
        </div>

        <p className="eyebrow">SmartTap™ Demo</p>
        <h1>What are you trying to accomplish today?</h1>
        <p className="hero-copy">
          Tap. Choose your path. Get pointed to the right Dani Declares playbook, support option, or consultation next step.
        </p>

        <div className="option-grid" aria-label="Choose your Dani Declares path">
          {options.map(([key, item]) => (
            <button
              key={key}
              className={`option-card ${selectedKey === key ? 'active' : ''}`}
              onClick={() => {
                setSelectedKey(key);
                setStatus('idle');
              }}
              type="button"
            >
              <span className="option-icon">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="detail-card">
        <div>
          <p className="eyebrow">{selected.eyebrow}</p>
          <h2>{selected.title}</h2>
          <p className="section-copy">{selected.subtitle}</p>
        </div>

        <ul className="feature-list">
          {selected.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="lead-box">
          <h3>{selected.nextStep}</h3>
          <p>
            Leave your info and we will follow up after the event. You can also call or email directly.
          </p>

          <form onSubmit={handleSubmit} className="lead-form">
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Phone
              <input name="phone" placeholder="Best phone number" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="Email address" />
            </label>
            <label>
              Business / Organization
              <input name="business_name" placeholder="Optional" />
            </label>
            <label className="full-width">
              Notes
              <textarea name="notes" placeholder="Tell us what you need help with" rows="3" />
            </label>
            <button type="submit">Start My Request</button>
          </form>

          {status === 'saving' && <p className="status">Saving your request...</p>}
          {status === 'success' && <p className="status success">Request saved. We will follow up soon.</p>}
          {status === 'email' && (
            <p className="status warning">
              Lead capture is not connected yet. <a href={mailtoLink}>Tap here to email this request instead.</a>
            </p>
          )}
        </div>

        <footer className="contact-footer">
          <a href={`tel:${BUSINESS_PHONE.replace(/-/g, '')}`}>{BUSINESS_PHONE}</a>
          <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
          <a href="https://danideclares.com">{WEBSITE}</a>
        </footer>
      </section>
    </main>
  );
}

export default App;
