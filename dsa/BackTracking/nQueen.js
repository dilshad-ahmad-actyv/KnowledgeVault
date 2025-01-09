function printNQueens(chess, qsf, row) {
  if (row === chess.length) {
    console.log(qsf);
    cnt++;
    return;
  }
  for (let col = 0; col < chess.length; col++) {
    if (isQueenSafe(chess, row, col)) {
      chess[row][col] = 1;
      printNQueens(chess, qsf + row + " - " + col + ", ", row + 1, cnt);
      chess[row][col] = 0;
    }
  }
}

const n = 4;
const chess = new Array(n).fill().map(() => new Array(n).fill(0));
let cnt = 0;
printNQueens(chess, "", 0, cnt);
console.log("cnt", cnt);
function isQueenSafe(chess, row, col) {
  for (let i = row; i >= 0; i--) {
    if (chess[i][col] === 1) {
      return false;
    }
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j] === 1) {
      return false;
    }
  }

  for (let i = row, j = col; i >= 0 && j < chess.length; i--, j++) {
    if (chess[i][j] === 1) {
      return false;
    }
  }
  return true;
}
