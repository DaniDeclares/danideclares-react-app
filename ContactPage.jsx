import { useState } from 'react';

const INTAKE_URL = 'https://ajxezpczaemunlcmqlgl.supabase.co/functions/v1/public-service-request';

export default function ContactPage() {
  const [state, setState] = useState('idle');
  const [message, setMessage] = useState('');

  async function submit(e) {
    e.preventDefault();
    setState('submitting');
    setMessage('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch(INTAKE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Submission failed.');
      e.currentTarget.reset();
      setState('success');
      setMessage('Request received. DANI DECLARES will review the request and determine the appropriate next step.');
    } catch (error) {
      setState('error');
      setMessage(error?.message || 'We could not submit the request. Please try again.');
    }
  }

  return <main className="page"><section className="page-hero"><div className="eyebrow">START HERE</div><h1>Tell us what needs to get handled.</h1><p>Use this as the first step for resident, property, real estate, business, event, creative, or institutional requests.</p></section><section className="card form-card"><form onSubmit={submit}><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Phone<input name="phone" /></label><label>I'm contacting DANI DECLARES about<select name="channel" defaultValue="" required><option value="" disabled>Select a lane</option><option>Resident Concierge</option><option>Property Management & Apartments</option><option>Real Estate Office / Brokerage</option><option>Business</option><option>Government / Institution</option><option>Wedding / Event</option><option>Other / Custom Request</option></select></label><label>What do you need?<textarea name="request" rows="7" required /></label><input name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="honeypot" /><button className="button primary" type="submit" disabled={state === 'submitting'}>{state === 'submitting' ? 'Submitting…' : 'Submit Request'}</button>{message && <p className="form-note" role="status">{message}</p>}</form></section></main>;
}
