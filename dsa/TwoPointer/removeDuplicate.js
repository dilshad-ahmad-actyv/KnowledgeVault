function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1; // Pointer for the position of unique elements

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

const nums = [1, 2, 2, 3];
const result = removeDuplicates(nums);
console.log(nums);
