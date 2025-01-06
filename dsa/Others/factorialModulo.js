function runProgram(input) {
    input = input.trim().split('\n');
    let test = +input[0];
    let line = 1;

    for(let i=0; i<test; i++){
        let [A, B] = input[line++].trim().split(' ').map(Number);
        findFactorialModulo(A, B)
    }

    function findFactorialModulo(A, B){
        let result = 1
        for(let i=A; i>=1; i--){
            result = (result * i) % B;
        }
        console.log(result)
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`1
    25 29`);
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

