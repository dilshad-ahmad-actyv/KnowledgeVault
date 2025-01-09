let n = 5;
let mid = Math.floor(n / 2);
for (let i = 0; i < n; i++) {
  let pattern = "";
  for (let j = 0; j < n; j++) {
    let isCenter =
      (n % 2 === 1 && i === mid && j === mid) ||
      (n % 2 === 0 &&
        ((i === mid && j === mid) ||
          (i === mid && j === mid - 1) ||
          (i === mid - 1 && j === mid) ||
          (i === mid - 1 && j === mid - 1)));
    if (isCenter) {
      pattern += "   ";
    } else {
      pattern += " * ";
    }
  }
  console.log(pattern);
}
