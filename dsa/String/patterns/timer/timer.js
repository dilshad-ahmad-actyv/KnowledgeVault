let n = 5;

for (let i = 0; i < n; i++) {
  let pattern = "";

  for (let k = 0; k < i; k++) {
    pattern += " ";
  }

  for (let j = 0; j < n - i; j++) {
    pattern += " " + "*";
  }

  console.log(pattern);
}
