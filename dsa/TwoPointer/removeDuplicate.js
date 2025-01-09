/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let n = nums.length;
  let count = 0;
  let i = 0;
  while (i < n) {
    let j = i + 1;
    let bool = false;
    while (nums[i] === nums[j] && j < n) {
      j++;
      bool = true;
    }

    if (bool) {
      nums[count] = nums[i];
      i = j;
      count++;
    } else {
      nums[count] = nums[i];
      count++;
      i++;
    }
  }
  console.log(nums);
  return count;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums);
console.log(result);
