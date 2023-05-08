import { test, run } from 'node:test'
import { tap } from 'node:test/reporters';
import process from 'node:process';
import path from 'node:path';

console.log('bbb');
run({timeout:15000, setup: () => {
  console.log('33-4')
}, inspectPort: 123})
.compose(tap)
.pipe(process.stdout);
