import {describe, test, mock, beforeEach, after, afterEach} from 'node:test';
import assert from 'node:assert/strict';
import { someFunc1, someFunc2 } from './mock.mjs';
import { mockFn } from './mockfn.mjs';
import mocked from './mocked.mjs';

describe('mock sample', () => {
  test('mock already existing object method', () => {
    mock.method(mocked, 'fn', () => {
      return 334;
    });
    assert.deepEqual(someFunc1(), 334);
    assert.strictEqual(mocked.fn.mock.calls.length, 1);
  });

  test('use spy functino', () => {
    const ctx = {
      logger: mock.fn((a) => {
        console.log(a);
      }),
    };

    assert.strictEqual(ctx.logger.mock.calls.length, 0);
    someFunc2(ctx);
    assert.strictEqual(ctx.logger.mock.calls.length, 1);
    assert.deepEqual(ctx.logger.mock.calls[0].arguments, ['aaa']);
  });
});
