const arr = [12, -1, -7, 8, -15, 30, 16, 28];
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

const store = [];
const ans = [];

let i = 0;
let j = 0;
let n = arr.length;
const k = 3;
while (j < n) {
  if (arr[j] < 0) store.push(arr[j]);
  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    if (store.length === 0) {
      ans.push(0);
    } else {
      ans.push(store[0]);
      if (arr[i] === store[0]) {
        store.shift();
      }
    }
    i++;
    j++;
  }
}
console.log(ans);