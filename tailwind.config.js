/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
    theme: {
      extend: {
        colors: {
          'secondary': '#EBFF85',
          'primary': '#DF8197',
          'background': '#FFEED3',
          'background-dark': '#392D42'
          
        },
        boxShadow: {
          'inner': 'inset 0 4px 6px -1px',
        },
        keyframes: {
          wave: {
          to: { 'background-position': '300px 0' },
          },
          wavesm: {
            to: { 'background-position': '225px 0' },
            },
          wavegallery: {
            to: { 'background-position': '400px 0' },
            },
          buoy: {
            '50%': { transform: 'translateY(50px)' },
          },
          grain: {
            '0%, 100%': { 'background-position':'0 0' },
            '10%': { 'background-position':'-13px -26px' },
            '20%': { 'background-position':'-39px 13px' },
            '30%': { 'background-position':'18px -39px' },
            '40%': { 'background-position':'-13px 39px' },
            '50%': { 'background-position':'-39px 16px' },
            '60%': { 'background-position':'39px 0px' },
            '70%': { 'background-position':'0px 20px' },
            '80%': { 'background-position':'10px 91px' },
            '90%': { 'background-position':'-26px 26px' },
          },
          // grain: {
          //   '0%, 100%': { 'background-position':'0 0' },
          //   '10%': { 'background-position':'-5% -10%' },
          //   '20%': { 'background-position':'-15% 5%' },
          //   '30%': { 'background-position':'7% -25%' },
          //   '40%': { 'background-position':'-5% 25%' },
          //   '50%': { 'background-position':'-15% 10%' },
          //   '60%': { 'background-position':'15% 0%' },
          //   '70%': { 'background-position':'0% 15%' },
          //   '80%': { 'background-position':'3% 35%' },
          //   '90%': { 'background-position':'-10% 10%' },
          // },
        },
        animation: {
          'bgmove': 'wave 4.8s linear infinite',
          'bgslow': 'wave 6s linear infinite',
          'bggallery': 'wavegallery 12s linear infinite',
          'boi': 'buoy 4s ease-in-out infinite',
          'bggrain': 'grain 1s steps(1) infinite',
          'bgmovesm': 'wavesm 4.8s linear infinite',
          'bgslowsm': 'wavesm 6s linear infinite',
        },
        screens: {
          'landscapes': {
                    'raw': `only screen and (max-height: 600px) and (orientation: landscape)`
          }
        }
      },
      
      fontFamily: {
        'sans': ['iA Writer Quattro S', 'sans-serif'],
        'serif': ['Sprat Condensed', 'serif']
      },

    },
  plugins: []
}
