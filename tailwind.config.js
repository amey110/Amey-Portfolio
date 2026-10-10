/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        card: 'var(--card-bg)',
        // Semantic compatibility
        background: 'var(--bg)',
        'background-secondary': 'var(--bg-alt)',
        foreground: 'var(--text)',
        'foreground-secondary': 'var(--text-muted)',
        primary: 'var(--accent)',
        'primary-hover': 'var(--accent-hover)',
        'border-subtle': 'var(--border)',
      },
      fontSize: {
        'hero': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'hero-md': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        'hero-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '600' }],
        'card-heading': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1.0625rem', { lineHeight: '1.75' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
