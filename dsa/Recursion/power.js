// // function powerLinear(x, n) {
// //   if (n === 0) return 1;
// //   let fnm1 = powerLinear(x, n - 1);
// //   let fn = x * fnm1;
// //   return fn;
// // }

// // const result = powerLinear(2, 4);
// // console.log(result);

// function powerLogarithmic(x, n) {
//   if (n === 0) return 1;
//   let power = Math.floor(n / 2);

//   let xnb2 = powerLogarithmic(x, power);
//   let xn = xnb2 * xnb2;

//   if (n % 2 === 1) {
//     xn = xn * x;
//   }
//   return xn;
// }

// console.log(powerLogarithmic(2, 5));

// function linearPower(x, n) {
//   if (n === 0) return 1;
//   const res = linearPower(x, n - 1);
//   return x * res;
// }

// const x = 2;
// const n = 4;
// const result = linearPower(x, n);
// console.log(result);

function logarithmicPower(x, n) {
  if (n === 1) return x;
  const half = Math.floor(n / 2);
  const xpnb2 = logarithmicPower(x, half);

  let result = xpnb2 * xpnb2;

  if (n % 2 === 1) {
    result *= x;
  }
  return result;
}

const x = 2;
const n = 5;

const result = logarithmicPower(x, n);
console.log(result);
