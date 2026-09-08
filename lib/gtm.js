// Spread onto any clickable element to have GtmEventTracker report it,
// e.g. <a {...gtmAttrs('contact_click', { contact_method: 'call', click_location: 'hero' })}>
export function gtmAttrs(event, params = {}) {
  return {
    'data-gtm-event': event,
    'data-gtm-params': JSON.stringify(params),
  };
}
