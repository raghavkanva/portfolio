import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer section-footer">
      <div style={{position:'relative'}}>
        <svg width="500" height="500" viewBox="0 0 500 500" style={{position:'absolute',right:-120,top:-160,opacity:.5,pointerEvents:'none'}} aria-hidden="true">
          <circle cx="250" cy="250" r="240" fill="none" stroke="#1D2440" strokeWidth="1.5"/>
          <circle cx="250" cy="250" r="170" fill="none" stroke="#1D2440" strokeWidth="1.5"/>
        </svg>

        <div className="footer-grid">
          <div>
            <div className="footer-logo">RAGHAV KANVA</div>
            <div className="footer-tagline">Independent SEO &amp; AI Discoverability Consultant</div>
            <p className="footer-desc">
              Helping businesses improve how the right customers find, understand, and choose them online.
            </p>
          </div>

          <div>
            <div className="footer-col-label">Services</div>
            <div className="footer-links">
              <Link href="/services#seo-ai-visibility" className="footer-link">SEO &amp; AI Visibility</Link>
              <Link href="/services#audit" className="footer-link">Strategic Discoverability Audit</Link>
              <Link href="/services#monthly-advisory" className="footer-link">Monthly SEO &amp; Growth Advisory</Link>
              <Link href="/services#paid-advertising" className="footer-link">Paid Advertising</Link>
              <Link href="/services#content-landing" className="footer-link">Content &amp; Landing Page Strategy</Link>
            </div>
          </div>

          <div>
            <div className="footer-col-label">Who I Work With</div>
            <div className="footer-links">
              <Link href="/who-i-work-with/digital-marketing-agencies" className="footer-link">Digital Marketing Agencies</Link>
              <Link href="/who-i-work-with/businesses-organizations" className="footer-link">Businesses &amp; Organizations</Link>
              <Link href="/who-i-work-with/founders-experts" className="footer-link">Founders &amp; Experts</Link>
            </div>
          </div>

          <div>
            <div className="footer-col-label">Connect</div>
            <div className="footer-links">
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="mailto:raghavkanva@gmail.com" className="footer-link">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Raghav Kanva</span>
          <div className="footer-bottom-links">
            <span style={{cursor:'default'}}>Privacy</span>
            <span style={{cursor:'default'}}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
