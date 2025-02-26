// Newton-Raphson method (Babylonian method)
// function sqrt(n, precision = 0.00001) {
//   if (n < 0) return NaN;
//   if (n == 0 || n == 1) return n;
//   let x = n;

//   while (Math.abs(x * x - n) > precision) {
//     x = (x + n / x) / 2;
//   }
//   return Math.round(x);
// }

// const n = 25;
// console.log(sqrt(n));

function sqrtBinarySearch(n, precision = 0.00001) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return n;
  let low = 0;
  let high = n;
  let mid = null;

  while (high - low > precision) {
    mid = low + (high - low) / 2;
    if (mid * mid > n) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return Math.round(low);
}

const n = 4;

console.log(sqrtBinarySearch(n));
