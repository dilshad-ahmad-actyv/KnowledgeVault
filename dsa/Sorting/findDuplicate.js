// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     const obj = {};
//     const n = nums.length;
//     for(let i=0; i<n; i++){
//         if(obj[nums[i]] === undefined){
//             obj[nums[i]] = 1;
//         }else{
//             obj[nums[i]]++;
//         }
//     }

//     const vals = Object.values(obj)

//     const result = vals.some(val=> val > 1);
//     return result
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3];

const result = containsDuplicate(arr);
console.log(result);
