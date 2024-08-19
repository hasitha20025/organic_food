import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Green - bg-green-500
        primaryHover: '#388E3C', // Green - bg-green-600
        heading: '#2E7D32', // Dark Green - text-green-800
        headingStrong: '#1B5E20', // Dark Green - text-green-900

        secondary: '#8B5A2B', // Brown - bg-yellow-700
        secondaryText: '#795548', // Brown - text-yellow-800
        secondaryBorder: '#6D4C41', // Brown - border-yellow-600

        background: '#F5F5DC', // Light Beige - bg-yellow-50
        bodyText: '#616161', // Soft Gray for body text (adjusted for contrast)

        accent: '#FFEB3B', // Soft Yellow - bg-yellow-400
        accentText: '#FFC107', // Soft Yellow - text-yellow-500
        accentBorder: '#FFB300', // Soft Yellow - border-yellow-500
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
export default config;

/*
Green (Primary):

primary: #4CAF50 (equivalent to bg-green-500)
primaryHover: #388E3C (equivalent to bg-green-600)
heading: #2E7D32 (equivalent to text-green-800)
headingStrong: #1B5E20 (equivalent to text-green-900)

Brown (Secondary):

secondary: #8B5A2B (equivalent to bg-yellow-700)
secondaryText: #795548 (equivalent to text-yellow-800)
secondaryBorder: #6D4C41 (equivalent to border-yellow-600)

Light Beige (Background):

background: #F5F5DC (equivalent to bg-yellow-50)
bodyText: #616161 (a complementary soft gray for body text, not in the original list but adjusted for contrast)

Soft Yellow (Accent):

accent: #FFEB3B (equivalent to bg-yellow-400)
accentText: #FFC107 (equivalent to text-yellow-500)
accentBorder: #FFB300 (equivalent to border-yellow-500)

Usage Example:

Use bg-organic-primary for buttons.
Use hover:bg-organic-primaryHover for button hover states.
Use text-organic-heading for headings.
Use bg-organic-background for page backgrounds.
Use text-organic-accentText for accent text or links.
 */
