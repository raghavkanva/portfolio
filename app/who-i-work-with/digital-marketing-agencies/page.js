import Link from 'next/link';

export default function AgenciesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{background:'var(--navy)',paddingTop:'100px',paddingBottom:'80px'}}>
        <div className="container">
          <div className="page-hero">
            <div>
              <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Who I Work With</div>
              <h1 style={{fontSize:'clamp(32px,4.5vw,52px)',fontWeight:700,lineHeight:1.1,color:'#fff',marginTop:12,marginBottom:20}}>
                Digital Marketing Agencies
              </h1>
              <p style={{fontSize:18,color:'rgba(255,255,255,0.8)',lineHeight:1.7,marginBottom:32,maxWidth:520}}>
                Additional SEO, AI visibility, paid acquisition, audit, or strategic support on suitable client accounts — without the overhead of a full-time hire.
              </p>
              <div className="btn-group">
                <Link href="/contact" className="btn btn-white">Discuss Agency Partnership</Link>
                <a href="https://wa.me/919514808885" target="_blank" rel="noopener noreferrer" className="btn" style={{background:'rgba(255,255,255,0.1)',color:'#fff',border:'1px solid rgba(255,255,255,0.25)'}}>
                  WhatsApp
                </a>
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {['SEO overflow work','AI visibility strategy','Paid advertising support','Client audits','Strategic advisory'].map(tag => (
                <div key={tag} style={{background:'rgba(255,255,255,0.07)',borderRadius:10,padding:'14px 20px',border:'1px solid rgba(255,255,255,0.12)',color:'rgba(255,255,255,0.85)',fontSize:16,fontWeight:500}}>{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="section section-off-white">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}}>
            <div>
              <div className="section-label">The Situation</div>
              <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12,marginBottom:16}}>
                When Agencies Reach Out
              </h2>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:16}}>
                Most agency partnerships start from one of a few situations: a new client that needs SEO or audit work that the agency does not have capacity for, a client with specific AI visibility needs, or a specialist area where having external expertise adds value without adding headcount.
              </p>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7}}>
                The work is delivered under whatever arrangement suits the agency — white-label, collaborative, or named specialist. The goal is to add capability and quality where it matters.
              </p>
            </div>
            <div className="situation-list">
              {[
                {q:'You have taken on a client with complex SEO needs',a:'Overflow support or specialist work on accounts that exceed your current team capacity.'},
                {q:'A client wants AI discoverability help',a:'AI visibility strategy for businesses that want to be found across ChatGPT, Perplexity, and Google AI Overviews.'},
                {q:'You need an audit for a new pitch or onboarding',a:'Strategic discoverability audits delivered to your standard, ready to present to clients.'},
                {q:'You want a named SEO specialist on an account',a:'Available as a named specialist for clients where that credibility is important.'},
              ].map(item => (
                <div key={item.q} style={{padding:'20px 0',borderBottom:'1px solid var(--border)'}}>
                  <div style={{fontWeight:600,color:'var(--secondary-text)',marginBottom:8,fontSize:16}}>{item.q}</div>
                  <div style={{color:'var(--muted)',fontSize:15,lineHeight:1.6}}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Works Well */}
      <section className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div style={{marginBottom:48}}>
            <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Scope</div>
            <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'#fff',marginTop:12}}>
              What Works Well for Agency Partnerships
            </h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
            {[
              {title:'SEO strategy and audits',desc:'Strategy work, keyword research, technical audits, and recommendations — delivered to your clients or briefed to your implementation team.'},
              {title:'AI visibility consulting',desc:'A growing client need. Covering how to be found and cited in AI-powered search results across all the major platforms.'},
              {title:'Paid advertising',desc:'Google Ads and Meta Ads strategy and management for client accounts where that is within scope.'},
              {title:'Content strategy direction',desc:'Topic planning, content briefs, and page strategy aligned to SEO goals — for agencies that handle production.'},
              {title:'Client education',desc:'Helping clients understand what SEO and AI visibility actually involve, and setting appropriate expectations.'},
              {title:'Specialist review',desc:'A second set of eyes on strategy, recommendations, or audits when independent validation adds value.'},
            ].map(item => (
              <div key={item.title} style={{background:'rgba(255,255,255,0.05)',borderRadius:14,padding:24,border:'1px solid rgba(255,255,255,0.1)'}}>
                <div style={{fontWeight:700,color:'#fff',marginBottom:10,fontSize:16}}>{item.title}</div>
                <div style={{color:'rgba(255,255,255,0.65)',fontSize:15,lineHeight:1.6}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cobalt">
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{fontSize:'clamp(24px,3vw,38px)',fontWeight:700,color:'#fff',marginBottom:16}}>
            Ready to Discuss a Partnership?
          </h2>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:17,lineHeight:1.6,maxWidth:480,margin:'0 auto 32px'}}>
            Tell me about the agency, the client situation, and what you are looking for. We can figure out whether working together makes sense.
          </p>
          <Link href="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
