import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from "path"
//
export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  output: {
    target: 'node',
    distPath: {
      root: 'dist/server',
    },
    filename: {
      js: `[name].js`,
    },
  },
});
/*
  output: {
    distPath: {
      root: 'public/static',
      js: 'js',
    },
    filename: {
      js: `[name].js`,
      css: `[name].css`,
    },
  },
*/
