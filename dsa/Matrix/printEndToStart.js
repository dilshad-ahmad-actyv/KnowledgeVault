const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function printEndToStart(matrix) {
  const rLen = matrix.length;
  const cLen = matrix[0].length;
  const ans = [];

  for (let col = cLen - 1; col >= 0; col--) {
    if (col % 2 == 1) {
      bottomToTopPrint(col, rLen, matrix, ans);
    } else {
      topToBottomPrint(col, rLen, matrix, ans);
    }
  }
  return ans.join(" ");
}

const result = printEndToStart(matrix);
console.log(result);
function bottomToTopPrint(col, rLen, matrix, ans) {
  for (let row = rLen - 1; row >= 0; row--) {
    ans.push(matrix[row][col]);
  }
}
function topToBottomPrint(col, rLen, matrix, ans) {
  for (let row = 0; row < rLen; row++) {
    ans.push(matrix[row][col]);
  }
}
