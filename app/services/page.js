import Link from 'next/link';

export const metadata = {
  title: 'Services — Raghav Kanva SEO & AI Discoverability Consultant',
  description: 'SEO, AI visibility, paid advertising, content and landing page strategy. Find the right service for your business situation.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-label">Services</p>
          <h1 className="page-h1">
            Find the Right Way to Grow Your Online Visibility and Reach More Relevant Customers
          </h1>
          <p className="page-h1-sub">
            I help businesses improve how the right customers find, understand, and choose them online
            through SEO, AI visibility, AI discoverability, paid advertising, content, landing pages,
            and ongoing strategic support.
          </p>
          <p className="page-h1-sub" style={{ marginTop: '-8px' }}>
            Whether you are starting from the beginning or improving what is already running, the
            right starting point depends on your business, audience, goals, and current marketing.
          </p>
          <div className="btn-group">
            <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
            <a href="https://wa.me/919514808885" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
          </div>
        </div>
        <div className="page-hero-visual">
          <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SEO and AI Visibility">
            <defs>
              <linearGradient id="seoBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#123E68"/>
                <stop offset="100%" stopColor="#2457E6"/>
              </linearGradient>
            </defs>
            <rect width="600" height="260" rx="28" fill="url(#seoBg)"/>
            <circle cx="150" cy="125" r="44" fill="none" stroke="#9ED7FF" strokeWidth="6"/>
            <line x1="182" y1="157" x2="213" y2="188" stroke="#9ED7FF" strokeWidth="6" strokeLinecap="round"/>
            <rect x="390" y="79" width="100" height="90" rx="18" fill="none" stroke="#8ED3FF" strokeWidth="5"/>
            <circle cx="420" cy="111" r="5" fill="#8ED3FF"/>
            <circle cx="440" cy="111" r="5" fill="#8ED3FF"/>
            <circle cx="460" cy="111" r="5" fill="#8ED3FF"/>
            <path d="M415 139 H466" stroke="#8ED3FF" strokeWidth="5" strokeLinecap="round"/>
            <path d="M217 127 C265 127 277 116 301 116" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
            <path d="M383 127 C343 127 331 116 307 116" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
            <rect x="260" y="96" width="80" height="78" rx="14" fill="#fff"/>
            <rect x="276" y="113" width="48" height="9" rx="4.5" fill="#2457E6"/>
            <rect x="276" y="134" width="36" height="7" rx="3.5" fill="#9BB8F6"/>
            <rect x="276" y="150" width="26" height="7" rx="3.5" fill="#9BB8F6"/>
            <circle cx="300" cy="135" r="70" fill="none" stroke="#FFFFFF" strokeOpacity=".14" strokeWidth="2"/>
            <circle cx="300" cy="135" r="94" fill="none" stroke="#FFFFFF" strokeOpacity=".08" strokeWidth="2"/>
          </svg>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="section section-off-white">
        <h2 className="section-h2 mb-12">How I Can Help</h2>
        <p className="section-lead mb-48" style={{ maxWidth: '600px' }}>
          Choose the service that best matches where your business is today.
        </p>
      </section>

      {/* SEO & AI Visibility — Flagship */}
      <section className="flagship-section">
        <div className="flagship-grid">
          <div className="flagship-content">
            <div>
              <p style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginBottom: '8px' }}>Main Service</p>
              <h2 style={{ fontSize: '44px', fontWeight: 500, color: '#fff', lineHeight: 1.15, margin: '0 0 12px' }}>SEO &amp; AI Visibility</h2>
              <p style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
                Best for businesses that want SEO built properly from the beginning or want to improve what is already running.
              </p>
              <p className="service-body-white mb-20">
                I can help improve your SEO, organic search visibility, AI visibility, and AI discoverability
                by connecting search strategy with your audience, products or services, business strengths,
                and growth goals.
              </p>
              <p className="service-body-white mb-24">
                If you are looking for an SEO expert who can understand the business before building the
                search strategy, this is the main service to start with.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginBottom: '12px' }}>What This Can Include</p>
              <ul className="service-includes mb-32">
                <li>Audience and keyword research</li>
                <li>Search intent</li>
                <li>Competitor analysis</li>
                <li>Website and page structure</li>
                <li>On-page SEO</li>
                <li>Content direction</li>
                <li>Technical SEO essentials</li>
                <li>Search Console analysis</li>
                <li>AI visibility and AI discoverability review</li>
                <li>Measurement and improvement</li>
              </ul>
              <Link href="/contact" className="btn btn-white">Explore SEO &amp; AI Visibility</Link>
            </div>
          </div>
          <div className="flagship-visual">
            <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SEO and AI Visibility service">
              <defs>
                <linearGradient id="seoBg2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0D2E52"/>
                  <stop offset="100%" stopColor="#1A3FB0"/>
                </linearGradient>
              </defs>
              <rect width="600" height="260" rx="28" fill="url(#seoBg2)"/>
              <circle cx="150" cy="125" r="44" fill="none" stroke="#9ED7FF" strokeWidth="6"/>
              <line x1="182" y1="157" x2="213" y2="188" stroke="#9ED7FF" strokeWidth="6" strokeLinecap="round"/>
              <rect x="390" y="79" width="100" height="90" rx="18" fill="none" stroke="#8ED3FF" strokeWidth="5"/>
              <circle cx="420" cy="111" r="5" fill="#8ED3FF"/>
              <circle cx="440" cy="111" r="5" fill="#8ED3FF"/>
              <circle cx="460" cy="111" r="5" fill="#8ED3FF"/>
              <path d="M415 139 H466" stroke="#8ED3FF" strokeWidth="5" strokeLinecap="round"/>
              <path d="M217 127 C265 127 277 116 301 116" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
              <path d="M383 127 C343 127 331 116 307 116" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
              <rect x="260" y="96" width="80" height="78" rx="14" fill="#fff"/>
              <rect x="276" y="113" width="48" height="9" rx="4.5" fill="#2457E6"/>
              <rect x="276" y="134" width="36" height="7" rx="3.5" fill="#9BB8F6"/>
              <rect x="276" y="150" width="26" height="7" rx="3.5" fill="#9BB8F6"/>
              <circle cx="300" cy="135" r="70" fill="none" stroke="#FFFFFF" strokeOpacity=".14" strokeWidth="2"/>
              <circle cx="300" cy="135" r="94" fill="none" stroke="#FFFFFF" strokeOpacity=".08" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Audit + Monthly pair */}
      <section className="section section-off-white">
        <div className="service-pair-grid">
          {/* Strategic Discoverability Audit */}
          <div className="service-panel" style={{ background: 'var(--light-blue)', borderRadius: '12px', padding: '48px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p className="service-panel-best">Best For</p>
              <h2 className="service-panel-title mb-8">Strategic Discoverability Audit</h2>
              <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--body-text)', marginBottom: '16px' }}>
                Best for businesses already doing SEO, ads, content, or other marketing but not getting the results they expected.
              </p>
              <p className="service-panel-body mb-20">
                I review what is happening across your audience, SEO, AI visibility, competitors, website,
                content, landing pages, lead quality, and measurement to understand what may need attention.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--navy)', marginBottom: '10px' }}>You should leave knowing:</p>
                <ul className="section-includes">
                  <li>What is working</li>
                  <li>What needs attention</li>
                  <li>What should be fixed first</li>
                  <li>What should happen next</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="graphic-wrap mb-24">
                <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Strategic Discoverability Audit">
                  <defs>
                    <linearGradient id="auditBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0F233A"/>
                      <stop offset="100%" stopColor="#174F69"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="260" rx="28" fill="url(#auditBg)"/>
                  <rect x="120" y="78" width="210" height="130" rx="18" fill="#FFFFFF" fillOpacity=".06" stroke="#8BD6FF" strokeWidth="4"/>
                  <rect x="143" y="101" width="120" height="12" rx="6" fill="#8BD6FF"/>
                  <rect x="143" y="129" width="80" height="9" rx="4.5" fill="#527998"/>
                  <rect x="143" y="151" width="110" height="9" rx="4.5" fill="#527998"/>
                  <circle cx="282" cy="154" r="13" fill="#FFB45C"/>
                  <path d="M282 147 V156" stroke="#142638" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="282" cy="162" r="2.3" fill="#142638"/>
                  <circle cx="319" cy="130" r="68" fill="#0E263A" fillOpacity=".45" stroke="#A8E1FF" strokeWidth="7"/>
                  <line x1="368" y1="179" x2="425" y2="224" stroke="#A8E1FF" strokeWidth="9" strokeLinecap="round"/>
                  <circle cx="461" cy="103" r="34" fill="#2457E6"/>
                  <path d="M446 103 L457 114 L477 91" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <Link href="/contact" className="btn btn-primary btn-sm">Explore the Audit</Link>
            </div>
          </div>

          {/* Monthly SEO & Growth Advisory */}
          <div className="service-panel" style={{ background: 'var(--card-2)', borderRadius: '12px', padding: '48px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p className="service-panel-best">Best For</p>
              <h2 className="service-panel-title mb-8">Monthly SEO &amp; Growth Advisory</h2>
              <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--body-text)', marginBottom: '16px' }}>
                Best for businesses that already have SEO or marketing running and want ongoing review, decisions, and improvement.
              </p>
              <p className="service-panel-body mb-20">
                I stay involved each month to review what is happening, identify opportunities, check
                implementation, and help decide what deserves attention next.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--navy)', marginBottom: '10px' }}>Monthly areas:</p>
                <ul className="section-includes">
                  <li>SEO performance</li>
                  <li>Search Console</li>
                  <li>AI visibility changes</li>
                  <li>Competitor movement</li>
                  <li>Content priorities</li>
                  <li>Landing-page improvements</li>
                  <li>Analytics and lead quality</li>
                  <li>Implementation checks</li>
                  <li>New opportunities</li>
                  <li>Next priorities</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="graphic-wrap mb-24">
                <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monthly SEO and Growth Advisory">
                  <defs>
                    <linearGradient id="monthlyBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#102B49"/>
                      <stop offset="100%" stopColor="#1C4E88"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="260" rx="28" fill="url(#monthlyBg)"/>
                  <path d="M190 75 C245 28 345 37 387 92" fill="none" stroke="#82CFFF" strokeWidth="9" strokeLinecap="round"/>
                  <path d="M376 72 L391 94 L365 95" fill="none" stroke="#82CFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M401 169 C346 221 245 218 197 164" fill="none" stroke="#5FA8FF" strokeWidth="9" strokeLinecap="round"/>
                  <path d="M209 185 L193 162 L219 160" fill="none" stroke="#5FA8FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M208 164 L260 132 L306 145 L380 83" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="208" cy="164" r="7" fill="#fff"/>
                  <circle cx="260" cy="132" r="7" fill="#fff"/>
                  <circle cx="306" cy="145" r="7" fill="#fff"/>
                  <circle cx="380" cy="83" r="7" fill="#fff"/>
                </svg>
              </div>
              <p className="takeaway-text mb-24">Better decisions each month, not just another SEO report.</p>
              <Link href="/contact" className="btn btn-primary btn-sm">Explore Monthly Advisory</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Advertising */}
      <section className="paid-ads-section">
        <div className="paid-intro">
          <p style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6E7A94', marginBottom: '8px' }}>Important Secondary Capability</p>
          <h2 className="section-h2-white mb-16">Paid Advertising</h2>
          <p className="section-lead-white">
            Paid advertising can support faster customer acquisition, demand capture, targeted reach,
            and campaign testing when it makes sense for the business.
          </p>
        </div>
        <div className="paid-grid">
          {/* Google Ads */}
          <div className="paid-panel">
            <div>
              <h3 style={{ fontSize: '28px', fontWeight: 500, color: '#fff', margin: '0 0 12px' }}>Google Ads</h3>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#B9C2D6', marginBottom: '20px' }}>
                Reach people who are actively searching for the product or service you offer.
              </p>
              <div className="graphic-wrap mb-24">
                <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Google Ads">
                  <defs>
                    <linearGradient id="googleAdsBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#10233C"/>
                      <stop offset="100%" stopColor="#1B4C78"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="260" rx="28" fill="url(#googleAdsBg)"/>
                  <rect x="78" y="76" width="205" height="58" rx="29" fill="#FFFFFF" fillOpacity=".08" stroke="#8BD6FF" strokeWidth="4"/>
                  <circle cx="115" cy="105" r="14" fill="none" stroke="#8BD6FF" strokeWidth="4"/>
                  <line x1="125" y1="115" x2="137" y2="127" stroke="#8BD6FF" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="153" y="95" width="90" height="8" rx="4" fill="#8BD6FF"/>
                  <rect x="153" y="112" width="58" height="7" rx="3.5" fill="#577C9C"/>
                  <rect x="206" y="151" width="180" height="68" rx="14" fill="#FFFFFF" fillOpacity=".07" stroke="#5FAEFF" strokeWidth="3"/>
                  <rect x="228" y="169" width="94" height="9" rx="4.5" fill="#82CFFF"/>
                  <rect x="228" y="188" width="68" height="7" rx="3.5" fill="#6385A0"/>
                  <path d="M400 154 C430 136 447 127 470 126" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M457 114 L475 125 L462 141" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="505" cy="105" r="21" fill="none" stroke="#7DD4F8" strokeWidth="4"/>
                  <path d="M468 179 C473 138 537 138 542 179" fill="none" stroke="#7DD4F8" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="505" cy="191" r="17" fill="#2457E6"/>
                  <path d="M497 191 L503 197 L514 184" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6E7A94', marginBottom: '10px' }}>Can Include</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {['Keyword and search-intent direction', 'Campaign structure', 'Ad messaging', 'Landing-page alignment', 'Conversion tracking'].map(item => (
                  <li key={item} style={{ fontSize: '16px', color: '#B9C2D6', paddingLeft: '18px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Explore Google Ads</Link>
          </div>

          {/* Meta Ads */}
          <div className="paid-panel">
            <div>
              <h3 style={{ fontSize: '28px', fontWeight: 500, color: '#fff', margin: '0 0 12px' }}>Meta Ads</h3>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#B9C2D6', marginBottom: '20px' }}>
                Reach specific audiences through targeting, messaging, creative direction, and campaigns.
              </p>
              <div className="graphic-wrap mb-24">
                <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Meta Ads">
                  <defs>
                    <linearGradient id="metaAdsBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#112842"/>
                      <stop offset="100%" stopColor="#17627A"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="260" rx="28" fill="url(#metaAdsBg)"/>
                  <g fill="none" stroke="#75BCE7" strokeWidth="3.5">
                    <circle cx="103" cy="86" r="14"/>
                    <circle cx="149" cy="86" r="14"/>
                    <circle cx="195" cy="86" r="14"/>
                    <path d="M80 132 C83 105 123 105 126 132"/>
                    <path d="M126 132 C129 105 169 105 172 132"/>
                    <path d="M172 132 C175 105 215 105 218 132"/>
                  </g>
                  <circle cx="195" cy="86" r="32" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
                  <circle cx="195" cy="86" r="22" fill="#2457E6" fillOpacity=".22"/>
                  <path d="M236 112 C281 129 298 132 323 132" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M309 119 L327 132 L309 145" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="344" y="69" width="112" height="132" rx="17" fill="#FFFFFF" fillOpacity=".07" stroke="#80D2F3" strokeWidth="4"/>
                  <rect x="363" y="89" width="74" height="48" rx="9" fill="#5FAEFF" fillOpacity=".32"/>
                  <rect x="363" y="151" width="68" height="8" rx="4" fill="#8BD6FF"/>
                  <rect x="363" y="169" width="45" height="16" rx="8" fill="#2457E6"/>
                  <circle cx="508" cy="116" r="28" fill="#2457E6"/>
                  <path d="M492 116 L504 128 L524 104" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M462 135 H478" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <p style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6E7A94', marginBottom: '10px' }}>Can Include</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {['Audience targeting', 'Campaign angles', 'Creative direction', 'Messaging', 'Landing-page alignment', 'Measurement'].map(item => (
                  <li key={item} style={{ fontSize: '16px', color: '#B9C2D6', paddingLeft: '18px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Explore Meta Ads</Link>
          </div>
        </div>
      </section>

      {/* Content & Landing Page Strategy */}
      <section className="section section-light-blue">
        <div className="service-panel" style={{ background: 'transparent', borderRadius: 0, padding: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)', marginBottom: '8px' }}>Supporting Capability</p>
              <h2 className="section-h2 mb-16">Content &amp; Landing Page Strategy</h2>
              <p className="section-lead mb-20">
                Search visibility and paid traffic work better when visitors quickly understand what the
                business offers, why it matters, and what they should do next.
              </p>
              <ul className="section-includes mb-24">
                <li>Landing-page structure</li>
                <li>Offer clarity</li>
                <li>USP communication</li>
                <li>Content direction</li>
                <li>Trust elements</li>
                <li>Search intent</li>
                <li>CTA direction</li>
              </ul>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--body-text)', marginBottom: '28px' }}>
                This can support SEO, AI discoverability, Google Ads, Meta Ads, and conversion.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm">Explore Content &amp; Landing Pages</Link>
            </div>
            <div className="graphic-wrap">
              <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Content and Landing Page Strategy">
                <defs>
                  <linearGradient id="contentBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10344A"/>
                    <stop offset="100%" stopColor="#146378"/>
                  </linearGradient>
                </defs>
                <rect width="600" height="260" rx="28" fill="url(#contentBg)"/>
                <rect x="167" y="48" width="210" height="166" rx="20" fill="#FFFFFF" fillOpacity=".07" stroke="#8AD9F6" strokeWidth="4"/>
                <rect x="195" y="78" width="135" height="17" rx="8.5" fill="#8AD9F6"/>
                <rect x="195" y="113" width="150" height="9" rx="4.5" fill="#6A9AAF"/>
                <rect x="195" y="132" width="115" height="9" rx="4.5" fill="#6A9AAF"/>
                <rect x="195" y="162" width="88" height="28" rx="14" fill="#2457E6"/>
                <circle cx="449" cy="105" r="17" fill="none" stroke="#8AD9F6" strokeWidth="4"/>
                <path d="M415 169 C420 137 478 137 483 169" fill="none" stroke="#8AD9F6" strokeWidth="4" strokeLinecap="round"/>
                <path d="M393 138 H421" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
                <path d="M412 127 L424 138 L412 149" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways I Can Help */}
      <section className="section section-off-white">
        <h2 className="section-h2 mb-12">Other Ways I Can Help</h2>
        <p className="section-lead mb-48" style={{ maxWidth: '640px' }}>
          Some businesses need support in one specific area rather than a full SEO or advertising engagement.
        </p>
        <div className="capability-grid">
          {/* Local Search */}
          <div className="capability-card">
            <div>
              <h3 className="cap-title mb-12">Local Search &amp; Visibility</h3>
              <p className="cap-body mb-20">
                Improve how suitable businesses appear across local search, Google Maps,
                location-based queries, and local discovery.
              </p>
              <div className="graphic-wrap">
                <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Local Search and Visibility">
                  <defs>
                    <linearGradient id="localBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#143A55"/>
                      <stop offset="100%" stopColor="#2457E6"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="260" rx="28" fill="url(#localBg)"/>
                  <path d="M105 177 C165 118 211 191 267 128 C321 67 376 154 449 87" fill="none" stroke="#FFFFFF" strokeOpacity=".26" strokeWidth="4" strokeDasharray="8 10" strokeLinecap="round"/>
                  <path d="M285 55 C242 55 216 84 216 120 C216 169 285 214 285 214 C285 214 354 169 354 120 C354 84 328 55 285 55Z" fill="#FFFFFF"/>
                  <circle cx="285" cy="119" r="27" fill="#2457E6"/>
                  <path d="M266 126 V103 H304 V126" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
                  <path d="M261 103 L285 88 L309 103" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="433" cy="160" r="29" fill="none" stroke="#8FD5FF" strokeWidth="5"/>
                  <path d="M454 181 L476 203" stroke="#8FD5FF" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Measurement & Tracking */}
          <div className="capability-card">
            <div>
              <h3 className="cap-title mb-12">Measurement &amp; Tracking</h3>
              <p className="cap-body mb-20">
                Understand what is generating visibility, traffic, enquiries, and customer actions
                using Search Console, GA4, GTM, Clarity, and campaign tracking.
              </p>
              <div className="graphic-wrap">
                <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Measurement and Tracking">
                  <defs>
                    <linearGradient id="trackBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#10233C"/>
                      <stop offset="100%" stopColor="#17607A"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="260" rx="28" fill="url(#trackBg)"/>
                  <rect x="126" y="61" width="348" height="150" rx="20" fill="#FFFFFF" fillOpacity=".06" stroke="#83D2F5" strokeWidth="4"/>
                  <rect x="167" y="145" width="34" height="38" rx="7" fill="#5B9CFF"/>
                  <rect x="218" y="118" width="34" height="65" rx="7" fill="#6DBDFF"/>
                  <rect x="269" y="90" width="34" height="93" rx="7" fill="#8AD9F6"/>
                  <path d="M329 159 L362 135 L390 143 L430 99" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="329" cy="159" r="6" fill="#fff"/>
                  <circle cx="362" cy="135" r="6" fill="#fff"/>
                  <circle cx="390" cy="143" r="6" fill="#fff"/>
                  <circle cx="430" cy="99" r="6" fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Business & Audience Discovery */}
          <div className="capability-card">
            <div>
              <h3 className="cap-title mb-12">Business &amp; Audience Discovery</h3>
              <p className="cap-body mb-20">
                Understand the audience, products or services, pricing, strengths, USP, current lead
                sources, and growth goals before deciding the marketing direction.
              </p>
              <div className="graphic-wrap">
                <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Business and Audience Discovery">
                  <defs>
                    <linearGradient id="discoverBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#17314D"/>
                      <stop offset="100%" stopColor="#2457E6"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="260" rx="28" fill="url(#discoverBg)"/>
                  <rect x="115" y="81" width="112" height="108" rx="17" fill="#FFFFFF" fillOpacity=".08" stroke="#8AD9F6" strokeWidth="4"/>
                  <path d="M140 112 L171 92 L202 112" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M145 113 V160 H197 V113" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
                  <circle cx="302" cy="134" r="48" fill="none" stroke="#9BDEFF" strokeWidth="6"/>
                  <path d="M336 168 L371 203" stroke="#9BDEFF" strokeWidth="7" strokeLinecap="round"/>
                  <circle cx="423" cy="94" r="17" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
                  <path d="M391 151 C396 118 449 118 455 151" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="485" cy="119" r="13" fill="none" stroke="#6EBEFF" strokeWidth="4"/>
                  <path d="M464 164 C468 140 505 140 509 164" fill="none" stroke="#6EBEFF" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Landing Page Review */}
          <div className="capability-card">
            <div>
              <h3 className="cap-title mb-12">Landing Page Review</h3>
              <p className="cap-body mb-20">
                Review whether the page matches the audience, search intent, offer, trust, and action
                you want visitors to take.
              </p>
              <div className="graphic-wrap">
                <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Landing Page Review">
                  <defs>
                    <linearGradient id="reviewBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#13374D"/>
                      <stop offset="100%" stopColor="#176780"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="260" rx="28" fill="url(#reviewBg)"/>
                  <rect x="140" y="48" width="215" height="166" rx="20" fill="#FFFFFF" fillOpacity=".07" stroke="#90DCF8" strokeWidth="4"/>
                  <rect x="166" y="77" width="125" height="16" rx="8" fill="#81D1F5"/>
                  <rect x="166" y="111" width="148" height="9" rx="4.5" fill="#7295A8"/>
                  <rect x="166" y="131" width="105" height="9" rx="4.5" fill="#7295A8"/>
                  <rect x="166" y="163" width="75" height="26" rx="13" fill="#2457E6"/>
                  <circle cx="356" cy="133" r="59" fill="#10283A" fillOpacity=".5" stroke="#FFFFFF" strokeWidth="6"/>
                  <line x1="399" y1="176" x2="443" y2="218" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M331 135 L347 151 L381 113" fill="none" stroke="#77D2F5" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start — Decision Guide */}
      <section className="section section-navy">
        <h2 className="section-h2-white mb-12">Not Sure Where to Start?</h2>
        <p className="section-lead-white mb-48" style={{ maxWidth: '560px' }}>
          Start with the situation that sounds most like your business.
        </p>
        <div className="decision-grid">
          <div className="decision-card" style={{ background: '#18233B', borderColor: '#2E3A55' }}>
            <p className="decision-quote" style={{ color: '#fff' }}>"We want to start SEO properly."</p>
            <div>
              <p className="decision-recommended-label">Recommended</p>
              <p className="decision-service" style={{ fontSize: '18px' }}>SEO &amp; AI Visibility</p>
            </div>
            <p className="decision-body" style={{ color: '#B9C2D6' }}>
              Build the search strategy from the beginning with the right audience, keywords, pages,
              content, technical foundations, and AI discoverability.
            </p>
            <Link href="/contact" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start' }}>Start Here</Link>
          </div>

          <div className="decision-card" style={{ background: '#18233B', borderColor: '#2E3A55' }}>
            <p className="decision-quote" style={{ color: '#fff' }}>"We already do SEO or marketing, but we are not sure what is going wrong."</p>
            <div>
              <p className="decision-recommended-label">Recommended</p>
              <p className="decision-service" style={{ fontSize: '18px' }}>Strategic Discoverability Audit</p>
            </div>
            <p className="decision-then" style={{ color: '#8894AC' }}>
              After the audit, the next step may be: SEO &amp; AI Visibility or Monthly SEO &amp; Growth Advisory
            </p>
            <Link href="/contact" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start' }}>Start Here</Link>
          </div>

          <div className="decision-card" style={{ background: '#18233B', borderColor: '#2E3A55' }}>
            <p className="decision-quote" style={{ color: '#fff' }}>"We want ongoing SEO and visibility support."</p>
            <div>
              <p className="decision-recommended-label">Recommended</p>
              <p className="decision-service" style={{ fontSize: '18px' }}>Monthly SEO &amp; Growth Advisory</p>
            </div>
            <p className="decision-body" style={{ color: '#B9C2D6' }}>
              Ongoing review, decision-making, opportunity discovery, and improvement.
            </p>
            <Link href="/contact" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start' }}>Start Here</Link>
          </div>

          <div className="decision-card" style={{ background: '#18233B', borderColor: '#2E3A55' }}>
            <p className="decision-quote" style={{ color: '#fff' }}>"We need customers sooner or want to reach a specific audience."</p>
            <div>
              <p className="decision-recommended-label">Recommended</p>
              <p className="decision-service" style={{ fontSize: '18px' }}>Paid Advertising</p>
            </div>
            <p className="decision-body" style={{ color: '#B9C2D6' }}>
              Use Google Ads or Meta Ads when paid acquisition makes sense for the business.
            </p>
            <Link href="/contact" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start' }}>Start Here</Link>
          </div>

          <div className="decision-card" style={{ background: '#18233B', borderColor: '#2E3A55' }}>
            <p className="decision-quote" style={{ color: '#fff' }}>"We are getting traffic, but our pages are not helping people take action."</p>
            <div>
              <p className="decision-recommended-label">Recommended</p>
              <p className="decision-service" style={{ fontSize: '18px' }}>Content &amp; Landing Page Strategy</p>
            </div>
            <p className="decision-body" style={{ color: '#B9C2D6' }}>
              Improve the messaging, offer, trust, structure, and CTA.
            </p>
            <Link href="/contact" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start' }}>Start Here</Link>
          </div>

          <div className="decision-card" style={{ background: '#18233B', borderColor: '#2E3A55' }}>
            <p className="decision-quote" style={{ color: '#fff' }}>"We need stronger visibility in our local area."</p>
            <div>
              <p className="decision-recommended-label">Recommended</p>
              <p className="decision-service" style={{ fontSize: '18px' }}>Local Search &amp; Visibility</p>
            </div>
            <p className="decision-body" style={{ color: '#B9C2D6' }}>
              Improve how your business appears across local search, Google Maps, and location-based discovery.
            </p>
            <Link href="/contact" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start' }}>Start Here</Link>
          </div>
        </div>
      </section>

      {/* Can't Find the Service You Need */}
      <section className="section section-off-white">
        <div className="not-sure">
          <h2>Can&apos;t Find the Service You Need?</h2>
          <p>
            Send me a short message about what you are trying to improve. I can tell you whether it is
            something I can help with and what the most suitable starting point may be.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <a href="https://wa.me/919514808885" className="btn btn-white" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
            <Link href="/contact" style={{ color: '#B9C2D6', fontSize: '16px', fontWeight: 500, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>Discuss Your Project</Link>
          </div>
        </div>
      </section>

      {/* Work Directly With Me */}
      <section className="section section-light-blue">
        <div className="personal-grid">
          <div>
            <h2 className="section-h2 mb-20">Work Directly With Me</h2>
            <p className="section-lead mb-16">
              I work independently and stay personally involved in the research, strategy, and decisions
              behind the engagements I take on.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--body-text)', marginBottom: '32px' }}>
              For suitable projects, planned on-site discovery may also be available when understanding
              the business first-hand can improve the strategy.
            </p>
            <div className="btn-group">
              <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
              <a href="https://wa.me/919514808885" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="final-cta">
        <h2>Want to Find the Right Starting Point for Your Business?</h2>
        <p>Tell me what you are trying to improve, what is already running, and what result you are looking for.</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link href="/contact" className="btn btn-white">Discuss Your Project</Link>
          <a href="https://wa.me/919514808885" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)' }} target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
        </div>
      </div>
    </>
  );
}
