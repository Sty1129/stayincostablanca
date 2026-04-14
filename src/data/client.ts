/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
 
  name: 'Stay in Costa Blanca',         // Folosit peste tot în site
  email: 'info.stayincostablanca@gmail.com',
  phoneForTel: '34-641-477-523',        // Format tehnic: cifre și cratime
  phoneFormatted: '+34 641 477 523',   // Format afișat pe site
  license: '',                          // Lăsăm gol dacă nu ai un număr de licență specific încă
  address: {
    lineOne: 'Torrevieja - Orihuela Costa',
    lineTwo: 'Alicante',             
    city: 'Torrevieja',
    state: 'Alicante',
    zip: '03181',
    country: 'Spain',
    mapLink: 'https://www.google.com/maps/search/Torrevieja+Orihuela+Costa', 
  },
  socials: {
    facebook:  'https://www.facebook.com/stayincostablanca',   
    instagram: 'https://www.instagram.com/stayincostablanca',  
    google:    '',          
  },
  domain: 'https://stayincostablanca.com',

} as const;

export type Client = typeof client;
