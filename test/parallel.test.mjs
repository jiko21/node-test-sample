import {test, describe} from 'node:test';
import assert from 'node:assert/strict';

describe('test',{concurrency: false}, () => {
  test('synchronous passing test1', {concurrency: false}, (t) => {

    console.log('1')
    // This test passes because it does not throw an exception.
    console.log('OK1')
    assert.equal(1, 1);
  });

  test('synchronous passing test2', {concurrency: false}, (t) => {
    console.log('2')
    // This test passes because it does not throw an exception.
    console.log('OK2')
    assert.equal(1, 2);
  });
});
