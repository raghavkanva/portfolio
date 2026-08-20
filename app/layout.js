import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StickyContactDock from '../components/layout/StickyContactDock';

export const metadata = {
  title: 'Raghav Kanva — Independent SEO & AI Discoverability Consultant',
  description: 'I help businesses improve how the right customers find, understand, and choose them online through SEO, AI visibility, paid advertising, content, and landing pages.',
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
