import Link from 'next/link';

export const metadata = {
  title: 'Who I Work With — Raghav Kanva SEO & AI Discoverability Consultant',
  description: 'I work with digital marketing agencies, businesses, founders, and experts who want to improve how the right people find, understand, and choose them online.',
};

export default function WhoIWorkWithPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-label" style={{ fontSize: '24px', fontWeight: 500 }}>Who I Work With</p>
          <h1 className="page-h1">
            Work With Me to Reach the Right Audience and Build Stronger Online Visibility
          </h1>
          <p className="page-h1-sub">
            I work with digital marketing agencies, businesses and organizations, founders, and experts
            who want to improve how the right people find, understand, and choose them online.
          </p>
          <p className="page-h1-sub" style={{ marginTop: '-8px' }}>
            You may be starting from the beginning, looking for full SEO support, improving work that
            is already running, or trying to understand why your current marketing is not producing the
            right results.
          </p>
          <div className="btn-group">
            <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
            <a href="https://wa.me/919514808885" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
          </div>
        </div>
        <div className="page-hero-visual">
          <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Agencies businesses founders and experts working with an independent consultant">
            <defs>
              <linearGradient id="whoBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#10233C"/>
                <stop offset="100%" stopColor="#2457E6"/>
              </linearGradient>
            </defs>
            <rect width="760" height="360" rx="32" fill="url(#whoBg)"/>
            {/* Agency */}
            <rect x="72" y="70" width="118" height="92" rx="16" fill="#FFFFFF" fillOpacity=".08" stroke="#8BD6FF" strokeWidth="4"/>
            <rect x="92" y="91" width="17" height="45" rx="4" fill="#6EBEFF"/>
            <rect x="119" y="76" width="17" height="60" rx="4" fill="#82D5FF"/>
            <rect x="146" y="101" width="17" height="35" rx="4" fill="#4D8CFF"/>
            {/* Business */}
            <rect x="72" y="207" width="118" height="88" rx="16" fill="#FFFFFF" fillOpacity=".08" stroke="#8BD6FF" strokeWidth="4"/>
            <path d="M98 257 V226 H164 V257" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
            <path d="M91 227 L131 203 L171 227" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Consultant */}
            <circle cx="377" cy="180" r="78" fill="#FFFFFF" fillOpacity=".08" stroke="#FFFFFF" strokeWidth="5"/>
            <circle cx="377" cy="151" r="24" fill="none" stroke="#8BD6FF" strokeWidth="5"/>
            <path d="M332 224 C337 182 417 182 422 224" fill="none" stroke="#8BD6FF" strokeWidth="5" strokeLinecap="round"/>
            {/* Founder */}
            <circle cx="624" cy="104" r="28" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
            <path d="M576 180 C582 130 666 130 672 180" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
            {/* Expert / Authority */}
            <circle cx="624" cy="252" r="41" fill="#FFFFFF" fillOpacity=".07" stroke="#6EBEFF" strokeWidth="4"/>
            <path d="M603 254 L618 269 L647 235" fill="none" stroke="#8BD6FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Connections */}
            <path d="M190 116 C260 116 282 147 307 158" fill="none" stroke="#6EBEFF" strokeWidth="4"/>
            <path d="M190 251 C260 251 282 218 307 205" fill="none" stroke="#6EBEFF" strokeWidth="4"/>
            <path d="M447 158 C501 140 532 119 574 111" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
            <path d="M447 207 C505 218 542 239 582 248" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
          </svg>
        </div>
      </section>

      {/* Choose the Group */}
      <section className="section section-off-white">
        <h2 className="section-h2 mb-16">Choose the Group That Best Describes You</h2>
        <p className="section-lead" style={{ maxWidth: '620px' }}>
          The way I work changes depending on who you are, what is already running, and what you are
          trying to improve.
        </p>
      </section>

      {/* Digital Marketing Agencies */}
      <section className="audience-section" style={{ background: 'var(--light-blue)' }}>
        <div className="audience-layout-right">
          <div>
            <h2 className="audience-heading">SEO, AI Visibility and Marketing Support for Your Agency and Client Accounts</h2>
            <p className="audience-body">
              I can work with digital marketing agencies that need full SEO support, additional SEO
              capacity, AI visibility and AI discoverability support, strategic audits, paid advertising
              support, landing-page direction, or help with selected client accounts.
            </p>
            <p className="audience-body">
              I can work alongside your existing team, support specific accounts, or take responsibility
              for suitable SEO work from the beginning depending on what the agency needs.
            </p>
            <div className="situation-list">
              <div className="situation-item">
                <p className="situation-title">You need someone to handle SEO for a client account</p>
                <p className="situation-desc">I can support the SEO work from research and strategy through implementation review and ongoing improvement.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">Your team needs additional capacity</p>
                <p className="situation-desc">I can support selected accounts or areas when the internal team has limited time or needs another specialist involved.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">A client needs deeper investigation</p>
                <p className="situation-desc">I can review the business, audience, SEO, competitors, website, AI visibility, content, landing pages, and current results to identify what deserves attention.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">You need support beyond traditional SEO</p>
                <p className="situation-desc">I can also support AI discoverability, paid advertising direction, content, landing pages, and measurement where relevant.</p>
              </div>
            </div>
            <Link href="/who-i-work-with/digital-marketing-agencies" className="btn btn-primary btn-sm">Explore Agency Support</Link>
          </div>
          <div className="graphic-wrap">
            <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SEO and AI visibility support for digital marketing agencies">
              <defs>
                <linearGradient id="agencyBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#10243D"/>
                  <stop offset="100%" stopColor="#1D4D7C"/>
                </linearGradient>
              </defs>
              <rect width="720" height="320" rx="30" fill="url(#agencyBg)"/>
              {/* Agency */}
              <rect x="72" y="83" width="150" height="154" rx="22" fill="#FFFFFF" fillOpacity=".07" stroke="#8BD6FF" strokeWidth="4"/>
              <rect x="102" y="164" width="24" height="43" rx="5" fill="#5FAEFF"/>
              <rect x="138" y="124" width="24" height="83" rx="5" fill="#8BD6FF"/>
              <rect x="174" y="146" width="24" height="61" rx="5" fill="#6EBEFF"/>
              {/* Client Accounts */}
              <rect x="298" y="54" width="122" height="72" rx="16" fill="#FFFFFF" fillOpacity=".07" stroke="#5FAEFF" strokeWidth="3"/>
              <rect x="298" y="145" width="122" height="72" rx="16" fill="#2457E6" stroke="#8BD6FF" strokeWidth="4"/>
              <rect x="298" y="236" width="122" height="45" rx="16" fill="#FFFFFF" fillOpacity=".07" stroke="#5FAEFF" strokeWidth="3"/>
              {/* Specialist */}
              <circle cx="570" cy="132" r="29" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
              <path d="M518 226 C524 170 615 170 621 226" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
              {/* Connections */}
              <path d="M222 160 H290" stroke="#FFFFFF" strokeWidth="5"/>
              <path d="M422 181 C468 181 492 166 516 151" fill="none" stroke="#8BD6FF" strokeWidth="5" strokeLinecap="round"/>
              {/* Selected Account */}
              <circle cx="398" cy="159" r="16" fill="#FFFFFF"/>
              <path d="M390 159 L396 165 L407 152" fill="none" stroke="#2457E6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Businesses & Organizations */}
      <section className="audience-section" style={{ background: 'var(--off-white)' }}>
        <div className="audience-layout-left">
          <div className="graphic-wrap">
            <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Helping businesses reach relevant customers online">
              <defs>
                <linearGradient id="businessBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#13334C"/>
                  <stop offset="100%" stopColor="#2457E6"/>
                </linearGradient>
              </defs>
              <rect width="720" height="320" rx="30" fill="url(#businessBg)"/>
              {/* Business */}
              <rect x="77" y="102" width="154" height="132" rx="20" fill="#FFFFFF" fillOpacity=".07" stroke="#8BD6FF" strokeWidth="4"/>
              <path d="M109 204 V154 H199 V204" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
              <path d="M101 155 L154 121 L207 155" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Visibility */}
              <circle cx="363" cy="168" r="68" fill="#FFFFFF" fillOpacity=".08" stroke="#7CCCF5" strokeWidth="5"/>
              <circle cx="345" cy="151" r="26" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
              <line x1="364" y1="170" x2="389" y2="195" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round"/>
              {/* Right Customer */}
              <circle cx="559" cy="119" r="23" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
              <path d="M518 193 C523 149 595 149 600 193" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
              {/* Growth */}
              <path d="M546 244 L574 215 L594 229 L627 191" fill="none" stroke="#8BD6FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M231 168 H293" stroke="#8BD6FF" strokeWidth="5"/>
              <path d="M432 168 H503" stroke="#FFFFFF" strokeWidth="5"/>
            </svg>
          </div>
          <div>
            <h2 className="audience-heading">Help More of the Right Customers Find and Choose Your Business</h2>
            <p className="audience-body">
              I work with businesses and organizations that want to build their online visibility
              properly from the beginning or improve SEO, AI discoverability, advertising, content,
              and customer acquisition that is already running.
            </p>
            <div className="situation-list">
              <div className="situation-item">
                <p className="situation-title">You want to start SEO properly</p>
                <p className="situation-desc">Your business is ready to build stronger search visibility from the beginning.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">You are getting visitors, but not enough relevant enquiries</p>
                <p className="situation-desc">The audience, keywords, pages, messaging, or offer may need to be reviewed.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">The wrong people are finding your business</p>
                <p className="situation-desc">Your marketing may be reaching people who are not the right fit for what you offer.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">Your competitors appear more visible online</p>
                <p className="situation-desc">You want to understand why they are being found more often across search or AI experiences.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">Your website does not clearly explain why customers should choose you</p>
                <p className="situation-desc">Your strongest services, expertise, USP, or business strengths may not be visible enough online.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">You want stronger AI visibility and AI discoverability</p>
                <p className="situation-desc">You want your business and expertise to be easier for AI-powered search and discovery systems to understand.</p>
              </div>
              <div className="situation-item">
                <p className="situation-title">SEO, ads, content and landing pages are not working together</p>
                <p className="situation-desc">You want the different parts of your marketing to support the same audience and business goal.</p>
              </div>
            </div>
            <div className="outcome-block">
              <p className="outcome-text">
                The goal is to help the business reach more relevant customers, generate stronger
                enquiries, and create better opportunities to grow sales.
              </p>
            </div>
            <Link href="/who-i-work-with/businesses-organizations" className="btn btn-primary btn-sm">Explore Support for Businesses</Link>
          </div>
        </div>
      </section>

      {/* Founders & Experts */}
      <section className="audience-section" style={{ background: 'var(--light-blue)' }}>
        <div className="audience-layout-right">
          <div>
            <h2 className="audience-heading">Turn Your Expertise Into a Stronger Online Presence</h2>
            <p className="audience-body">
              If you are a founder, professional, coach, author, speaker, consultant, or expert, I can
              help make your knowledge, experience, and expertise easier for the right people to find
              and understand online.
            </p>
            <p className="audience-body">
              The goal is to make it clearer what you are known for, who you can help, and why people
              should trust your expertise.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <p className="feature-title">Your search visibility</p>
                <p className="feature-desc">Help people find you when they search for your name, expertise, topics, or services.</p>
              </div>
              <div className="feature-item">
                <p className="feature-title">Your AI visibility</p>
                <p className="feature-desc">Improve how clearly your expertise and information can be understood across AI-powered discovery experiences.</p>
              </div>
              <div className="feature-item">
                <p className="feature-title">Your positioning</p>
                <p className="feature-desc">Make it easier to understand what you are genuinely known for and who your work is most relevant to.</p>
              </div>
              <div className="feature-item">
                <p className="feature-title">Your website</p>
                <p className="feature-desc">Improve your homepage, expertise pages, service pages, landing pages, and messaging.</p>
              </div>
              <div className="feature-item">
                <p className="feature-title">Your original knowledge</p>
                <p className="feature-desc">Identify useful insights, experience, ideas, and expertise that can strengthen your content and authority.</p>
              </div>
              <div className="feature-item">
                <p className="feature-title">Your content direction</p>
                <p className="feature-desc">Decide what topics and questions are worth creating content around instead of publishing without a clear purpose.</p>
              </div>
            </div>
            <div className="outcome-block" style={{ background: 'rgba(36,87,230,0.08)', borderRadius: '12px', padding: '24px 28px', margin: '24px 0' }}>
              <p className="outcome-text">
                Your expertise should be easy to discover, easy to understand, and clearly connected
                to the people who need it.
              </p>
            </div>
            <Link href="/who-i-work-with/founders-experts" className="btn btn-primary btn-sm">Explore Support for Founders &amp; Experts</Link>
          </div>
          <div className="graphic-wrap">
            <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Helping founders and experts build online visibility">
              <defs>
                <linearGradient id="expertBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#122A45"/>
                  <stop offset="100%" stopColor="#17657A"/>
                </linearGradient>
              </defs>
              <rect width="720" height="320" rx="30" fill="url(#expertBg)"/>
              {/* Expert */}
              <circle cx="150" cy="116" r="33" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
              <path d="M92 224 C99 157 201 157 208 224" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
              {/* Authority */}
              <circle cx="317" cy="160" r="52" fill="#FFFFFF" fillOpacity=".06" stroke="#8BD6FF" strokeWidth="4"/>
              <path d="M295 162 L311 178 L342 142" fill="none" stroke="#8BD6FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Search */}
              <circle cx="474" cy="107" r="27" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
              <line x1="494" y1="127" x2="516" y2="149" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
              {/* AI Surface */}
              <rect x="446" y="185" width="82" height="67" rx="14" fill="none" stroke="#73C8F2" strokeWidth="4"/>
              <circle cx="468" cy="211" r="4" fill="#73C8F2"/>
              <circle cx="487" cy="211" r="4" fill="#73C8F2"/>
              <circle cx="506" cy="211" r="4" fill="#73C8F2"/>
              {/* Audience */}
              <circle cx="622" cy="125" r="23" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
              <path d="M583 204 C588 160 656 160 661 204" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
              {/* Connections */}
              <path d="M210 163 H260" stroke="#8BD6FF" strokeWidth="5"/>
              <path d="M370 154 C398 141 420 124 443 115" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
              <path d="M370 177 C400 191 419 208 445 215" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
              <path d="M526 158 H582" stroke="#8BD6FF" strokeWidth="5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Your Starting Point */}
      <section className="section section-off-white">
        <h2 className="section-h2 mb-16">Your Starting Point Depends on What Is Happening Today</h2>
        <p className="section-lead mb-48" style={{ maxWidth: '640px' }}>
          You do not need to know which service you need before contacting me. The right starting
          point depends on what is already happening and what you want to improve.
        </p>
        <div className="starting-grid">
          <div className="starting-card">
            <p className="starting-num">01</p>
            <p className="starting-title">Starting from the beginning</p>
            <p className="starting-desc">You want SEO and online visibility built properly from the start.</p>
            <p className="starting-rec-label">Recommended</p>
            <p className="starting-rec">SEO &amp; AI Visibility</p>
          </div>
          <div className="starting-card">
            <p className="starting-num">02</p>
            <p className="starting-title">Marketing is already running, but something is not working</p>
            <p className="starting-desc">You are already doing SEO, ads, content, or other marketing but the results, leads, or audience are not what you expected.</p>
            <p className="starting-rec-label">Recommended</p>
            <p className="starting-rec">Strategic Discoverability Audit</p>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.4 }}>Next step may be: SEO &amp; AI Visibility or Monthly SEO &amp; Growth Advisory</p>
          </div>
          <div className="starting-card">
            <p className="starting-num">03</p>
            <p className="starting-title">You want ongoing support</p>
            <p className="starting-desc">You already have activity running and want regular review, decisions, and improvements.</p>
            <p className="starting-rec-label">Recommended</p>
            <p className="starting-rec">Monthly SEO &amp; Growth Advisory</p>
          </div>
          <div className="starting-card">
            <p className="starting-num">04</p>
            <p className="starting-title">You need faster or more targeted customer acquisition</p>
            <p className="starting-desc">You want to reach active search demand or a specific audience through paid campaigns.</p>
            <p className="starting-rec-label">Recommended</p>
            <p className="starting-rec">Paid Advertising</p>
          </div>
        </div>
      </section>

      {/* Business Understanding */}
      <section className="section section-navy">
        <div style={{ maxWidth: '760px', marginBottom: '56px' }}>
          <h2 className="section-h2-white mb-16">The Right Strategy Starts With Understanding What You Actually Need</h2>
          <p className="section-lead-white mb-16">
            Before choosing SEO, AI discoverability, paid advertising, content, or landing-page work,
            I first understand your business, audience, offer, strengths, current marketing, and growth goal.
          </p>
          <p className="section-lead-white">
            This helps decide what deserves attention first and which marketing approach is most likely
            to be useful for your situation.
          </p>
        </div>
        <div className="graphic-wrap">
          <svg viewBox="0 0 820 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Understanding the business before choosing the right marketing strategy">
            <rect width="820" height="360" rx="32" fill="#101525"/>
            {/* Central Business */}
            <circle cx="410" cy="180" r="72" fill="#182A48" stroke="#5FAEFF" strokeWidth="5"/>
            <path d="M380 195 V157 H440 V195" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
            <path d="M372 158 L410 134 L448 158" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Surrounding Nodes */}
            <circle cx="185" cy="90" r="44" fill="#183B5D"/>
            <circle cx="635" cy="90" r="44" fill="#183B5D"/>
            <circle cx="168" cy="275" r="44" fill="#183B5D"/>
            <circle cx="652" cy="275" r="44" fill="#183B5D"/>
            {/* Audience */}
            <circle cx="185" cy="79" r="11" fill="#8BD6FF"/>
            <path d="M165 109 C168 88 202 88 205 109" fill="none" stroke="#8BD6FF" strokeWidth="4"/>
            {/* Offer */}
            <rect x="617" y="73" width="36" height="31" rx="6" fill="none" stroke="#73C8F2" strokeWidth="4"/>
            {/* Strength */}
            <path d="M150 276 L164 290 L188 260" fill="none" stroke="#8BD6FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Goal */}
            <path d="M629 290 L647 271 L661 281 L678 259" fill="none" stroke="#5FAEFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Connectors */}
            <line x1="348" y1="145" x2="225" y2="106" stroke="#405D83" strokeWidth="3"/>
            <line x1="472" y1="145" x2="595" y2="106" stroke="#405D83" strokeWidth="3"/>
            <line x1="347" y1="218" x2="209" y2="260" stroke="#405D83" strokeWidth="3"/>
            <line x1="473" y1="218" x2="611" y2="260" stroke="#405D83" strokeWidth="3"/>
          </svg>
        </div>
      </section>

      {/* Positive Fit / Clear Goal */}
      <section className="section section-off-white">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <h2 className="section-h2 mb-16">We Can Do Better Work When We Are Clear About the Goal</h2>
            <p className="section-lead mb-48" style={{ maxWidth: '520px' }}>
              The strongest engagements usually happen when we can understand the business clearly,
              focus on the right customers, and make decisions based on what matters most.
            </p>
            <div className="fit-grid">
              <div className="fit-item">
                <p className="fit-num">1</p>
                <p className="fit-title">You want to reach people who genuinely need what you offer</p>
                <p className="fit-body">The focus is on relevant customers and useful enquiries, not simply increasing visitor numbers.</p>
              </div>
              <div className="fit-item">
                <p className="fit-num">2</p>
                <p className="fit-title">You are open to sharing how the business really works</p>
                <p className="fit-body">Understanding your customers, services, strengths, pricing, challenges, and goals helps create a much stronger strategy.</p>
              </div>
              <div className="fit-item">
                <p className="fit-num">3</p>
                <p className="fit-title">You want clear priorities</p>
                <p className="fit-body">We focus first on the actions that can make the biggest difference instead of trying to change everything at once.</p>
              </div>
              <div className="fit-item">
                <p className="fit-num">4</p>
                <p className="fit-title">You value practical and realistic growth</p>
                <p className="fit-body">The work is focused on improving visibility, customer acquisition, and sales opportunities through decisions we can explain and measure.</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="graphic-wrap" style={{ width: '100%' }}>
              <svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Working together toward a clear business goal">
                <defs>
                  <linearGradient id="fitBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#EEF3FF"/>
                    <stop offset="100%" stopColor="#DCE7FF"/>
                  </linearGradient>
                </defs>
                <rect width="760" height="300" rx="30" fill="url(#fitBg)"/>
                {/* Business */}
                <circle cx="165" cy="150" r="55" fill="#101525"/>
                <path d="M139 166 V133 H191 V166" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
                <path d="M132 134 L165 112 L198 134" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Consultant */}
                <circle cx="350" cy="132" r="25" fill="none" stroke="#2457E6" strokeWidth="5"/>
                <path d="M303 211 C309 162 391 162 397 211" fill="none" stroke="#2457E6" strokeWidth="5" strokeLinecap="round"/>
                {/* Shared Path */}
                <path d="M220 151 H280" fill="none" stroke="#2457E6" strokeWidth="5" strokeLinecap="round"/>
                <path d="M400 151 H480" fill="none" stroke="#2457E6" strokeWidth="5" strokeLinecap="round"/>
                {/* Target */}
                <circle cx="585" cy="150" r="67" fill="#FFFFFF" stroke="#2457E6" strokeWidth="5"/>
                <circle cx="585" cy="150" r="42" fill="none" stroke="#76B7FF" strokeWidth="4"/>
                <circle cx="585" cy="150" r="17" fill="#2457E6"/>
                <path d="M477 151 H509" stroke="#2457E6" strokeWidth="5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Selector */}
      <section className="section section-light-blue">
        <h2 className="section-h2 mb-16">Choose the Page That Matches You Best</h2>
        <p className="section-lead mb-48" style={{ maxWidth: '560px' }}>
          Each page goes into more detail about how I can help your specific situation.
        </p>
        <div className="selector-grid">
          <Link href="/who-i-work-with/digital-marketing-agencies" className="selector-card">
            <p className="selector-title">Digital Marketing Agencies</p>
            <p className="selector-body">
              Full SEO, additional capacity, audits, AI visibility, paid advertising, and strategic
              support for suitable client accounts.
            </p>
            <span className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Explore Agency Support</span>
          </Link>
          <Link href="/who-i-work-with/businesses-organizations" className="selector-card">
            <p className="selector-title">Businesses &amp; Organizations</p>
            <p className="selector-body">
              Build your online visibility from the beginning or improve SEO, customer acquisition,
              AI discoverability, ads, and website performance already running.
            </p>
            <span className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Explore Business Support</span>
          </Link>
          <Link href="/who-i-work-with/founders-experts" className="selector-card">
            <p className="selector-title">Founders &amp; Experts</p>
            <p className="selector-body">
              Make your expertise, authority, services, and original knowledge easier for the right
              people to discover and understand.
            </p>
            <span className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Explore Founder &amp; Expert Support</span>
          </Link>
        </div>
      </section>

      {/* Not Sure */}
      <section className="section section-off-white">
        <div className="not-sure">
          <h2>Not Sure Which Option Fits You?</h2>
          <p>
            You do not need to fit perfectly into one category. Send me a short message about your
            business, what is happening today, and what you want to improve.
          </p>
          <p>
            I can tell you whether I can help and what the most suitable starting point may be.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <a href="https://wa.me/919514808885" className="btn btn-white" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
            <Link href="/contact" style={{ color: '#B9C2D6', fontSize: '16px', fontWeight: 500, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>Discuss Your Project</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="final-cta">
        <h2>Tell Me What You Want to Improve</h2>
        <p>Start with the business, the current situation, and the result you are trying to achieve. We can decide the right next step from there.</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link href="/contact" className="btn btn-white">Discuss Your Project</Link>
          <a href="https://wa.me/919514808885" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)' }} target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
        </div>
      </div>
    </>
  );
}
