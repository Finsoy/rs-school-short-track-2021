/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortfunction(a, b) {
  return a - b;
}
function sortByHeight(arr) {
  const indexs = [];
  if (arr.includes(-1)) {
    arr.forEach((item, index) => {
      if (item === -1) indexs.push(index);
    });
    arr.forEach((item, index) => {
      if (item === -1) {
        arr.splice(index, 1);
      }
    });
    arr.forEach((item, index) => {
      if (item === -1) {
        arr.splice(index, 1);
      }
    });
    arr.forEach((item, index) => {
      if (item === -1) {
        arr.splice(index, 1);
      }
    });
    arr.sort(sortfunction);
    indexs.forEach((item) => {
      arr.splice(item, 0, -1);
    });
  } else {
    arr.sort(sortfunction);
  }
  return arr;
}

module.exports = sortByHeight;
