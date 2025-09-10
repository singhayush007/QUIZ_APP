/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: '#2563EB',          // Blue
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#00B75F',          // Ainstein Green
          foreground: '#FFFFFF'
        },
        accent: {
          DEFAULT: '#FF9D33',          // Sunburst Orange
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#FF6CA1',          // Bubblegum Pink
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': '#2563EB',
          '2': '#00B75F',
          '3': '#FF9D33',
          '4': '#FF6CA1',
          '5': '#999999'
        },
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#D1D5DB',
          dark: '#4B5563'
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
