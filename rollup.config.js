import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './build/index.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript({tsconfig: './tsconfig.json'}),
    terser(),
  ],
};
