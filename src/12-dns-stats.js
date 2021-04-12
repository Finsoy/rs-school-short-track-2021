/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const stack = [];
  let count = 0;
  let res = '';
  let newRes = '';
  const str = domains.toString().split(',');
  const newStr = str.map((item) => item.split('.'));
  const map = newStr.map((item) => item.flat().join('.').split('.').join(''));

  const flatArr = newStr.reverse().flat();
  flatArr.map((item) => {
    if (!stack.includes(item)) {
      stack.push(item);
    }
    return stack;
  });
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack.length === 1) {
      newRes = stack[i];
      res = stack[i];
    }
    if (stack[i] === []) {
      newRes = [];
      res = [];
    }
    if (stack.length !== 1) {
      newRes = stack[i] + newRes;
      res += `.${stack[i]}`;
      for (let j = 0; j < map.length; j++) {
        if (map[j].includes(newRes)) {
          count++;
        }
      }
      obj[res] = count;
      count = 0;
    }
  }
  return obj;
}

module.exports = getDNSStats;
