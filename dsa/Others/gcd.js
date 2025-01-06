function runProgram(input) {
    input = input.trim().split('\n');
    let test = +input[0];
    let line = 1;

    for(let i=0; i<test; i++){
        let [a, b] = input[line++].trim().split(' ').map(Number);
        const ans = gcd(a, b);
        console.log(ans);
    }

    function gcd(a, b){
        // if(a === 0) return b;
        // let x = Math.max(a, b);
        // let y = Math.min(a, b);

        // return gcd(x%y, y);

        while(a !== 0){
            let temp = a;
            a = b%a;
            b = temp;
        }
        return b;
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`2
    6 9
    2 25`);
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
