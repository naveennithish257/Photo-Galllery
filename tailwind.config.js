/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // iOS / Apple system colors
        'ios-blue':    '#007AFF',
        'ios-blue-d':  '#0063D1',
        'ios-red':     '#FF3B30',
        'ios-green':   '#34C759',
        'ios-orange':  '#FF9500',
        'ios-yellow':  '#FFCC00',
        'ios-teal':    '#5AC8FA',
        'ios-gray-1':  '#8E8E93',
        'ios-gray-2':  '#AEAEB2',
        'ios-gray-3':  '#C7C7CC',
        'ios-gray-4':  '#D1D1D6',
        'ios-gray-5':  '#E5E5EA',
        'ios-gray-6':  '#F2F2F7',
        'ios-sep':     'rgba(60,60,67,0.12)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'ios-lg-title': ['34px', { lineHeight: '41px', fontWeight: '700', letterSpacing: '-0.5px' }],
        'ios-title-1':  ['28px', { lineHeight: '34px', fontWeight: '700', letterSpacing: '-0.3px' }],
        'ios-title-2':  ['22px', { lineHeight: '28px', fontWeight: '700', letterSpacing: '-0.2px' }],
        'ios-title-3':  ['20px', { lineHeight: '25px', fontWeight: '600' }],
        'ios-headline': ['17px', { lineHeight: '22px', fontWeight: '600' }],
        'ios-body':     ['17px', { lineHeight: '22px', fontWeight: '400' }],
        'ios-callout':  ['16px', { lineHeight: '21px', fontWeight: '400' }],
        'ios-sub':      ['15px', { lineHeight: '20px', fontWeight: '400' }],
        'ios-foot':     ['13px', { lineHeight: '18px', fontWeight: '400' }],
        'ios-cap1':     ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'ios-cap2':     ['11px', { lineHeight: '13px', fontWeight: '400' }],
      },
      backdropBlur: {
        'ios': '20px',
      },
      boxShadow: {
        'ios-card': '0 2px 12px rgba(0,0,0,0.08)',
        'ios-modal': '0 8px 40px rgba(0,0,0,0.16)',
        'ios-btn': '0 1px 3px rgba(0,122,255,0.3)',
      },
      borderRadius: {
        'ios': '10px',
        'ios-lg': '16px',
        'ios-xl': '20px',
        'ios-2xl': '28px',
      },
    },
  },
  plugins: [],
}
