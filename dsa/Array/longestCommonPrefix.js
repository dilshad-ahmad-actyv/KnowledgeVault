/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let current = strs[0];
  let n = strs.length;
  for (let i = 0; i < n - 1; i++) {
    let output = '';
    let temp = strs[i + 1];
    let substrLen = temp.length;
    let j = 0;

    while (substrLen > j) {
      if (temp[j] === current[j]) {
        output += temp[j];
      } else {
        break;
      }
      j++;
    }
    current = output;
  }
  return current;
};

let arr = ['flower', 'flow', 'flight'];
const res = longestCommonPrefix(arr);
console.log(res);
