function factorial(n) {
  if (n === 1 || n === 0) return 1;
  let fnm1 = factorial(n - 1);
  let fn = n * fnm1;
  return fn;
}

console.log(factorial(6));
