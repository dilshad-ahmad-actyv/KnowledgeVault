function runProgram(input) {
    const bill = +input;

    const result = findUnits(bill);
    console.log(result);
    function findUnits(bill){
    
        bill = bill - 80;
        let units = 0;
        if(bill <= 150){
            units += bill/3;
        }else if(bill > 150 && bill <= 650){
            units += 50 + (bill- 150)/5;
        }else {
            units += 50 + 100 + ((bill - 650)/10);
        }
        return units;
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`930`);
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
