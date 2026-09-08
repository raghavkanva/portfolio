import Image from 'next/image';

const BOOK_CALL_URL = 'https://cal.com/raghavkanva/seo-consultation';
const WHATSAPP_URL = 'https://wa.me/919514808885';

const SITE_URL = 'https://raghavkanva.com/';

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Raghav Kanva',
      publisher: { '@id': `${SITE_URL}#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}#person`,
      name: 'Raghav Kanva',
      url: SITE_URL,
      jobTitle: 'SEO Consultant',
      description: 'SEO Consultant helping agencies and businesses reach the right customers through Google and AI search, identify what may be holding them back, and grow their business online.',
      image: {
        '@type': 'ImageObject',
        url: `${SITE_URL}images/raghav-kanva.jpg`,
      },
      email: 'mailto:raghavkanva@gmail.com',
      telephone: '+919514808885',
      sameAs: [
        'https://www.linkedin.com/in/raghavkanva/',
        'https://www.instagram.com/raghavkanva/',
        'https://www.threads.net/@raghavkanva',
      ],
      knowsAbout: [
        'SEO',
        'Search Engine Optimization',
        'Google Search',
        'AI Search',
        'Keyword Research',
        'Content Strategy',
        'Landing Page Strategy',
        'Search Strategy',
        'SEO Audits',
        'Google Ads',
        'Meta Ads',
      ],
      makesOffer: { '@id': `${SITE_URL}#seo-service` },
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}#seo-service`,
      name: 'SEO Consulting',
      serviceType: 'SEO Consulting',
      provider: { '@id': `${SITE_URL}#person` },
      url: SITE_URL,
      description: 'SEO consulting for digital marketing agencies, businesses, founders, and experts, including search strategy, SEO review, content and landing page guidance, AI search visibility, and selected paid advertising support.',
      audience: [
        { '@type': 'Audience', audienceType: 'Digital Marketing Agencies' },
        { '@type': 'Audience', audienceType: 'Businesses' },
        { '@type': 'Audience', audienceType: 'Founders and Experts' },
      ],
    },
  ],
};

/* ── shared icon data ── */

const helpItems = [
  {
    title: 'Get found by the right customers.',
    desc: 'Help the right customers find your business when they search for what you offer.',
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <line x1="15.3" y1="15.3" x2="21" y2="21" />
      </>
    ),
  },
  {
    title: 'Find what is holding you back.',
    desc: 'Understand what is not working and what deserves attention first.',
    icon: (
      <>
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    title: 'Make your strongest products, services, and expertise clearer online.',
    desc: 'Help the right customers understand where your business has real strength.',
    icon: <path d="M12 2l3 6.5 7 1-5 5 1.4 7L12 18l-6.4 3.5 1.4-7-5-5 7-1z" />,
  },
  {
    title: 'Make important pages easier to understand.',
    desc: 'Help visitors quickly understand what you offer, why it matters, and why you may be a good fit.',
    icon: (
      <>
        <rect x="5" y="2.5" width="14" height="19" rx="1.5" />
        <line x1="8.5" y1="7.5" x2="15.5" y2="7.5" />
        <line x1="8.5" y1="11.5" x2="15.5" y2="11.5" />
        <line x1="8.5" y1="15.5" x2="13" y2="15.5" />
      </>
    ),
  },
  {
    title: 'Use ads when they help.',
    desc: 'Google Ads and Meta Ads can support the right situation when faster reach is useful.',
    icon: (
      <>
        <path d="M3 10v4h4l6 5V5L7 10H3z" />
        <path d="M16 9a4 4 0 010 6" />
      </>
    ),
  },
  {
    title: 'Be easier to find in AI search too.',
    desc: 'Make your business, products, services, and expertise clearer online so AI tools can better understand and describe them.',
    icon: (
      <>
        <circle cx="10" cy="10" r="6.5" />
        <line x1="14.8" y1="14.8" x2="20.5" y2="20.5" />
        <path d="M17 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
      </>
    ),
  },
];

