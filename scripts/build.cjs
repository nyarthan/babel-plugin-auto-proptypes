#!/usr/bin/env node

const { build } = require('esbuild');

build({
  logLevel: 'debug',
  bundle: true,
  entryPoints: [
    'index.ts',
  ],
  outdir: 'lib',
  platform: 'node',
  target: 'node12',
  format: 'cjs',
});
