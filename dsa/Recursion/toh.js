function TOH(n, a, b, c) {
  if (n === 0) return;

  TOH(n - 1, a, c, b);
  console.log(n, a, "=>", b);
  TOH(n - 1, c, b, a);
}

TOH(4, "A", "B", "C");
