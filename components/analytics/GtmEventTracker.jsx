'use client';

import { useEffect } from 'react';

/**
 * Delegated click tracking for GTM/GA4.
 *
 * Any element rendered with `data-gtm-event="event_name"` (and optional
 * `data-gtm-params='{"key":"value"}'`) gets its click pushed to
 * window.dataLayer automatically — no per-link 'use client' components
 * needed, so the homepage itself can stay a server component.
 */
const SCROLL_THRESHOLDS = [25, 50, 75, 90];

export default function GtmEventTracker() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    const handleClick = (e) => {
      const target = e.target.closest('[data-gtm-event]');
      if (!target) return;

      let params = {};
      if (target.dataset.gtmParams) {
        try {
          params = JSON.parse(target.dataset.gtmParams);
        } catch {
          params = {};
        }
      }

      window.dataLayer.push({ event: target.dataset.gtmEvent, ...params });
    };

    document.addEventListener('click', handleClick);

    // Scroll-depth milestones, each fired once per page load.
    const fired = new Set();
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;

      for (const threshold of SCROLL_THRESHOLDS) {
        if (pct >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          window.dataLayer.push({ event: 'scroll_depth', scroll_percent: threshold });
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
