/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION - Stay in Costa Blanca
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'Stay in Costa Blanca',
  tagline: 'Administrare și Protecție pentru Casa ta din Spania',
  description: 'Servicii de Key Holding, Mentenanță și Protecție Anti-Okupas în Torrevieja și Orihuela Costa. Siguranță maximă pentru proprietatea ta.',
  url: 'https://stayincostablanca.com',
  locale: 'ro_RO', // Am schimbat în română pentru SEO local

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // Nota: Montserrat va fi folosit pentru a suporta corect diacriticele
  fonts: {
    body: 'Montserrat',
    display: 'Montserrat',
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  colors: {
    primary:      '#1e40af',  // Albastru regal (Sapphire)
    primaryLight: '#3b82f6',
    primaryFg:    '#ffffff',

    accent:       '#10b981',  // Verde smarald (Emerald) pentru butoane
    accentFg:     '#ffffff',

    background:   '#ffffff',
    surface:      '#F8FAFC',
    border:       '#E2E8F0',

    text:         '#0F172A',
    textMuted:    '#475569',

    dark:         '#0F172A',
    darkSurface:  '#1E293B',
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm:   '0.375rem',
    md:   '0.625rem',
    lg:   '1rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;
