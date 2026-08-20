import Link from 'next/link';

export default function WhoIWorkWithPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section section-off-white" style={{paddingTop:'100px',paddingBottom:'80px'}}>
        <div className="container">
          <div style={{maxWidth:720}}>
            <div className="section-label">Who I Work With</div>
            <h1 style={{fontSize:'clamp(36px,5vw,58px)',fontWeight:700,lineHeight:1.1,color:'var(--secondary-text)',marginTop:16,marginBottom:24}}>
              I Work With a Small Number of Clients Where the Fit Is Right
            </h1>
            <p style={{fontSize:18,color:'var(--muted)',lineHeight:1.7,maxWidth:600}}>
              The work is more effective when I understand the business well and can give it genuine attention. That means being selective about who I work with and how many clients I take on at any one time.
            </p>
          </div>
        </div>
      </section>

      {/* Three audience cards */}
      <section className="section">
        <div className="container">
          <div className="who-grid">
            {/* Digital Marketing Agencies */}
            <Link href="/who-i-work-with/digital-marketing-agencies" className="who-card who-card-primary" style={{textDecoration:'none'}}>
              <div style={{marginBottom:24}}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="6" y="28" width="10" height="16" rx="2" fill="rgba(255,255,255,0.3)"/>
                  <rect x="19" y="20" width="10" height="24" rx="2" fill="rgba(255,255,255,0.5)"/>
                  <rect x="32" y="10" width="10" height="34" rx="2" fill="rgba(255,255,255,0.8)"/>
                </svg>
              </div>
              <h2 style={{fontSize:'clamp(20px,2.2vw,26px)',fontWeight:700,color:'#fff',marginBottom:14}}>
                Digital Marketing Agencies
              </h2>
              <p style={{color:'rgba(255,255,255,0.8)',fontSize:16,lineHeight:1.7,marginBottom:24}}>
                Additional SEO, AI visibility, paid acquisition, audit, or strategic support on suitable client accounts — without the overhead of a full hire.
              </p>
              <div style={{display:'flex',alignItems:'center',gap:8,color:'rgba(255,255,255,0.9)',fontSize:15,fontWeight:500}}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>

            {/* Businesses & Organisations */}
            <Link href="/who-i-work-with/businesses-organizations" className="who-card who-card-2" style={{textDecoration:'none'}}>
              <div style={{marginBottom:24}}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M8 42V18l16-8 16 8v24" stroke="var(--cobalt)" strokeWidth="2"/>
                  <line x1="8" y1="42" x2="40" y2="42" stroke="var(--cobalt)" strokeWidth="2"/>
                  <rect x="18" y="28" width="12" height="14" rx="1" fill="var(--cobalt)" opacity="0.2" stroke="var(--cobalt)" strokeWidth="1.5"/>
                </svg>
              </div>
              <h2 style={{fontSize:'clamp(20px,2.2vw,26px)',fontWeight:700,color:'var(--secondary-text)',marginBottom:14}}>
                Businesses &amp; Organisations
              </h2>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:24}}>
                Build online visibility properly, or improve existing SEO, customer acquisition, and marketing that is already running but not producing the results it should.
              </p>
              <div style={{display:'flex',alignItems:'center',gap:8,color:'var(--cobalt)',fontSize:15,fontWeight:500}}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>

            {/* Founders & Experts */}
            <Link href="/who-i-work-with/founders-experts" className="who-card who-card-3" style={{textDecoration:'none'}}>
              <div style={{marginBottom:24}}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="18" r="8" stroke="var(--cobalt)" strokeWidth="2"/>
                  <path d="M10 42c2-10 8-14 14-14s12 4 14 14" stroke="var(--cobalt)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 style={{fontSize:'clamp(20px,2.2vw,26px)',fontWeight:700,color:'var(--secondary-text)',marginBottom:14}}>
                Founders &amp; Experts
              </h2>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:24}}>
                Make expertise and authority clearer and easier for the right people to discover online — whether that means SEO, content strategy, or building visibility from scratch.
              </p>
              <div style={{display:'flex',alignItems:'center',gap:8,color:'var(--cobalt)',fontSize:15,fontWeight:500}}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How I Decide */}
      <section className="section section-off-white">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
            <div>
              <div className="section-label">Fit</div>
              <h2 style={{fontSize:'clamp(24px,2.8vw,36px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12,marginBottom:20}}>
                How I Decide Whether to Work Together
              </h2>
              <p style={{color:'var(--muted)',fontSize:17,lineHeight:1.7,marginBottom:16}}>
                The fit matters more than the industry or the size of the business. I look for situations where I can genuinely help, where the client is committed to doing things properly, and where there is enough of a foundation to build on.
              </p>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:32}}>
                The first conversation is about understanding your situation — not selling. If the fit is right, we work together. If it is not, I will say so.
              </p>
              <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {[
                {title:'You want results, not activity',desc:'You care about what the work actually achieves for the business, not just whether tasks were completed.'},
                {title:'You are willing to share context',desc:'Good strategy requires understanding the business. You are open to that conversation.'},
                {title:'You have realistic expectations',desc:'SEO and visibility work takes time. You understand that and are investing accordingly.'},
                {title:'The budget fits the scope',desc:'The investment matches what you are trying to achieve and the level of work required.'},
              ].map(item => (
                <div key={item.title} style={{display:'flex',gap:16,alignItems:'flex-start',padding:'18px 20px',background:'#fff',borderRadius:12,border:'1px solid var(--border)'}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:'var(--cobalt)',flexShrink:0,marginTop:6}}/>
                  <div>
                    <div style={{fontWeight:600,color:'var(--secondary-text)',marginBottom:4,fontSize:16}}>{item.title}</div>
                    <div style={{color:'var(--muted)',fontSize:15,lineHeight:1.6}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not the Right Fit */}
      <section className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div className="not-sure">
            <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Transparency</div>
            <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'#fff',marginTop:12,marginBottom:16}}>
              When I Am Probably Not the Right Fit
            </h2>
            <p style={{color:'rgba(255,255,255,0.75)',fontSize:17,lineHeight:1.7,marginBottom:24,maxWidth:560}}>
              I would rather be honest about this upfront than waste your time or mine.
            </p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,maxWidth:680}}>
              {[
                'You need a full-service agency with large teams',
                'You want guaranteed rankings or leads by a specific date',
                'You need someone to implement everything in-house',
                'Your budget does not match the scope of what you need',
                'You are looking for a quick fix rather than a real strategy',
                'You need a specialist in a field I do not cover',
              ].map(item => (
                <div key={item} style={{display:'flex',gap:10,alignItems:'flex-start',padding:'12px 16px',background:'rgba(255,255,255,0.05)',borderRadius:10,border:'1px solid rgba(255,255,255,0.1)'}}>
                  <span style={{color:'rgba(255,255,255,0.4)',fontSize:18,lineHeight:1,marginTop:1}}>—</span>
                  <span style={{color:'rgba(255,255,255,0.7)',fontSize:15,lineHeight:1.5}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cobalt">
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{fontSize:'clamp(26px,3.5vw,44px)',fontWeight:700,color:'#fff',marginBottom:16}}>
            Not Sure Whether You Are a Good Fit?
          </h2>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:18,lineHeight:1.6,maxWidth:480,margin:'0 auto 36px'}}>
            Get in touch and describe your situation. A short conversation is usually enough to tell.
          </p>
          <Link href="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
