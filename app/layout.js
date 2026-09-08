import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StickyContactDock from '../components/layout/StickyContactDock';

const TITLE = 'SEO Consultant for Agencies & Businesses | Raghav Kanva';
const DESCRIPTION = 'SEO Consultant helping agencies and businesses reach the right customers through Google and AI search, find what is holding them back, and grow their business online.';
const OG_DESCRIPTION = 'Helping agencies and businesses reach the right customers through Google and AI search, improve what is not working, and grow their business online.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: OG_DESCRIPTION,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: OG_DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
