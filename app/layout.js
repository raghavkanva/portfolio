import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StickyContactDock from '../components/layout/StickyContactDock';

const SITE_URL = 'https://raghavkanva.com/';
const TITLE = 'SEO Consultant for Agencies & Businesses | Raghav Kanva';
const DESCRIPTION = 'SEO Consultant helping agencies and businesses reach the right customers through Google and AI search, find what is holding them back, and grow their business online.';
const OG_DESCRIPTION = 'Helping agencies and businesses reach the right customers through Google and AI search, improve what is not working, and grow their business online.';
const PROFILE_IMAGE_URL = `${SITE_URL}images/raghav-kanva.jpg`;

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
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={PROFILE_IMAGE_URL} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main className="page-wrapper">{children}</main>
        <Footer />
        <StickyContactDock />
      </body>
    </html>
  );
}
