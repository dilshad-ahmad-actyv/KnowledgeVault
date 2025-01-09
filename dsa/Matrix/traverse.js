const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

traverseMatrix(matrix);

function traverseMatrix(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      console.log(matrix[i][j]);
    }
  }
}
