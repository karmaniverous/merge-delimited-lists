/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { mergeDelimitedLists } from '../src/index.mjs';

describe('mergeDelimitedLists', () => {
  it('works', () => {
    const list0 = 'a b c';
    const list1 = 'b c d';
    const list2 = 'c d e';

    const output = mergeDelimitedLists(' ', list0, list1, list2);

    output.should.equal('a b c d e');
  });
});
