// Single source of truth for community contact details.
// Update these values and every form, button and link on the site follows.
export const CONTACT = {
  email: 'info@mpraesocommunity.org',
  phoneDisplay: '+233 24 333 3902',
  whatsappNumber: '233243333902',
};

export function mailtoLink(subject: string, body = '') {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${CONTACT.email}?${params.toString().replace(/\+/g, '%20')}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
