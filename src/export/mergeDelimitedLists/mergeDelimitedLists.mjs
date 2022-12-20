import _ from 'lodash';

/**
 * Merges and deduplicates delimited lists.
 *
 * @function mergeDelimitedLists
 *
 * @param {(string|Object)} delimiter - A string or RegExp used as a delimiter.
 * @param {...string} lists - Any number of delimited lists.
 *
 * @returns {string} The deduplicated merge of all input lists.
 */
export const mergeDelimitedLists = (delimiter, ...lists) => {
  if (!_.isString(delimiter) && !_.isRegExp(delimiter))
    throw new Error('delimited must be a string or RegExp');

  return [
    ...new Set(
      lists.reduce(
        (a, list) => (list ? [...a, ...list.split(delimiter)] : a),
        []
      )
    ).values(),
  ].join(delimiter);
};
