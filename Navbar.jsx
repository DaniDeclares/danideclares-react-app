import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="brand">DANI DECLARES</Link>
      <div className="nav-links">
        <Link to="/services">Services</Link>
        <Link to="/channels">Who We Serve</Link>
        <Link to="/weddings">Weddings & Events</Link>
        <Link to="/coaching">Business Support</Link>
        <Link to="/provider-network">Provider Network</Link>
        <Link to="/contact" className="nav-cta">Start a Request</Link>
      </div>
    </nav>
  );
}
