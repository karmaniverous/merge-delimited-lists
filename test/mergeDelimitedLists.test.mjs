/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { mergeDelimitedLists } from '../src/index.mjs';

const list0 = 'a b c';
const list1 = 'b c d';
const list2 = 'c d e';

describe('mergeDelimitedLists', () => {
  it('works', () => {
    const output = mergeDelimitedLists(' ', list0, list1, list2);

    output.should.equal('a b c d e');
  });

  it('handles an undefined list', () => {
    const output = mergeDelimitedLists(' ', list0, undefined, list2);

    output.should.equal('a b c d e');
  });
});
