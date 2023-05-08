import {describe, test, before, beforeEach, after, afterEach} from 'node:test';
import assert from 'node:assert/strict';

describe('test', async () => {
  before(() => {
    console.log('before');
  })
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  })
  after(() => {
    console.log('after');
  });
  test('これは通る', () => {
    console.log('test1');
    assert.equal(2 + 2, 4);
  });

  test('これは落ちる', () => {
    console.log('test2');
    assert.equal(2 + 2, 5);
  });
});
