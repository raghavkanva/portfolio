import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Raghav Kanva — Independent SEO & AI Discoverability Consultant',
  description: 'I help businesses improve how the right customers find, understand, and choose them online through SEO, AI visibility, paid advertising, content, and landing pages.',
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">Independent SEO &amp; AI Discoverability Consultant</div>
          <h1 className="hero-h1">Your business may be stronger than it looks online.</h1>
          <p className="hero-lead">I help businesses increase sales by helping the right customers find, understand, and choose them online.</p>
          <p className="hero-body">I work across SEO, AI visibility, paid advertising, content, and landing pages to help businesses improve how they attract and convert the right customers.</p>
          <div className="btn-group" style={{marginTop:8}}>
            <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
            <Link href="/services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <div className="hero-photo-offset" />
            <Image
              src="/images/raghav-kanva.jpg"
              alt="Raghav Kanva"
              width={420}
              height={420}
              className="hero-photo"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section section-off-white">
        <div style={{maxWidth:760, marginBottom:64}}>
          <div className="section-label">Services</div>
          <h2 className="section-h2">How I Can Help</h2>
        </div>

        <div className="services-grid-top">
          {/* SEO flagship */}
          <div className="service-card service-card-primary">
            <div>
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#fff" strokeWidth="1.6">
                <circle cx="20" cy="30" r="14"/><line x1="30" y1="40" x2="40" y2="50"/>
                <line x1="46" y1="30" x2="72" y2="30"/><polyline points="64,22 72,30 64,38"/>
                <rect x="82" y="16" width="30" height="28" rx="4"/>
                <line x1="90" y1="24" x2="104" y2="24"/><line x1="90" y1="32" x2="104" y2="32"/>
              </svg>
            </div>
            <div>
              <h3 className="card-title">SEO &amp; AI Visibility</h3>
              <p className="card-body" style={{color:'#EAF0FF'}}>Build SEO properly from the beginning or improve what already exists, so the right customers can discover the business across search and AI.</p>
            </div>
          </div>

          {/* Stacked right */}
          <div className="service-card-stacked">
            <div className="service-card-audit" style={{flex:1}}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#36A7C8" strokeWidth="1.7" style={{marginBottom:14}}>
                <rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/>
                <rect x="4" y="13" width="7" height="7" rx="1"/><circle cx="16.5" cy="16.5" r="3.5"/>
              </svg>
              <h3 className="card-title" style={{color:'var(--navy)',fontSize:26}}>Strategic Discoverability Audit</h3>
              <p className="card-body" style={{color:'var(--body-text)'}}>Find what is limiting visibility, lead quality, positioning, or growth, and determine what should happen next.</p>
            </div>
            <div className="service-card-advisory" style={{flex:1, padding:'36px 40px'}}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3F73FF" strokeWidth="1.7" style={{marginBottom:14}}>
                <circle cx="12" cy="12" r="8" strokeDasharray="4 3"/><circle cx="12" cy="12" r="2" fill="#3F73FF" stroke="none"/>
              </svg>
              <h3 className="card-title" style={{color:'var(--navy)',fontSize:26}}>Monthly SEO &amp; Growth Advisory</h3>
              <p className="card-body" style={{color:'var(--body-text)'}}>Ongoing SEO, visibility, measurement, opportunity discovery, and strategic direction.</p>
            </div>
          </div>
        </div>

        <div className="services-grid-bottom">
          <div className="service-card-paid">
            <svg width="70" height="40" viewBox="0 0 70 40" fill="none" stroke="#5B9CFF" strokeWidth="1.6" style={{flex:'none'}}>
              <circle cx="18" cy="20" r="4" fill="#5B9CFF" stroke="none"/>
              <circle cx="52" cy="20" r="4" fill="#5B9CFF" stroke="none"/>
              <line x1="18" y1="20" x2="30" y2="20"/>
              <line x1="52" y1="20" x2="40" y2="20"/>
              <rect x="30" y="12" width="10" height="16" rx="2"/>
            </svg>
            <div>
              <h3 className="card-title">Paid Advertising</h3>
              <p className="card-body" style={{color:'#B9C2D6'}}>Google Ads for active search demand and Meta Ads for targeted reach, audience development, and acquisition.</p>
            </div>
          </div>

          <div className="service-card-content">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2457E6" strokeWidth="1.6" style={{flex:'none'}}>
              <rect x="5" y="3" width="14" height="18" rx="1.5"/>
              <line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/>
            </svg>
            <div>
              <h3 className="card-title" style={{color:'var(--navy)'}}>Content &amp; Landing Page Strategy</h3>
              <p className="card-body" style={{color:'var(--body-text)'}}>Align content, messaging, offers, trust, and landing pages with SEO, ads, and conversion.</p>
            </div>
          </div>
        </div>

        <div style={{marginTop:40, textAlign:'center'}}>
          <Link href="/services" className="btn btn-secondary">View All Services</Link>
        </div>
      </section>

      {/* ── RIGHT AUDIENCE ── */}
      <section className="section section-light-blue">
        <div style={{maxWidth:820, marginBottom:72}}>
          <h2 className="section-h2">Better growth starts with attracting the right audience.</h2>
          <p className="section-lead">Good marketing is not only about increasing traffic. It is about helping people who are genuinely relevant to the business discover it, understand it, trust it, and take the next step.</p>
        </div>

        <div className="audience-flow">
          <div className="audience-pills">
            <div className="audience-pill">Right Audience</div>
            <span className="audience-plus">+</span>
            <div className="audience-pill">Right Intent</div>
            <span className="audience-plus">+</span>
            <div className="audience-pill">Right Offer</div>
          </div>

          <svg width="16" height="40" viewBox="0 0 16 40" fill="none" stroke="#2457E6" strokeWidth="1.8">
            <line x1="8" y1="0" x2="8" y2="30"/>
            <polyline points="2,24 8,30 14,24"/>
          </svg>

          <div className="audience-bars">
            <div className="audience-bar-row">
              <div style={{width:'36%', height:52, background:'#B9CEFB', borderRadius:6}} />
              <span className="audience-bar-label">Right Traffic</span>
            </div>
            <div className="audience-bar-row">
              <div style={{width:'55%', height:52, background:'#6E97F1', borderRadius:6}} />
              <span className="audience-bar-label">More Relevant Enquiries</span>
            </div>
            <div className="audience-bar-row">
              <div style={{width:'76%', height:52, background:'#2457E6', borderRadius:6}} />
              <span className="audience-bar-label">Stronger Sales Opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS UNDERSTANDING ── */}
      <section className="section section-navy">
        <div style={{maxWidth:760, margin:'0 auto 72px', textAlign:'center'}}>
          <h2 className="section-h2-white">Every strategy starts with understanding the business.</h2>
          <p className="section-lead-white">I first understand the business, audience, products and services, pricing, strengths, current customer acquisition, and growth goals to find where the strongest opportunities may exist.</p>
        </div>

        <div className="biz-hub">
          <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} viewBox="0 0 1040 460" stroke="#33405C" strokeWidth="1.5" fill="none" preserveAspectRatio="xMidYMid meet">
            <line x1="520" y1="230" x2="150" y2="80"/>
            <line x1="520" y1="230" x2="520" y2="55"/>
            <line x1="520" y1="230" x2="890" y2="80"/>
            <line x1="520" y1="230" x2="150" y2="385"/>
            <line x1="520" y1="230" x2="520" y2="410"/>
            <line x1="520" y1="230" x2="890" y2="385"/>
          </svg>

          <div className="biz-hub-center">THE&nbsp;BUSINESS</div>

          {[
            { title:'Audience', desc:'Who currently buys? Who should the business reach?', style:{left:30, top:20} },
            { title:'Products & Services', desc:'What exactly is being sold?', style:{left:'50%', top:'-8px', transform:'translateX(-110px)'} },
            { title:'Pricing & Position', desc:'How is the offer positioned?', style:{right:30, top:20} },
            { title:'USP & Strength', desc:'Why should customers choose this business?', style:{left:30, bottom:20} },
            { title:'Current Acquisition', desc:'Where are leads and customers coming from?', style:{left:'50%', bottom:0, transform:'translateX(-110px)'} },
            { title:'Growth Goals', desc:'What is the business trying to achieve?', style:{right:30, bottom:20} },
          ].map((spoke) => (
            <div key={spoke.title} className="biz-spoke" style={{...spoke.style, position:'absolute'}}>
              <div className="biz-spoke-title">{spoke.title}</div>
              <div className="biz-spoke-desc">{spoke.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── USP DISCOVERY ── */}
      <section className="section section-off-white">
        <div style={{maxWidth:760, marginBottom:64}}>
          <h2 className="section-h2">Your strongest growth opportunity may already exist inside your business.</h2>
        </div>

        <div className="usp-cols">
          <div className="usp-col" style={{padding:'36px 36px 36px 0'}}>
            <div className="usp-col-label">What the business says</div>
            <p className="usp-quote">&ldquo;We service all types of cars.&rdquo;</p>
          </div>

          <svg className="usp-arrow" width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#2457E6" strokeWidth="1.8" style={{flex:'none',alignSelf:'center'}}>
            <line x1="0" y1="12" x2="38" y2="12"/>
            <polyline points="30,5 38,12 30,19"/>
          </svg>

          <div className="usp-col-mid">
            <div className="usp-col-label-blue">What deeper discussion reveals</div>
            <p className="usp-quote">&ldquo;We have experienced technicians, specialist tools, and strong expertise in servicing premium cars.&rdquo;</p>
          </div>

          <svg className="usp-arrow" width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#2457E6" strokeWidth="1.8" style={{flex:'none',alignSelf:'center'}}>
            <line x1="0" y1="12" x2="38" y2="12"/>
            <polyline points="30,5 38,12 30,19"/>
          </svg>

          <div className="usp-col-last">
            <div className="usp-col-label">What this can change</div>
            <div className="usp-tags">
              {['Audience', 'Keywords', 'Service Pages', 'Website Messaging', 'Content', 'Paid Advertising', 'Positioning'].map((t) => (
                <span key={t} className="usp-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="usp-takeaway">
          When the right specialization is communicated to the right audience, it can create better-quality enquiries and{' '}
          <span style={{color:'var(--cobalt)'}}>stronger opportunities to increase sales</span>.
        </p>
      </section>

      {/* ── WHO I WORK WITH ── */}
      <section className="section section-light-blue">
        <h2 className="section-h2 mb-64">Who I Work With</h2>
        <div className="who-grid">
          <div className="who-card who-card-primary">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
              <rect x="4" y="10" width="5" height="10"/><rect x="10.5" y="6" width="5" height="14"/><rect x="17" y="3" width="5" height="17"/>
            </svg>
            <div>
              <div className="who-card-title">Digital Marketing Agencies</div>
              <p style={{fontSize:16, lineHeight:1.5, color:'#EAF0FF', margin:0}}>For agencies that need additional SEO, AI visibility, paid acquisition, audit, or strategic support on suitable client accounts.</p>
            </div>
            <Link href="/who-i-work-with/digital-marketing-agencies" style={{fontSize:15, fontWeight:600, color:'#fff', textDecoration:'underline'}}>Learn More</Link>
          </div>

          <div className="who-card who-card-2">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2457E6" strokeWidth="1.6">
              <path d="M4 20V8l8-4 8 4v12"/><line x1="4" y1="20" x2="20" y2="20"/>
            </svg>
            <div>
              <div className="who-card-title" style={{color:'var(--navy)'}}>Businesses &amp; Organizations</div>
              <p style={{fontSize:15.5, lineHeight:1.5, color:'var(--body-text)', margin:0}}>For businesses that want to build online growth properly, or improve lead generation already running.</p>
            </div>
            <Link href="/who-i-work-with/businesses-organizations" style={{fontSize:14.5, fontWeight:600, color:'var(--cobalt)'}}>Learn More</Link>
          </div>

          <div className="who-card who-card-3">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2457E6" strokeWidth="1.6">
              <circle cx="12" cy="8" r="3.4"/><path d="M5 20c1-4 4-6 7-6s6 2 7 6"/>
            </svg>
            <div>
              <div className="who-card-title" style={{color:'var(--navy)'}}>Founders &amp; Experts</div>
              <p style={{fontSize:15.5, lineHeight:1.5, color:'var(--body-text)', margin:0}}>For individuals whose expertise and authority need to become clearer and easier to discover online.</p>
            </div>
            <Link href="/who-i-work-with/founders-experts" style={{fontSize:14.5, fontWeight:600, color:'var(--cobalt)'}}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="section section-off-white">
        <h2 className="section-h2 mb-64" style={{maxWidth:760}}>Built around what the business actually needs.</h2>
        <div className="approach-flow">
          <div className="approach-pill approach-pill-dark">Business Goal</div>

          <svg className="approach-arrow" width="34" height="14" viewBox="0 0 34 14" fill="none" stroke="#2457E6" strokeWidth="1.6">
            <line x1="0" y1="7" x2="26" y2="7"/><polyline points="20,2 26,7 20,12"/>
          </svg>

          <div className="approach-box approach-box-blue">
            <div className="approach-box-title" style={{color:'var(--cobalt)'}}>UNDERSTAND</div>
            <div className="approach-box-body">Audience &middot; Offer &middot; Strength &middot; Position</div>
          </div>

          <svg className="approach-arrow" width="34" height="14" viewBox="0 0 34 14" fill="none" stroke="#2457E6" strokeWidth="1.6">
            <line x1="0" y1="7" x2="26" y2="7"/><polyline points="20,2 26,7 20,12"/>
          </svg>

          <div className="approach-box approach-box-teal">
            <div className="approach-box-title" style={{color:'#1C8CA8'}}>PRIORITIZE</div>
            <div className="approach-box-body">Now &middot; Next &middot; Later</div>
          </div>

          <svg className="approach-arrow" width="34" height="14" viewBox="0 0 34 14" fill="none" stroke="#2457E6" strokeWidth="1.6">
            <line x1="0" y1="7" x2="26" y2="7"/><polyline points="20,2 26,7 20,12"/>
          </svg>

          <div className="approach-box approach-box-warm" style={{flex:1.3}}>
            <div className="approach-box-title" style={{color:'var(--mid-blue)'}}>USE THE RIGHT COMBINATION</div>
            <div className="approach-box-body">SEO &middot; AI Visibility &middot; Paid Ads &middot; Content &middot; Landing Pages</div>
          </div>

          <svg className="approach-arrow" width="34" height="14" viewBox="0 0 34 14" fill="none" stroke="#2457E6" strokeWidth="1.6">
            <line x1="0" y1="7" x2="26" y2="7"/><polyline points="20,2 26,7 20,12"/>
          </svg>

          <div className="approach-pill approach-pill-cobalt">Clear Direction</div>
        </div>
      </section>

      {/* ── PERSONAL ── */}
      <section className="section section-light-blue" style={{padding:'104px 56px'}}>
        <div className="personal-grid">
          <div style={{maxWidth:660}}>
            <h2 className="section-h2">Work directly with me.</h2>
            <p style={{fontSize:18, lineHeight:1.6, color:'var(--body-text)', marginBottom:28}}>
              I work independently and stay personally involved in the research, strategy, and decisions behind the engagements I take on. Planned on-site discovery may also be available for suitable engagements where understanding the business first-hand adds value.
            </p>
            <div className="btn-group">
              <Link href="/contact" className="btn btn-primary btn-sm">Discuss Your Project</Link>
              <Link href="/contact" className="btn btn-outline-dark btn-sm">Contact Me</Link>
              <a href="https://wa.me/919514808885" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 20l1.4-4.3A8 8 0 1112 20a8 8 0 01-4.3-1.3z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
          <Image
            src="/images/raghav-kanva.jpg"
            alt="Raghav Kanva"
            width={170}
            height={170}
            className="personal-photo"
          />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <h2>Want to improve how the right customers find and choose your business?</h2>
        <p>Tell me what you are trying to improve and where the business stands today.</p>
        <Link href="/contact" className="btn btn-white">Discuss a Project</Link>
      </section>
    </>
  );
}
