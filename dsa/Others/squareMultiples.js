function runProgram(input) {
    const N = +input;

    squareMultiples(N);

    function squareMultiples(N){
        for(let i=1; i<=N; i++){
            let rows = [];
            for(let j=1; j<=N; j++){
                const multiples = j*i;
                rows.push(multiples);
            }
            console.log(rows.join(' '));
        }
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`4`);
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
