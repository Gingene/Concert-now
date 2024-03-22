const animate = require('tailwindcss-animate');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],

  content: ['./views/**/*.{js,jsx,vue}', './components/**/*.{js,jsx,vue}', './app/**/*.{js,jsx,vue}', './src/**/*.{js,jsx,vue}'],

  theme: {
    container: {
      center: true,
      padding: '0.75rem',
    },
    screens: {
      xs: '480px', // 自定義
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
      display: ['var(--font-display)'],
      // body: ['var(--font-body)'],
      // heading: ['var(--font-heading)'],
    },
    fontSize: {
      tiny: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'display-3': '7.5rem',
      'display-2': '15rem',
      'display-1': '20rem',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'black-100': 'var(--black-100)',
        'black-90': 'var(--black-90)',
        'black-85': 'var(--black-85)',
        'black-80': 'var(--black-80)',
        'black-60': 'var(--black-60)',
        'black-40': 'var(--black-40)',
        'black-20': 'var(--black-20)',
        tiffany: 'var(--tiffany)',
        pink: 'var(--pink)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      lineHeight: {
        display: 1.2,
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        'right-to-left': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'col-span-1-to-4':{
          '0%': { 
            width: 'calc((100%/6)*1)',
            opacity: 0.5,
            filter: 'var(--tw-brightness) var(--tw-grayscale)',
          },
          '100%': { 
            width: 'calc((100%/9)*4)',
            opacity: 1,
            filter: 'brightness(90%) grayscale(0%)',
          },
        },
        'col-span-4-to-1':{
          '0%': { 
            width: 'calc((100%/9)*4)',
            opacity: 1,
            filter: 'brightness(90%) grayscale(0%)',
          },
          '100%': { 
            width: 'calc((100%/6)*1)',
            opacity: 0.5,
            filter: 'var(--tw-brightness) var(--tw-grayscale)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
        'col-span-1-to-4': 'col-span-1-to-4 1s ease-in-out forwards',
        'col-span-4-to-1': 'col-span-4-to-1 1s ease-in-out',
      },
    },
  },
  plugins: [animate, plugin(function ({ addBase, theme, addComponents, addUtilities }) {})],
};
