/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Manrope"', '"Inter"', 'sans-serif'],
      },
      colors: {
        'background': '#FFFFFF',
        'background-secondary': '#F8FAFC',
        'foreground': '#0F172A',
        'foreground-secondary': '#475569',
        'primary': '#2563EB',
        'primary-hover': '#1D4ED8',
        'border-subtle': '#E2E8F0',
        'success': '#10B981',
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '800' }],
        'hero-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' }],
        'hero-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
        'section': ['2.625rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'card-heading': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['1.125rem', { lineHeight: '1.75' }],
        'body-sm': ['1rem', { lineHeight: '1.7' }],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        'card-hover': '0 20px 40px -12px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.03)',
        'nav': '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.03)',
        'button': '0 1px 2px rgba(0,0,0,0.05)',
        'button-hover': '0 4px 12px rgba(37,99,235,0.15)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
