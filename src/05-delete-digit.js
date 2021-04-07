/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString().split('');
  const arr = [];
  let max = 0;
  for (let i = 0; i <= str.length; i++) {
    str = n.toString().split('');
    str.splice(i, 1);
    arr.push(Number(str.join('')));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = deleteDigit;
