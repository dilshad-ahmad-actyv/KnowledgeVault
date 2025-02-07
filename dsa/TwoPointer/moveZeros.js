/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  let n = nums.length;

  while (j < n) {
    while (i < j) {
      if (nums[i] === 0) {
        break;
      }
      i++;
    }
    while (j < n) {
      if (nums[j]) {
        break;
      }
      j++;
    }

    if (i < j && j < n) {
      swap(nums, i, j);
    } else {
      i++;
      j++;
    }
  }
  console.log(nums);
};

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}

moveZeroes([1]);
