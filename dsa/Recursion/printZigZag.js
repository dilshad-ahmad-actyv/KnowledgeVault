function printZigZag(n) {
  if (n === 0) return;
  console.log("Pre", n);
  printZigZag(n - 1);
  console.log("In", n);
  printZigZag(n - 1);
  console.log("Post", n);
}

printZigZag(2);
