import { run } from 'node:test'
import { tap } from 'node:test/reporters';
import process from 'node:process';
import path from 'node:path';

run({timeout:5000})
  .compose(tap)
  .pipe(process.stdout);
