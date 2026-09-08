import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StickyContactDock from '../components/layout/StickyContactDock';
import GtmEventTracker from '../components/analytics/GtmEventTracker';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = 'https://www.raghavkanva.com/';
const TITLE = 'SEO Consultant for Agencies & Businesses | Raghav Kanva';
const DESCRIPTION = 'SEO Consultant helping agencies and businesses reach the right customers through Google and AI search, find what is holding them back, and grow their business online.';
const OG_DESCRIPTION = 'Helping agencies and businesses reach the right customers through Google and AI search, improve what is not working, and grow their business online.';
const PROFILE_IMAGE_URL = `${SITE_URL}images/raghav-kanva.jpg`;
const GTM_ID = 'GTM-PCSZXXF8';

// Canonical + Open Graph tags are written directly below rather than
// through metadata.alternates/openGraph: Next.js (a) normalizes a root
// canonical/og:url to drop the trailing slash the brief requires, and
// (b) auto-synthesizes twitter:* tags from openGraph with no way to opt
// out, and Twitter/X metadata was explicitly requested off.
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager — beforeInteractive keeps it in the initial
            HTML <head>, ahead of hydration, matching GTM's own install
            instructions ("as high in <head> as possible"). */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={PROFILE_IMAGE_URL} />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <GtmEventTracker />
        <Navbar />
        <main className="page-wrapper">{children}</main>
        <Footer />
        <StickyContactDock />
      </body>
    </html>
  );
}
