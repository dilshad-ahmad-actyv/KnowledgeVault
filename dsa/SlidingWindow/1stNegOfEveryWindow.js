// const arr = [12, -1, -7, 8, -15, 30, 16, 28];
// const k = 3;
// // Brute force solution

// let ans = [];

// for (let i = 0; i <= arr.length - k; i++) {
//   let bool = false;
//   for (let j = i; j < i + k; j++) {
//     if (arr[j] < 0) {
//       ans.push(arr[j]);
//       bool = false;
//       break;
//     } else {
//       bool = true;
//     }
//   }
//   if (bool) {
//     ans.push(0);
//   }
// }
// console.log(ans);

// sliding window solution

// const store = [];
// const ans = [];

// let i = 0;
// let j = 0;
// let n = arr.length;
// const k = 3;
// while (j < n) {
//   if (arr[j] < 0) store.push(arr[j]);
//   if (j - i + 1 < k) {
//     j++;
//   } else if (j - i + 1 === k) {
//     if (store.length === 0) {
//       ans.push(0);
//     } else {
//       ans.push(store[0]);
//       if (arr[i] === store[0]) {
//         store.shift();
//       }
//     }
//     i++;
//     j++;
//   }
// }
// console.log(ans);

// First Negative number in each window of size k

// Brute force approach
// const arr = [12, -1, -7, 8, -15, 30, 16, 28];
// const n = arr.length;
// const ans = [];
// const k = 3;

// for (let i = 0; i < n - k + 1; i++) {
//   let bool = false;
//   for (let j = i; j < i + k; j++) {
//     if (arr[j] < 0) {
//       bool = true;
//       ans.push(arr[j]);
//       break;
//     }
//   }
//   if (!bool) {
//     ans.push(0);
//   }
// }

// console.log(ans.join(" "));

// optimized solution : sliding window

const nums = [12, -1, -7, 8, -15, 30, 16, 28];
const n = nums.length;
const k = 3;
const ans = [];
const temp = [];
let i = 0;
let j = 0;

while (j < n) {
  if (nums[j] < 0) {
    temp.push(nums[j]);
  }

  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    if (temp.length > 0) {
      ans.push(temp[0]);

      if (temp[0] === nums[i]) {
        temp.shift();
      }
    } else {
      ans.push(0);
    }

    i++;
    j++;
  }
}

console.log(ans.join(" "));
