// let nums = [0, 0, 1, 0, 1, 1, 1, 1, 0, 0];
// let i = 0;
// let j = nums.length - 1;

// while (i < j) {
//   if (nums[i] === 1 && nums[i] !== nums[j]) {
//     swap(nums, i, j);
//     i++;
//     j--;
//   } else if (nums[i] === 1 && nums[j] === 1) {
//     j--;
//   } else if (nums[i] === 0 && nums[j] === 0) {
//     i++;
//   } else {
//     i++;
//     j--;
//   }
// }

// function swap(nums, i, j) {
//   return ([nums[i], nums[j]] = [nums[j], nums[i]]);
// }

// console.log(nums);

let nums = [0, 0, 1, 0, 1, 1, 0, 1, 0, 0];
let n = nums.length;
let i = 0;
let j = n - 1;

while (i <= j) {
  switch (true) {
    case nums[i] === 0 || (nums[i] === 0 && nums[j] === 0):
      i++;
      break;
    case nums[j] === 1 || (nums[i] === 1 && nums[j] === 1):
      j--;
      break;
    default:
      swap(i, j);
      i++;
      j--;
  }
  // if (nums[i] === 0 || (nums[i] === 0 && nums[j] === 0)) {
  //   i++;
  // } else if (nums[j] === 1 || (nums[i] === 1 && nums[j] === 1)) {
  //   j--;
  // } else {
  //   swap(i, j);
  //   i++;
  //   j--;
  // }
}

function swap(i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
console.log(nums);
