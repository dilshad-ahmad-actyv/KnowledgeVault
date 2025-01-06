function runProgram(input) {
    input = input.trim().split('\n');
    let [NScore, NSuper, NFours] = input[0].trim().split(' ').map(Number);
    let [EScore, ESuper, EFours] = input[1].trim().split(' ').map(Number);

    if(NScore > EScore){
        console.log('New Zealand');
    } else if(NScore === EScore && NSuper > ESuper){
        console.log('New Zealand');
    } else if(NScore === EScore && NSuper === ESuper && NFours > EFours){
        console.log('New Zealand');
    }else{
        console.log('England');
    }
}

  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`230 16 29
    230 14 28`);
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
