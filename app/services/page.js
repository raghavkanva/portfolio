export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section section-off-white" style={{paddingTop:'100px',paddingBottom:'80px'}}>
        <div className="container">
          <div style={{maxWidth:720}}>
            <div className="section-label">Services</div>
            <h1 style={{fontSize:'clamp(36px,5vw,58px)',fontWeight:700,lineHeight:1.1,color:'var(--secondary-text)',marginTop:16,marginBottom:24}}>
              Find the Right Way to Grow Your Online Visibility and Reach More Relevant Customers
            </h1>
            <p style={{fontSize:18,color:'var(--muted)',lineHeight:1.7,maxWidth:600}}>
              Whether you need SEO strategy, an audit of what is holding you back, or paid advertising to reach customers faster — the work starts with understanding what will actually move the needle for your business.
            </p>
          </div>
        </div>
      </section>

      {/* SEO & AI Visibility — Flagship */}
      <section id="seo-ai-visibility" className="flagship-section">
        <div className="container">
          <div className="flagship-grid">
            <div className="flagship-content">
              <div className="section-label" style={{color:'rgba(255,255,255,0.7)'}}>Core Service</div>
              <h2 style={{fontSize:'clamp(28px,3.5vw,42px)',fontWeight:700,color:'#fff',marginTop:12,marginBottom:20,lineHeight:1.2}}>
                SEO &amp; AI Visibility
              </h2>
              <p style={{color:'rgba(255,255,255,0.85)',fontSize:17,lineHeight:1.7,marginBottom:24}}>
                Improve how the right customers discover your business across traditional search and AI-powered search experiences. This is not about chasing rankings for their own sake — it is about being found by people who are looking for what you actually offer.
              </p>
              <p style={{color:'rgba(255,255,255,0.75)',fontSize:16,lineHeight:1.7,marginBottom:32}}>
                AI tools like ChatGPT, Perplexity, and Google's AI Overviews are changing how people search and get answers. Your business needs to be understood and surfaced in both traditional and AI-driven discovery.
              </p>
              <div style={{display:'flex',flexWrap:'wrap',gap:12,marginBottom:40}}>
                {['Technical SEO','On-Page Optimisation','AI Discoverability','Content Strategy','Link Building','Structured Data'].map(tag => (
                  <span key={tag} style={{padding:'6px 14px',borderRadius:100,background:'rgba(255,255,255,0.15)',color:'rgba(255,255,255,0.9)',fontSize:14}}>{tag}</span>
                ))}
              </div>
              <a href="/contact" className="btn btn-white">Discuss SEO for Your Business</a>
            </div>
            <div className="flagship-visual">
              <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:340}}>
                <circle cx="170" cy="170" r="130" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
                <circle cx="170" cy="170" r="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
                <circle cx="170" cy="170" r="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                {/* Search icon */}
                <circle cx="162" cy="162" r="30" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5"/>
                <line x1="184" y1="184" x2="202" y2="202" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
                {/* Orbit dots */}
                <circle cx="170" cy="40" r="8" fill="rgba(255,255,255,0.35)"/>
                <circle cx="300" cy="170" r="8" fill="rgba(255,255,255,0.35)"/>
                <circle cx="170" cy="300" r="8" fill="rgba(255,255,255,0.35)"/>
                <circle cx="40" cy="170" r="8" fill="rgba(255,255,255,0.35)"/>
                {/* AI nodes */}
                <rect x="60" y="55" width="60" height="28" rx="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                <text x="90" y="74" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="Inter,sans-serif">ChatGPT</text>
                <rect x="220" y="55" width="72" height="28" rx="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                <text x="256" y="74" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="Inter,sans-serif">Perplexity</text>
                <rect x="225" y="258" width="60" height="28" rx="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                <text x="255" y="277" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="Inter,sans-serif">Google</text>
                <rect x="50" y="258" width="60" height="28" rx="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                <text x="80" y="277" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="Inter,sans-serif">Bing AI</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Discoverability Audit */}
      <section id="audit" className="section section-off-white">
        <div className="container">
          <div className="service-panel">
            <div className="service-panel-content">
              <div className="section-label">Service</div>
              <h2 style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12,marginBottom:16,lineHeight:1.2}}>
                Strategic Discoverability Audit
              </h2>
              <p style={{color:'var(--muted)',fontSize:17,lineHeight:1.7,marginBottom:16}}>
                Find what is limiting visibility, lead quality, positioning, or online growth — and determine what should happen next.
              </p>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:24}}>
                This is not a surface-level checklist. It is a strategic review of your online presence: where search and AI discoverability sit today, what your competitors are doing, and what specific actions are most likely to move things forward.
              </p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:32}}>
                {[
                  'SEO performance review','AI discoverability assessment',
                  'Competitor gap analysis','Keyword &amp; topic mapping',
                  'Technical issue identification','Clear prioritised recommendations',
                ].map(item => (
                  <div key={item} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{flexShrink:0,marginTop:2}}>
                      <circle cx="9" cy="9" r="8" fill="var(--cobalt)" opacity="0.12"/>
                      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="var(--cobalt)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{fontSize:15,color:'var(--body-text)'}} dangerouslySetInnerHTML={{__html:item}}/>
                  </div>
                ))}
              </div>
              <a href="/contact" className="btn btn-primary">Request an Audit</a>
            </div>
            <div className="service-panel-visual">
              <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:300}}>
                {/* Audit layers */}
                <rect x="20" y="20" width="260" height="50" rx="10" fill="var(--card-1)" stroke="var(--border-blue)" strokeWidth="1.2"/>
                <text x="42" y="51" fill="var(--secondary-text)" fontSize="13" fontFamily="Inter,sans-serif" fontWeight="600">Technical SEO &amp; Site Health</text>
                <circle cx="252" cy="45" r="10" fill="var(--cobalt)" opacity="0.15"/>
                <path d="M248 45l3 3 5-5" stroke="var(--cobalt)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>

                <rect x="20" y="84" width="260" height="50" rx="10" fill="var(--card-2)" stroke="var(--border-blue)" strokeWidth="1.2"/>
                <text x="42" y="115" fill="var(--secondary-text)" fontSize="13" fontFamily="Inter,sans-serif" fontWeight="600">AI Discoverability &amp; Visibility</text>
                <circle cx="252" cy="109" r="10" fill="var(--cobalt)" opacity="0.15"/>
                <path d="M248 109l3 3 5-5" stroke="var(--cobalt)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>

                <rect x="20" y="148" width="260" height="50" rx="10" fill="var(--card-3)" stroke="var(--border-blue)" strokeWidth="1.2"/>
                <text x="42" y="179" fill="var(--secondary-text)" fontSize="13" fontFamily="Inter,sans-serif" fontWeight="600">Competitor &amp; Gap Analysis</text>
                <circle cx="252" cy="173" r="10" fill="var(--cobalt)" opacity="0.15"/>
                <path d="M248 173l3 3 5-5" stroke="var(--cobalt)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>

                <rect x="20" y="212" width="260" height="50" rx="10" fill="var(--light-blue)" stroke="var(--border-blue)" strokeWidth="1.2"/>
                <text x="42" y="243" fill="var(--cobalt)" fontSize="13" fontFamily="Inter,sans-serif" fontWeight="700">Prioritised Recommendations</text>
                <svg x="232" y="229" width="40" height="14">
                  <rect width="40" height="14" rx="7" fill="var(--cobalt)" opacity="0.15"/>
                  <text x="20" y="10.5" textAnchor="middle" fill="var(--cobalt)" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="600">Action Plan</text>
                </svg>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Advisory */}
      <section id="monthly-advisory" className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div className="service-panel service-panel-reverse">
            <div className="service-panel-content">
              <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Service</div>
              <h2 style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:700,color:'#fff',marginTop:12,marginBottom:16,lineHeight:1.2}}>
                Monthly SEO &amp; Growth Advisory
              </h2>
              <p style={{color:'rgba(255,255,255,0.8)',fontSize:17,lineHeight:1.7,marginBottom:16}}>
                Ongoing SEO, visibility, measurement, opportunity discovery, and strategic direction — without hiring a full-time team.
              </p>
              <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,lineHeight:1.7,marginBottom:24}}>
                For businesses that want consistent momentum. Every month covers what has moved, what new opportunities exist, and what should happen next. Strategy is adjusted as the market and business evolve.
              </p>
              <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:32}}>
                {[
                  'Monthly performance review and reporting',
                  'Ongoing keyword and topic opportunity discovery',
                  'SEO implementation support and guidance',
                  'AI discoverability monitoring and adjustments',
                  'Content and link strategy direction',
                  'Strategic direction as the business changes',
                ].map(item => (
                  <div key={item} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{flexShrink:0,marginTop:2}}>
                      <circle cx="9" cy="9" r="8" fill="rgba(91,156,255,0.2)"/>
                      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="var(--bright-blue)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{fontSize:15,color:'rgba(255,255,255,0.8)'}}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="btn btn-white">Discuss Monthly Advisory</a>
            </div>
            <div className="service-panel-visual">
              <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:300}}>
                {/* Monthly cadence visual */}
                <circle cx="150" cy="140" r="110" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                <circle cx="150" cy="140" r="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                <circle cx="150" cy="140" r="40" stroke="rgba(91,156,255,0.3)" strokeWidth="1.5"/>
                {/* Center */}
                <circle cx="150" cy="140" r="18" fill="rgba(91,156,255,0.2)"/>
                <text x="150" y="145" textAnchor="middle" fill="var(--bright-blue)" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="600">Monthly</text>
                {/* Month labels */}
                {[
                  {label:'Strategy',x:150,y:40},{label:'Review',x:245,y:105},
                  {label:'Optimise',x:230,y:210},{label:'Discover',x:70,y:210},
                  {label:'Report',x:55,y:105},
                ].map(n => (
                  <g key={n.label}>
                    <circle cx={n.x} cy={n.y} r="22" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                    <text x={n.x} y={n.y+4} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="Inter,sans-serif">{n.label}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Advertising */}
      <section id="paid-advertising" className="section section-off-white">
        <div className="container">
          <div style={{marginBottom:48}}>
            <div className="section-label">Service</div>
            <h2 style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12,marginBottom:16}}>
              Paid Advertising
            </h2>
            <p style={{color:'var(--muted)',fontSize:17,lineHeight:1.7,maxWidth:640}}>
              Google Ads and Meta Ads for businesses where faster acquisition or targeted reach makes sense alongside organic growth.
            </p>
          </div>
          <div className="paid-grid">
            {/* Google Ads */}
            <div style={{background:'#fff',borderRadius:16,padding:36,border:'1px solid var(--border)'}}>
              <div style={{marginBottom:20}}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="12" fill="var(--light-blue)"/>
                  <path d="M14 34l7-12 7 12H14z" fill="var(--cobalt)" opacity="0.8"/>
                  <circle cx="34" cy="28" r="7" fill="var(--cobalt)" opacity="0.5"/>
                  <path d="M24 16l4 8h-8l4-8z" fill="var(--cobalt)"/>
                </svg>
              </div>
              <h3 style={{fontSize:22,fontWeight:700,color:'var(--secondary-text)',marginBottom:12}}>Google Ads</h3>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:20}}>
                Search campaigns that put your business in front of people actively looking for what you offer. Built around what the business actually wants to achieve, not just impressions or clicks.
              </p>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:10}}>
                {['Search campaign strategy & setup','Keyword research & match type management','Ad copy writing & testing','Bid strategy & budget management','Conversion tracking & reporting'].map(i => (
                  <li key={i} style={{display:'flex',gap:10,alignItems:'center',fontSize:15,color:'var(--body-text)'}}>
                    <span style={{width:6,height:6,borderRadius:'50%',background:'var(--cobalt)',flexShrink:0,display:'block'}}/>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            {/* Meta Ads */}
            <div style={{background:'#fff',borderRadius:16,padding:36,border:'1px solid var(--border)'}}>
              <div style={{marginBottom:20}}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="12" fill="var(--light-blue)"/>
                  <ellipse cx="18" cy="24" rx="5" ry="10" stroke="var(--cobalt)" strokeWidth="2"/>
                  <ellipse cx="30" cy="21" rx="5" ry="7" stroke="var(--cobalt)" strokeWidth="2"/>
                </svg>
              </div>
              <h3 style={{fontSize:22,fontWeight:700,color:'var(--secondary-text)',marginBottom:12}}>Meta Ads</h3>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:20}}>
                Facebook and Instagram advertising for reaching the right audiences based on who they are, not just what they searched. Useful where intent-based reach needs to be complemented with broader targeting.
              </p>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:10}}>
                {['Audience research & targeting strategy','Campaign structure & creative direction','Ad copy & format guidance','Performance monitoring & optimisation','Funnel and retargeting strategy'].map(i => (
                  <li key={i} style={{display:'flex',gap:10,alignItems:'center',fontSize:15,color:'var(--body-text)'}}>
                    <span style={{width:6,height:6,borderRadius:'50%',background:'var(--cobalt)',flexShrink:0,display:'block'}}/>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{marginTop:32,textAlign:'center'}}>
            <a href="/contact" className="btn btn-primary">Discuss Paid Advertising</a>
          </div>
        </div>
      </section>

      {/* Content & Landing Page Strategy */}
      <section id="content-landing" className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div className="service-panel">
            <div className="service-panel-content">
              <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Service</div>
              <h2 style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:700,color:'#fff',marginTop:12,marginBottom:16,lineHeight:1.2}}>
                Content &amp; Landing Page Strategy
              </h2>
              <p style={{color:'rgba(255,255,255,0.8)',fontSize:17,lineHeight:1.7,marginBottom:16}}>
                Supporting pages and content that align with SEO, ads, customer understanding, and conversion — not content for its own sake.
              </p>
              <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,lineHeight:1.7,marginBottom:24}}>
                The right content helps search engines and AI tools understand what you offer. The right landing pages convert more of the traffic that SEO and ads bring. This service is usually done alongside the others rather than as a standalone.
              </p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:32}}>
                {[
                  'Content gap analysis','Topic cluster planning',
                  'Landing page strategy','Page brief creation',
                  'SEO-aligned content direction','Conversion copy review',
                ].map(item => (
                  <div key={item} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{flexShrink:0,marginTop:2}}>
                      <circle cx="9" cy="9" r="8" fill="rgba(91,156,255,0.2)"/>
                      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="var(--bright-blue)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{fontSize:15,color:'rgba(255,255,255,0.8)'}}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="btn btn-white">Discuss Content Strategy</a>
            </div>
            <div className="service-panel-visual">
              <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:300}}>
                <rect x="20" y="20" width="180" height="240" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                {/* Page lines */}
                <rect x="40" y="44" width="140" height="12" rx="4" fill="rgba(255,255,255,0.2)"/>
                <rect x="40" y="66" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
                <rect x="40" y="84" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
                <rect x="40" y="102" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
                <rect x="40" y="126" width="140" height="24" rx="6" fill="rgba(91,156,255,0.2)" stroke="rgba(91,156,255,0.4)" strokeWidth="1"/>
                <text x="110" y="143" textAnchor="middle" fill="var(--bright-blue)" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="600">CTA Button</text>
                <rect x="40" y="166" width="140" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
                <rect x="40" y="184" width="110" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
                <rect x="40" y="202" width="130" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
                <rect x="40" y="220" width="90" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
                {/* SEO labels floating */}
                <rect x="210" y="40" width="72" height="26" rx="6" fill="rgba(91,156,255,0.15)" stroke="rgba(91,156,255,0.3)" strokeWidth="1"/>
                <text x="246" y="57" textAnchor="middle" fill="var(--bright-blue)" fontSize="10" fontFamily="Inter,sans-serif">Keywords</text>
                <rect x="210" y="80" width="72" height="26" rx="6" fill="rgba(91,156,255,0.15)" stroke="rgba(91,156,255,0.3)" strokeWidth="1"/>
                <text x="246" y="97" textAnchor="middle" fill="var(--bright-blue)" fontSize="10" fontFamily="Inter,sans-serif">Structure</text>
                <rect x="210" y="120" width="72" height="26" rx="6" fill="rgba(91,156,255,0.15)" stroke="rgba(91,156,255,0.3)" strokeWidth="1"/>
                <text x="246" y="137" textAnchor="middle" fill="var(--bright-blue)" fontSize="10" fontFamily="Inter,sans-serif">Intent</text>
                <line x1="210" y1="53" x2="200" y2="53" stroke="rgba(91,156,255,0.3)" strokeWidth="1" strokeDasharray="3 3"/>
                <line x1="210" y1="93" x2="200" y2="93" stroke="rgba(91,156,255,0.3)" strokeWidth="1" strokeDasharray="3 3"/>
                <line x1="210" y1="133" x2="200" y2="133" stroke="rgba(91,156,255,0.3)" strokeWidth="1" strokeDasharray="3 3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Other Capabilities */}
      <section className="section section-off-white">
        <div className="container">
          <div style={{marginBottom:48}}>
            <div className="section-label">Also Available</div>
            <h2 style={{fontSize:'clamp(24px,2.8vw,36px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12}}>
              Additional Capabilities
            </h2>
          </div>
          <div className="capability-grid">
            {[
              {
                title:'Local Search Visibility',
                desc:'Improve how your business appears in Google Maps and local search results for relevant searches in your area. Covers Google Business Profile, local citations, and local SEO fundamentals.',
                svg:(
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="16" r="6" stroke="var(--cobalt)" strokeWidth="1.8"/>
                    <path d="M18 10c-4 0-8 3-8 8 0 6 8 14 8 14s8-8 8-14c0-5-4-8-8-8z" stroke="var(--cobalt)" strokeWidth="1.8"/>
                  </svg>
                ),
              },
              {
                title:'Measurement & Tracking',
                desc:'Setting up proper tracking so you can see what is actually working. Includes GA4, Google Search Console, conversion tracking, and dashboards that give meaningful visibility rather than vanity metrics.',
                svg:(
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <polyline points="6,28 12,20 18,22 24,14 30,10" stroke="var(--cobalt)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="5" y="5" width="26" height="26" rx="4" stroke="var(--cobalt)" strokeWidth="1.5"/>
                  </svg>
                ),
              },
              {
                title:'Business & Audience Discovery',
                desc:'A structured discovery process to understand the business, its market, what customers actually want, and where the real opportunities are. Often the starting point before strategy work begins.',
                svg:(
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="6" stroke="var(--cobalt)" strokeWidth="1.8"/>
                    <circle cx="18" cy="18" r="12" stroke="var(--cobalt)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  </svg>
                ),
              },
              {
                title:'Landing Page Review',
                desc:'A focused review of existing landing pages — for ads or organic traffic — identifying what is likely hurting conversion and what changes would make the page more effective at turning visitors into leads.',
                svg:(
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="6" y="4" width="24" height="28" rx="3" stroke="var(--cobalt)" strokeWidth="1.8"/>
                    <line x1="11" y1="12" x2="25" y2="12" stroke="var(--cobalt)" strokeWidth="1.5"/>
                    <line x1="11" y1="18" x2="25" y2="18" stroke="var(--cobalt)" strokeWidth="1.5"/>
                    <line x1="11" y1="24" x2="19" y2="24" stroke="var(--cobalt)" strokeWidth="1.5"/>
                  </svg>
                ),
              },
            ].map(cap => (
              <div key={cap.title} style={{background:'#fff',borderRadius:14,padding:28,border:'1px solid var(--border)',display:'flex',gap:20,alignItems:'flex-start'}}>
                <div style={{width:56,height:56,borderRadius:12,background:'var(--light-blue)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  {cap.svg}
                </div>
                <div>
                  <h3 style={{fontSize:17,fontWeight:700,color:'var(--secondary-text)',marginBottom:8}}>{cap.title}</h3>
                  <p style={{fontSize:15,color:'var(--muted)',lineHeight:1.65,margin:0}}>{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Helper */}
      <section className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Deciding Where to Start</div>
            <h2 style={{fontSize:'clamp(24px,3vw,38px)',fontWeight:700,color:'#fff',marginTop:12}}>
              Not Sure Which Service Is Right?
            </h2>
            <p style={{color:'rgba(255,255,255,0.7)',fontSize:17,marginTop:12,maxWidth:540,margin:'12px auto 0'}}>
              Most engagements start with a conversation. Here are some common situations and what usually fits.
            </p>
          </div>
          <div className="decision-grid">
            {[
              {title:'Starting SEO from scratch',desc:'If your business has little to no SEO foundation, start with a discoverability audit to understand what you are working with, then move into ongoing SEO work.',service:'Audit → SEO & AI Visibility'},
              {title:'Marketing running but results unclear',desc:'If you are spending on ads or doing SEO but cannot tell what is working, an audit is usually the right first step.',service:'Strategic Discoverability Audit'},
              {title:'Need ongoing strategy and support',desc:'If you want someone in your corner each month helping with SEO direction, content, and adjustments as you grow.',service:'Monthly SEO & Growth Advisory'},
              {title:'Need to acquire customers faster',desc:'If organic growth is the longer-term goal but you need customers now, paid advertising can bridge the gap.',service:'Paid Advertising'},
              {title:'Traffic not converting',desc:'If you are getting traffic but people are not enquiring or buying, the problem may be the pages, the messaging, or both.',service:'Landing Page Strategy'},
              {title:'Need local visibility',desc:'If you serve customers in a specific area and want to show up in Maps and local search results.',service:'Local Search Visibility'},
            ].map(card => (
              <div key={card.title} className="decision-card">
                <h3 style={{fontSize:16,fontWeight:700,color:'#fff',marginBottom:10}}>{card.title}</h3>
                <p style={{fontSize:14,color:'rgba(255,255,255,0.65)',lineHeight:1.6,marginBottom:14}}>{card.desc}</p>
                <div style={{display:'inline-block',padding:'5px 12px',borderRadius:100,background:'rgba(91,156,255,0.15)',border:'1px solid rgba(91,156,255,0.3)',fontSize:13,color:'var(--bright-blue)',fontWeight:500}}>{card.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find Your Service */}
      <section className="section section-off-white">
        <div className="container">
          <div style={{maxWidth:600,margin:'0 auto',textAlign:'center'}}>
            <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'var(--secondary-text)',marginBottom:16}}>
              Can&apos;t Find the Service You Need?
            </h2>
            <p style={{color:'var(--muted)',fontSize:17,lineHeight:1.7,marginBottom:32}}>
              If your situation is specific or you are not sure what kind of help would actually be useful, the best thing to do is to get in touch. A short conversation is usually enough to figure out whether working together makes sense and what that would look like.
            </p>
            <div className="btn-group" style={{justifyContent:'center'}}>
              <a href="/contact" className="btn btn-primary">Get in Touch</a>
              <a href="https://wa.me/919514808885" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{flexShrink:0}}>
                  <path d="M4 20l1.4-4.3A8 8 0 1112 20a8 8 0 01-4.3-1.3z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Directly With Me */}
      <section className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
            <div>
              <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>How I Work</div>
              <h2 style={{fontSize:'clamp(24px,3vw,38px)',fontWeight:700,color:'#fff',marginTop:12,marginBottom:20}}>
                Work Directly With Me
              </h2>
              <p style={{color:'rgba(255,255,255,0.8)',fontSize:17,lineHeight:1.7,marginBottom:16}}>
                You work with me directly — not an account manager, not a junior analyst. Every recommendation, every piece of strategy, every decision comes from someone who understands your business specifically.
              </p>
              <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,lineHeight:1.7,marginBottom:32}}>
                This matters because SEO and digital strategy are not template businesses. What works depends on who you are, who your customers are, and what your market looks like.
              </p>
              <a href="/contact" className="btn btn-white">Discuss Your Situation</a>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {[
                {label:'Direct access',desc:'Every conversation is with me, not passed to a team.'},
                {label:'Business-first',desc:'Strategy starts with understanding your specific situation.'},
                {label:'No jargon',desc:'Clear explanations of what is happening and why it matters.'},
                {label:'Honest fit',desc:'If I am not the right fit for what you need, I will say so.'},
              ].map(item => (
                <div key={item.label} style={{background:'rgba(255,255,255,0.05)',borderRadius:12,padding:'20px 24px',border:'1px solid rgba(255,255,255,0.1)'}}>
                  <div style={{fontWeight:600,color:'#fff',marginBottom:6,fontSize:16}}>{item.label}</div>
                  <div style={{color:'rgba(255,255,255,0.65)',fontSize:15}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-cobalt">
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{fontSize:'clamp(26px,3.5vw,44px)',fontWeight:700,color:'#fff',marginBottom:16}}>
            Ready to Discuss What Makes Sense for Your Business?
          </h2>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:18,lineHeight:1.6,maxWidth:520,margin:'0 auto 36px'}}>
            Start with a conversation. No commitment required.
          </p>
          <a href="/contact" className="btn btn-white">Discuss a Project</a>
        </div>
      </section>
    </div>
  );
}
