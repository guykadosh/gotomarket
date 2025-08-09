/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E5BB8',
          dark: '#153E75',
          light: '#E5F1FB',
          mid: '#3D8AF7',
          highlight: '#5AB0FF',
        },
        neutral: {
          'off-white': '#F9FAFB',
          'cool-gray': '#6B7280',
          'deep-navy': '#0A1F44',
        },
      },
    },
  },
  plugins: [],
}
