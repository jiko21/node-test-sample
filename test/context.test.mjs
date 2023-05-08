import {test} from 'node:test';
import assert from 'node:assert/strict';

test('test', async (t) => {
  console.log(t);
  // t.before(() => {
  //   console.log('before');
  // })
  t.beforeEach(() => {
    console.log('beforeEach');
  });
  t.afterEach(() => {
    console.log('afterEach');
  })
  t.after(() => {
    console.log('after');
  });
  await t.test('これは通る', () => {
    console.log('test1');
    assert.equal(2 + 2, 4);
  });

  await t.test('これは落ちる', () => {
    console.log('test2');
    assert.equal(2 + 2, 5);
  });
});
