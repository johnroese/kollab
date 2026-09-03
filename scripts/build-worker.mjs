import { promises as fs } from 'node:fs';
import path from 'node:path';

const distDirectory = path.resolve('dist');
const serverDirectory = path.join(distDirectory, 'server');
const outputFile = path.join(serverDirectory, 'index.js');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const collectFiles = async (directory, prefix = '') => {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (prefix === '' && (entry.name === 'server' || entry.name === '.openai')) continue;
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.posix.join(prefix, entry.name);

    if (entry.isDirectory()) files.push(...await collectFiles(absolutePath, relativePath));
    else files.push({ absolutePath, relativePath });
  }

  return files;
};

const files = {};
for (const file of await collectFiles(distDirectory)) {
  const extension = path.extname(file.relativePath).toLowerCase();
  const content = await fs.readFile(file.absolutePath);
  files[file.relativePath] = {
    type: contentTypes[extension] ?? 'application/octet-stream',
    body: content.toString('base64'),
  };
}

const worker = `const files = ${JSON.stringify(files)};
const decode = (value) => Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-Frame-Options': 'DENY'
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let fileName = decodeURIComponent(url.pathname).replace(/^\\/+/, '') || 'index.html';
    let file = files[fileName];

    if (!file && request.method === 'GET' && (request.headers.get('accept') || '').includes('text/html')) {
      fileName = 'index.html';
      file = files[fileName];
    }

    if (!file || (request.method !== 'GET' && request.method !== 'HEAD')) {
      return new Response('Not found', { status: 404, headers: securityHeaders });
    }

    const headers = new Headers(securityHeaders);
    headers.set('Content-Type', file.type);
    headers.set('Cache-Control', fileName === 'index.html' ? 'no-cache' : 'public, max-age=31536000, immutable');
    return new Response(request.method === 'HEAD' ? null : decode(file.body), { status: 200, headers });
  }
};
`;

await fs.mkdir(serverDirectory, { recursive: true });
await fs.writeFile(outputFile, worker);
console.log(`Worker generated with ${Object.keys(files).length} static files.`);
