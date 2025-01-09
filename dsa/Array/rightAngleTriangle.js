function runProgram(input) {
    const [a, b, c] = input.trim().split(' ').map(Number);
 
    const result = isRightTriangle(a, b, c);
    console.log(result);

    function isRightTriangle(a, b, c){
        let s1 = a**2;
        let s2 = b**2;
        let s3 = c**2;

        let c1 = s1 === (s2 + s3);
        let c2 = s2 === (s1 + s3);
        let c3 = s3 === (s1 + s2);

        if(c1 || c2 || c3){
            return 'Yes';
        }else{
            return 'No';
        }
    }

}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`3 4 5`);
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
