function runProgram(input) {
    let [A, B, C, D, E, F] = input.trim().split(' ').map(Number);
    let result = A + (2 * B) + (3 * C) + (3 * D) + (2 * E) + (F * 2);
    console.log(result)
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`1 2 3 4 5 6`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
