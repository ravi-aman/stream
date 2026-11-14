/**
 * About-the-dev configuration for the landing page.
 * Single source of truth — edit here to update the landing page.
 */

export interface DevInfo {
  name: string;
  tagline: string;
  blurb: string;
  /** The portfolio URL we want to drive clicks/backlinks to. */
  portfolioUrl: string;
  socials: { label: string; url: string }[];
}

export const DEV_INFO: DevInfo = {
  name: 'Ravikant Tiwari',
  tagline: 'Independent developer — I build fast, privacy-first web tools.',
  blurb:
    "Hi, I'm Ravikant. Stream is a side project: a clean take on sending files directly between devices, without handing them to anyone's cloud. Everything is encrypted in your browser and streamed peer-to-peer.",
  portfolioUrl: 'https://ravikanttiwari.in/',
  socials: [{ label: 'GitHub', url: 'https://github.com/ravi-aman' }],
};
