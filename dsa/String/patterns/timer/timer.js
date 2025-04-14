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


for (let k = 0; k < n; k++) {
  str = "";

  for (let p = 0; p < n - k - 1; p++) {
    str += " ";
  }

  for (let q = 0; q <= k; q++) {
    str += " " + "*";
  }

  console.log(str);
}