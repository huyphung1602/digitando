// tailwind.config.ts
import { defineConfig } from 'vite-plugin-windicss'
import formsPlugin from 'windicss/plugin/forms'
import lineClampPlugin from 'windicss/plugin/line-clamp'
import colors from 'windicss/colors'

export default defineConfig({
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      bumble: {
        100: '#fed049',
        200: '#ffc93c',
        300: '#e48900',
      },
      'dark-bumble': '#282846',
      pale: '#d8ebe4',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [formsPlugin, lineClampPlugin],
})
