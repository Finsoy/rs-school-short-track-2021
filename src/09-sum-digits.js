/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = n.toString().split('');
  const arr = Array.from(str).reduce((acc, item) => +item + acc, 0);
  return arr.toString().length === 1 ? arr : getSumOfDigits(arr);
}

module.exports = getSumOfDigits;
