/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrStr = str.split('');
  const newArr = [...arrStr];
  let count = 0;
  let res = '';
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      newArr.splice(newArr.indexOf(arrStr[i]), 1);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < arrStr.length; j++) {
      if (newArr[i] === arrStr[j]) {
        count++;
        arrStr.splice(j, 1);
        j--;
      } else {
        j = arrStr.length;
      }
    }
    if (count === 1) {
      res += `${newArr[i]}`;
    } else {
      res += `${count}${newArr[i]}`;
    }
    count = 0;
  }
  return res;
}

module.exports = encodeLine;
