import {ColorTokens, ElevationTokens, ShapeTokens, TypographyTokens} from '../build'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ...ColorTokens.FullTokens,
    ...ElevationTokens.FullTokens,
    ...TypographyTokens.FullTokens,
    ...ShapeTokens.FullTokens,
  ],
}

