import Link from 'next/link';

export default function BusinessesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section section-off-white" style={{paddingTop:'100px',paddingBottom:'80px'}}>
        <div className="container">
          <div className="page-hero">
            <div>
              <div className="section-label">Who I Work With</div>
              <h1 style={{fontSize:'clamp(32px,4.5vw,52px)',fontWeight:700,lineHeight:1.1,color:'var(--secondary-text)',marginTop:12,marginBottom:20}}>
                Businesses &amp; Organisations
              </h1>
              <p style={{fontSize:18,color:'var(--muted)',lineHeight:1.7,marginBottom:32,maxWidth:520}}>
                Build online visibility properly, or improve existing SEO, customer acquisition, and marketing that is not producing the results it should.
              </p>
              <div className="btn-group">
                <Link href="/contact" className="btn btn-primary">Discuss Your Business</Link>
                <a href="https://wa.me/919514808885" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">WhatsApp</a>
              </div>
            </div>
            <div style={{background:'var(--light-blue)',borderRadius:20,padding:36,border:'1px solid var(--border-blue)'}}>
              <div style={{fontSize:15,fontWeight:600,color:'var(--cobalt)',marginBottom:20,textTransform:'uppercase',letterSpacing:'0.08em'}}>Common Starting Points</div>
              {[
                'Building SEO from scratch',
                'Improving existing marketing performance',
                'Understanding what is holding growth back',
                'Getting more relevant enquiries',
                'Reducing reliance on paid referrals',
                'Improving online visibility in your market',
              ].map(item => (
                <div key={item} style={{display:'flex',gap:12,alignItems:'center',padding:'10px 0',borderBottom:'1px solid var(--border-blue)',fontSize:15,color:'var(--body-text)'}}>
                  <span style={{width:6,height:6,borderRadius:'50%',background:'var(--cobalt)',flexShrink:0}}/>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div style={{marginBottom:48}}>
            <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Situations</div>
            <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'#fff',marginTop:12}}>
              Businesses That Tend to Be a Good Fit
            </h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
            {[
              {title:'Established but underperforming online',desc:'Your business has been running for a while, you have a website and maybe some marketing spend — but online visibility is weak and enquiries from search are minimal.'},
              {title:'Starting properly from the beginning',desc:'A newer business that wants to build visibility the right way from early on, rather than fixing problems later.'},
              {title:'Marketing running but unclear what is working',desc:'You are spending on SEO, ads, or content but cannot tell what is actually producing results and what is being wasted.'},
              {title:'Specific growth objective',desc:'A clear goal — more enquiries, better-quality leads, stronger presence in a specific market — and you need a strategy to reach it.'},
              {title:'Considering AI search readiness',desc:'You have heard that AI search is changing things and want to understand what it means for your business specifically.'},
              {title:'Needing local visibility',desc:'A business that serves customers in a specific area and needs to show up properly in local search and Google Maps.'},
            ].map(item => (
              <div key={item.title} style={{background:'rgba(255,255,255,0.05)',borderRadius:14,padding:28,border:'1px solid rgba(255,255,255,0.1)'}}>
                <div style={{fontWeight:700,color:'#fff',marginBottom:10,fontSize:17}}>{item.title}</div>
                <div style={{color:'rgba(255,255,255,0.65)',fontSize:15,lineHeight:1.65}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section section-off-white">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}}>
            <div>
              <div className="section-label">How It Works</div>
              <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12,marginBottom:16}}>
                What to Expect
              </h2>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:16}}>
                Every engagement starts with understanding the business properly. That means understanding what you sell, who buys it, why they choose you over alternatives, and what success actually looks like for you.
              </p>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:32}}>
                Strategy comes from that understanding, not from templates. The work is focused on what is most likely to produce real results for your specific situation.
              </p>
              <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:0}}>
              {[
                {num:'01',title:'Understand the business',desc:'A proper conversation about the business, the market, the customers, and the goal.'},
                {num:'02',title:'Assess current state',desc:'Where visibility, SEO, and marketing currently sit — and where the biggest gaps are.'},
                {num:'03',title:'Build the strategy',desc:'A clear, prioritised plan of what to do and in what order.'},
                {num:'04',title:'Implement and adjust',desc:'Execute the strategy, measure what moves, and adjust based on what the data shows.'},
              ].map((step, i, arr) => (
                <div key={step.num} style={{display:'flex',gap:20,padding:'24px 0',borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none'}}>
                  <div style={{fontSize:13,fontWeight:700,color:'var(--cobalt)',fontFamily:'monospace',flexShrink:0,paddingTop:2}}>{step.num}</div>
                  <div>
                    <div style={{fontWeight:600,color:'var(--secondary-text)',marginBottom:6,fontSize:16}}>{step.title}</div>
                    <div style={{color:'var(--muted)',fontSize:15,lineHeight:1.6}}>{step.desc}</div>
                  </div>
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
            Want to Discuss Your Business Situation?
          </h2>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:17,lineHeight:1.6,maxWidth:480,margin:'0 auto 32px'}}>
            Tell me where you are and what you are trying to achieve. We can figure out from there.
          </p>
          <Link href="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
