function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    const result = battleOfOddEven(n, arr);
    console.log(result);

    function battleOfOddEven(n, arr){
        let oddSum = 0;
        let evenSum = 0;

        for(let i=0; i<n; i++){
            if(arr[i] % 2 === 0){
                evenSum += arr[i];
            }else{
                oddSum += arr[i];
            }
        }
        if(oddSum > evenSum) return 'Odd';
        return 'Even';
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`14
5 8 1 4 0 4 1 9 19 34 21 10 9 8`);
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
