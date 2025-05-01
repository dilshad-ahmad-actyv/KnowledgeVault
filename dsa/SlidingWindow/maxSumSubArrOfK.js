// Maximum sum subarray of size k

// Brute force

// const nums = [2, 5, 1, 8, 2, 9, 1];
// const n = 7;
// const k = 3;
// const storage = [];
// let max = -Infinity;

// for (let i = 0; i < n - k + 1; i++) {
//   let sum = 0;
//   for (let j = i; j < i + k; j++) {
//     sum += nums[j];
//   }
//   storage.push(sum);
//   if (max < sum) {
//     max = sum;
//   }
// }
// console.log(max);

// optimized solution: sliding window

const nums = [2, 5, 1, 8, 2, 9, 1];
const n = 7;
const k = 3;
let i = 0;
let j = 0;
let sum = 0;
let max = -Infinity;
const storage = [];
while (j < n) {
  sum += nums[j];

  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    if (max < sum) {
      max = sum;
    }
    storage.push(sum);
    sum -= nums[i];
    i++;
    j++;
  }
}
// console.log(max);
console.log(storage);
