import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      colors: {
        green: '#00C27C',
        icon: '#BFBFBF',
        stroke: '#EFEFEF',
        subtitle: '#959595',
        gray: '#B2B2B2',
        hover_button: '#CCCCCC',
        hover_tag: '#F9F9F9',
        blue: '#0085FF',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
