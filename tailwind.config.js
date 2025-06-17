module.exports = {
  // content: [
  //   './pages/*.js',
  //   './pages/**/*.js',
  //   './components/*.js',
  //   './components/**/*.js',
  // ],.
  content: [
    './pages/*.js',
    './pages/**/*.js',
    './components/*.js',
    './components/**/*.js',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  safelist: [
    'bg-clip-text',
    'bg-gradient-to-r',
    'from-[#ff0000]',
    'via-[#8000ff]',
    'to-[#0000ff]',
    '!w-full',
    '!pr-4',
    '!py-3',
    '!text-xl',
    '!border',
    '!border-orange-250',
    '!bg-white-500',
    '!text-gray-900',
  ],
  safelist: ['z-[9999]'],
  theme: {
    white: '#ffffff', // Add white explicitly

    fontFamily: {
      PoppinsItalicBold: ['"Poppins"', 'sans-serif'],
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      t: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      orange: '0px 20px 20px -15px rgba(245,56,56,0.81) ',
      'orange-md': '0px 20px 40px -15px rgba(245,56,56,0.81) ',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      black: {
        500: '#4F5665',
        600: '#0B132A',
        300: '#000000',
      },
      orange: {
        100: '#FFECEC',
        500: '#F53855',
        250: '#ff4800',
        600: '#1e87f0',
      },
      green: {
        500: '#2FAB73',
        250: '2E59F6',
      },
      white: {
        300: '#F8F8F8',
        500: '#ffffff',
        100: '#E4E5E8',
        400: '#ebebeb',
      },
      gray: {
        100: '#EEEFF2',
        400: '#AFB5C0',
        500: '#DDDDDD',
      },
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      red: {
        250: '#FF0000',
        500: '#FF0000',
      },
    },

    // extend: {
    //   whitespace: {
    //     'nowrap': 'nowrap',
    //   },
    // },
  },
  options: {
    safelist: [
      'bg-clip-text',
      'text-transparent',
      'bg-gradient-to-r',
      'from-[#ff0000]',
      'via-[#8000ff]',
      'to-[#0000ff]',
    ],
  },
  animation: {
    linspin: 'linspin 1568.2353ms linear infinite',
    easespin: 'easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    'left-spin': 'left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    'right-spin':
      'right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
    rotating: 'rotating 30s linear infinite',
    topbottom: 'topbottom 60s infinite alternate linear',
    bottomtop: 'bottomtop 60s infinite alternate linear',
    'spin-1.5': 'spin 1.5s linear infinite',
    'spin-2': 'spin 2s linear infinite',
    'spin-3': 'spin 3s linear infinite',
    line1: 'line 10s infinite linear',
    line2: 'line-revert 8s infinite linear',
    line3: 'line 7s infinite linear',
    gradientmove: 'gradientMove 5s ease infinite',
  },
  keyframes: {
    linspin: {
      '100%': { transform: 'rotate(360deg)' },
    },
    easespin: {
      '12.5%': { transform: 'rotate(135deg)' },
      '25%': { transform: 'rotate(270deg)' },
      '37.5%': { transform: 'rotate(405deg)' },
      '50%': { transform: 'rotate(540deg)' },
      '62.5%': { transform: 'rotate(675deg)' },
      '75%': { transform: 'rotate(810deg)' },
      '87.5%': { transform: 'rotate(945deg)' },
      '100%': { transform: 'rotate(1080deg)' },
    },
    'left-spin': {
      '0%': { transform: 'rotate(130deg)' },
      '50%': { transform: 'rotate(-5deg)' },
      '100%': { transform: 'rotate(130deg)' },
    },
    'right-spin': {
      '0%': { transform: 'rotate(-130deg)' },
      '50%': { transform: 'rotate(5deg)' },
      '100%': { transform: 'rotate(-130deg)' },
    },
    rotating: {
      '0%, 100%': { transform: 'rotate(360deg)' },
      '50%': { transform: 'rotate(0deg)' },
    },
    topbottom: {
      '0%, 100%': { transform: 'translate3d(0, -100%, 0)' },
      '50%': { transform: 'translate3d(0, 0, 0)' },
    },
    bottomtop: {
      '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
      '50%': { transform: 'translate3d(0, -100%, 0)' },
    },
    line: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(100%)' },
    },
    'line-revert': {
      '0%, 100%': { transform: 'translateY(100%)' },
      '50%': { transform: 'translateY(0)' },
    },
    gradientMove: {
      '0%': {
        backgroundPosition: '200% 0',
      },
      '100%': {
        backgroundPosition: '-200% 0',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active', 'hover'],
      whitespace: {
        nowrap: 'nowrap',
      },
      zIndex: {
        10000: '10000',
      },
    },
  },
  plugins: [],
}
