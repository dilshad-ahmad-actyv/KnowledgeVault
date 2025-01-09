function specificDiagonals(R, C, matrix, K) {
  let bool = false;
  parent: for (let i = 0; i < R; i++) {
    child: for (let j = 0; j < C; j++) {
      if (matrix[i][j] === K) {
        findKthPosition(i, j, R, C, matrix);
        bool = true;
        break child;
      }
    }
    if (bool) break parent;
  }
}

function findKthPosition(r, c, R, C, matrix) {
  console.log(r, c, "first");
  let d2 = [];
  let rX = r;
  let cX = c;
  // console.log(r,c, matrix[r][c])
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      let indx = rX + cX;
      if (indx === i + j) {
        d2.push(matrix[i][j]);
      }
    }
  }
  let d1 = [];
  let uPr = r;
  let uPc = c;
  while (true) {
    if (uPc < 0 || uPr < 0) break;
    d1.push(matrix[uPr][uPc]);
    uPr--;
    uPc--;
  }

  let dNr = r;
  let dNc = c;
  while (true) {
    dNr++;
    dNc++;
    if (dNc > C - 1 || dNr > R - 1) break;
    d1.push(matrix[dNr][dNc]);
  }
  console.log(d1.join(" "));
  console.log(d2.join(" "));
}

const R = 10;
const C = 7;
const K = 5;
const matrix = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42],
  [43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63],
  [64, 65, 66, 67, 68, 69, 70],
];

specificDiagonals(R, C, matrix, K);
