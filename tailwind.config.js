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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        'background': '#FAFBFC',
        'foreground': '#111827',
        'primary': '#2563EB',
        'primary-hover': '#1D4ED8',
        'accent-blue': '#2563EB',
        'accent-slate': '#4B5563',
        'accent-muted': '#6B7280',
        'success': '#10B981',
      },
      animation: {
        'aurora': 'aurora 25s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '50% 50%, 50% 50%' },
          '100%': { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
    },
  },
  plugins: [],
}
