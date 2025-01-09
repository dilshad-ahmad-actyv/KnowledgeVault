function increaseNum(n) {
  if (n < 1) return;
  console.log(n);
  increaseNum(n - 1);
}

increaseNum(10);

function decreseNum(n) {
  if (n < 1) return;
  decreseNum(n - 1);
  console.log(n);
}

decreseNum(10);

function increaseDecrease(n) {
  if (n < 1) return;
  console.log(n);
  increaseDecrease(n - 1);
  console.log(n);
}

increaseDecrease(5);
