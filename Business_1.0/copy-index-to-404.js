import { copyFile } from 'fs/promises';

const from = 'dist/index.html';
const to = 'dist/404.html';

try {
  await copyFile(from, to);
  console.log('✅ 404.html created from index.html');
} catch (err) {
  console.error('❌ Error copying index.html to 404.html:', err);
}
