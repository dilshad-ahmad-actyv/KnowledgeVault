function fibonacci(n) {
  if (n <= 1) return n;
  const fb1 = fibonacci(n - 2);
  const fb2 = fibonacci(n - 1);
  return fb1 + fb2;
}

const n = 5;
const result = fibonacci(n);
console.log(result);
