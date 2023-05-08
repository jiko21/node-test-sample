import mocked from './mocked.mjs';
import { mockFn } from './mockfn.mjs';

export const someFunc1 = () => {
  return mocked.fn(1, 2);
};

export const someFunc2 = (ctx) => {
  console.log('execute');
  ctx.logger('aaa');
  console.log('end');
};
