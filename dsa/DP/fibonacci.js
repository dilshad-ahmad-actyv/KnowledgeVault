// using recursive method
// function fibonacci(n, memo) {
//   if (n <= 1) return n;

//   if (memo[n] !== -1) {
//     return memo[n];
//   }

//   const fb1 = fibonacci(n - 2, memo);
//   const fb2 = fibonacci(n - 1, memo);
//   const fb = fb1 + fb2;
//   memo[n] = fb;
//   return memo[n];
// }

// const n = 10;
// const memo = new Array(n + 1).fill(-1);
// const answer = fibonacci(n, memo);
// console.log(answer);

// fibonacci with iterative/tabular method

function fibonacci(n, memo) {
  if (n <= 1) return n;
  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 2] + memo[i - 1];
  }
  return memo[n];
}
const n = 10;
const memo = new Array(n + 1).fill(-1);
const ans = fibonacci(n, memo);
console.log(ans)