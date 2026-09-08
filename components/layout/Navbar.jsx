'use client';

import { useState } from 'react';
import { gtmAttrs } from '../../lib/gtm';

const BOOK_CALL_URL = 'https://cal.com/raghavkanva/seo-consultation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((o) => {
      const next = !o;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'mobile_menu_toggle', menu_state: next ? 'open' : 'closed' });
      return next;
    });
  };

  return (
    <>
      <nav className="site-nav">
        <a href="#top" className="nav-logo" {...gtmAttrs('nav_click', { nav_label: 'logo', click_location: 'desktop_nav' })}>RAGHAV&nbsp;KANVA</a>
        <div className="nav-links">
          <a href="#help" className="nav-link" {...gtmAttrs('nav_click', { nav_label: 'how_i_help', click_location: 'desktop_nav' })}>How I Help</a>
          <a href="#who" className="nav-link" {...gtmAttrs('nav_click', { nav_label: 'who_i_work_with', click_location: 'desktop_nav' })}>Who I Work With</a>
        </div>
        <div className="nav-actions">
          <a href={BOOK_CALL_URL} className="btn-nav-cta" {...gtmAttrs('contact_click', { contact_method: 'call', click_location: 'nav' })}>Book a Call</a>
          <button
            className="hamburger"
            onClick={toggleMobileMenu}
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
          <a href="#help" className="mobile-menu-link" onClick={() => setMobileOpen(false)} {...gtmAttrs('nav_click', { nav_label: 'how_i_help', click_location: 'mobile_nav' })}>How I Help</a>
          <a href="#who" className="mobile-menu-link" onClick={() => setMobileOpen(false)} {...gtmAttrs('nav_click', { nav_label: 'who_i_work_with', click_location: 'mobile_nav' })}>Who I Work With</a>
        </div>
      )}
    </>
  );
}
