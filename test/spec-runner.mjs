import { run } from 'node:test';
import process from 'node:process';
import path from 'path';

run({ files: [path.resolve('./simple.test.mjs'), path.resolve('./parallel.test.mjs')], concurrency: true })
  .pipe(process.stdout);
