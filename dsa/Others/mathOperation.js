function runProgram(input) {
    const [a, c, b] = input.trim().split(' ');

    const ans = calculateOperation(parseInt(a), c, parseInt(b))
    console.log(ans);

    function calculateOperation(a, c, b, operators){
        
        switch(c){
            case '+':
                return a + b;
            case '-':
               return a - b;
            case '*':
                return a * b;
            case '/':
               return a/b;
            default:
                null;
        }
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`2 * 5`);
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
