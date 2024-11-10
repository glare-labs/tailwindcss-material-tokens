import { provideBorder, provideColor, provideElevation, provideMotion, provideShape, provideSizing, provideTypography, provideWindowMediaQuery } from '../build'

export const color = provideColor({})
export const elevation = provideElevation()
export const motion = provideMotion()
export const shape = provideShape()
export const typo = provideTypography()
export const border = provideBorder()
export const mq = provideWindowMediaQuery()
export const sizing = provideSizing()

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
  ],
  plugins: [
    color.getPlugin(),
    elevation.getPlugin(),
    motion.getPlugin(),
    shape.getPlugin(),
    typo.getPlugin(),
    border.getPlugin(),
    mq.getPlugin(),
    sizing.getPlugin(),
  ],
}

