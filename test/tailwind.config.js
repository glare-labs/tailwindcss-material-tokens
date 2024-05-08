import {ColorTokens, Color, Elevation, Motion, Shape, Typography} from '../build'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    Color.plugin,
    Elevation.plugin,
    Typography.plugin,
    Shape.plugin,
    Motion.plugin,
  ],
}

