// const arr = [1, 3, 4, 6, 7, 10, 20, 23, 34, 40, 42, 45, 50];
// const k = 1000;

// // iterative method
// // function findIndexOfK(arr, k) {
// //   let l = 0;
// //   let n = arr.length;
// //   let h = n - 1;
// //   while (l <= h) {
// //     let mid = Math.floor((l + h) / 2);
// //     if (k === arr[mid]) {
// //       return mid;
// //     }

// //     if (k < arr[mid]) {
// //       h = mid - 1;
// //     } else {
// //       l = mid + 1;
// //     }
// //   }
// //   return -1;
// // }

// // const result = findIndexOfK(arr, k);
// // console.log(result);

// // recursive method

// function RfindIndexOfK(arr, k) {
//   let l = 0;
//   let n = arr.length;
//   let h = n - 1;
//   function findIndex(arr, k, l, h) {
//     console.log(k, l, h);
//     if (l === h) {
//       if (arr[l] === k) {
//         return l;
//       } else {
//         return -1;
//       }
//     } else {
//       let mid = Math.floor((l + h) / 2);
//       if (arr[mid] > k) {
//         return findIndex(arr, k, l, mid - 1);
//       } else {
//         return findIndex(arr, k, mid + 1, h);
//       }
//     }
//   }
//   return findIndex(arr, k, l, h);
// }

// const result = RfindIndexOfK(arr, k);
// console.log(result);

function findIndexOfK(l, h, arr, k) {
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] === k) {
      return mid;
    } else {
      if (arr[mid] < k) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
  }
  return -1;
}

const arr = [1, 3, 4, 6, 7, 10, 20, 23, 34, 40, 42, 45, 50];
const k = 20;
const n = arr.length;
let l = 0;
let h = n - 1;
const result = findIndexOfK(l, h, arr, k);
console.log(result);
