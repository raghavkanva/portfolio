'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', budget: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="section section-off-white" style={{paddingTop:'100px',paddingBottom:'80px'}}>
        <div className="container">
          <div style={{maxWidth:640}}>
            <div className="section-label">Contact</div>
            <h1 style={{fontSize:'clamp(32px,4.5vw,52px)',fontWeight:700,lineHeight:1.1,color:'var(--secondary-text)',marginTop:12,marginBottom:20}}>
              Let&apos;s Discuss Your Situation
            </h1>
            <p style={{fontSize:18,color:'var(--muted)',lineHeight:1.7}}>
              Tell me about your business and what you are trying to achieve. The first conversation is about understanding your situation, not selling. If the fit is right, we can figure out what working together looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:72,alignItems:'start'}}>
            {/* Left column */}
            <div>
              <h2 style={{fontSize:'clamp(20px,2.2vw,28px)',fontWeight:700,color:'var(--secondary-text)',marginBottom:20}}>
                Get in Touch
              </h2>
              <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.7,marginBottom:32}}>
                Fill out the form and I will get back to you within a couple of business days. Alternatively, reach out directly via email or WhatsApp if that is easier.
              </p>

              <div style={{display:'flex',flexDirection:'column',gap:20,marginBottom:36}}>
                <a href="mailto:raghavkanva@gmail.com" style={{display:'flex',gap:14,alignItems:'center',textDecoration:'none',padding:'18px 20px',background:'var(--light-blue)',borderRadius:12,border:'1px solid var(--border-blue)'}}>
                  <div style={{width:40,height:40,borderRadius:10,background:'var(--cobalt)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                      <rect x="3" y="5" width="18" height="14" rx="2"/>
                      <path d="M3 8l9 6 9-6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{fontSize:13,color:'var(--muted)',marginBottom:2}}>Email</div>
                    <div style={{fontSize:16,fontWeight:600,color:'var(--secondary-text)'}}>raghavkanva@gmail.com</div>
                  </div>
                </a>

                <a href="https://wa.me/919514808885" target="_blank" rel="noopener noreferrer" style={{display:'flex',gap:14,alignItems:'center',textDecoration:'none',padding:'18px 20px',background:'var(--light-blue)',borderRadius:12,border:'1px solid var(--border-blue)'}}>
                  <div style={{width:40,height:40,borderRadius:10,background:'#25D366',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                      <path d="M4 20l1.4-4.3A8 8 0 1112 20a8 8 0 01-4.3-1.3z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{fontSize:13,color:'var(--muted)',marginBottom:2}}>WhatsApp</div>
                    <div style={{fontSize:16,fontWeight:600,color:'var(--secondary-text)'}}>+91 95148 08885</div>
                  </div>
                </a>
              </div>

              <div style={{padding:'20px 24px',background:'var(--off-white)',borderRadius:12,border:'1px solid var(--border)'}}>
                <div style={{fontWeight:600,color:'var(--secondary-text)',marginBottom:8,fontSize:15}}>Response time</div>
                <div style={{color:'var(--muted)',fontSize:15,lineHeight:1.6}}>I aim to respond within 1–2 business days. If your situation is time-sensitive, WhatsApp is usually the fastest way to reach me.</div>
              </div>
            </div>

            {/* Form */}
            <div style={{background:'#fff',borderRadius:20,padding:'40px',border:'1px solid var(--border)',boxShadow:'0 4px 32px rgba(0,0,0,0.06)'}}>
              {submitted ? (
                <div style={{textAlign:'center',padding:'40px 0'}}>
                  <div style={{width:64,height:64,borderRadius:'50%',background:'var(--light-blue)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px'}}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M6 14l6 6 10-12" stroke="var(--cobalt)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{fontSize:22,fontWeight:700,color:'var(--secondary-text)',marginBottom:12}}>Message Received</h3>
                  <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.6}}>Thanks for getting in touch. I will get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:20}}>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                    <div>
                      <label style={{display:'block',fontSize:14,fontWeight:500,color:'var(--body-text)',marginBottom:6}}>Name *</label>
                      <input
                        name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your name"
                        style={{width:'100%',padding:'12px 14px',borderRadius:10,border:'1px solid var(--border)',fontSize:15,outline:'none',boxSizing:'border-box',fontFamily:'inherit'}}
                      />
                    </div>
                    <div>
                      <label style={{display:'block',fontSize:14,fontWeight:500,color:'var(--body-text)',marginBottom:6}}>Email *</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="your@email.com"
                        style={{width:'100%',padding:'12px 14px',borderRadius:10,border:'1px solid var(--border)',fontSize:15,outline:'none',boxSizing:'border-box',fontFamily:'inherit'}}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{display:'block',fontSize:14,fontWeight:500,color:'var(--body-text)',marginBottom:6}}>Company / Website</label>
                    <input
                      name="company" value={form.company} onChange={handleChange}
                      placeholder="Optional"
                      style={{width:'100%',padding:'12px 14px',borderRadius:10,border:'1px solid var(--border)',fontSize:15,outline:'none',boxSizing:'border-box',fontFamily:'inherit'}}
                    />
                  </div>

                  <div>
                    <label style={{display:'block',fontSize:14,fontWeight:500,color:'var(--body-text)',marginBottom:6}}>Monthly budget range</label>
                    <select
                      name="budget" value={form.budget} onChange={handleChange}
                      style={{width:'100%',padding:'12px 14px',borderRadius:10,border:'1px solid var(--border)',fontSize:15,outline:'none',background:'#fff',boxSizing:'border-box',fontFamily:'inherit',color: form.budget ? 'var(--body-text)' : 'var(--muted)'}}
                    >
                      <option value="">Select a range (optional)</option>
                      <option>Under ₹30,000/month</option>
                      <option>₹30,000 – ₹75,000/month</option>
                      <option>₹75,000 – ₹1,50,000/month</option>
                      <option>₹1,50,000+/month</option>
                      <option>Looking for a one-time project</option>
                    </select>
                  </div>

                  <div>
                    <label style={{display:'block',fontSize:14,fontWeight:500,color:'var(--body-text)',marginBottom:6}}>Tell me about your situation *</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required
                      placeholder="What is your business, what are you trying to achieve, and what would be most useful to discuss?"
                      rows={5}
                      style={{width:'100%',padding:'12px 14px',borderRadius:10,border:'1px solid var(--border)',fontSize:15,outline:'none',resize:'vertical',boxSizing:'border-box',fontFamily:'inherit'}}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center',padding:'14px'}}>
                    Send Message
                  </button>

                  <p style={{fontSize:13,color:'var(--muted)',textAlign:'center',margin:0}}>
                    No commitment required. I will review your message and respond within 1–2 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
