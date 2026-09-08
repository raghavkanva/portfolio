'use client';

import { useState } from 'react';

const BOOK_CALL_URL = 'https://cal.com/raghavkanva/seo-consultation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="site-nav">
        <a href="#top" className="nav-logo">RAGHAV&nbsp;KANVA</a>
        <div className="nav-links">
          <a href="#help" className="nav-link">How I Help</a>
          <a href="#who" className="nav-link">Who I Work With</a>
        </div>
        <div className="nav-actions">
          <a href={BOOK_CALL_URL} className="btn-nav-cta">Book a Call</a>
          <button
            className="hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#help" className="mobile-menu-link" onClick={() => setMobileOpen(false)}>How I Help</a>
          <a href="#who" className="mobile-menu-link" onClick={() => setMobileOpen(false)}>Who I Work With</a>
        </div>
      )}
    </>
  );
}
