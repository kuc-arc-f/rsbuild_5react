import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from "path"
//
export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/entry-client.tsx',
    },
  },
});
/*
  minify: true,
  target: 'web',
  format: 'esm',
  outDir: 'dist',
  outFile: 'bundle.js',
  output: {
    target: 'web',
    format: 'esm',
  },
  distPath: {
    root: 'dist',
  },
  filename: {
    js: `[name].js`,
    css: `[name].css`,
  },
*/