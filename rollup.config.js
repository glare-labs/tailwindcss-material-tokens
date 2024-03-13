import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './build/index.cjs.js',
      format: 'cjs',
    },
    {
      file: './build/index.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    commonjs(), 
    typescript({tsconfig: './tsconfig.json'})
  ],
};
