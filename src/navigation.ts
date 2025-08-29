import { type Props as ButtonProps } from '~/components/pa-its/Button.astro';
import { getPermalink } from '~/utils/permalinks';

interface Link {
  text?: string;
  href?: string;
  target?: string;
  ariaLabel?: string;
  icon?: string;
}

export interface MenuLink extends Link {
  links?: Array<MenuLink>;
  actions?: Array<ButtonProps>;
}
export interface FooterLink extends Link {
  links?: Array<FooterLink>;
  secondaryLinks?: Array<FooterLink>;
  socialLinks?: Array<FooterLink>;
}

export const headerData: MenuLink = {
  links: [
    {
      text: 'Startseite',
      href: getPermalink('/'),
    },

    {
      text: 'Unternehmen',
      href: getPermalink('/unternehmen'),
      links: [
        {
          text: 'Über uns',
          href: getPermalink('/unternehmen/ueber-uns'),
        },
        {
          text: 'Das Team',
          href: getPermalink('/unternehmen/mitarbeiter'),
        },
        {
          text: 'Referenzen',
          href: getPermalink('/unternehmen/referenzen'),
        },
      ],
    },
    {
      text: 'Leistungen',
      href: getPermalink('/leistungen'),
      links: [
        {
          text: 'Tiefbau und Pflasterarbeiten',
          href: getPermalink('/leistungen/tiefbau-pflasterarbeiten'),
        },
        {
          text: 'Tankstellenbau',
          href: getPermalink('/leistungen/tankstellenbau'),
        },
        {
          text: 'LAU-Anlagen',
          href: getPermalink('/leistungen/lau-anlagen'),
        },
        {
          text: 'WHG Fugenarbeiten',
          href: getPermalink('/leistungen/whg-fugenarbeiten'),
        },
        {
          text: 'Abbruch- und Rückbauarbeiten',
          href: getPermalink('/leistungen/abbruch-rueckbau'),
        },
      ],
    },
    {
      text: 'Aktuelles',
      href: getPermalink('/aktuelles'),
      links: [
        {
          text: 'Audits & Zertifizierungen',
          href: getPermalink('/aktuelles/audits-zertifizierungen'),
        },
        {
          text: 'Schulungen',
          href: getPermalink('/aktuelles/schulungen'),
        },
        {
          text: 'Firmen-Events',
          href: getPermalink('/aktuelles/firmen-events'),
        },
        {
          text: 'Sponsoring',
          href: getPermalink('/aktuelles/sponsoring'),
        },
      ],
    },
    {
      text: 'Downloads',
      href: getPermalink('/downloads'),
    },
    {
      text: 'Bewerben',
      href: getPermalink('/bewerben'),
    },
  ],
  actions: [{ title: 'Kontakt', href: getPermalink('/contact') }],
};

export const footerData: FooterLink = {
  links: [
    { text: 'About', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Careers', href: '#' },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
};
