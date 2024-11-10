import typescript from '@rollup/plugin-typescript'

export default ({
  input: './src/index.ts',
  output: [
    {
      file: './build/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
  ],
})
