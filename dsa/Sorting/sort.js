// let nums = ["3", "0", "-1", "5", "8", "7"];

// nums = nums.map((val) => Number(val)).sort((a, b) => b - a);

// console.log(nums);

// Bubble sort alog

// let nums = [3, 0, -1, 5, 8, 7];
// const n = nums.length;

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     if (nums[j] < nums[j + 1]) {
//       let temp = nums[j];
//       nums[j] = nums[j + 1];
//       nums[j + 1] = temp;
//     }
//   }
// }
// console.log(nums);

// Selection Sort

let nums = [3, 0, -1, 5, 8, 7, 2];
const n = nums.length;

for (let i = 0; i < n; i++) {
  let min = i;

  for (let j = i; j < n; j++) {
    if (nums[min] < nums[j]) {
      min = j;
    }
  }

  [nums[min], nums[i]] = [nums[i], nums[min]];
}

console.log(nums);
