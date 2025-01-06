function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let MAX = -Infinity;
    let n = arr.length;
    for(let i=0; i<n; i++){
        if(arr[i] > MAX){
            MAX = arr[i];
        }
    }
    console.log(MAX);
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`11 3 17`);
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
