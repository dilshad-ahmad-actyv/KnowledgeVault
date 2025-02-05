/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    let sum = digits[i] + carry;

    if (sum === 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] = sum;
      carry = 0;
    }
  }

  if (carry === 1) {
    digits.unshift(carry);
  }
  return digits;
};

const digits = [9];
plusOne(digits);
