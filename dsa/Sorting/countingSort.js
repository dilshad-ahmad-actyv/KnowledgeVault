// // let nums = [1, 2, 0, 0, 2, 0, 1];

// // let numCounts = {};
// // let i = 0;
// // let n = nums.length;
// // let ans = [];
// // while (i < n) {
// //   if (numCounts[nums[i]] === undefined) {
// //     numCounts[nums[i]] = 1;
// //   } else {
// //     numCounts[nums[i]]++;
// //   }
// //   i++;
// // }

// // for (let k in numCounts) {
// //   if (k === "0") {
// //     pushValue(numCounts[k], 0);
// //   } else if (k === "1") {
// //     pushValue(numCounts[k], 1);
// //   } else {
// //     pushValue(numCounts[k], 2);
// //   }
// // }

// // console.log(ans);

// // function pushValue(count, num) {
// //   while (count > 0) {
// //     ans.push(num);
// //     count--;
// //   }
// // }

// function countingSort(nums) {
//   console.log({ nums });
//   let count = Array.from({ length: 3 }, () => 0); // Count array to store frequency of elements
//   console.log({ count });
//   // Count the frequency of each element
//   for (let num of nums) {
//     count[num]++;
//   }

//   // Reconstruct the sorted array using counts
//   let index = 0;
//   for (let i = 0; i < count.length; i++) {
//     while (count[i] > 0) {
//       nums[index++] = i;
//       count[i]--;
//     }
//   }

//   return nums;
// }

// let nums = [1, 2, 0, 0, 0, 2, 1, 1];
// let sortedArray = countingSort(nums);

// console.log(sortedArray); // Output: [0, 0, 1, 1, 2, 2]

// const nums = [2, 0, 1, 2, 1, 0, 2, 1, 1, 0, 0];

// const count = Array.from({ length: 3 }, () => 0);

// for (num of nums) {
//   count[num]++;
// }
// let index = 0;
// for (let i = 0; i < count.length; i++) {
//   while (count[i] > 0) {
//     nums[index++] = i;
//     count[i]--;
//   }
// }

// console.log(nums);

function countingSortAlgo(nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  const count = new Array(max - min + 1).fill(0);

  for (let num of nums) {
    count[num - min]++;
  }

  let index = 0;
  for (let value = min; value <= max; value++) {
    while (count[value - min] > 0) {
      nums[index++] = value;
      count[value - min]--;
    }
  }
  return nums;
}
const nums = [2, 2, 3, 2, 3, 5, 5, 5, 8, 8];
const sortedArray = countingSortAlgo(nums);
console.log(sortedArray);
