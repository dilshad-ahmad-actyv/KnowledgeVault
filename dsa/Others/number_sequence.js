function printNumberSequence(n) {
  let result = 0;
  for (let i = 1; i < n + 1; i++) {
    // count the number of digits in the i

    digits = 1;
    temp = i;
    while (temp >= 10) {
      temp = Math.floor(temp / 10);
      digits++;
    }

    result = result * 10 ** digits + i;
  }
  return result;
}

console.log(printNumberSequence(10)); // Output: 12345
