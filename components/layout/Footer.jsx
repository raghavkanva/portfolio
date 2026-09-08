const BOOK_CALL_URL = 'https://cal.com/raghavkanva/seo-consultation';
const WHATSAPP_URL = 'https://wa.me/919514808885';

const DESC = (
  <>Helping agencies and businesses reach the right customers through Google and AI search, fix what is holding them back, and <span className="highlight-growth">grow their business</span> online.</>
);

function SocialIcons() {
  return (
    <>
      <a href="https://www.linkedin.com/in/raghavkanva/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="4.5" r="1.8" /><path d="M11 21v-8M11 12.5c0-1.9 1.6-3.5 3.5-3.5S18 10.6 18 12.5V21" />
        </svg>
      </a>
      <a href="https://www.instagram.com/raghavkanva/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" />
        </svg>
      </a>
      <a href="https://www.threads.net/@raghavkanva" aria-label="Threads" target="_blank" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 21c-4.5 0-7.5-2.8-7.5-8.5S7.5 4 12 4c3.6 0 6 1.9 6.3 5" />
          <path d="M10.5 12.5c0-1.7 1.3-2.7 3-2.4 1.7.3 2.5 1.6 2.3 3.4-.2 2-1.7 3.2-3.7 3.2-2.4 0-4-1.4-4-3.8" />
        </svg>
      </a>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <svg className="footer-rings" width="500" height="500" viewBox="0 0 500 500" aria-hidden="true">
        <circle cx="250" cy="250" r="240" fill="none" stroke="#1D2440" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="170" fill="none" stroke="#1D2440" strokeWidth="1.5" />
      </svg>

      <div className="footer-top">
        <div>
          <div className="footer-name">Raghav Kanva</div>
          <div className="footer-role">SEO Consultant</div>
          <p className="footer-desc">{DESC}</p>
        </div>
        <div className="footer-links">
          <a href={BOOK_CALL_URL}>Discovery Call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:raghavkanva@gmail.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">&copy; 2026 Raghav Kanva</div>
        <div className="footer-social">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
