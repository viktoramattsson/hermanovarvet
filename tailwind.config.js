/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans)'],
        londrina: ['var(--font-londrina-solid)'],
      },
      colors: {
        'hv-green': '#bdefa4',
        'hv-yellow': '#fff952',
        'hv-blue': '#99c6ed',
      },
    },
  },
  plugins: [],
};
