/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to edit when adapting the theme for a new client.
 *
 * Colors flow into  → src/styles/theme.css  (CSS custom properties)
 * Fonts flow into   → astro.config.mjs      (Astro 6 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Color format: use hex (#1a1a2e) or CSS color values.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  name: 'Stay in Costa Blanca',
  tagline: 'Administrare și Protecție pentru Casa ta din Spania',
  description: 'Servicii de Key Holding, Mentenanță și Protecție Anti-Okupas în Torrevieja și Orihuela Costa. Siguranță maximă pentru proprietatea ta.',
  url: 'https://stayincostablanca.com',  

  fonts: {
    body: 'Montserrat',    // Schimbat din Inter în Montserrat pentru diacritice
    display: 'Montserrat', // Schimbat din Oswald în Montserrat pentru consistență
  },

  colors: {
    primary:    '#1e40af',  // Un albastru regal (Sapphire Blue) - serios și de încredere
    primaryFg:  '#ffffff',  
    accent:     '#10b981',  // Un verde smarald (Emerald Green) pentru butoanele de acțiune
    // Poți lăsa restul culorilor așa cum sunt în fișier
  },
};
