// import { provideAll } from '../src/index'
import { provideAll } from '../build/index'

const all = provideAll()

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html'
  ],
  plugins: [
    ...all.allPlugins()
  ],
}

