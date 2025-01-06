function runProgram(input) {
    let mark = +input;
    const result = findGradesWithMarks(mark);
    console.log(result);
    function findGradesWithMarks(mark){
        if(mark === 100){
            return 'A';
        }else if(mark >= 90){
            return 'B';
        }else if(mark >= 80){
            return 'C';
        }else{
            return 'F';
        }
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`80`);
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
