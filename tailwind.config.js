import defaultTheme from 'tailwindcss/defaultTheme';
import flowbitePlugin from 'flowbite/plugin';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  safelist: [
    {
      pattern: /(bg|text)-(primary|secondary|lime|purple|teal|indigo|amber|green)-(100|800)/,
      variants: [],
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(24deg, var(--tw-gradient-stops))',
      },
      colors: {
        default: 'var(--aw-color-text-default)',
        accent: 'var(--aw-color-accent)',
        muted: 'var(--aw-color-text-muted)',
        primary: {
          // DEFAULT: '#2BA84A',
          DEFAULT: '#016250',
          50: '#A3E7B4',
          100: '#93E3A7',
          200: '#72DB8C',
          300: '#52D372',
          400: '#33C858',
          500: '#2BA84A',
          600: '#207B36',
          700: '#144F23',
          800: '#09220F',
          900: '#000000',
          950: '#000000',
        },
        secondary: {
          // DEFAULT: '#2D3A3A',
          DEFAULT: '#403D3D',
          50: '#819D9D',
          100: '#769494',
          200: '#627F7F',
          300: '#516868',
          400: '#3F5151',
          500: '#2D3A3A',
          600: '#141A1A',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Inter', ...defaultTheme.fontFamily.serif],
        heading: ['"DIN Pro"', 'Arial', 'sans-serif'],
      },

      animation: {
        fade: 'fadeInUp 1s both', 
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    flowbitePlugin(),
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
    
  ],
  darkMode: 'class',
};
