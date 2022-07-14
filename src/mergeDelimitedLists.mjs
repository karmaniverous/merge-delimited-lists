/**
 * Merges and deduplicates delimited lists.
 *
 * @function mergeDelimitedLists
 * @param {string} delimiter - A string used as a delimiter.
 * @param {...string} lists - Any number of delimited lists.
 * @returns {string} The deduplicated merge of all input lists.
 */
const mergeDelimitedLists = (delimiter, ...lists) =>
  [
    ...new Set(
      lists.reduce((a, list) => [...a, ...list.split(delimiter)], [])
    ).values(),
  ].join(delimiter);

export default mergeDelimitedLists;
