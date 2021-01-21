import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/react-super-router.js', sourcemap: true, format: 'esm' }
  ],
  plugins: [typescript()]
}
