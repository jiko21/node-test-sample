import {test} from 'node:test';
import assert from 'node:assert/strict';


test('これは通る', () => {
  assert.equal(2 + 2, 4);
});

test('これは落ちる', () => {
  assert.equal(2 + 2, 5);
});

test('これも落ちる', () => {
  throw new Error('sample error');
});
