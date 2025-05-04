const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function printStartToEnd(matrix) {
  const rLen = matrix.length;
  const cLen = matrix[0].length;
  let ans = [];

  for (let i = 0; i < rLen; i++) {
    if (i % 2 === 0) {
      directPrint(i, cLen, ans, matrix);
    } else {
      reversePrint(i, cLen, ans, matrix);
    }
  }
  return ans.join(" ");
}

const result = printStartToEnd(matrix);
console.log(result);

function directPrint(row, cLen, ans, matrix) {
  for (let col = 0; col < cLen; col++) {
    ans.push(matrix[row][col]);
  }
  //   console.log(ans);
}
function reversePrint(row, cLen, ans, matrix) {
  for (let col = cLen - 1; col >= 0; col--) {
    ans.push(matrix[row][col]);
  }
  //   console.log(ans);
}
