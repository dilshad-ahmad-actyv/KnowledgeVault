function runProgram(input) {
    const [A, B, C, D, E] = input.trim().split(' ').map(Number);
    let result = (A + B) * (C + D + E);
    console.log(result);
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`3 2 3 4 5`);
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
