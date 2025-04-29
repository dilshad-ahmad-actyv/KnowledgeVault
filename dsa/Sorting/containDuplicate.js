// /**
//  * @param {number[]} nums
//  * @param {number} indexDiff
//  * @param {number} valueDiff
//  * @return {boolean}
//  */
// var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
//   const n = nums.length;

//   for (let i = 0; i < n; i++) {
//     let bool = false;
//     for (let j = 0; j < n; j++) {
//       const result = checkCondition(nums, i, j, indexDiff, valueDiff);
//       if (result) {
//         bool = true;
//         break;
//       }
//     }
//     if (bool) {
//       return bool;
//     }
//   }
//   return false;
// };

// function checkCondition(nums, i, j, indexDiff, valueDiff) {
//   const condition1 = i !== j;
//   const condition2 = Math.abs(i - j) <= indexDiff;
//   const condition3 = Math.abs(nums[i] - nums[j]) <= valueDiff;

//   //   console.log(condition1, condition2, condition3);
//   return condition1 && condition2 && condition3;
// }

// const nums = [1, 5, 9, 1, 5, 9],
//   indexDiff = 2,
//   valueDiff = 3;

// const res = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff);
// console.log(res);

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  const n = nums.length;
  const width = valueDiff + 1;
  const buckets = new Map();

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const bucketId = getBucketId(num, width);

    if (buckets.has(bucketId)) {
      return true;
    }

    if (
      (buckets.has(bucketId - 1) &&
        Math.abs(num - buckets.get(bucketId - 1)) < width) ||
      (buckets.has(bucketId + 1) &&
        Math.abs(num - buckets.get(bucketId + 1)) < width)
    ) {
      return true;
    }

    buckets.set(bucketId, num);

    if (i >= indexDiff) {
      const oldBucketId = getBucketId(nums[i - indexDiff], width);
      buckets.delete(oldBucketId);
    }
  }
  return false;
};

function getBucketId(num, width) {
  return Math.floor(num / width);
}

const nums = [1, 2, 3, 1],
  indexDiff = 2,
  valueDiff = 3;

const res = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff);
console.log(res);
