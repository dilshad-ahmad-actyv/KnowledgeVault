// const arr = [1, 3, 5, 6, 8, 4, 2];
// find the max number out of it
// absolute of sum of all odds and evens
// sum of all prime numbers

// let max = -Infinity;
// const n = arr.length;
// for (let i = 0; i < n; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let odds = 0;
// let evens = 0;

// for (let i = 0; i < arr.length; i++) {
//   let condition = arr[i] % 2 === 0 ? "even" : "odd";
//   switch (condition) {
//     case "even":
//       evens += arr[i];
//       break;
//     case "odd":
//       odds += arr[i];
//       break;
//     default:
//       evens = 0;
//       odds = 0;
//   }
// }

// const result = Math.abs(odds - evens);
// console.log(result);

function primeNumSum() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
}

const arr = [1, 3, 5, 6, 8, 4, 2];
const result = primeNumSum(arr);
console.log(result);

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  switch (count) {
    case 1:
      return false;
    case 2:
      return true;
    default:
      return false;
  }
}