const businessAreas = [
  {
    title: 'Who you want to reach',
    desc: 'The customers you really want more of.',
    x: 20, y: 0, align: 'left', lineX: 300, lineY: 30,
    icon: (
      <>
        <circle cx="14" cy="14" r="9" stroke="#76B7FF" />
        <circle cx="14" cy="14" r="5" stroke="#76B7FF" />
        <circle cx="14" cy="11" r="2.2" />
        <path d="M9.5 19c1-2 2.6-3 4.5-3s3.5 1 4.5 3" />
      </>
    ),
  },
  {
    title: 'What you sell',
    desc: 'Your products, services, and the areas that matter most.',
    x: 800, y: 0, align: 'right', lineX: 800, lineY: 30,
    icon: (
      <>
        <path d="M8 9l2.2-4h7.6L20 9" stroke="#36A7C8" />
        <rect x="6" y="9" width="16" height="11" rx="2" />
        <path d="M6 13h16" />
      </>
    ),
  },
  {
    title: 'What you do best',
    desc: 'The products, services, skills, or expertise your business does especially well.',
    x: 20, y: 220, align: 'left', lineX: 300, lineY: 250,
    icon: <path d="M14 4l3 6.2 6.8.9-5 4.8 1.3 6.7L14 19.3 7.9 22.6l1.3-6.7-5-4.8 6.8-.9z" stroke="#76B7FF" />,
  },
  {
    title: 'Why people choose you',
    desc: 'What makes customers prefer your business over other options.',
    x: 800, y: 220, align: 'right', lineX: 800, lineY: 250,
    icon: (
      <>
        <path d="M14 4l8 3v6c0 5.5-3.5 8.8-8 11-4.5-2.2-8-5.5-8-11V7z" stroke="#2457E6" />
        <path d="M10.5 14l2.5 2.5 5-5" />
      </>
    ),
  },
  {
    title: 'What customers care about',
    desc: 'What matters before they contact, compare, buy, or book.',
    x: 20, y: 440, align: 'left', lineX: 300, lineY: 470,
    icon: (
      <>
        <path d="M14 22c-4.5-2.8-8-6-8-10.2C6 8.7 8 7 10.3 7c1.5 0 2.9.8 3.7 2 .8-1.2 2.2-2 3.7-2C20 7 22 8.7 22 11.8c0 4.2-3.5 7.4-8 10.2z" stroke="#36A7C8" />
        <path d="M10.5 12.5l1.8 1.8 3.2-3.4" stroke="#FFFFFF" />
      </>
    ),
  },
  {
    title: 'How people find you today',
    desc: 'Google, AI tools, referrals, ads, social media, or other sources.',
    x: 800, y: 440, align: 'right', lineX: 800, lineY: 470,
    icon: (
      <>
        <circle cx="12" cy="12" r="6.5" stroke="#76B7FF" />
        <path d="M16.8 16.8L22 22" />
        <circle cx="12" cy="9" r="1" fill="#FFFFFF" stroke="none" />
        <circle cx="9.2" cy="13.5" r="1" fill="#FFFFFF" stroke="none" />
        <circle cx="14.8" cy="13.5" r="1" fill="#FFFFFF" stroke="none" />
      </>
    ),
  },
  {
    title: 'What you want more of',
    desc: 'Leads, customers, sales, enquiries, or growth.',
    x: 405, y: 640, align: 'center', lineX: 545, lineY: 640,
    icon: (
      <>
        <path d="M5 20V15M11 20v-8M17 20v-5M23 20V8" stroke="#2457E6" />
        <path d="M17 8h6v6" stroke="#76B7FF" />
      </>
    ),
  },
];

/* ── the diagnostic SVG, reused desktop + mobile with different ids ── */

