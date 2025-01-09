/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let count = 0;
  let n = nums.length;
  while (i < n) {
    let j = i;
    let bool = false;
    if (nums[j] === val) {
      j++;
      bool = true;
    } else {
      nums[count] = nums[i];
      count++;
      i++;
    }
    if (bool) {
      i = j;
    }
  }
  console.log(count);
  console.log(nums);
  return nums;
};

removeElement([3, 5, 2, 2, 1, 3], 3);
