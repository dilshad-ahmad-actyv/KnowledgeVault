// let arr = [2, 5, 1, 8, 2, 9, 1];
// let k = 3;
// function maxSumSubArrOfSizeK(arr) {
//   let i = 0;
//   let j = 0;
//   let n = arr.length;
//   let sum = 0;
//   let max = null;

//   while (j < n) {
//     sum += arr[j];
//     if (j - i + 1 < k) {
//       j++;
//     } else if (j - i + 1 === k) {
//       if (max < sum) {
//         max = sum;
//       }
//       sum = sum - arr[i];
//       i++;
//       j++;
//     }
//   }
//   return max;
// }

// const result = maxSumSubArrOfSizeK(arr, k);
// console.log(result);

const nums = [2, 4, 3, 8, 0, -1, 10];
// const k = 3;
// const n = nums.length;
// let max = -Infinity;
// // brute force solution
// for (let i = 0; i < n; i++) {
//   let sum = 0;
//   for (let j = i; j < i + k; j++) {
//     sum += nums[j];
//   }
//   if (max < sum) {
//     max = sum;
//   }
// }

// console.log(max);

// sliding window solution

let i = 0;
let j = 0;
let n = nums.length;
let max = -Infinity;
let sum = 0;
const k = 3;
while (j < n) {
  sum += nums[j];
  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    if (max < sum) {
      max = sum;
    }
    sum -= nums[i];
    i++;
    j++;
  }
}

console.log(max);