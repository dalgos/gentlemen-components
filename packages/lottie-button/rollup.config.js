import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

export default {
  input: './lib/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    json(),
    babel({
      exclude: "node_modules/**",
      extensions: [".tsx", ".ts"],
    }),
    commonjs({
      include: 'node_modules/**'
    }),
  ]
}