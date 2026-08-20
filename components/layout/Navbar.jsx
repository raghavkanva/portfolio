'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SERVICES_ITEMS = [
  {
    title: 'SEO & AI Visibility',
    desc: 'Improve how the right customers discover your business across traditional search and AI-powered search experiences.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5B9CFF" strokeWidth="1.7" style={{flex:'none',marginTop:2}}>
        <circle cx="10" cy="10" r="6.5"/><line x1="15" y1="15" x2="21" y2="21"/>
      </svg>
    ),
    href: '/services#seo-ai-visibility',
  },
  {
    title: 'Strategic Discoverability Audit',
    desc: 'Find what is limiting visibility, lead quality, positioning, or online growth and determine what should happen next.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5B9CFF" strokeWidth="1.7" style={{flex:'none',marginTop:2}}>
        <rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/>
        <rect x="4" y="13" width="7" height="7" rx="1"/><circle cx="16.5" cy="16.5" r="3.5"/>
      </svg>
    ),
    href: '/services#audit',
  },
  {
    title: 'Monthly SEO & Growth Advisory',
    desc: 'Ongoing SEO, visibility, measurement, opportunity discovery, and strategic direction.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5B9CFF" strokeWidth="1.7" style={{flex:'none',marginTop:2}}>
        <circle cx="12" cy="12" r="8" strokeDasharray="4 3"/><circle cx="12" cy="12" r="2" fill="#5B9CFF" stroke="none"/>
      </svg>
    ),
    href: '/services#monthly-advisory',
  },
  {
    title: 'Paid Advertising',
    desc: 'Google Ads and Meta Ads for businesses where faster acquisition or targeted reach makes sense.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5B9CFF" strokeWidth="1.7" style={{flex:'none',marginTop:2}}>
        <circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="#5B9CFF" stroke="none"/>
      </svg>
    ),
    href: '/services#paid-advertising',
  },
  {
    title: 'Content & Landing Page Strategy',
    desc: 'Supporting pages and content that align with SEO, ads, customer understanding, and conversion.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5B9CFF" strokeWidth="1.7" style={{flex:'none',marginTop:2}}>
        <rect x="5" y="3" width="14" height="18" rx="1.5"/>
        <line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/>
      </svg>
    ),
    href: '/services#content-landing',
  },
];

const WHO_ITEMS = [
  {
    title: 'Digital Marketing Agencies',
    desc: 'Additional SEO, AI visibility, paid acquisition, audit, or strategic support on suitable client accounts.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B9CFF" strokeWidth="1.7" style={{flex:'none',marginTop:2}}>
        <rect x="4" y="10" width="5" height="10"/><rect x="10.5" y="6" width="5" height="14"/><rect x="17" y="3" width="5" height="17"/>
      </svg>
    ),
    href: '/who-i-work-with/digital-marketing-agencies',
  },
  {
    title: 'Businesses & Organizations',
    desc: 'Build online visibility properly, or improve SEO, customer acquisition, and marketing already running.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B9CFF" strokeWidth="1.7" style={{flex:'none',marginTop:2}}>
        <path d="M4 20V8l8-4 8 4v12"/><line x1="4" y1="20" x2="20" y2="20"/>
      </svg>
    ),
    href: '/who-i-work-with/businesses-organizations',
  },
  {
    title: 'Founders & Experts',
    desc: 'Make expertise and authority clearer and easier for the right people to discover online.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B9CFF" strokeWidth="1.7" style={{flex:'none',marginTop:2}}>
        <circle cx="12" cy="8" r="3.4"/><path d="M5 20c1-4 4-6 7-6s6 2 7 6"/>
      </svg>
    ),
    href: '/who-i-work-with/founders-experts',
  },
];

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef(null);

  const openMega = (name) => {
    clearTimeout(closeTimer.current);
    setMegaOpen(name);
  };

  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(null), 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (path) => pathname === path || pathname.startsWith(path + '/');

  return (
    <>
      {/* Desktop Nav */}
      <nav className="nav">
        <Link href="/" className="nav-logo">RAGHAV&nbsp;KANVA</Link>

        <div className="nav-links">
          {/* Services */}
          <div
            className="nav-item"
            onMouseEnter={() => openMega('services')}
            onMouseLeave={closeMega}
          >
            <Link href="/services" className={`nav-link${isActive('/services') ? ' active' : ''}`}>
              Services
            </Link>
            {megaOpen === 'services' && (
              <div
                className="mega-menu"
                onMouseEnter={() => openMega('services')}
                onMouseLeave={closeMega}
              >
                {SERVICES_ITEMS.map((item) => (
                  <Link key={item.title} href={item.href} className="mega-item">
                    <span className="mega-item-icon">{item.icon}</span>
                    <span>
                      <div className="mega-item-title">{item.title}</div>
                      <div className="mega-item-desc">{item.desc}</div>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Who I Work With */}
          <div
            className="nav-item"
            onMouseEnter={() => openMega('who')}
            onMouseLeave={closeMega}
          >
            <Link href="/who-i-work-with" className={`nav-link${isActive('/who-i-work-with') ? ' active' : ''}`}>
              Who I Work With
            </Link>
            {megaOpen === 'who' && (
              <div
                className="mega-menu mega-menu-who"
                onMouseEnter={() => openMega('who')}
                onMouseLeave={closeMega}
              >
                {WHO_ITEMS.map((item) => (
                  <Link key={item.title} href={item.href} className="mega-item">
                    <span className="mega-item-icon">{item.icon}</span>
                    <span>
                      <div className="mega-item-title">{item.title}</div>
                      <div className="mega-item-desc">{item.desc}</div>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About</Link>
          <Link href="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`}>Contact</Link>
        </div>

        <Link href="/contact" className="nav-cta">Discuss Your Project</Link>
      </nav>

      {/* Mobile Nav */}
      <nav className="mobile-nav">
        <Link href="/" className="mobile-nav-logo">RAGHAV&nbsp;KANVA</Link>
        <button
          className="hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <div>
            <div className="mobile-menu-group-label">Services</div>
            <div className="mobile-menu-links">
              {SERVICES_ITEMS.map((item) => (
                <Link key={item.title} href={item.href} className="mobile-menu-link">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mobile-menu-group-label">Who I Work With</div>
            <div className="mobile-menu-links">
              {WHO_ITEMS.map((item) => (
                <Link key={item.title} href={item.href} className="mobile-menu-link">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mobile-menu-links">
            <Link href="/about" className="mobile-menu-link">About</Link>
            <Link href="/contact" className="mobile-menu-link">Contact</Link>
          </div>
          <Link href="/contact" className="mobile-menu-cta">Discuss Your Project</Link>
        </div>
      )}
    </>
  );
}
