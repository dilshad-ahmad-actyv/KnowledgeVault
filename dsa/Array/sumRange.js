function runProgram(input) {
    const n = +input;

    const result = sumAllEvenOfN(n);
    console.log(result);
    function sumAllEvenOfN(n){
        let sum = 0;
        for(let i=1; i<=n; i++){
            if(i%2 === 0) sum += i;
        }
        return sum;
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`8`);
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
