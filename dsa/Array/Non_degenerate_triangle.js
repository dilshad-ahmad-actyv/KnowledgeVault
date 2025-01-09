function runProgram(input) {
    input = input.trim().split('\n');
    let test = +input[0];
    let line = 1;

    for(let i=0; i<test; i++){
        let [a, b, c] = input[line++].trim().split(' ').map(Number);
        const result = isItTriangle(a, b, c);
        console.log(result)
    }

    function isItTriangle(a, b, c){
        console.log(a, b, c);
        let op1 = (a + b) > c;
        let op2 = (b + c) > a;
        let op3 = (a + c) > b;

        console.log(op1, op2, op3)
        if(op1 && op2 && op3){
            return 'Yes';
        }else{
            return 'No';
        }
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`1
    85 37 18
    `);
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
