import Link from 'next/link';

export default function StickyContactDock() {
  return (
    <>
      {/* Desktop pill dock */}
      <div className="sticky-dock">
        <Link href="/contact" className="dock-link">Contact</Link>
        <Link href="/contact" className="dock-cta">Discuss Your Project</Link>
        <a href="https://wa.me/919514808885" target="_blank" rel="noopener noreferrer" className="dock-whatsapp">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 20l1.4-4.3A8 8 0 1112 20a8 8 0 01-4.3-1.3z"/>
          </svg>
          WhatsApp
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="mobile-sticky-bar">
        <div className="mobile-sticky-bar-inner">
          <Link href="/contact" className="mobile-dock-link">Contact</Link>
          <Link href="/contact" className="mobile-dock-cta">Discuss</Link>
          <a href="https://wa.me/919514808885" target="_blank" rel="noopener noreferrer" className="mobile-dock-link">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
