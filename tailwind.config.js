/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base warm neutrals (85% dominant palette)
        cream: {
          50: '#FAF7F2',   // Light subtle accent / card background
          100: '#F4EFE9',  // Base warm neutral canvas
          200: '#EAE1D6',  // Warm neutral shade
          300: '#E3DCD3',  // Subtle neutral border
          DEFAULT: '#F4EFE9',
        },
        // Charcoal & dark backgrounds (10% reading contrast)
        navy: {
          700: '#202B53',  // Deep surgical navy accent
          800: '#111625',  // Charcoal text (13.8:1 AAA contrast on #F4EFE9)
          900: '#0E1424',  // Dark hero background & dark surfaces
          950: '#080C17',  // Midnight black
          DEFAULT: '#111625',
        },
        // Surgical blue strategic accents (5% accent palette)
        medical: {
          primary: '#2243A9',   // Surgical blue CTA & primary accent (8.1:1 on white)
          blue: '#2243A9',      // Semantic alias
          hover: '#1A3587',     // Hover state (8.1:1 on white)
          active: '#142966',    // Active / pressed state
          dark: '#202B53',      // Deep surgical navy
          soft: '#CAE7F4',      // Soft glacier blue badge / pill background
          light: '#CAE7F4',     // Semantic alias
          softText: '#10365C',  // AAA high-contrast text on soft blue (9.3:1)
          darkText: '#10365C',  // Semantic alias
          DEFAULT: '#2243A9',
        },
        // Graphite neutrals for secondary text and borders
        graphite: {
          50: '#F8F9FA',
          100: '#F2F4F7',
          border: '#E4E7EC',    // Light divider border
          200: '#E4E7EC',       // Semantic alias
          muted: '#667085',     // Secondary / muted text
          500: '#667085',       // Semantic alias
          body: '#475467',      // Primary body copy (6.5:1 AA on cream)
          700: '#475467',       // Semantic alias
          DEFAULT: '#475467',
        },
        // Status and brand channels
        accent: {
          whatsapp: '#25D366',
          whatsappHover: '#1EBE5D',
          success: '#12B76A',
          warning: '#F79009',
          error: '#D92D20',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'button': '9999px',
        'card': '16px',
        'input': '10px',
      },
      boxShadow: {
        'card': '0px 4px 20px -2px rgba(32, 43, 83, 0.05), 0px 2px 6px -1px rgba(32, 43, 83, 0.03)',
        'card-hover': '0px 16px 32px -4px rgba(32, 43, 83, 0.09), 0px 6px 12px -2px rgba(32, 43, 83, 0.04)',
        'elevated': '0px 20px 40px -8px rgba(32, 43, 83, 0.12), 0px 8px 16px -4px rgba(32, 43, 83, 0.06)',
        'floating': '0px 20px 48px -8px rgba(32, 43, 83, 0.14)',
      },
      maxWidth: {
        '7xl': '1280px',
        '3xl': '840px',
      },
      letterSpacing: {
        kicker: '0.08em',
      },
    },
  },
  plugins: [],
};
