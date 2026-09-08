const WHATSAPP_URL = 'https://wa.me/919514808885';

export default function StickyContactDock() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Raghav Kanva" className="whatsapp-float">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 20l1.4-4.3A8 8 0 1112 20a8 8 0 01-4.3-1.3z" />
      </svg>
      <span className="whatsapp-float-label">WhatsApp Me</span>
    </a>
  );
}
