import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section section-off-white" style={{paddingTop:'100px',paddingBottom:'80px'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 420px',gap:72,alignItems:'center'}}>
            <div>
              <div className="section-label">About</div>
              <h1 style={{fontSize:'clamp(32px,4.5vw,52px)',fontWeight:700,lineHeight:1.1,color:'var(--secondary-text)',marginTop:12,marginBottom:20}}>
                I Help Businesses Grow Their Online Visibility and Attract Better Customers
              </h1>
              <p style={{fontSize:18,color:'var(--muted)',lineHeight:1.7,marginBottom:16}}>
                I am Raghav Kanva — an independent SEO and AI discoverability consultant working with a small number of clients at a time, directly and without layers of account management.
              </p>
              <p style={{fontSize:16,color:'var(--muted)',lineHeight:1.7,marginBottom:36}}>
                My focus is on helping businesses improve how the right customers find, understand, and choose them online — through SEO, AI visibility, paid advertising, content, and landing page strategy.
              </p>
              <div className="btn-group">
                <Link href="/contact" className="btn btn-primary">Work With Me</Link>
                <Link href="/services" className="btn btn-outline-dark">View Services</Link>
              </div>
            </div>
            <div style={{position:'relative'}}>
              <div style={{width:'100%',aspectRatio:'3/4',borderRadius:20,overflow:'hidden',background:'var(--card-1)',border:'1px solid var(--border-blue)'}}>
                <Image
                  src="/images/raghav-kanva.jpg"
                  alt="Raghav Kanva"
                  fill
                  style={{objectFit:'cover'}}
                  priority
                />
              </div>
              <div style={{position:'absolute',bottom:-16,right:-16,background:'var(--cobalt)',borderRadius:14,padding:'16px 20px',color:'#fff',fontSize:14,fontWeight:500,boxShadow:'0 8px 24px rgba(36,87,230,0.35)'}}>
                Independent Consultant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section" style={{background:'var(--navy)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}}>
            <div>
              <div className="section-label" style={{color:'rgba(255,255,255,0.6)'}}>Background</div>
              <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'#fff',marginTop:12,marginBottom:20}}>
                How I Think About This Work
              </h2>
              <p style={{color:'rgba(255,255,255,0.8)',fontSize:16,lineHeight:1.7,marginBottom:16}}>
                SEO and digital marketing is full of people who follow templates, chase rankings, and produce reports full of activity without questioning whether the activity is the right activity. I started doing this work because I thought there was a better way to approach it.
              </p>
              <p style={{color:'rgba(255,255,255,0.75)',fontSize:16,lineHeight:1.7,marginBottom:16}}>
                The better way starts with understanding the business properly — not just the website, but what the business actually sells, who actually buys it, what actually makes customers choose it, and what growth actually looks like for them. Strategy built on that understanding tends to produce very different results than strategy built on generic best practices.
              </p>
              <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,lineHeight:1.7}}>
                I also pay close attention to how search and discovery is changing. AI tools are reshaping how people find information and make decisions. Businesses that understand this early are better positioned than those that adapt late.
              </p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {[
                {title:'Business-first thinking',desc:'Strategy starts with understanding the business, not applying templates from another client.'},
                {title:'Direct working relationship',desc:'You work with me, not an account manager. Every decision and recommendation comes from the person doing the work.'},
                {title:'Honest about fit',desc:'I work with a small number of clients. If I am not the right fit for what you need, I will tell you.'},
                {title:'Long-term focus',desc:'The goal is results that compound over time, not quick wins that disappear when the work stops.'},
              ].map(item => (
                <div key={item.title} style={{background:'rgba(255,255,255,0.05)',borderRadius:12,padding:22,border:'1px solid rgba(255,255,255,0.1)'}}>
                  <div style={{fontWeight:600,color:'#fff',marginBottom:8,fontSize:16}}>{item.title}</div>
                  <div style={{color:'rgba(255,255,255,0.65)',fontSize:15,lineHeight:1.6}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I focus on */}
      <section className="section section-off-white">
        <div className="container">
          <div style={{maxWidth:680,margin:'0 auto',textAlign:'center',marginBottom:48}}>
            <div className="section-label" style={{display:'inline-block'}}>Focus Areas</div>
            <h2 style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:700,color:'var(--secondary-text)',marginTop:12}}>
              What I Focus On
            </h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20,maxWidth:900,margin:'0 auto'}}>
            {[
              {title:'SEO & AI Visibility',desc:'Traditional and AI-powered search. How businesses get found as search behaviour evolves.'},
              {title:'Customer Discovery',desc:'Understanding who the right customers are and what actually drives them to enquire or buy.'},
              {title:'Paid Acquisition',desc:'Google Ads and Meta Ads as tools for faster reach alongside longer-term organic growth.'},
              {title:'Content Strategy',desc:'Content that helps search engines understand what you offer and helps customers choose you.'},
              {title:'Measurement',desc:'Understanding what is actually working, not just what looks busy on a report.'},
              {title:'Landing Pages',desc:'Pages that convert the traffic that SEO and ads bring into real enquiries.'},
            ].map(item => (
              <div key={item.title} style={{background:'#fff',borderRadius:14,padding:24,border:'1px solid var(--border)',textAlign:'center'}}>
                <div style={{fontWeight:700,color:'var(--secondary-text)',marginBottom:8,fontSize:16}}>{item.title}</div>
                <div style={{color:'var(--muted)',fontSize:15,lineHeight:1.6}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cobalt">
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{fontSize:'clamp(24px,3vw,38px)',fontWeight:700,color:'#fff',marginBottom:16}}>
            Interested in Working Together?
          </h2>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:17,lineHeight:1.6,maxWidth:460,margin:'0 auto 32px'}}>
            Start with a conversation about your situation.
          </p>
          <Link href="/contact" className="btn btn-white">Discuss a Project</Link>
        </div>
      </section>
    </div>
  );
}