function DiagnosticSvg({ suffix = '', className }) {
  const id = (base) => `${base}${suffix}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" role="img" aria-labelledby={`${id('title')} ${id('desc')}`} className={className}>
      <title id={id('title')}>SEO diagnostic visual</title>
      <desc id={id('desc')}>A clean SEO diagnostic illustration showing several search signals with one important issue highlighted for closer review.</desc>
      <defs>
        <filter id={id('cardShadow')} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#101525" floodOpacity="0.08" />
        </filter>
        <filter id={id('focusShadow')} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#2457E6" floodOpacity="0.12" />
        </filter>
        <radialGradient id={id('softFocus')} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2457E6" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2457E6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="20" y="20" width="600" height="380" rx="30" fill="#F8F7F3" />
      <g filter={`url(#${id('cardShadow')})`}>
        <rect x="65" y="75" width="155" height="82" rx="18" fill="#FFFFFF" stroke="#E1E8FA" />
        <circle cx="94" cy="104" r="11" fill="#EEF3FF" />
        <path d="M90 104 H98" stroke="#2457E6" strokeWidth="2" strokeLinecap="round" />
        <path d="M94 100 V108" stroke="#2457E6" strokeWidth="2" strokeLinecap="round" />
        <rect x="119" y="94" width="70" height="7" rx="3.5" fill="#18233B" opacity="0.16" />
        <rect x="119" y="110" width="52" height="6" rx="3" fill="#18233B" opacity="0.09" />
        <rect x="87" y="132" width="102" height="6" rx="3" fill="#2457E6" opacity="0.12" />
      </g>
      <g filter={`url(#${id('cardShadow')})`}>
        <rect x="65" y="185" width="155" height="82" rx="18" fill="#FFFFFF" stroke="#E1E8FA" />
        <rect x="84" y="207" width="23" height="23" rx="7" fill="#EEF3FF" />
        <path d="M90 222 L94 216 L98 220 L103 212" fill="none" stroke="#2457E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="119" y="205" width="72" height="7" rx="3.5" fill="#18233B" opacity="0.16" />
        <rect x="119" y="221" width="48" height="6" rx="3" fill="#18233B" opacity="0.09" />
        <rect x="87" y="242" width="96" height="6" rx="3" fill="#2457E6" opacity="0.12" />
      </g>
      <g filter={`url(#${id('cardShadow')})`}>
        <rect x="65" y="295" width="155" height="72" rx="18" fill="#FFFFFF" stroke="#E1E8FA" />
        <circle cx="95" cy="322" r="10" fill="#EEF3FF" />
        <path d="M90 322 H100" stroke="#2457E6" strokeWidth="2" strokeLinecap="round" />
        <rect x="119" y="312" width="68" height="7" rx="3.5" fill="#18233B" opacity="0.16" />
        <rect x="119" y="329" width="46" height="6" rx="3" fill="#18233B" opacity="0.09" />
      </g>
      <path d="M220 116 C260 116 275 136 302 157" fill="none" stroke="#2457E6" strokeWidth="2" strokeOpacity="0.15" />
      <path d="M220 226 C257 226 276 218 302 205" fill="none" stroke="#2457E6" strokeWidth="2" strokeOpacity="0.15" />
      <path d="M220 330 C257 330 279 282 310 244" fill="none" stroke="#2457E6" strokeWidth="2" strokeOpacity="0.15" />
      <circle cx="365" cy="210" r="96" fill={`url(#${id('softFocus')})`} />
      <g filter={`url(#${id('focusShadow')})`}>
        <rect x="305" y="158" width="120" height="104" rx="24" fill="#FFFFFF" stroke="#2457E6" strokeWidth="2.5" />
        <circle cx="365" cy="195" r="20" fill="#EEF3FF" />
        <path d="M365 183 V197" stroke="#2457E6" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="365" cy="204" r="2" fill="#2457E6" />
        <rect x="330" y="228" width="70" height="7" rx="3.5" fill="#2457E6" opacity="0.18" />
        <rect x="342" y="243" width="46" height="6" rx="3" fill="#18233B" opacity="0.10" />
      </g>
      <g transform="translate(450 105)">
        <circle cx="66" cy="66" r="55" fill="#FFFFFF" stroke="#2457E6" strokeWidth="8" />
        <circle cx="66" cy="66" r="39" fill="#F7F9FF" stroke="#DCE7FF" strokeWidth="2" />
        <circle cx="66" cy="66" r="9" fill="#EEF3FF" stroke="#2457E6" strokeWidth="2" />
        <path d="M66 48 V57" stroke="#2457E6" strokeWidth="2" strokeLinecap="round" />
        <path d="M66 75 V84" stroke="#2457E6" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 66 H57" stroke="#2457E6" strokeWidth="2" strokeLinecap="round" />
        <path d="M75 66 H84" stroke="#2457E6" strokeWidth="2" strokeLinecap="round" />
        <path d="M104 106 L142 144" stroke="#2457E6" strokeWidth="13" strokeLinecap="round" />
      </g>
      <path d="M426 209 C448 205 462 198 477 187" fill="none" stroke="#2457E6" strokeWidth="2.5" strokeDasharray="5 7" strokeLinecap="round" opacity="0.45" />
      <circle cx="264" cy="82" r="4" fill="#2457E6" opacity="0.18" />
      <circle cx="275" cy="95" r="2.5" fill="#2457E6" opacity="0.12" />
      <circle cx="551" cy="299" r="4" fill="#2457E6" opacity="0.16" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hero-desktop">
        <div className="hero-desktop-content">
          <div className="hero-eyebrow">SEO Consultant</div>
          <h1 className="hero-h1">What you do best may not be clear online.</h1>
          <p className="hero-supporting">I help businesses and agencies reach the right customers through Google and AI search, fix what is holding them back, and <span className="highlight-growth">grow their business</span> online.</p>
          <div className="btn-row">
            <a href={BOOK_CALL_URL} className="btn-primary">Book a Call</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Me</a>
          </div>
        </div>
        <div className="hero-desktop-visual">
          <div className="hero-photo-offset" />
          <Image src="/images/raghav-kanva.jpg" alt="Raghav Kanva" width={420} height={420} className="hero-photo" priority />
        </div>
      </section>

      <section className="hero-mobile">
        <div className="hero-eyebrow">SEO Consultant</div>
        <h1 className="hero-h1">What you do best may not be clear online.</h1>
        <div className="hero-mobile-row">
          <div className="hero-photo-wrap-sm">
            <div className="hero-photo-offset-sm" />
            <Image src="/images/raghav-kanva.jpg" alt="Raghav Kanva" width={100} height={100} className="hero-photo-sm" priority />
          </div>
          <p>I help businesses and agencies reach the right customers through Google and AI search, fix what is holding them back, and <span className="highlight-growth">grow their business</span> online.</p>
        </div>
        <div className="btn-col">
          <a href={BOOK_CALL_URL} className="btn-primary-block">Book a Call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary-block">WhatsApp Me</a>
        </div>
      </section>

      {/* ── WHEN THE CURRENT APPROACH IS NOT WORKING ── */}
      <section className="approach-desktop">
        <div className="approach-desktop-grid">
          <div>
            <h2 className="approach-h2">When the Current Approach Is Not Working</h2>
            <p className="approach-p">Sometimes an agency may already have tried different SEO methods, but the expected customers or results are still not coming.</p>
            <p className="approach-p">I bring a fresh view, understand what has already been tried, find what may be going wrong, and help decide what should change next.</p>
            <p className="approach-p">This is useful when the team has already put in the effort but needs another perspective before continuing.</p>
            <a href={BOOK_CALL_URL} className="btn-primary">Discuss a Project</a>
          </div>
          <div className="approach-visual">
            <DiagnosticSvg />
          </div>
        </div>
      </section>

      <section className="approach-mobile">
        <h2 className="approach-h2">When the Current Approach Is Not Working</h2>
        <p className="approach-p">Sometimes an agency may already have tried different SEO methods, but the expected customers or results are still not coming.</p>
        <p className="approach-p">I bring a fresh view, understand what has already been tried, find what may be going wrong, and help decide what should change next.</p>
        <p className="approach-p">This is useful when the team has already put in the effort but needs another perspective before continuing.</p>
        <div className="approach-mobile-visual">
          <DiagnosticSvg suffix="M" />
        </div>
        <a href={BOOK_CALL_URL} className="btn-primary-block">Discuss a Project</a>
      </section>

      {/* ── UNDERSTANDING THE BUSINESS COMES FIRST ── */}
      <section className="understanding-desktop">
        <div className="understanding-heading">
          <h2>Understanding the Business Comes First</h2>
        </div>
        <div className="understanding-intro">
          <div className="understanding-supporting">The better I understand your business, the clearer the search opportunities become.</div>
          <div className="understanding-before">Before deciding what to improve, I understand:</div>
        </div>
        <div className="biz-hub">
          <svg className="biz-hub-lines" width="1100" height="720" stroke="#33405C" strokeWidth="1.5">
            {businessAreas.map((area) => (
              <line key={area.title} x1="550" y1="360" x2={area.lineX} y2={area.lineY} />
            ))}
          </svg>
          <div className="biz-hub-center">YOUR&nbsp;BUSINESS</div>
          {businessAreas.map((area) => (
            <div key={area.title} className="biz-area" style={{ left: area.x, top: area.y, textAlign: area.align }}>
              <div className="biz-area-title">{area.title}</div>
              <div className="biz-area-desc">{area.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="understanding-mobile">
        <h2>Understanding the Business Comes First</h2>
        <div className="understanding-supporting">The better I understand your business, the clearer the search opportunities become.</div>
        <div className="understanding-before">Before deciding what to improve, I understand:</div>
        <div className="understanding-label">Your Business</div>
        <div>
          {businessAreas.map((area) => (
            <div key={area.title} className="biz-list-item">
              <svg viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {area.icon}
              </svg>
              <div>
                <div className="biz-list-item-title">{area.title}</div>
                <div className="biz-list-item-desc">{area.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── YOU ARE ALREADY DOING GREAT WORK ── */}
      <section className="great-work">
        <div className="great-work-inner">
          <h2>You are already doing great work. I help make it easier for the right customers to see it online.</h2>
          <p>It might be a product or service you do especially well, a specific type of customer you serve best, or knowledge your team has that isn&rsquo;t clear online yet.</p>
          <p>I find those strengths and connect them with what people are already searching for.</p>
        </div>
      </section>

      {/* ── HOW I CAN HELP ── */}
      <section id="help" className="help-desktop">
        <div className="help-heading"><h2>How I Can Help</h2></div>
        <div className="help-grid">
          {helpItems.map((item) => (
            <div key={item.title} className="help-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {item.icon}
              </svg>
              <div>
                <div className="help-item-title">{item.title}</div>
                <div className="help-item-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="help-closing">
          <p>The goal is simple: help you reach the right customers, achieve your business goals, and grow your business online.</p>
          <a href={BOOK_CALL_URL} className="btn-primary">Book a Call</a>
        </div>
      </section>

      <section id="help-m" className="help-mobile">
        <h2>How I Can Help</h2>
        <div className="help-grid">
          {helpItems.map((item) => (
            <div key={item.title} className="help-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {item.icon}
              </svg>
              <div>
                <div className="help-item-title">{item.title}</div>
                <div className="help-item-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="help-closing">
          <p>The goal is simple: help you reach the right customers, achieve your business goals, and grow your business online.</p>
          <a href={BOOK_CALL_URL} className="btn-primary-block">Book a Call</a>
        </div>
      </section>

      {/* ── WHO I WORK WITH ── */}
      <section id="who" className="who-desktop">
        <h2>Who I Work With</h2>
        <div className="who-grid">
          <div className="who-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="7" height="7" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" />
              <rect x="3" y="15" width="7" height="7" rx="1" /><rect x="14" y="15" width="7" height="7" rx="1" />
            </svg>
            <div className="who-card-title">Digital Marketing Agencies</div>
            <div className="who-card-sub">
              <div>
                <div className="who-card-sub-title">For a client&rsquo;s SEO</div>
                <div className="who-card-sub-desc">When your agency needs a fresh view, extra help, or full SEO support for a client project.</div>
              </div>
              <div>
                <div className="who-card-sub-title">For the agency&rsquo;s own SEO</div>
                <div className="who-card-sub-desc">When you want more of the right clients to find your agency online and get in touch.</div>
              </div>
            </div>
          </div>
          <div className="who-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 21V9l8-5 8 5v12" /><line x1="4" y1="21" x2="20" y2="21" /><rect x="10" y="14" width="4" height="7" />
            </svg>
            <div className="who-card-title">Businesses</div>
            <div className="who-card-body">For businesses that want the right customers to find them, choose them, and help grow the business online.</div>
          </div>
          <div className="who-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
            <div className="who-card-title">Founders &amp; Experts</div>
            <div className="who-card-body">For founders and experts who want the right audience to find their knowledge, understand what they offer, and create more opportunities to grow their income online.</div>
          </div>
        </div>
      </section>

      <section id="who-m" className="who-mobile">
        <h2>Who I Work With</h2>
        <div className="who-grid">
          <div className="who-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="7" height="7" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" />
              <rect x="3" y="15" width="7" height="7" rx="1" /><rect x="14" y="15" width="7" height="7" rx="1" />
            </svg>
            <div className="who-card-title">Digital Marketing Agencies</div>
            <div className="who-card-sub">
              <div>
                <div className="who-card-sub-title">For a client&rsquo;s SEO</div>
                <div className="who-card-sub-desc">When your agency needs a fresh view, extra help, or full SEO support for a client project.</div>
              </div>
              <div>
                <div className="who-card-sub-title">For the agency&rsquo;s own SEO</div>
                <div className="who-card-sub-desc">When you want more of the right clients to find your agency online and get in touch.</div>
              </div>
            </div>
          </div>
          <div className="who-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 21V9l8-5 8 5v12" /><line x1="4" y1="21" x2="20" y2="21" /><rect x="10" y="14" width="4" height="7" />
            </svg>
            <div className="who-card-title solo">Businesses</div>
            <div className="who-card-body">For businesses that want the right customers to find them, choose them, and help grow the business online.</div>
          </div>
          <div className="who-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
            <div className="who-card-title solo">Founders &amp; Experts</div>
            <div className="who-card-body">For founders and experts who want the right audience to find their knowledge, understand what they offer, and create more opportunities to grow their income online.</div>
          </div>
        </div>
      </section>

      {/* ── WORK WITH ME ── */}
      <section className="work-with-me-desktop">
        <div>
          <h2>Work With Me</h2>
          <p>I stay personally involved in the planning and important decisions. When needed, I can also work with your team online or in person.</p>
        </div>
        <Image src="/images/raghav-kanva.jpg" alt="" width={170} height={170} className="work-with-me-photo" />
      </section>

      <section className="work-with-me-mobile">
        <h2>Work With Me</h2>
        <p>I stay personally involved in the planning and important decisions. When needed, I can also work with your team online or in person.</p>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="contact" className="final-cta-desktop">
        <h2>Start With a Discovery Call</h2>
        <p>Whether you are starting SEO or trying to improve what is already happening, tell me what you want to achieve and where things stand today.</p>
        <div className="final-cta-sub">30-minute call</div>
        <div className="final-cta-buttons">
          <a href={BOOK_CALL_URL} className="btn-cta-white">Book a Call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta-outline">WhatsApp Me</a>
        </div>
      </section>

      <section id="contact-m" className="final-cta-mobile">
        <h2>Start With a Discovery Call</h2>
        <p>Whether you are starting SEO or trying to improve what is already happening, tell me what you want to achieve and where things stand today.</p>
        <div className="final-cta-sub">30-minute call</div>
        <div className="final-cta-buttons">
          <a href={BOOK_CALL_URL} className="btn-cta-white-block">Book a Call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta-outline-block">WhatsApp Me</a>
        </div>
      </section>
    </div>
  );
}
