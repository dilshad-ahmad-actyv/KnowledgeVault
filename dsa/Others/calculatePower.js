function runProgram(input) {
    input = input.trim().split(' ').map(Number);
    let [A, B] = input;
    let MOD = 1000000007;
    const ans = calculatePower(A, B) % MOD;
    console.log(ans);

    function calculatePower(A, B) {
       if(B === 0) return 1;
       A = A % MOD;
        let result = 1;
       while(B > 0){
        if(B % 2 === 1){
            result = (result * A) % MOD;
        }else{
            A = (A * A) % MOD;
        }
        B = Math.floor(B/2);
       }
       return result;
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`74 86`);
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
