#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.join(path.dirname(__filename), '..');
const assetDir = path.join(projectRoot, 'dist/assets');
const distDir = path.join(projectRoot, 'dist');

// Check if the assets directory exists
if (!fs.existsSync(assetDir)) {
  console.error(`Assets directory not found: ${assetDir}`);
  console.error('Build output structure: CSR build uses dist/assets instead of dist/client/assets');
  process.exit(0);
}

// Find the main JS file (largest one, typically the entry point)
const jsFiles = fs.readdirSync(assetDir)
  .filter(f => f.endsWith('.js'))
  .map(f => ({ name: f, size: fs.statSync(path.join(assetDir, f)).size }))
  .sort((a, b) => b.size - a.size);

const cssFile = fs.readdirSync(assetDir).find(f => f.endsWith('.css'));
const jsFile = jsFiles.find(f => f.name.match(/^index-.+\.js$/))?.name || jsFiles[0]?.name;

if (!jsFile) {
  console.error('Could not find JS entry point in', assetDir);
  process.exit(1);
}

if (!cssFile) {
  console.warn('Warning: No CSS file found in assets directory');
}

console.log(`Using JS: ${jsFile}, CSS: ${cssFile}`);

// Generate HTML
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vorqard — Your Digital Health Identity Platform</title>
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"><\/script>
  </body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), html);
console.log('✓ Generated dist/index.html');
