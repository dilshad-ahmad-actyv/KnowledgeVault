function runProgram(input) {
    const k = 32;
    const n = +input;
    let division = Math.floor(k/n);
    const NAN = [undefined, null, NaN, Infinity, -Infinity];
    if(division === 0){
        console.log('Too Low');
    }else if(NAN.includes(division)){
        console.log(-1);
    }else{
        console.log(division);
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`0`);
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
