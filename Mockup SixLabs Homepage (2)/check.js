import { readFileSync } from 'fs';
import { parse } from '@babel/parser';

const code = readFileSync('src/app/components/Homepage.tsx', 'utf-8');
try {
  parse(code, { sourceType: 'module', plugins: ['jsx', 'typescript'] });
  console.log('Homepage parses successfully');
} catch (e) {
  console.error('Homepage error:', e);
}
