import { provideBorder, provideColor, provideElevation, provideMotion, provideShape, provideSizing, provideTypography, provideWindowMediaQuery } from '../src/index'

const color = provideColor()
const elevation = provideElevation({})
const motion = provideMotion()
const shape = provideShape()
const typo = provideTypography()
const border = provideBorder({})
const mq = provideWindowMediaQuery()
const width = provideSizing()

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html'
  ],
  plugins: [
    color.getPlugin(),
    elevation.getPlugin(),
    motion.getPlugin(),
    shape.getPlugin(),
    typo.getPlugin(),
    border.getPlugin(),
    mq.getPlugin(),
    width.getPlugin(),
  ],
}

