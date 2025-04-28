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

// let nums = [3, 0, -1, 5, 8, 7, 2];
// const n = nums.length;

// for (let i = 0; i < n; i++) {
//   let min = i;

//   for (let j = i; j < n; j++) {
//     if (nums[min] < nums[j]) {
//       min = j;
//     }
//   }

//   [nums[min], nums[i]] = [nums[i], nums[min]];
// }

// console.log(nums);

// Insertion sort

// let nums = [3, 0, -1, 5, 8, 7, 2, 4];
// let n = nums.length;

// for (let i = 1; i < n; i++) {
//   let current = nums[i];
//   let j = i - 1;

//   while (j >= 0 && current < nums[j]) {
//     nums[j + 1] = nums[j];
//     j--;
//   }

//   nums[j + 1] = current;
// }

// console.log(nums);

// Merge sort

// const nums = [3, 0, -1, 5, 8, 7, 2, 4, 1];
// const response = mergeSort(nums);
// console.log(response);
// function mergeSort(nums) {
//   if (nums.length <= 1) return nums;

//   let n = nums.length;
//   let mid = Math.floor(nums.length / 2);
//   let first = nums.slice(0, mid);
//   const second = nums.slice(mid, n);

//   const result = merge(mergeSort(first), mergeSort(second));

//   return result;
// }

// function merge(nums1, nums2) {
//   let n1 = nums1.length;
//   let n2 = nums2.length;
//   let i = 0;
//   let j = 0;
//   let ans = [];
//   let k = 0;

//   while (i < n1 && j < n2) {
//     if (nums1[i] < nums2[j]) {
//       ans[k++] = nums1[i];
//       i++;
//     } else {
//       ans[k++] = nums2[j];
//       j++;
//     }
//   }

//   while (i < n1) ans[k++] = nums1[i++];
//   while (j < n2) ans[k++] = nums2[j++];

//   return ans;
// }

const nums = [3, 0, -1, 5, 8, 7, 2, 4, 1];
const low = 0;
const hight = nums.length - 1;
quickSort(nums, low, hight);
console.log(nums);
function quickSort(nums, low, high) {
  if (low < high) {
    const partisionPosition = partision(nums, low, high);
    quickSort(nums, low, partisionPosition);
    quickSort(nums, partisionPosition + 1, high);
  }
}
function partision(nums, low, high) {
  const pivot = nums[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (nums[i] <= pivot) i++;
    while (nums[j] > pivot) j--;
    if (i < j) swap(nums, i, j);
  }
  swap(nums, low, j);
  return j;
}

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}
