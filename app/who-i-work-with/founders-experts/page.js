import Link from 'next/link';

export default function FoundersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{background:'var(--navy)',paddingTop:'100px',paddingBottom:'80px'}}>
        <div className="container">
          <div className="page-hero">
            <div>
              <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Who I Work With</div>
              <h1 style={{fontSize:'clamp(32px,4.5vw,52px)',fontWeight:700,lineHeight:1.1,color:'#fff',marginTop:12,marginBottom:20}}>
                Founders &amp; Experts
              </h1>
              <p style={{fontSize:18,color:'rgba(255,255,255,0.8)',lineHeight:1.7,marginBottom:32,maxWidth:520}}>
                Make expertise and authority clearer and easier for the right people to discover online — through SEO, content strategy, and AI visibility.
              </p>
              <div className="btn-group">
                <Link href="/contact" className="btn btn-white">Discuss Your Situation</Link>
                <a href="https://wa.me/919514808885" target="_blank" rel="noopener noreferrer" className="btn" style={{background:'rgba(255,255,255,0.1)',color:'#fff',border:'1px solid rgba(255,255,255,0.25)'}}>WhatsApp</a>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:280}}>
                <circle cx="140" cy="140" r="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                <circle cx="140" cy="95" r="38" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                <path d="M62 200c8-30 30-50 78-50s70 20 78 50" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
                {/* Authority rays */}
                {[0,45,90,135,180,225,270,315].map((angle, i) => {
                  const rad = angle * Math.PI / 180;
                  const x1 = 140 + 70 * Math.cos(rad);
                  const y1 = 140 + 70 * Math.sin(rad);
                  const x2 = 140 + 110 * Math.cos(rad);
                  const y2 = 140 + 110 * Math.sin(rad);
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(91,156,255,0.25)" strokeWidth="1.2"/>;
                })}
                <circle cx="140" cy="140" r="8" fill="rgba(91,156,255,0.4)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section section-off-white">
        <div className="container">
          <div style={{marginBottom:48}}>
            <div className="section-label">Who This Is For</div>
            <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12,maxWidth:560}}>
              Founders and Experts Who Need to Be Easier to Find
            </h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
            {[
              {title:'The expert whose website does not reflect their authority',desc:'You have deep knowledge and experience — but the website, content, and online presence do not communicate that to the people looking for someone like you.'},
              {title:'The founder building a personal brand alongside a business',desc:'You want to be findable as an individual — for speaking, consulting, writing, or partnerships — not just through the company brand.'},
              {title:'The consultant or advisor with no real online presence',desc:'You have relied on referrals and network. Now you want to build discoverability so the right people can find you without already knowing you.'},
            ].map(item => (
              <div key={item.title} style={{background:'#fff',borderRadius:14,padding:28,border:'1px solid var(--border)'}}>
                <div style={{fontWeight:700,color:'var(--secondary-text)',marginBottom:12,fontSize:17,lineHeight:1.3}}>{item.title}</div>
                <div style={{color:'var(--muted)',fontSize:15,lineHeight:1.65}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}}>
            <div>
              <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>The Problem</div>
              <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'#fff',marginTop:12,marginBottom:20}}>
                Expertise Is Not Always Visible Online
              </h2>
              <p style={{color:'rgba(255,255,255,0.8)',fontSize:16,lineHeight:1.7,marginBottom:16}}>
                The people who could most benefit from working with you often cannot find you. They search, they ask AI tools, they look on LinkedIn — and you do not show up, or what they find does not clearly communicate what you know and what you do.
              </p>
              <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,lineHeight:1.7}}>
                That is not a marketing problem. It is a visibility and clarity problem — and it is solvable with the right approach.
              </p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {[
                {from:'Relies on referrals',to:'Gets found directly by ideal clients'},
                {from:'Invisible in search',to:'Shows up for the right searches'},
                {from:'Generic online presence',to:'Clearly communicates expertise'},
                {from:'Not cited by AI tools',to:'Referenced as an authority'},
              ].map(item => (
                <div key={item.from} style={{display:'flex',alignItems:'center',gap:12,background:'rgba(255,255,255,0.05)',borderRadius:10,padding:'14px 18px',border:'1px solid rgba(255,255,255,0.1)'}}>
                  <span style={{color:'rgba(255,255,255,0.45)',fontSize:15,flex:1}}>{item.from}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{flexShrink:0}}>
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="var(--bright-blue)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{color:'rgba(255,255,255,0.9)',fontSize:15,fontWeight:500,flex:1,textAlign:'right'}}>{item.to}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I help with */}
      <section className="section section-off-white">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}}>
            <div>
              <div className="section-label">The Work</div>
              <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12,marginBottom:20}}>
                How I Help Founders and Experts
              </h2>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:32}}>
                The work varies based on your situation — but typically involves making your expertise clearer, building the right content and pages, improving how search engines and AI tools understand what you offer, and ensuring the people searching for someone like you can actually find you.
              </p>
              <Link href="/contact" className="btn btn-primary">Discuss Your Situation</Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              {[
                'SEO for personal brand and professional authority',
                'AI visibility — being cited and recommended by AI tools',
                'Content strategy focused on demonstrating expertise',
                'Website and page strategy for clarity and conversion',
                'Keyword research around your area of expertise',
                'LinkedIn and online presence strategy direction',
              ].map(item => (
                <div key={item} style={{display:'flex',gap:12,alignItems:'flex-start',padding:'14px 0',borderBottom:'1px solid var(--border)'}}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{flexShrink:0,marginTop:2}}>
                    <circle cx="9" cy="9" r="8" fill="var(--cobalt)" opacity="0.12"/>
                    <path d="M5.5 9l2.5 2.5 4.5-5" stroke="var(--cobalt)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{fontSize:16,color:'var(--body-text)'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cobalt">
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{fontSize:'clamp(24px,3vw,38px)',fontWeight:700,color:'#fff',marginBottom:16}}>
            Ready to Be Easier to Find?
          </h2>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:17,lineHeight:1.6,maxWidth:460,margin:'0 auto 32px'}}>
            Tell me about your situation and what you are trying to achieve. We can figure out what makes sense.
          </p>
          <Link href="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
